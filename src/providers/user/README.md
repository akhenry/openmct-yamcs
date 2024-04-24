# YAMCS User Provider

## Description

### Operator Status

#### Example MDB

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
      <!-- Enumerated parameter type for defining operator status with possible values -->
      <EnumeratedParameterType name="OperatorStatus">
        <IntegerDataEncoding sizeInBits="8" encoding="unsigned" />
        <EnumerationList>
          <Enumeration value="0" label="NO GO" shortDescription="No Go" />
          <Enumeration value="1" label="GO" shortDescription="Go" />
        </EnumerationList>
      </EnumeratedParameterType>
      <!-- String parameter type for poll questions, allowing for a string of up to 256 bits -->
      <StringParameterType name="PollQuestion">
        <StringDataEncoding sizeInBits="256" />
      </StringParameterType>
    </ParameterTypeSet>
    <!-- Set of parameters referencing the defined parameter types -->
    <ParameterSet>
      <!-- Parameter definition for 'Driver' operator status -->
      <Parameter parameterTypeRef="OperatorStatus" name="driverStatus">
        <AliasSet>
          <Alias nameSpace="OpenMCT:type" alias="yamcs.operatorStatus" />
          <Alias nameSpace="OpenMCT:role" alias="Driver" />
        </AliasSet>
        <ParameterProperties dataSource="local" />
      </Parameter>
      <!-- Parameter definition for 'Flight' operator status -->
      <Parameter parameterTypeRef="OperatorStatus" name="flightStatus">
        <AliasSet>
          <Alias nameSpace="OpenMCT:type" alias="yamcs.operatorStatus" />
          <Alias nameSpace="OpenMCT:role" alias="Flight" />
        </AliasSet>
        <ParameterProperties dataSource="local" />
      </Parameter>
      <!-- Parameter definition for 'Science' operator status -->
      <Parameter parameterTypeRef="OperatorStatus" name="scienceStatus">
        <AliasSet>
          <Alias nameSpace="OpenMCT:type" alias="yamcs.operatorStatus" />
          <Alias nameSpace="OpenMCT:role" alias="Science" />
        </AliasSet>
        <ParameterProperties dataSource="local" />
      </Parameter>
      <!-- Parameter definition for the current poll question -->
      <Parameter parameterTypeRef="PollQuestion" name="currentPollQuestion">
        <AliasSet>
          <Alias nameSpace="OpenMCT:type" alias="yamcs.pollQuestion" />
        </AliasSet>
        <ParameterProperties dataSource="local" />
      </Parameter>
    </ParameterSet>
  </TelemetryMetaData>
</SpaceSystem>
```
