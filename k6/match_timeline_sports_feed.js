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

  // --- Test 1: MatchTimelineSportsFeed with live_only=false ---
  const stream = new Stream(client, 'bragi.Bragi/MatchTimelineSportsFeed', METADATA);

  const state = { messageReceived: false };

  stream.on('data', (msg) => {
    check(msg, {
      '[SportsFeed] Received a message': (m) => m != null,
    });

    if (msg && !state.messageReceived) {
      state.messageReceived = true;

      const sports = msg.sports;

      check(msg, {
        '[SportsFeed] Message has sports array': (m) => Array.isArray(m.sports),
      });

      if (Array.isArray(sports) && sports.length > 0) {
        check(sports, {
          '[SportsFeed] At least one sport in feed': (s) => s.length > 0,
          '[SportsFeed] Each item has sport field': (s) =>
            s.every(item => typeof item.sport === 'string' && item.sport.length > 0),
          '[SportsFeed] Each item has matchCount': (s) =>
            s.every(item => typeof item.matchCount === 'number'),
          '[SportsFeed] All matchCounts are non-negative': (s) =>
            s.every(item => item.matchCount >= 0),
          '[SportsFeed] Sports are valid enum values': (s) =>
            s.every(item => [
              'SPORT_CS2', 'SPORT_DOTA2', 'SPORT_LOL', 'SPORT_VALORANT',
              'SPORT_RUSH_SOCCER', 'SPORT_RUSH_BASKETBALL',
            ].includes(item.sport)),
          '[SportsFeed] No duplicate sports in message': (s) => {
            const sportNames = s.map(item => item.sport);
            return new Set(sportNames).size === sportNames.length;
          },
        });
      }

      stream.end();
    }
  });

  stream.on('error', (err) => {
    console.log('SportsFeed stream error:', err.message);
  });

  stream.on('end', () => {
    check(state, {
      '[MatchTimelineSportsFeed] Received at least one message': (s) => s.messageReceived === true,
    });
  });

  stream.write({ liveOnly: false });

  sleep(10);

  client.close();
}
