# Bragi schema
Represents [Protocol-buffers](https://developers.google.com/protocol-buffers) schema for Oddin.gg data feed.

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
