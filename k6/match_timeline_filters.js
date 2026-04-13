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

  // --- Baseline: Get all matches to extract filter values ---
  const allRes = client.invoke('bragi.Bragi/MatchTimeline', { liveOnly: false }, METADATA);

  check(allRes, {
    '[Baseline] Status is OK': (r) => r.status === grpc.StatusOK,
    '[Baseline] Has matches': (r) =>
      r.message != null && Array.isArray(r.message.matches) && r.message.matches.length > 0,
  });

  check(allRes.message, {
    '[Baseline] Returned at least one match': (m) =>
      Array.isArray(m?.matches) && m.matches.length > 0,
  });
  if (!allRes.message?.matches || allRes.message.matches.length === 0) {
    throw new Error('No matches returned from baseline MatchTimeline; cannot test filters');
  }

  const allMatches = allRes.message?.matches || [];
  let sampleMatch = null;
  let sampleTournamentUrn = null;
  let sampleMatchUrn = null;
  let sampleTeamName = null;
  let sampleSport = null;

  if (allMatches.length > 0) {
    sampleMatch = allMatches[0];
    sampleTournamentUrn = sampleMatch.tournament?.urn;
    sampleMatchUrn = sampleMatch.matchUrn;
    sampleSport = sampleMatch.sport;
    if (Array.isArray(sampleMatch.teams) && sampleMatch.teams.length > 0) {
      sampleTeamName = sampleMatch.teams[0].name;
    }
  }

  // --- Test 1: Filter by sport ---
  if (sampleSport) {
    const sportRes = client.invoke(
      'bragi.Bragi/MatchTimeline',
      { liveOnly: false, sport: sampleSport },
      METADATA
    );

    check(sportRes, {
      '[SportFilter] Status is OK': (r) => r.status === grpc.StatusOK,
      '[SportFilter] Response has matches': (r) =>
        r.message != null && Array.isArray(r.message.matches),
      '[SportFilter] All matches have the filtered sport': (r) => {
        if (!r.message || !Array.isArray(r.message.matches)) return false;
        return r.message.matches.every(m => m.sport === sampleSport);
      },
      '[SportFilter] Filtered count <= total count': (r) => {
        if (!r.message || !Array.isArray(r.message.matches)) return false;
        return r.message.matches.length <= allMatches.length;
      },
    });
  }

  // --- Test 2: Filter by tournament URN ---
  if (sampleTournamentUrn) {
    const tournamentRes = client.invoke(
      'bragi.Bragi/MatchTimeline',
      { liveOnly: false, tournamentUrn: sampleTournamentUrn },
      METADATA
    );

    check(tournamentRes, {
      '[TournamentFilter] Status is OK': (r) => r.status === grpc.StatusOK,
      '[TournamentFilter] Response has matches': (r) =>
        r.message != null && Array.isArray(r.message.matches),
      '[TournamentFilter] All matches belong to filtered tournament': (r) => {
        if (!r.message || !Array.isArray(r.message.matches)) return false;
        return r.message.matches.every(m => m.tournament?.urn === sampleTournamentUrn);
      },
      '[TournamentFilter] Filtered count <= total count': (r) => {
        if (!r.message || !Array.isArray(r.message.matches)) return false;
        return r.message.matches.length <= allMatches.length;
      },
    });
  }

  // --- Test 3: Filter by match URN (should return exactly 1 match) ---
  if (sampleMatchUrn) {
    const matchRes = client.invoke(
      'bragi.Bragi/MatchTimeline',
      { liveOnly: false, matchUrn: sampleMatchUrn },
      METADATA
    );

    check(matchRes, {
      '[MatchFilter] Status is OK': (r) => r.status === grpc.StatusOK,
      '[MatchFilter] Returns exactly 1 match': (r) =>
        r.message != null && Array.isArray(r.message.matches) && r.message.matches.length === 1,
      '[MatchFilter] Returned match URN matches filter': (r) => {
        if (!r.message || !Array.isArray(r.message.matches) || r.message.matches.length === 0) return false;
        return r.message.matches[0].matchUrn === sampleMatchUrn;
      },
    });
  }

  // --- Test 4: Filter by team name ---
  if (sampleTeamName) {
    const teamRes = client.invoke(
      'bragi.Bragi/MatchTimeline',
      { liveOnly: false, teamName: sampleTeamName },
      METADATA
    );

    check(teamRes, {
      '[TeamNameFilter] Status is OK': (r) => r.status === grpc.StatusOK,
      '[TeamNameFilter] Response has matches': (r) =>
        r.message != null && Array.isArray(r.message.matches),
      '[TeamNameFilter] All matches contain the filtered team': (r) => {
        if (!r.message || !Array.isArray(r.message.matches)) return false;
        return r.message.matches.every(m =>
          Array.isArray(m.teams) && m.teams.some(t => t.name === sampleTeamName)
        );
      },
    });
  }

  // --- Test 5: live_only=true ---
  const liveRes = client.invoke('bragi.Bragi/MatchTimeline', { liveOnly: true }, METADATA);

  check(liveRes, {
    '[LiveOnly] Status is OK': (r) => r.status === grpc.StatusOK,
    '[LiveOnly] Response message is not null': (r) => r.message != null,
    '[LiveOnly] Live matches count <= all matches count': (r) => {
      if (!r.message || !Array.isArray(r.message.matches)) return true; // empty is valid
      return r.message.matches.length <= allMatches.length;
    },
    '[LiveOnly] All matches are live': (r) => {
      if (!r.message || !Array.isArray(r.message.matches)) return true;
      return r.message.matches.every(m => m.matchStatus === 'MATCH_STATUS_TYPE_LIVE');
    },
  });

  // --- Test 6: Combined filters (sport + live_only) ---
  if (sampleSport) {
    const combinedRes = client.invoke(
      'bragi.Bragi/MatchTimeline',
      { liveOnly: true, sport: sampleSport },
      METADATA
    );

    check(combinedRes, {
      '[CombinedFilter] Status is OK': (r) => r.status === grpc.StatusOK,
      '[CombinedFilter] Response message is not null': (r) => r.message != null,
    });
  }

  // --- Test 7: Nonexistent tournament URN returns empty ---
  const emptyRes = client.invoke(
    'bragi.Bragi/MatchTimeline',
    { liveOnly: false, tournamentUrn: 'od:tournament:999999999' },
    METADATA
  );

  check(emptyRes, {
    '[NonexistentTournament] Status is OK': (r) => r.status === grpc.StatusOK,
    '[NonexistentTournament] Returns empty matches array': (r) =>
      r.message != null && Array.isArray(r.message.matches) && r.message.matches.length === 0,
  });

  client.close();
}
