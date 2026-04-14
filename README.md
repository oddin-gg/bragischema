# Bragi schema
Represents [gRPC](https://grpc.io/) schema for Oddin.gg data feed and historical statistics.

### Notes for our customers
Currently, only data feed stream is available to our customers. This stream provides live data of currently played matches.
To check data stream definition check proto/bragi_service.proto and proto/stream/data_feed.proto files.

### Prerequisites

Ensure you have Docker installed

### How to generate Grpc files
 - **For x86 architecture** 
   - run command
      ```
      make generate
      ```

 - **For Apple silicon**
   - go to the java/build.gradle file and uncomment line where "!!! Important:" is written and comment line above.
   - run command
     ```
     make generate
     ```

## K6 gRPC Tests

Automated gRPC integration tests for Bragi using [K6](https://k6.io/).

### Running locally

`BRAGI_TOKEN` is required. Tests will fail immediately if it is not set.

```bash
cd k6
k6 run -e BRAGI_TOKEN=your-token match_timeline_sports.js
```

To also override the endpoint:

```bash
cd k6
k6 run -e BRAGI_TOKEN=your-token -e BRAGI_ADDR=your-host:443 match_timeline_sports.js
```

### Test files

| File | gRPC Method | Type |
|------|-------------|------|
| `match_timeline_sports.js` | `MatchTimelineSports` | Unary |
| `match_timeline_tournaments.js` | `MatchTimelineTournaments` | Unary |
| `match_timeline_filters.js` | `MatchTimeline` (filters) | Unary |
| `team_profile.js` | `TeamProfile` | Unary |
| `match_timeline_feed.js` | `MatchTimelineFeed` | Streaming |
| `match_timeline_sports_feed.js` | `MatchTimelineSportsFeed` | Streaming |
| `match_timeline_tournaments_feed.js` | `MatchTimelineTournamentsFeed` | Streaming |
| `live_data_feed.js` | `LiveDataFeed` | Streaming |
| `match_events_feed.js` | `MatchEventsFeed` | Streaming |

### CI/CD

Tests run automatically via GitHub Actions:
- **Schedule**: Daily at 06:00 UTC
- **Manual**: Trigger via `workflow_dispatch` in the Actions tab

#### Required GitHub Secrets

| Secret | Description |
|--------|-------------|
| `BRAGI_TOKEN` | Auth token for the Bragi gRPC API |

#### Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `BRAGI_ADDR` | `api-bragi-test.integration.oddin.dev:443` | gRPC endpoint |
| `BRAGI_TOKEN` | *(required)* | Auth token |
