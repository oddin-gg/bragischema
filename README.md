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

The k6 gRPC tests for Bragi now live in
[`oddin-gg/mimir-qa-utils`](https://github.com/oddin-gg/mimir-qa-utils) under `k6/bragi/`,
with the other Mimir QA suites (DATA-1901). They run there daily against
staging, and on demand for a whole suite or a subset. They load the protos
from this repo's `proto/` at run time, so the protos stay owned here.
