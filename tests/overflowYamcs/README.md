# Purpose

This directory is to test YAMCS setting for large binary types, and its interaction with the [writeBufferWaterMark](https://docs.yamcs.org/yamcs-server-manual/services/global/http-server/), detailed in this [ticket](https://github.com/akhenry/openmct-yamcs/issues/397). Setting the `writeBufferWaterMark` to a value in bytes lower than the file you will send using this script will prevent you from seeing the value on the [YAMCS webpage](http://localhost:8090/telemetry/parameters/%2Fmyproject%2FBigPicture/summary?c=myproject__realtime).

# To Run
1. Install the provided `xtce.xml` in this directory in the [YAMCS Quickstart directory](src/main/yamcs/mdb/xtce.xml) in `src/main/yamcs/mdb/xtce.xml`
2. Set the `writeBufferMark` to a value that's smaller in bytes than the image you plan to use. E.g. for ~1.5MB:
```yaml
services:
  - class: org.yamcs.http.HttpServer
    args:
      port: 8090
      address: "0.0.0.0"
      cors:
        allowOrigin: "*"
        allowCredentials: false
      maxContentLength: 20000000
      webSocket:
        writeBufferWaterMark: { low: 32768, high: 1600000 }
```
3. Start YAMCS Quickstart: `mvn yamcs:run`
4. Inspect the script, and adjust the top constants to your liking.
5. Run the script: `node sendYamcsBinary.mjs`
6. Observe on [YAMCS webpage](http://localhost:8090/telemetry/parameters/%2Fmyproject%2FBigPicture/summary?c=myproject__realtime) that you can't see the parameter value.
7. Set the `writeBufferMark`, and reload YAMCS. Notice you can now see the parameter value.