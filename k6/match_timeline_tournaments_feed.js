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
const METADATA = { metadata: { token: __ENV.BRAGI_TOKEN || 'a9122914-31ee-4975-80f4-cb458d71d756' } };

export default function () {
  client.connect(GRPC_ADDR);

  // --- Test 1: MatchTimelineTournamentsFeed (all sports) ---
  const stream = new Stream(client, 'bragi.Bragi/MatchTimelineTournamentsFeed', METADATA);

  const state = { messageReceived: false };

  stream.on('data', (msg) => {
    check(msg, {
      '[TournamentsFeed] Received a message': (m) => m != null,
    });

    if (msg && !state.messageReceived) {
      state.messageReceived = true;

      const tournaments = msg.tournaments;

      check(msg, {
        '[TournamentsFeed] Message has tournaments array': (m) => Array.isArray(m.tournaments),
      });

      if (Array.isArray(tournaments) && tournaments.length > 0) {
        check(tournaments, {
          '[TournamentsFeed] At least one tournament in feed': (t) => t.length > 0,
          '[TournamentsFeed] Each item has tournament object': (t) =>
            t.every(item => item.tournament != null),
          '[TournamentsFeed] Each item has matchCount': (t) =>
            t.every(item => typeof item.matchCount === 'number'),
          '[TournamentsFeed] All matchCounts are positive': (t) =>
            t.every(item => item.matchCount > 0),
        });

        const firstTournament = tournaments[0].tournament;

        if (firstTournament) {
          check(firstTournament, {
            '[TournamentsFeed] Tournament has urn': (t) =>
              typeof t.urn === 'string' && t.urn.length > 0,
            '[TournamentsFeed] Tournament has name': (t) =>
              typeof t.name === 'string' && t.name.length > 0,
            '[TournamentsFeed] Tournament urn starts with od:tournament:': (t) =>
              t.urn.startsWith('od:tournament:'),
            '[TournamentsFeed] Tournament has isOffline boolean': (t) =>
              typeof t.isOffline === 'boolean',
          });
        }

        // No duplicate tournament URNs
        check(tournaments, {
          '[TournamentsFeed] No duplicate tournament URNs': (items) => {
            const urns = items.map(t => t.tournament?.urn);
            return new Set(urns).size === urns.length;
          },
        });
      }

      stream.end();
    }
  });

  stream.on('error', (err) => {
    console.log('TournamentsFeed stream error:', err.message);
  });

  stream.write({ live_only: false, sport: 'SPORT_CS2' });

  sleep(10);

  client.close();
}
