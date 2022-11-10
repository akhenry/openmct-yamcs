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
* [NodeJS](https://nodejs.org/)

### Compatibility
This is a fast moving project and we do our best to support and test what we test and support. 

* Supported NodeJS available in our package.json's `engine` key.
* Minimum Supported Open MCT version in our package.json's `optionalDependencies` key.
* Minimum YAMCS Version support follows [YAMCS QuickStart](https://github.com/yamcs/quickstart)

If you encounter an issue with our documented compatibility, please file a [GitHub issue](https://github.com/akhenry/openmct-yamcs/issues/new/choose)

### Installation
```
git clone https://github.com/akhenry/openmct-yamcs.git
cd openmct-yamcs
npm install
npm run build:example
npm start
```

This should build the example, and launch a web browser with Open MCT connected to a locally running YAMCS server. By 
default it is configured to connect to the "myproject" instance provided in the [YAMCS QuickStart](https://github.com/yamcs/quickstart) server.

### Testing

This project is using the openmct-e2e-as-a-dependency model. For getting started with our tests, please see [our README](./tests/README.md)

Each PR is tested for compatibility with YAMCS QuickStart as well as the latest version of Open MCT using GitHub Actions.

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
    "yamcsWebsocketEndpoint": "ws://localhost:8090/",
    "yamcsInstance": "myproject",
    "yamcsFolder": "myproject"
}));
```

## Configuration
| Configuration Item      | Notes                                                 | Example Value                      |
|-------------------------|-------------------------------------------------------|------------------------------------|
| yamcsDictionaryEndpoint | This is the root path to the YAMCS installation. The adapter will use this to fetch all of the parameters adapter will use this to fetch all of the parameters and containers defined for the configured instance. | http://localhost:8090/              |
| yamcsHistoricalEndpoint | As above, this is the root path to the YAMCS installation. This will be automatically appended with the necessary path to retrieve historical data for the selected parameter, in the configured instance. | http://localhost:8090/             |
| yamcsWebsocketEndpoint   | The path to the new (post v5) WebSocket interface.  *It must always start with `ws` or `wss`, and must contain the complete path (unlike config above) | ws://localhost:8090/api/websocket               |
| yamcsInstance           | The name of the instance configured in YAMCS that you wish to connect to. | myproject                          |
| yamcsFolder             | The name of the instance configured in YAMCS that you wish to connect to. | myproject                          |

## Special XTCE features

If you are using an XTCE configuration in Yamcs, there are two special
constructs you can use in the XTCE to control how a parameter is used in
Yamcs. Both are specified in an `<AliasSet>` associated with a parameter
definition. The `namespace` attribute of the `<Alias>` is one of these
two values:

* `OpenMCT:type` -- This namespace indicates that the parameter type in OpenMCT should be taken from the `alias` attribute rather than inferred from the Yamcs type. The main use of this construct is to mark string parameters which should be interpreted as image URLs. Those should have a `alias` attribute of `yamcs.image`.
* `OpenMCT:omit` -- This namespace indicates that the parameter should be omitted from the OpenMCT object tree. This is useful for parameters that are used as filler values, or for packet values that are always constant. Using this construct you can declutter the OpenMCT object tree.

Examples:

    <!-- This string parameter is actually an image URL. -->
    <xtce:Parameter parameterTypeRef="someStringType" name="cameraImage">
      <xtce:AliasSet>
        <xtce:Alias namespace="OpenMCT:type" alias="yamcs.image" />
      </xtce:AliasSet>
    </xtce:Parameter>
    <!-- This parameter should be omitted from the object tree. -->
    <xtce:Parameter parameterTypeRef="otherType" name="fixedValueEBh">
      <xtce:AliasSet>
        <xtce:Alias namespace="OpenMCT:omit" alias="" />
      </xtce:AliasSet>
    </xtce:Parameter>

## Limitations
Right now the Open MCT - YAMCS adapter can only be configued for a single YAMCS instance at a time. We hope to address this in a future release.
