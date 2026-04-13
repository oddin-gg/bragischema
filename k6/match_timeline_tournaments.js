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
  client.connect(GRPC_ADDR);

  // --- Test 1: Get all sports first so we can query tournaments per sport ---
  const sportsRes = client.invoke('bragi.Bragi/MatchTimelineSports', { liveOnly: false }, METADATA);

  check(sportsRes, {
    '[Sports] Status is OK': (r) => r.status === grpc.StatusOK,
  });

  // --- Test 2: MatchTimelineTournaments with CS2 sport (used as baseline) ---
  const allTournamentsRes = client.invoke(
    'bragi.Bragi/MatchTimelineTournaments',
    { liveOnly: false, sport: 'SPORT_CS2' },
    METADATA
  );

  check(allTournamentsRes, {
    '[AllTournaments] Status is OK': (r) => r.status === grpc.StatusOK,
    '[AllTournaments] Response message is not null': (r) => r.message != null,
  });

  if (allTournamentsRes.message) {
    const tournaments = allTournamentsRes.message.tournaments;

    check(tournaments, {
      '[AllTournaments] tournaments is an array': (t) => Array.isArray(t),
      '[AllTournaments] At least one tournament returned': (t) => Array.isArray(t) && t.length > 0,
    });

    if (Array.isArray(tournaments) && tournaments.length > 0) {
      const first = tournaments[0];

      check(first, {
        '[AllTournaments] Has tournament object': (t) => t.tournament != null,
        '[AllTournaments] Has matchCount': (t) => typeof t.matchCount === 'number',
        '[AllTournaments] matchCount is positive': (t) => t.matchCount > 0,
      });

      if (first.tournament) {
        check(first.tournament, {
          '[AllTournaments] Tournament has urn': (t) => typeof t.urn === 'string' && t.urn.length > 0,
          '[AllTournaments] Tournament has name': (t) => typeof t.name === 'string' && t.name.length > 0,
          '[AllTournaments] Tournament urn starts with od:tournament:': (t) => t.urn.startsWith('od:tournament:'),
          '[AllTournaments] Tournament has isOffline boolean': (t) => typeof t.isOffline === 'boolean',
        });
      }

      // Validate all tournaments have valid structure
      check(tournaments, {
        '[AllTournaments] All items have tournament and matchCount': (items) =>
          items.every(t => t.tournament != null && typeof t.matchCount === 'number'),
        '[AllTournaments] No duplicate tournament URNs': (items) => {
          const urns = items.map(t => t.tournament?.urn);
          return new Set(urns).size === urns.length;
        },
      });
    }
  }

  // --- Test 3: MatchTimelineTournaments filtered by Dota2 sport ---
  const dota2TournamentsRes = client.invoke(
    'bragi.Bragi/MatchTimelineTournaments',
    { liveOnly: false, sport: 'SPORT_DOTA2' },
    METADATA
  );

  check(dota2TournamentsRes, {
    '[Dota2Tournaments] Status is OK': (r) => r.status === grpc.StatusOK,
    '[Dota2Tournaments] Response message is not null': (r) => r.message != null,
  });

  // --- Test 4: MatchTimelineTournaments with live_only=true ---
  const liveTournamentsRes = client.invoke(
    'bragi.Bragi/MatchTimelineTournaments',
    { liveOnly: true, sport: 'SPORT_CS2' },
    METADATA
  );

  check(liveTournamentsRes, {
    '[LiveTournaments] Status is OK': (r) => r.status === grpc.StatusOK,
    '[LiveTournaments] Response message is not null': (r) => r.message != null,
  });

  // Live tournaments count should be <= all tournaments count
  if (liveTournamentsRes.message && allTournamentsRes.message) {
    const liveCount = (liveTournamentsRes.message.tournaments || []).length;
    const allCount = (allTournamentsRes.message.tournaments || []).length;

    check({ liveCount, allCount }, {
      '[LiveTournaments] Live tournaments count <= all tournaments count': (v) => v.liveCount <= v.allCount,
    });
  }

  client.close();
}
