# YAMCS Plugin for Open MCT
This project provides a plugin for connecting Open MCT to a YAMCS backend.

## Running the example

An example is provided in this repository that can be configured to run against any YAMCS installation. This is designed
 to get you up and running quickly, and should work with no configuration changes if you are running the 
 [YAMCS QuickStart](https://github.com/yamcs/quickstart) server.

### Prerequisites
* The YAMCS Quickstart example is assumed to have been installed and to be running successfully. See 
  https://github.com/yamcs/quickstart
* [A git client](https://git-scm.com/)
* [Node 10+](https://nodejs.org/)

### Installation
```
git clone https://github.com/akhenry/openmct-yamcs.git
cd openmct-yamcs
npm install
npm start
```

This should build the example, and launch a web browser with Open MCT connected to a locally running YAMCS server. My 
default it is configured to connect to the "myproject" instance provided in the [YAMCS QuickStart](https://github.com/yamcs/quickstart) server.

## Using the Open MCT-YAMCS plugin in your own project

When building an application with Open MCT, we strongly advise building with Open MCT as a dependency, rather than 
building your project from the Open MCT source. Please refer to 
[our guidance on this](https://github.com/nasa/openmct/blob/master/API.md#starting-an-open-mct-application).

### Fetching the dependency
These instructions assume you are using Node Package Manager. You should be able to adapt them for Yarn, but this has 
not been tested.

```
npm install --save akhenry/openmct-yamcs
```

### Installing the plugin

The Open MCT - YAMCS adapter can be included as an ES6 module using an import statement. If you are using Webpack it 
can be imported using only the package name, otherwise the full path to the dependency should be used.

eg.

#### Using Webpack
```
import installYamcsPlugin from 'openmct-yamcs';
```

#### Using native ES6 imports:
```
import installYamcsPlugin from 'node_modules/openmct-yamcs/dist/openmct-yamcs.js'
```

The plugin can then be installed and configured like so:
```
openmct.install(installYamcsPlugin({
    "yamcsDictionaryEndpoint": "http://localhost:8090/",
    "yamcsHistoricalEndpoint": "http://localhost:8090/",
    "yamcsRealtimeEndpoint": "ws://localhost:8090/",
    "yamcsInstance": "myproject",
    "yamcsFolder": "myproject"
}));
```

## Configuration
| Configuration Item      | Notes                                                 | Example Value                      |
|-------------------------|-------------------------------------------------------|------------------------------------|
| yamcsDictionaryEndpoint | This is the root path to the YAMCS installation. The  | http://localhost:8090/             |
|                         | adapter will use this to fetch all of the parameters  |                                    |
|                         | and containers defined for the configured instance.   |                                    |
|-------------------------|-------------------------------------------------------|------------------------------------|
| yamcsHistoricalEndpoint | As above, this is the root path to the YAMCS          | http://localhost:8090/             |
|                         | installation. This will be automatically appended     |                                    |
|                         | with the necessary path to retrieve historical        |                                    |
|                         | data for the selected parameter, in the configured    |                                    |
|                         | instance.                                             |                                    |
|-------------------------|-------------------------------------------------------|------------------------------------|
| yamcsRealtimeEndpoint   | As above, this is the root path to the YAMCS          | ws://localhost:8090/               |
|                         | installation. This will be automatically appended     |                                    |
|                         | with the necessary path to retrieve historical        |                                    |
|                         | data for the selected parameter, in the configured    |                                    |
|                         | instance. *It must always start with `ws` or `wss`*   |                                    |
|-------------------------|-------------------------------------------------------|------------------------------------|
| yamcsInstance           | The name of the instance configured in YAMCS that you | myproject                          |
|                         | wish to connect to.                                   |                                    |
|-------------------------|-------------------------------------------------------|------------------------------------|
| yamcsFolder             | The name of the instance configured in YAMCS that you | myproject                          |
|                         | wish to connect to.                                   |                                    |
|-------------------------|-------------------------------------------------------|------------------------------------|

## Limitations
Right now the Open MCT - YAMCS adapter can only be configued for a single YAMCS instance and parameter folder at a time. 
eg. in the YAMCS Quickstart example Open MCT can be configured to interface with the `myproject` instance and parameter 
folder, or the `yamcs` instance and parameter folder, but not both. This will be addressed in a future release.

