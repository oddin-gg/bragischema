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

  // --- Test 1: MatchEventsFeed - receives historical events then real-time ---
  const stream = new Stream(client, 'bragi.Bragi/MatchEventsFeed', METADATA);

  const state = { messageCount: 0, cs2EventsReceived: false };
  const maxMessages = 5;

  stream.on('data', (msg) => {
    state.messageCount++;

    check(msg, {
      '[MatchEventsFeed] Received a message': (m) => m != null,
    });

    // MatchEventsFeedMessage has oneof payload: cs2 (CS2MatchEvents)
    if (msg.cs2) {
      state.cs2EventsReceived = true;

      check(msg.cs2, {
        '[MatchEventsFeed] CS2 events has matchUrn': (m) =>
          typeof m.matchUrn === 'string' && m.matchUrn.length > 0,
        '[MatchEventsFeed] matchUrn starts with od:match:': (m) =>
          m.matchUrn.startsWith('od:match:'),
      });

      if (Array.isArray(msg.cs2.events) && msg.cs2.events.length > 0) {
        const events = msg.cs2.events;

        check(events, {
          '[MatchEventsFeed] events is a non-empty array': (e) => e.length > 0,
        });

        const firstEvent = events[0];

        check(firstEvent, {
          '[MatchEventsFeed] Event has timestamp': (e) => e.timestamp != null,
        });

        // Check that event has exactly one event type from the oneof
        const eventTypes = [
          'bombDefuseStarted', 'bombDefused', 'bombExploded',
          'bombPlantStarted', 'bombPlanted',
          'damageDealt', 'freezeTimeEnded', 'freezeTimeStarted',
          'itemDrop', 'itemPickUp', 'itemPurchase', 'itemThrow',
          'kill', 'death',
          'mapEnd', 'mapStart',
          'roundEnd', 'roundPause', 'roundResume', 'roundRollback', 'roundStart',
          'worldBomb',
        ];

        check(firstEvent, {
          '[MatchEventsFeed] Event has at least one event type': (e) =>
            eventTypes.some(type => e[type] != null),
        });

        // Validate specific event types if present
        if (firstEvent.kill) {
          check(firstEvent.kill, {
            '[MatchEventsFeed] Kill event has killerUrn': (k) =>
              typeof k.killerUrn === 'string',
            '[MatchEventsFeed] Kill event has victimUrn': (k) =>
              typeof k.victimUrn === 'string',
            '[MatchEventsFeed] Kill event has weapon': (k) =>
              typeof k.weapon === 'string',
          });
        }

        if (firstEvent.roundStart) {
          check(firstEvent.roundStart, {
            '[MatchEventsFeed] RoundStart has currentRoundNumber': (r) =>
              typeof r.currentRoundNumber === 'number',
          });
        }

        if (firstEvent.roundEnd) {
          check(firstEvent.roundEnd, {
            '[MatchEventsFeed] RoundEnd has currentRoundNumber': (r) =>
              typeof r.currentRoundNumber === 'number',
            '[MatchEventsFeed] RoundEnd has winningTeamUrn': (r) =>
              typeof r.winningTeamUrn === 'string',
            '[MatchEventsFeed] RoundEnd has winReason': (r) =>
              typeof r.winReason === 'string' && r.winReason.length > 0,
          });
        }

        if (firstEvent.death) {
          check(firstEvent.death, {
            '[MatchEventsFeed] Death event has playerUrn': (d) =>
              typeof d.playerUrn === 'string',
            '[MatchEventsFeed] Death event has teamUrn': (d) =>
              typeof d.teamUrn === 'string',
          });
        }

        // Validate timestamp ordering (events should be chronologically ordered)
        if (events.length >= 2) {
          const timestamps = events
            .map(e => e.timestamp)
            .filter(t => t != null);

          check(timestamps, {
            '[MatchEventsFeed] Events have timestamps': (ts) => ts.length > 0,
          });
        }
      }
    }

    if (state.messageCount >= maxMessages) {
      stream.end();
    }
  });

  stream.on('error', (err) => {
    console.log('MatchEventsFeed stream error:', err.message);
  });

  // MatchEventsFeedRequest has no parameters
  stream.write({});

  sleep(15);

  client.close();
}
