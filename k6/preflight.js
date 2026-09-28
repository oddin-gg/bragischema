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

const client = new grpc.Client();
client.load(['../proto'], 'bragi/bragi_service.proto');

// No thresholds: a preflight must not be able to fail the suite by itself. The
// runner decides what to do with the sentinel.
export const options = { thresholds: {} };

const GRPC_ADDR = __ENV.BRAGI_ADDR || 'api-bragi-test.integration.oddin.dev:443';
const BRAGI_TOKEN = __ENV.BRAGI_TOKEN;

export default function () {
  if (!BRAGI_TOKEN) {
    console.log('BRAGI_PREFLIGHT_AUTH_FAILED reason=BRAGI_TOKEN is not set');
    return;
  }

  try {
    client.connect(GRPC_ADDR, { plaintext: false });
  } catch (err) {
    console.log(`BRAGI_PREFLIGHT_UNREACHABLE reason=${err.message}`);
    return;
  }

  const res = client.invoke(
    'bragi.Bragi/MatchTimelineSports',
    { liveOnly: false },
    { metadata: { token: BRAGI_TOKEN } },
  );

  // 7 = PermissionDenied, 16 = Unauthenticated. Both mean "the token, not the
  // product" — every RPC on this service would answer the same way.
  if (res.status === grpc.StatusPermissionDenied || res.status === grpc.StatusUnauthenticated) {
    const detail = (res.error && res.error.message) || 'access denied';
    console.log(`BRAGI_PREFLIGHT_AUTH_FAILED reason=gRPC ${res.status}: ${detail}`);
  } else if (res.status === grpc.StatusOK) {
    console.log('BRAGI_PREFLIGHT_OK');
  } else {
    // Any other status is a real signal from the product — let the suite run
    // and report it properly rather than masking it as an auth problem.
    const detail = (res.error && res.error.message) || 'unknown';
    console.log(`BRAGI_PREFLIGHT_OK note=unexpected status ${res.status}: ${detail} (running suite anyway)`);
  }

  client.close();
}
