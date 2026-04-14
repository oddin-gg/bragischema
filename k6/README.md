# Bragi gRPC Service — K6 Test Collection

Automated test collection for the **Bragi** gRPC service (`bragi.Bragi`) using [Grafana K6](https://k6.io/).
Covers all 9 RPCs: 4 unary calls and 5 server-streaming feeds.

## Prerequisites

- **K6** installed (`winget install k6 --source winget`)
- **VPN** connected (required to reach `api-bragi-test.integration.oddin.dev`)
- Valid **auth token** provided via the `BRAGI_TOKEN` environment variable (required; tests fail immediately if unset)

## Project Structure

```
bragischema/
├── proto/                                # Proto definitions (existing)
│   └── bragi/
│       ├── bragi_service.proto           # Service definition (9 RPCs)
│       ├── common.proto                  # Shared types (Match, Team, Sport, etc.)
│       ├── cs2.proto                     # CS2 match state & events
│       ├── dota2.proto                   # Dota 2 match state
│       ├── lol.proto                     # League of Legends match state
│       ├── valorant.proto                # Valorant match state
│       ├── rush_soccer.proto             # Rush Soccer match state
│       ├── rush_basketball.proto         # Rush Basketball match state
│       └── rush_cricket.proto            # Rush Cricket match state
│
└── k6/                                   # K6 test collection
    ├── match_timeline_sports.js              # MatchTimelineSports (unary)
    ├── match_timeline_tournaments.js         # MatchTimelineTournaments (unary)
    ├── match_timeline_filters.js             # MatchTimeline with filter combinations (unary)
    ├── team_profile.js                       # TeamProfile (unary)
    ├── match_timeline_sports_feed.js         # MatchTimelineSportsFeed (stream)
    ├── match_timeline_tournaments_feed.js    # MatchTimelineTournamentsFeed (stream)
    ├── match_timeline_feed.js                # MatchTimelineFeed (stream)
    ├── live_data_feed.js                     # LiveDataFeed (stream)
    ├── match_events_feed.js                  # MatchEventsFeed (stream)
    ├── run_tests.ps1                         # PowerShell runner with summary
    └── README.md                             # This file
```

## Running Tests

Run a single test:

```bash
cd k6
k6 run -e BRAGI_TOKEN=your-token match_timeline_sports.js
```

Run all tests with summary:

```powershell
cd k6
.\run_tests.ps1
```

## Configuration

All tests share the following configuration:

| Parameter | Value |
|-----------|-------|
| **Endpoint** | `api-bragi-test.integration.oddin.dev:443` |
| **TLS** | Enabled (default for port 443) |
| **Auth** | Token passed via `metadata.token` |
| **Threshold** | `checks rate==1.0` (all checks must pass) |

To change the endpoint or token, pass them as environment variables:

```bash
k6 run -e BRAGI_TOKEN=your-token -e BRAGI_ADDR=your-host:443 match_timeline_sports.js
```

The token is read from `__ENV.BRAGI_TOKEN` at the top of each file:

```javascript
const BRAGI_TOKEN = __ENV.BRAGI_TOKEN;
if (!BRAGI_TOKEN) {
  throw new Error('Missing required environment variable: BRAGI_TOKEN');
}
const METADATA = { metadata: { token: BRAGI_TOKEN } };
```

---

## Test Specifications

### 1. `match_timeline_sports.js` — MatchTimelineSports

**RPC:** `MatchTimelineSports` (unary)
**Proto:** `MatchTimelineSportsRequest` → `MatchTimelineSportsResponse`

| # | Check | Description |
|---|-------|-------------|
| 1 | `[AllSports] Status is OK` | gRPC status code is 0 |
| 2 | `[AllSports] Response message is not null` | Server returned a response body |
| 3 | `[AllSports] sports is an array` | `sports` field is an array |
| 4 | `[AllSports] At least one sport returned` | Array is non-empty |
| 5 | `[AllSports] Each item has sport field` | Each sport has a valid string sport name |
| 6 | `[AllSports] Each item has matchCount field` | Each sport has a numeric match count |
| 7 | `[AllSports] matchCount is non-negative` | No negative counts |
| 8 | `[AllSports] sport is a valid enum value` | Sport is one of: CS2, DOTA2, LOL, VALORANT, RUSH_SOCCER, RUSH_BASKETBALL |
| 9 | `[AllSports] All items have sport and matchCount` | Validates structure across all items |
| 10 | `[AllSports] No duplicate sports` | No sport appears twice |
| 11 | `[LiveSports] Status is OK` | `live_only=true` variant returns OK |
| 12 | `[LiveSports] Response message is not null` | Live query returns a body |
| 13 | `[LiveSports] sports is an array` | Live response has sports array |
| 14 | `[LiveSports] Live match count <= all match count` | Live subset does not exceed total |

**Scenarios tested:**
- `live_only=false` — all planned + live matches
- `live_only=true` — only live matches
- Cross-comparison: live count <= total count

---

### 2. `match_timeline_tournaments.js` — MatchTimelineTournaments

**RPC:** `MatchTimelineTournaments` (unary)
**Proto:** `MatchTimelineTournamentsRequest` → `MatchTimelineTournamentsResponse`

| # | Check | Description |
|---|-------|-------------|
| 1 | `[AllTournaments] Status is OK` | CS2 tournaments query returns OK |
| 2 | `[AllTournaments] Response message is not null` | Response body present |
| 3 | `[AllTournaments] tournaments is an array` | Tournaments field is array |
| 4 | `[AllTournaments] At least one tournament returned` | Non-empty results |
| 5 | `[AllTournaments] Has tournament object` | Nested tournament object exists |
| 6 | `[AllTournaments] Has matchCount` | Match count is numeric |
| 7 | `[AllTournaments] matchCount is positive` | At least 1 match per tournament |
| 8 | `[AllTournaments] Tournament has urn` | URN is a non-empty string |
| 9 | `[AllTournaments] Tournament has name` | Name is a non-empty string |
| 10 | `[AllTournaments] Tournament urn starts with od:tournament:` | URN format validation |
| 11 | `[AllTournaments] Tournament has isOffline boolean` | Boolean type check |
| 12 | `[AllTournaments] All items have tournament and matchCount` | Bulk structure validation |
| 13 | `[AllTournaments] No duplicate tournament URNs` | Uniqueness check |
| 14–15 | `[Dota2Tournaments]` | Dota2-specific sport filter |
| 16–18 | `[LiveTournaments]` | Live-only filter + count comparison |

**Scenarios tested:**
- CS2 sport filter (baseline)
- CS2 and Dota2 sport-specific queries
- `live_only=true` — live tournaments <= total

---

### 3. `team_profile.js` — TeamProfile

**RPC:** `TeamProfile` (unary)
**Proto:** `TeamProfileRequest` → `TeamProfileResponse`

| # | Check | Description |
|---|-------|-------------|
| 1 | `[Setup] MatchTimeline status is OK` | Fetches a real team URN from MatchTimeline |
| 2 | `[TeamProfile] Status is OK` | Profile request succeeds |
| 3 | `[TeamProfile] Response message is not null` | Response body present |
| 4 | `[TeamProfile] Has urn` | Team URN present |
| 5 | `[TeamProfile] Has name` | Team name present |
| 6 | `[TeamProfile] URN matches requested URN` | Returned URN matches query |
| 7 | `[TeamProfile] URN starts with od:competitor: or od:team:` | URN format |
| 8 | `[TeamProfile] players is an array` | Players array present |
| 9 | `[TeamProfile] Player has urn` | Player URN present |
| 10 | `[TeamProfile] Player has nickname` | Nickname present |
| 11 | `[TeamProfile] Player urn starts with od:player:` | Player URN format |
| 12 | `[TeamProfile] All players have urn and nickname` | Bulk validation |
| 13 | `[TeamProfile] No duplicate player URNs` | Uniqueness check |
| 14 | `[TeamProfile] currentMapRoster is an array` | Roster array present |
| 15 | `[TeamProfile] Roster players have urn` | Roster URN validation |
| 16 | `[TeamProfile] Roster players have nickname` | Roster nickname validation |
| 17 | `[TeamProfile] externalIdentities is an object` | External IDs map present |
| 18 | `[InvalidTeam] Request completes without crash` | Nonexistent URN handled gracefully |
| 19 | `[EmptyTeam] Request completes without crash` | Empty URN handled gracefully |

**Scenarios tested:**
- Valid team URN (dynamically resolved from MatchTimeline)
- Player and roster schema validation
- External identities map
- Error handling: nonexistent URN, empty URN

---

### 4. `match_timeline_filters.js` — MatchTimeline (Filter Combinations)

**RPC:** `MatchTimeline` (unary)
**Proto:** `MatchTimelineRequest` → `MatchTimelineResponse`

| # | Check | Description |
|---|-------|-------------|
| 1–2 | `[Baseline]` | Unfiltered query returns OK + has matches |
| 3–6 | `[SportFilter]` | Filter by sport: correct sport, subset of total |
| 7–10 | `[TournamentFilter]` | Filter by tournament URN: correct tournament, subset |
| 11–13 | `[MatchFilter]` | Filter by match URN: exactly 1 result, correct URN |
| 14–16 | `[TeamNameFilter]` | Filter by team name: all results contain team |
| 17–20 | `[LiveOnly]` | `live_only=true`: all LIVE status, subset of total |
| 21–22 | `[CombinedFilter]` | Sport + live_only combined |
| 23–24 | `[NonexistentTournament]` | Fake URN returns empty array (not error) |

**Scenarios tested:**
- All 5 request filters: `sport`, `tournament_urn`, `match_urn`, `team_name`, `live_only`
- Combined filter (sport + live_only)
- Edge case: nonexistent tournament returns empty result set
- Filter values are dynamically resolved from baseline query

---

### 5. `match_timeline_sports_feed.js` — MatchTimelineSportsFeed

**RPC:** `MatchTimelineSportsFeed` (server stream)
**Proto:** `MatchTimelineSportsFeedRequest` → `stream MatchTimelineSportsFeedResponse`

| # | Check | Description |
|---|-------|-------------|
| 1 | `[SportsFeed] Received a message` | Stream delivers data |
| 2 | `[SportsFeed] Message has sports array` | Sports array present |
| 3 | `[SportsFeed] At least one sport in feed` | Non-empty |
| 4 | `[SportsFeed] Each item has sport field` | Valid sport string |
| 5 | `[SportsFeed] Each item has matchCount` | Numeric count |
| 6 | `[SportsFeed] All matchCounts are non-negative` | No negatives |
| 7 | `[SportsFeed] Sports are valid enum values` | Enum validation |
| 8 | `[SportsFeed] No duplicate sports in message` | Uniqueness |

**Stream behavior:** Connects, receives first message, validates, then closes.
**Timeout:** 10 seconds.

---

### 6. `match_timeline_tournaments_feed.js` — MatchTimelineTournamentsFeed

**RPC:** `MatchTimelineTournamentsFeed` (server stream)
**Proto:** `MatchTimelineTournamentsFeedRequest` → `stream MatchTimelineTournamentsFeedResponse`

| # | Check | Description |
|---|-------|-------------|
| 1 | `[TournamentsFeed] Received a message` | Stream delivers data |
| 2 | `[TournamentsFeed] Message has tournaments array` | Array present |
| 3 | `[TournamentsFeed] At least one tournament in feed` | Non-empty |
| 4 | `[TournamentsFeed] Each item has tournament object` | Nested object exists |
| 5 | `[TournamentsFeed] Each item has matchCount` | Numeric count |
| 6 | `[TournamentsFeed] All matchCounts are positive` | Positive counts |
| 7 | `[TournamentsFeed] Tournament has urn` | URN present |
| 8 | `[TournamentsFeed] Tournament has name` | Name present |
| 9 | `[TournamentsFeed] Tournament urn starts with od:tournament:` | URN format |
| 10 | `[TournamentsFeed] Tournament has isOffline boolean` | Type check |
| 11 | `[TournamentsFeed] No duplicate tournament URNs` | Uniqueness |

**Stream behavior:** Connects with `sport: SPORT_CS2`, receives first message, validates, closes.
**Timeout:** 10 seconds.

---

### 7. `match_timeline_feed.js` — MatchTimelineFeed

**RPC:** `MatchTimelineFeed` (server stream)
**Proto:** `MatchTimelineFeedRequest` → `stream MatchTimelineFeedMessage`

| # | Check | Description |
|---|-------|-------------|
| 1 | `gRPC stream received at least one message` | Stream delivers data |
| 2 | `First message contains timeline` | Initial timeline snapshot present |
| 3 | `timeline has non-empty matches array` | Matches in timeline |
| 4 | `Each match has plannetStart` | Planned start present as a protobuf `Timestamp` object (`seconds`/`nanos`) |
| 5 | `Timestamps do not move backwards` | Chronological ordering |
| 6 | `matchUpdate has matchUrn` | Update messages have match identifier |

**Stream behavior:** Receives timeline snapshot + match updates. Validates both message types.
**Timeout:** 10 seconds.

---

### 8. `live_data_feed.js` — LiveDataFeed

**RPC:** `LiveDataFeed` (server stream)
**Proto:** `LiveDataFeedRequest` → `stream LiveDataFeedMessage`

| # | Check | Description |
|---|-------|-------------|
| 1 | `[LiveDataFeed] Received a message` | Stream delivers data |
| 2 | `[LiveDataFeed] MatchMessage is not null` | Match payload present |
| 3 | `[LiveDataFeed] Sport message has matchUrn` | URN present |
| 4 | `[LiveDataFeed] matchUrn starts with od:match:` | URN format |
| 5 | `[LiveDataFeed] Sport message has sequence` | Sequence number present |
| 6 | `[LiveDataFeed] Sport message has timestamp` | Timestamp present |
| 7 | `[LiveDataFeed] Payload is snapshot or update` | Valid payload oneof |
| 8 | `[LiveDataFeed] Snapshot is not null` | Initial snapshot received |
| 9 | `[LiveDataFeed] dataStatus is a valid enum` | DATA_STATUS enum validation |

**Stream behavior:** Receives initial snapshots for all live matches, then real-time updates. Validates up to 5 messages covering multiple sport types (CS2, Dota2, LoL, Valorant, Rush Soccer, Rush Basketball).
**Timeout:** 15 seconds.

**Supported sport payloads validated:**
- `cs2` / `cs2Duels` — CS2MatchMessage
- `dota2` — Dota2MatchMessage
- `lol` — LolMatchMessage
- `valorant` — ValorantMatchMessage
- `rushSoccer` — RushSoccerMatchMessage
- `rushBasketball` — RushBasketballMatchMessage
- `announcement` — AnnouncementUpdate

---

### 9. `match_events_feed.js` — MatchEventsFeed

**RPC:** `MatchEventsFeed` (server stream)
**Proto:** `MatchEventsFeedRequest` → `stream MatchEventsFeedMessage`

| # | Check | Description |
|---|-------|-------------|
| 1 | `[MatchEventsFeed] Received a message` | Stream delivers data |
| 2 | `[MatchEventsFeed] CS2 events has matchUrn` | Match URN present |
| 3 | `[MatchEventsFeed] matchUrn starts with od:match:` | URN format |
| 4 | `[MatchEventsFeed] events is a non-empty array` | Events array non-empty |
| 5 | `[MatchEventsFeed] Event has timestamp` | Each event timestamped |
| 6 | `[MatchEventsFeed] Event has at least one event type` | Valid event oneof |
| 7 | `[MatchEventsFeed] Events have timestamps` | Bulk timestamp validation |

**Stream behavior:** Receives historical events for live matches, then real-time updates.
**Timeout:** 15 seconds.

**CS2 event types validated:**
- `bombDefuseStarted`, `bombDefused`, `bombExploded`, `bombPlantStarted`, `bombPlanted`
- `damageDealt`, `kill`, `death`
- `freezeTimeStarted`, `freezeTimeEnded`
- `itemDrop`, `itemPickUp`, `itemPurchase`, `itemThrow`
- `mapStart`, `mapEnd`
- `roundStart`, `roundEnd`, `roundPause`, `roundResume`, `roundRollback`
- `worldBomb`

---

## RPC Coverage Matrix

| RPC | Type | Test File | Checks |
|-----|------|-----------|--------|
| `MatchTimelineSports` | unary | `match_timeline_sports.js` | 14 |
| `MatchTimelineTournaments` | unary | `match_timeline_tournaments.js` | 18 |
| `MatchTimeline` | unary | `match_timeline_filters.js` | 24 |
| `TeamProfile` | unary | `team_profile.js` | 19 |
| `MatchTimelineSportsFeed` | stream | `match_timeline_sports_feed.js` | 8 |
| `MatchTimelineTournamentsFeed` | stream | `match_timeline_tournaments_feed.js` | 11 |
| `MatchTimelineFeed` | stream | `match_timeline_feed.js` | 6 |
| `LiveDataFeed` | stream | `live_data_feed.js` | 9 |
| `MatchEventsFeed` | stream | `match_events_feed.js` | 7 |
| **Total** | | **9 files** | **116** |

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| `code: 7, access denied` | Invalid token or VPN not connected | Connect VPN, verify `BRAGI_TOKEN` env var |
| `k6: command not found` | K6 not in PATH | Restart terminal or use full path: `"/c/Program Files/k6/k6.exe"` |
| Stream tests hang | Server not sending data | Check if live matches exist on the test environment |
| `snake_case` field checks fail | K6 gRPC uses camelCase (protobuf JSON mapping) | Use `matchUrn` not `match_urn`, `homeScore` not `home_score` |
