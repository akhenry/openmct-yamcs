# Mission Status

## Description

"Mission Status" is a feature that is used to indicate the current state of a mission with regards to one or more "Mission Actions". A mission action defines a verb that may be, for example, a task for a spacecraft (such as "Drive" or "Imagery"), a change in the state of a ground system, or any other event that is relevant to the mission. Example states for a mission action might include "Go" or "No Go", indicating whether a particular action is currently cleared for execution.



## Setup

In order to use this feature, YAMCS MDB and `roles.yaml` must be configured properly.

### YAMCS MDB

In the YAMCS MDB, the Mission Status parameters must be defined.
See the example below for a `SpaceSystem` named "OpenMCTTest" with three Mission Status parameters (actions): "Driving", "Drilling", and "Imagery".
The possible values for each parameter are "NO GO" and "GO".

* The `OpenMCT:type` alias is used to define the Parameter as a "Mission Status" parameter.
* The `OpenMCT:action` alias is used to define the name of the Mission Action itself (e.g. "drivingStatus").

```xml
<?xml version="1.0" encoding="UTF-8"?>

<SpaceSystem name="OpenMCTTest" shortDescription="Open MCT Test Parameters"
  xmlns="http://www.omg.org/spec/XTCE/20180204"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:xi="http://www.w3.org/2001/XInclude">

  <LongDescription>
    Parameters that are used for Open MCT testing only.
  </LongDescription>

  <Header validationStatus="Draft" classification="none" />
  <TelemetryMetaData>
    <ParameterTypeSet>
    <!-- Defines the possible options for all mission actions -->
      <EnumeratedParameterType name="MissionStatus">
        <IntegerDataEncoding sizeInBits="8" encoding="unsigned" />
        <EnumerationList>
          <Enumeration value="0" label="NO GO" shortDescription="No Go" />
          <Enumeration value="1" label="GO" shortDescription="Go" />
        </EnumerationList>
      </EnumeratedParameterType>
    </ParameterTypeSet>
    <!-- Define the mission status parameters or "mission actions" -->
    <ParameterSet>
      <Parameter parameterTypeRef="MissionStatus" name="Driving">
        <AliasSet>
        <!-- The `OpenMCT:type` alias defines the Parameter as a "Mission Status" parameter -->
          <Alias nameSpace="OpenMCT:type" alias="yamcs.missionStatus" />
        <!-- This `OpenMCT:action` alias defines the name of the Mission Action -->
          <Alias nameSpace="OpenMCT:action" alias="drivingStatus" />
        </AliasSet>
        <ParameterProperties dataSource="local" />
      </Parameter>
      <Parameter parameterTypeRef="MissionStatus" name="Drilling">
        <AliasSet>
          <Alias nameSpace="OpenMCT:type" alias="yamcs.missionStatus" />
          <Alias nameSpace="OpenMCT:action" alias="drillingStatus" />
        </AliasSet>
        <ParameterProperties dataSource="local" />
      </Parameter>
      <Parameter parameterTypeRef="MissionStatus" name="Imagery">
        <AliasSet>
          <Alias nameSpace="OpenMCT:type" alias="yamcs.missionStatus" />
          <Alias nameSpace="OpenMCT:action" alias="imageryStatus" />
        </AliasSet>
        <ParameterProperties dataSource="local" />
      </Parameter>
    </ParameterSet>
  </TelemetryMetaData>
</SpaceSystem>
```

### `roles.yaml`

In the `roles.yaml` file, the user with permission to set mission status must be given `WriteParameter` permission to the path(s) which
contain the Mission Status parameters:

```yaml
# roles.yaml example granting the "Flight" role permission to set mission status
Flight:
  Command: []
  CommandHistory: [ ".*" ]
  ManageBucket: []
  ReadAlgorithm: [ ".*" ]
  ReadBucket: [ ".*" ]
  ReadPacket: [ ".*" ]
  ReadParameter: [ ".*" ]
  Stream: []
  WriteParameter:
  - "/MyProject/MissionStatus/.*"
  System:
  - GetMissionDatabase
  - ReadAlarms
  - ReadCommandHistory
  - ReadEvents
  - ReadFileTransfers
  - ReadLinks
```

### User Provider

See the [Open MCT documentation](https://github.com/nasa/openmct/blob/634aeef06e8712d3806bcd15fa9e5901386e12b3/src/plugins/userIndicator/README.md) for information on how to configure the User Provider to support Mission Status.
