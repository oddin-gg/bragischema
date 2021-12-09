# Bragi schema
Represents [gRPC](https://grpc.io/) schema for Oddin.gg data feed and historical statistics.

### Notes for our customers
Currently, only data feed stream is available to our customers. This stream provides live data of currently played matches.
To check data stream definition check proto/bragi_service.proto and proto/stream/data_feed.proto files.

### How to generate Grpc files
 - **For x86 architecture** 
   - run bash script
      ```
      sh generate.sh
      ```

 - **For Apple silicon**
   - go to the java/build.gradle file and uncomment line where "!!! Important:" is written and comment line above.
   - run bash script
     ```
     sh generate.sh
     ```
