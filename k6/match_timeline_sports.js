import grpc from 'k6/net/grpc';
import { check } from 'k6';

const client = new grpc.Client();
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

  // --- Test 1: MatchTimelineSports with live_only=false (all matches) ---
  const allSportsRes = client.invoke('bragi.Bragi/MatchTimelineSports', { liveOnly: false }, METADATA);

  check(allSportsRes, {
    '[AllSports] Status is OK': (r) => r.status === grpc.StatusOK,
    '[AllSports] Response message is not null': (r) => r.message != null,
  });

  if (allSportsRes.message) {
    const sports = allSportsRes.message.sports;

    check(sports, {
      '[AllSports] sports is an array': (s) => Array.isArray(s),
      '[AllSports] At least one sport returned': (s) => Array.isArray(s) && s.length > 0,
    });

    if (Array.isArray(sports) && sports.length > 0) {
      const firstSport = sports[0];

      check(firstSport, {
        '[AllSports] Each item has sport field': (s) => typeof s.sport === 'string' && s.sport.length > 0,
        '[AllSports] Each item has matchCount field': (s) => typeof s.matchCount === 'number',
        '[AllSports] matchCount is non-negative': (s) => s.matchCount >= 0,
        '[AllSports] sport is a valid enum value': (s) => [
          'SPORT_CS2', 'SPORT_DOTA2', 'SPORT_LOL', 'SPORT_VALORANT',
          'SPORT_RUSH_SOCCER', 'SPORT_RUSH_BASKETBALL',
        ].includes(s.sport),
      });

      // Validate all sports have valid structure
      check(sports, {
        '[AllSports] All items have sport and matchCount': (items) =>
          items.every(s => typeof s.sport === 'string' && typeof s.matchCount === 'number'),
        '[AllSports] No duplicate sports': (items) => {
          const sportNames = items.map(s => s.sport);
          return new Set(sportNames).size === sportNames.length;
        },
      });
    }
  }

  // --- Test 2: MatchTimelineSports with live_only=true (live matches only) ---
  const liveSportsRes = client.invoke('bragi.Bragi/MatchTimelineSports', { liveOnly: true }, METADATA);

  check(liveSportsRes, {
    '[LiveSports] Status is OK': (r) => r.status === grpc.StatusOK,
    '[LiveSports] Response message is not null': (r) => r.message != null,
  });

  if (liveSportsRes.message) {
    const liveSports = liveSportsRes.message.sports;

    check(liveSports, {
      '[LiveSports] sports is an array': (s) => Array.isArray(s),
    });

    // Live sports count should be <= all sports count
    if (allSportsRes.message && Array.isArray(liveSports) && Array.isArray(allSportsRes.message.sports)) {
      const liveTotal = liveSports.reduce((sum, s) => sum + (s.matchCount || 0), 0);
      const allTotal = allSportsRes.message.sports.reduce((sum, s) => sum + (s.matchCount || 0), 0);

      check({ liveTotal, allTotal }, {
        '[LiveSports] Live match count <= all match count': (v) => v.liveTotal <= v.allTotal,
      });
    }
  }

  client.close();
}
