# Installation
To run the K6 load testing tools, you'll need to:
* [Install K6](https://k6.io/docs/get-started/installation/)
* Install [YAMCS Quickstart](https://github.com/yamcs/quickstart)

# Running
* Start [YAMCS](https://github.com/yamcs/quickstart#running-yamcs)
* Start the [simulator](https://github.com/yamcs/quickstart#telemetry) in YAMCS Quickstart
* Run the K6 script:
```sh
export OPENMCT_USERNAME=testuser;
export OPENMCT_PASSWORD=NasaIsCool!
k6 run websocket-subscriptions.js
k6 run full-browser-test.js
```
