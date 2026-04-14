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

  // --- Step 1: Get a real team URN from MatchTimeline ---
  const timelineRes = client.invoke('bragi.Bragi/MatchTimeline', { liveOnly: false }, METADATA);

  check(timelineRes, {
    '[Setup] MatchTimeline status is OK': (r) => r.status === grpc.StatusOK,
  });

  let teamUrn = null;

  if (timelineRes.message && Array.isArray(timelineRes.message.matches) && timelineRes.message.matches.length > 0) {
    const match = timelineRes.message.matches[0];
    if (Array.isArray(match.teams) && match.teams.length > 0) {
      teamUrn = match.teams[0].urn;
    }
  }

  check(teamUrn, {
    '[Setup] Team URN resolved from Bragi': (u) => u !== undefined && u !== null && u !== '',
  });
  if (!teamUrn) {
    throw new Error('No team URN available from Bragi; failing instead of skipping TeamProfile tests');
  }

  // --- Test 1: TeamProfile with valid team URN ---
  const profileRes = client.invoke('bragi.Bragi/TeamProfile', { teamUrn: teamUrn }, METADATA);

  check(profileRes, {
    '[TeamProfile] Status is OK': (r) => r.status === grpc.StatusOK,
    '[TeamProfile] Response message is not null': (r) => r.message != null,
  });

  if (profileRes.message && profileRes.message.team) {
    const team = profileRes.message.team;

    check(team, {
      '[TeamProfile] Has urn': (t) => typeof t.urn === 'string' && t.urn.length > 0,
      '[TeamProfile] Has name': (t) => typeof t.name === 'string' && t.name.length > 0,
      '[TeamProfile] URN matches requested URN': (t) => t.urn === teamUrn,
      '[TeamProfile] URN starts with od:competitor: or od:team:': (t) =>
        t.urn.startsWith('od:competitor:') || t.urn.startsWith('od:team:'),
    });

    // Validate players array if present
    if (Array.isArray(team.players) && team.players.length > 0) {
      check(team.players, {
        '[TeamProfile] players is an array': (p) => Array.isArray(p),
      });

      const firstPlayer = team.players[0];

      check(firstPlayer, {
        '[TeamProfile] Player has urn': (p) => typeof p.urn === 'string' && p.urn.length > 0,
        '[TeamProfile] Player has nickname': (p) => typeof p.nickname === 'string' && p.nickname.length > 0,
        '[TeamProfile] Player urn starts with od:player:': (p) => p.urn.startsWith('od:player:'),
      });

      // Validate all players have required fields
      check(team.players, {
        '[TeamProfile] All players have urn and nickname': (players) =>
          players.every(p => typeof p.urn === 'string' && typeof p.nickname === 'string'),
        '[TeamProfile] No duplicate player URNs': (players) => {
          const urns = players.map(p => p.urn);
          return new Set(urns).size === urns.length;
        },
      });
    }

    // Validate currentMapRoster if present
    if (Array.isArray(team.currentMapRoster) && team.currentMapRoster.length > 0) {
      check(team.currentMapRoster, {
        '[TeamProfile] currentMapRoster is an array': (r) => Array.isArray(r),
        '[TeamProfile] Roster players have urn': (r) =>
          r.every(p => typeof p.urn === 'string' && p.urn.length > 0),
        '[TeamProfile] Roster players have nickname': (r) =>
          r.every(p => typeof p.nickname === 'string' && p.nickname.length > 0),
      });
    }

    // Validate externalIdentities map if present
    if (team.externalIdentities) {
      check(team.externalIdentities, {
        '[TeamProfile] externalIdentities is an object': (ei) => typeof ei === 'object',
      });
    }
  }

  // --- Test 2: TeamProfile with invalid/nonexistent URN ---
  const invalidRes = client.invoke('bragi.Bragi/TeamProfile', { teamUrn: 'od:competitor:999999999' }, METADATA);

  check(invalidRes, {
    '[InvalidTeam] Request completes without crash': (r) => r.status !== undefined,
  });

  // --- Test 3: TeamProfile with empty URN ---
  const emptyRes = client.invoke('bragi.Bragi/TeamProfile', { teamUrn: '' }, METADATA);

  check(emptyRes, {
    '[EmptyTeam] Request completes without crash': (r) => r.status !== undefined,
  });

  client.close();
}
