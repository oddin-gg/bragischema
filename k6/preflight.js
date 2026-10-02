// Bragi auth preflight — one unary MatchTimelineSports call, no assertions.
//
// Run by run_tests.ps1 before the suite. Its job is to tell "the token is bad"
// apart from "the product is broken": without it, an expired BRAGI_TOKEN makes
// all 9 tests fail on PermissionDenied, which reads like 9 product defects and
// costs a triage cycle to recognize as one auth problem.
//
// Deliberately NOT a test: no check(), no thresholds, so it never contributes
// to the suite's pass/fail counts. It communicates through sentinel lines on
// stdout, which the runner greps for:
//
//   BRAGI_PREFLIGHT_AUTH_FAILED   token rejected (gRPC 7 PermissionDenied /
//                                 16 Unauthenticated) — stop, don't run tests
//   BRAGI_PREFLIGHT_UNREACHABLE   endpoint not reachable (VPN down, wrong addr)
//   BRAGI_PREFLIGHT_OK            token accepted — proceed
//
// Getting a valid token is out of scope here (a human supplies it); this only
// makes the failure explicit and cheap to read.

import grpc from 'k6/net/grpc';
import { sleep } from 'k6';

const client = new grpc.Client();
client.load(['../proto'], 'bragi/bragi_service.proto');

// No thresholds: a preflight must not be able to fail the suite by itself. The
// runner decides what to do with the sentinel.
export const options = { thresholds: {} };

const GRPC_ADDR = __ENV.BRAGI_ADDR || 'api-bragi-test.integration.oddin.dev:443';
const BRAGI_TOKEN = __ENV.BRAGI_TOKEN;

// A single denial can be transient, and a one-shot check would then stop a
// perfectly good suite for the one reason operators are told not to doubt.
// So an AUTH FAILED verdict has to survive several attempts; a single OK
// settles it immediately.
const ATTEMPTS = Number(__ENV.BRAGI_PREFLIGHT_ATTEMPTS || 3);

export default function () {
  if (!BRAGI_TOKEN) {
    console.log('BRAGI_PREFLIGHT_AUTH_FAILED reason=BRAGI_TOKEN is not set');
    return;
  }

  let lastAuthDetail = '';
  let lastUnreachable = '';

  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    try {
      client.connect(GRPC_ADDR, { plaintext: false });
    } catch (err) {
      lastUnreachable = err.message;
      if (attempt < ATTEMPTS) {
        sleep(2);
        continue;
      }
      console.log(`BRAGI_PREFLIGHT_UNREACHABLE reason=${lastUnreachable}`);
      return;
    }

    const res = client.invoke(
      'bragi.Bragi/MatchTimelineSports',
      { liveOnly: false },
      { metadata: { token: BRAGI_TOKEN } },
    );

    if (res.status === grpc.StatusOK) {
      console.log(
        attempt === 1
          ? 'BRAGI_PREFLIGHT_OK'
          : `BRAGI_PREFLIGHT_OK note=accepted on attempt ${attempt} of ${ATTEMPTS}`,
      );
      client.close();
      return;
    }

    // 7 = PermissionDenied, 16 = Unauthenticated. Both mean "the token, not the
    // product" -- but only if they persist. Retry before believing it.
    if (res.status === grpc.StatusPermissionDenied || res.status === grpc.StatusUnauthenticated) {
      lastAuthDetail = `gRPC ${res.status}: ${(res.error && res.error.message) || 'access denied'}`;
      client.close();
      if (attempt < ATTEMPTS) {
        sleep(2);
        continue;
      }
      console.log(`BRAGI_PREFLIGHT_AUTH_FAILED reason=${lastAuthDetail} (${ATTEMPTS} attempts)`);
      return;
    }

    // Any other status is a real signal from the product -- let the suite run
    // and report it properly rather than masking it as an auth problem.
    const detail = (res.error && res.error.message) || 'unknown';
    console.log(`BRAGI_PREFLIGHT_OK note=unexpected status ${res.status}: ${detail} (running suite anyway)`);
    client.close();
    return;
  }
}
