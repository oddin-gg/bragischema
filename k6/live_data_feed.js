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

  // --- Test 1: LiveDataFeed without "after" timestamp (current matches) ---
  const stream = new Stream(client, 'bragi.Bragi/LiveDataFeed', METADATA);

  const state = { snapshotReceived: false, matchReceived: false, messageCount: 0 };
  const maxMessages = 5;

  stream.on('data', (msg) => {
    state.messageCount++;

    check(msg, {
      '[LiveDataFeed] Received a message': (m) => m != null,
    });

    // LiveDataFeedMessage has a oneof: keepalive (deprecated) or match
    if (msg.match) {
      const matchMsg = msg.match;

      // MatchMessage has a oneof for each sport: announcement, cs2, dota2, etc.
      check(matchMsg, {
        '[LiveDataFeed] MatchMessage is not null': (m) => m != null,
      });

      // Determine which sport payload is present
      const sportPayload =
        matchMsg.announcement || matchMsg.cs2 || matchMsg.cs2Duels ||
        matchMsg.dota2 || matchMsg.rushSoccer || matchMsg.lol ||
        matchMsg.rushBasketball || matchMsg.valorant || matchMsg.rushCricket;

      if (sportPayload && !matchMsg.announcement) {
        state.matchReceived = true;
        // This is a game-specific message (e.g., CS2MatchMessage)
        check(sportPayload, {
          '[LiveDataFeed] Sport message has matchUrn': (m) =>
            typeof m.matchUrn === 'string' && m.matchUrn.length > 0,
          '[LiveDataFeed] matchUrn starts with od:match:': (m) =>
            m.matchUrn.startsWith('od:match:'),
          '[LiveDataFeed] Sport message has sequence': (m) =>
            typeof m.sequence === 'string' || typeof m.sequence === 'number',
          '[LiveDataFeed] Sport message has timestamp': (m) =>
            m.timestamp != null,
        });

        // Check payload (snapshot or update)
        if (sportPayload.payload) {
          const isSnapshot = sportPayload.payload.snapshot != null;
          const isUpdate = sportPayload.payload.update != null;

          check(sportPayload.payload, {
            '[LiveDataFeed] Payload is snapshot or update': (p) =>
              p.snapshot != null || p.update != null,
          });

          if (isSnapshot && !state.snapshotReceived) {
            state.snapshotReceived = true;

            check(sportPayload.payload.snapshot, {
              '[LiveDataFeed] Snapshot is not null': (s) => s != null,
            });
          }
        }

        // Check dataStatus if present
        if (sportPayload.dataStatus) {
          check(sportPayload, {
            '[LiveDataFeed] dataStatus is a valid enum': (m) => [
              'DATA_STATUS_UNSPECIFIED', 'DATA_STATUS_DISABLED_DATA',
              'DATA_STATUS_CORRUPTED_DATA', 'DATA_STATUS_VALID_DATA',
            ].includes(m.dataStatus),
          });
        }
      }

      // If announcement update
      if (matchMsg.announcement) {
        check(matchMsg.announcement, {
          '[LiveDataFeed] Announcement has matchUrn': (a) =>
            typeof a.matchUrn === 'string' && a.matchUrn.length > 0,
          '[LiveDataFeed] Announcement has sequence': (a) =>
            a.sequence != null,
          '[LiveDataFeed] Announcement has timestamp': (a) =>
            a.timestamp != null,
          '[LiveDataFeed] Announcement has payload': (a) =>
            a.payload != null,
        });
      }
    }

    // Stop after enough messages to validate
    if (state.messageCount >= maxMessages) {
      stream.end();
    }
  });

  stream.on('error', (err) => {
    console.log('LiveDataFeed stream error:', err.message);
  });

  // Send request without "after" - gets current live matches
  stream.write({});

  sleep(15);

  check(state, {
    '[LiveDataFeed] Received at least one message': (s) => s.messageCount > 0,
    '[LiveDataFeed] Received at least one match payload': (s) => s.matchReceived === true,
  });

  client.close();
}
