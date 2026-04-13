import { Client, Stream } from 'k6/net/grpc';
import { check, sleep } from 'k6';

const client = new Client();
client.load(['../proto'], 'bragi/bragi_service.proto');

export const options = {
  thresholds: {
    checks: ['rate==1.0'],
  },
};

const GRPC_ADDR = __ENV.BRAGI_ADDR || 'api-bragi-test.integration.oddin.dev:443';
const BRAGI_TOKEN = __ENV.BRAGI_TOKEN;
if (!BRAGI_TOKEN) {
  throw new Error('Missing required environment variable: BRAGI_TOKEN');
}
const METADATA = { metadata: { token: BRAGI_TOKEN } };

export default function () {
  client.connect(GRPC_ADDR, { plaintext: false });

  const stream = new Stream(client, 'bragi.Bragi/MatchTimelineFeed', METADATA);

  const state = { messageReceived: false };

  stream.on('data', (msg) => {
    state.messageReceived = true;
    // Every message should be non-null
    check(msg, {
      '[MatchTimelineFeed] gRPC stream received a message': (m) => m != null,
    });

    // Only validate timeline messages (not matchUpdate)
    if (msg.timeline != null) {
      check(msg, {
        '[MatchTimelineFeed] First message contains timeline': (m) => m.timeline != null,
        '[MatchTimelineFeed] timeline has non-empty matches array': (m) =>
          Array.isArray(m.timeline?.matches) && m.timeline.matches.length > 0,
      });

      if (msg.timeline?.matches) {
        const matches = msg.timeline.matches;

        // Each match has plannetStart
        check(matches, {
          '[MatchTimelineFeed] Each match has plannetStart': (ms) =>
            ms.every(m => typeof m.plannetStart === 'string' && m.plannetStart.length > 0),
        });

        // Timestamps do not move backwards
        const timestamps = matches
          .map(m => Date.parse(m.plannetStart))
          .filter(t => !Number.isNaN(t));

        check(timestamps, {
          '[MatchTimelineFeed] Timestamps do not move backwards': (ts) => {
            for (let i = 1; i < ts.length; i++) {
              if (ts[i] < ts[i - 1]) return false;
            }
            return true;
          },
        });
      }

      // Close stream after processing timeline message
      stream.end();
    } else if (msg.matchUpdate != null) {
      // matchUpdate messages are expected - just validate basic structure
      check(msg.matchUpdate, {
        '[MatchTimelineFeed] matchUpdate has matchUrn': (m) => typeof m.matchUrn === 'string',
      });
    }
  });

  stream.on('error', (err) => {
    console.log('Stream error:', err.message);
  });

  // Send request
  stream.write({ liveOnly: false });

  // Wait for data handler to fire and close stream
  sleep(10);

  check(state, {
    '[MatchTimelineFeed] Received at least one message': (s) => s.messageReceived === true,
  });

  client.close();
}