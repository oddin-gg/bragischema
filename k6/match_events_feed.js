import { Client, Stream } from 'k6/net/grpc';
import { setTimeout } from 'k6/timers';
import { check, THRESHOLDS } from './lib/assertions.js';

const client = new Client();
client.load(['../proto'], 'bragi/bragi_service.proto');

export const options = {
  thresholds: THRESHOLDS,
};

const GRPC_ADDR = __ENV.BRAGI_ADDR || 'api-bragi-test.integration.oddin.dev:443';
const BRAGI_TOKEN = __ENV.BRAGI_TOKEN;
if (!BRAGI_TOKEN) {
  throw new Error('Missing required environment variable: BRAGI_TOKEN');
}
const METADATA = { metadata: { token: BRAGI_TOKEN } };
const MATCH_URNS = (__ENV.MATCH_URNS || '')
  .split(',')
  .map((urn) => urn.trim())
  .filter((urn) => urn.length > 0);

const DOTA2_EVENT_TYPES = [
  'mapStarted', 'mapEnded', 'mapPaused', 'mapResumed',
  'heroKill', 'heroDeath',
  'towerDestroyed', 'barracksDestroyed', 'ancientDestroyed', 'megaCreeps',
  'roshanKilled', 'roshanRespawned',
  'aegisPickedUp', 'aegisLost', 'buyback', 'dayNightChanged',
  'multikill', 'killstreak', 'tormentorKilled',
];

function isChronological(events) {
  const ts = events.map((e) => Date.parse(e.timestamp));
  for (let i = 1; i < ts.length; i++) {
    if (!(ts[i] >= ts[i - 1])) return false;
  }
  return true;
}

export default function () {
  client.connect(GRPC_ADDR, { plaintext: false });

  // --- Test 1: MatchEventsFeed - receives historical events then real-time ---
  const stream = new Stream(client, 'bragi.Bragi/MatchEventsFeed', METADATA);

  const state = { messageCount: 0, cs2EventsReceived: false, dota2Messages: 0, ended: false, errorBeforeClose: null };
  const maxMessages = 5;
  let closing = false;

  stream.on('data', (msg) => {
    state.messageCount++;

    check(msg, {
      '[MatchEventsFeed] Received a message': (m) => m != null,
      '[MatchEventsFeed] Payload is cs2 or dota2': (m) => m.cs2 != null || m.dota2 != null,
    });

    const payload = msg.cs2 || msg.dota2;
    if (MATCH_URNS.length > 0 && payload) {
      check(payload, {
        '[MatchEventsFeed] matchUrn is in MATCH_URNS': (p) => MATCH_URNS.includes(p.matchUrn),
      });
    }

    // MatchEventsFeedMessage has oneof payload: cs2 (CS2MatchEvents) or dota2 (Dota2MatchEvents)
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

        const firstEvent = events[0];

        check(firstEvent, {
          '[MatchEventsFeed] Event has timestamp': (e) => e.timestamp != null,
        });

        // Check that event has at least one known event type from the oneof
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
          '[MatchEventsFeed] Event has at least one known event type': (e) =>
            eventTypes.some((type) => e[type] != null),
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

        // Validate timestamp ordering (timestamps are ISO 8601 strings)
        if (events.length >= 2) {
          const timestamps = events
            .map(e => e.timestamp)
            .filter(t => typeof t === 'string' && t.length > 0)
            .map(t => Date.parse(t));

          check(timestamps, {
            '[MatchEventsFeed] Events have timestamps': (ts) => ts.length > 0 && ts.every(t => Number.isFinite(t)),
            '[MatchEventsFeed] Events are chronologically ordered': (ts) => {
              for (let i = 1; i < ts.length; i++) {
                if (ts[i] < ts[i - 1]) return false;
              }
              return true;
            },
          });
        }
      }
    }

    if (msg.dota2) {
      state.dota2Messages++;

      check(msg.dota2, {
        '[MatchEventsFeed] Dota 2 matchUrn starts with od:match:': (m) =>
          typeof m.matchUrn === 'string' && m.matchUrn.startsWith('od:match:'),
      });

      const events = Array.isArray(msg.dota2.events) ? msg.dota2.events : [];
      if (events.length > 0) {
        // Events without gameTime come from a second upstream source, so order is checked per source
        check(events, {
          '[MatchEventsFeed] Dota 2 events have timestamp': (es) =>
            es.every((e) => typeof e.timestamp === 'string' && e.timestamp.length > 0),
          '[MatchEventsFeed] Dota 2 events have a known event type': (es) =>
            es.every((e) => DOTA2_EVENT_TYPES.some((type) => e[type] != null)),
          '[MatchEventsFeed] Dota 2 gameTime is an integer when set': (es) =>
            es.every((e) => e.gameTime == null || Number.isInteger(e.gameTime)),
          '[MatchEventsFeed] Dota 2 events are chronological per source': (es) =>
            isChronological(es.filter((e) => e.gameTime != null)) &&
            isChronological(es.filter((e) => e.gameTime == null)),
        });

        const kill = events.find((e) => e.heroKill != null);
        if (kill) {
          check(kill.heroKill, {
            '[MatchEventsFeed] HeroKill has killer and victim playerUrn': (k) =>
              k.killer != null && typeof k.killer.playerUrn === 'string' &&
              k.victim != null && typeof k.victim.playerUrn === 'string',
          });
        }
      }
    }

    if (state.messageCount >= maxMessages && !state.ended) {
      state.ended = true;
      stream.end();
    }
  });

  stream.on('error', (err) => {
    console.log('MatchEventsFeed stream error:', err.message);
    if (!closing) state.errorBeforeClose = err.message;
    state.ended = true;
  });

  stream.on('end', () => {
    state.ended = true;
    console.log(`MatchEventsFeed: ${state.messageCount} messages, ${state.dota2Messages} with Dota 2 events`);
    check(state, {
      '[MatchEventsFeed] Stream produced at least one message': (s) => s.messageCount > 0,
      '[MatchEventsFeed] Received CS2 or Dota 2 events': (s) => s.cs2EventsReceived || s.dota2Messages > 0,
    });
  });

  // {} = every sport and match; MATCH_URNS narrows the stream to those matches
  stream.write(MATCH_URNS.length > 0 ? { matchUrns: MATCH_URNS } : {});

  // --- Test 2: MatchEventsFeed with sports = [SPORT_CS2] never sends Dota 2 events ---
  const cs2Stream = new Stream(client, 'bragi.Bragi/MatchEventsFeed', METADATA);
  const cs2State = { errorBeforeClose: null, ended: false };

  cs2Stream.on('data', (msg) => {
    check(msg, {
      '[MatchEventsFeed CS2 filter] No dota2 payload': (m) => m.dota2 == null,
      '[MatchEventsFeed CS2 filter] Payload is cs2': (m) => m.cs2 != null,
    });
  });

  cs2Stream.on('error', (err) => {
    console.log('MatchEventsFeed (CS2 filter) stream error:', err.message);
    if (!closing) cs2State.errorBeforeClose = err.message;
    cs2State.ended = true;
  });

  cs2Stream.on('end', () => {
    cs2State.ended = true;
  });

  cs2Stream.write({ sports: ['SPORT_CS2'] });

  // A timer instead of sleep() lets stream callbacks run during the window, so an error seen before
  // closing (e.g. INVALID_ARGUMENT for the filters) is told apart from the "canceled by client" on close.
  // end() is skipped on a stream that already failed or ended: k6 blocks on it.
  setTimeout(() => {
    closing = true;
    check(null, {
      '[MatchEventsFeed] No stream error before close': () => state.errorBeforeClose == null,
      '[MatchEventsFeed CS2 filter] No stream error before close': () => cs2State.errorBeforeClose == null,
    });

    if (!state.ended) {
      state.ended = true;
      stream.end();
    }
    if (!cs2State.ended) {
      cs2State.ended = true;
      cs2Stream.end();
    }

    client.close();
  }, 15000);
}
