// source: yamcs/protobuf/mdb/mdb.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var yamcs_api_annotations_pb = require('../../../yamcs/api/annotations_pb.js');
goog.object.extend(proto, yamcs_api_annotations_pb);
var yamcs_api_httpbody_pb = require('../../../yamcs/api/httpbody_pb.js');
goog.object.extend(proto, yamcs_api_httpbody_pb);
var yamcs_protobuf_yamcs_pb = require('../../../yamcs/protobuf/yamcs_pb.js');
goog.object.extend(proto, yamcs_protobuf_yamcs_pb);
goog.exportSymbol('proto.yamcs.protobuf.mdb.AbsoluteTimeInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.AlarmInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.AlarmLevelType', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.AlarmRange', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.AlgorithmInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.AlgorithmInfo.Scope', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.AlgorithmInfo.Type', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.AncillaryDataInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ArgumentDimensionInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ArgumentInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ArgumentMemberInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ArgumentTypeInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ArrayInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.BatchGetParametersRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.BatchGetParametersResponse', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.CalibratorInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.CalibratorInfo.Type', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.CheckWindowInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.CommandContainerInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.CommandInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ComparisonInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ComparisonInfo.OperatorType', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ContainerInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ContextAlarmInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ContextCalibratorInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.CreateParameterRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.CreateParameterTypeRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.DataEncodingInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.DataEncodingInfo.Type', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.DataSourceType', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.EnumValue', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.EnumerationAlarm', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ExportXtceRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.FixedValueInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.GetAlgorithmRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.GetCommandRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.GetContainerRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.GetParameterRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.GetParameterTypeRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.GetSpaceSystemRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.HistoryInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.InputParameterInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ListAlgorithmsRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ListAlgorithmsResponse', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ListCommandsRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ListCommandsResponse', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ListContainersRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ListContainersResponse', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ListParameterTypesRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ListParameterTypesResponse', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ListParametersRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ListParametersResponse', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.MathElement', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.MathElement.Type', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.MemberInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.MissionDatabase', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.MissionDatabaseItem', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.MissionDatabaseItem.ItemCase', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.NumberFormatTypeInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.OutputParameterInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ParameterDimensionInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ParameterInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.ParameterTypeInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.RepeatInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.SequenceEntryInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.SequenceEntryInfo.ReferenceLocationType', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.SignificanceInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.SignificanceInfo.SignificanceLevelType', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.SpaceSystemInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.SplineCalibratorInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.TransmissionConstraintInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.UnitInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.UsedByInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.VerifierInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.MissionDatabase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.MissionDatabase.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.MissionDatabase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.MissionDatabase.displayName = 'proto.yamcs.protobuf.mdb.MissionDatabase';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.HistoryInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.HistoryInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.HistoryInfo.displayName = 'proto.yamcs.protobuf.mdb.HistoryInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.UnitInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.UnitInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.UnitInfo.displayName = 'proto.yamcs.protobuf.mdb.UnitInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.AlarmRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.AlarmRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.AlarmRange.displayName = 'proto.yamcs.protobuf.mdb.AlarmRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.EnumerationAlarm = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.EnumerationAlarm, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.EnumerationAlarm.displayName = 'proto.yamcs.protobuf.mdb.EnumerationAlarm';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.AlarmInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.AlarmInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.AlarmInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.AlarmInfo.displayName = 'proto.yamcs.protobuf.mdb.AlarmInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.ContextAlarmInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ContextAlarmInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ContextAlarmInfo.displayName = 'proto.yamcs.protobuf.mdb.ContextAlarmInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.DataEncodingInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.DataEncodingInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.DataEncodingInfo.displayName = 'proto.yamcs.protobuf.mdb.DataEncodingInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.ContextCalibratorInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ContextCalibratorInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ContextCalibratorInfo.displayName = 'proto.yamcs.protobuf.mdb.ContextCalibratorInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.CalibratorInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.CalibratorInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.CalibratorInfo.displayName = 'proto.yamcs.protobuf.mdb.CalibratorInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.displayName = 'proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.SplineCalibratorInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.SplineCalibratorInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.SplineCalibratorInfo.displayName = 'proto.yamcs.protobuf.mdb.SplineCalibratorInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.displayName = 'proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.displayName = 'proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.EnumValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.EnumValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.EnumValue.displayName = 'proto.yamcs.protobuf.mdb.EnumValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.ParameterTypeInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ParameterTypeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ParameterTypeInfo.displayName = 'proto.yamcs.protobuf.mdb.ParameterTypeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.NumberFormatTypeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.displayName = 'proto.yamcs.protobuf.mdb.NumberFormatTypeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.GetContainerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.GetContainerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.GetContainerRequest.displayName = 'proto.yamcs.protobuf.mdb.GetContainerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.GetParameterTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.GetParameterTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.GetParameterTypeRequest.displayName = 'proto.yamcs.protobuf.mdb.GetParameterTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.AbsoluteTimeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.displayName = 'proto.yamcs.protobuf.mdb.AbsoluteTimeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.MemberInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.MemberInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.MemberInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.MemberInfo.displayName = 'proto.yamcs.protobuf.mdb.MemberInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.ArgumentMemberInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ArgumentMemberInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ArgumentMemberInfo.displayName = 'proto.yamcs.protobuf.mdb.ArgumentMemberInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ParameterDimensionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ParameterDimensionInfo.displayName = 'proto.yamcs.protobuf.mdb.ParameterDimensionInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ArrayInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.ArrayInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ArrayInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ArrayInfo.displayName = 'proto.yamcs.protobuf.mdb.ArrayInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.UsedByInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.UsedByInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.UsedByInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.UsedByInfo.displayName = 'proto.yamcs.protobuf.mdb.UsedByInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ParameterInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.ParameterInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ParameterInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ParameterInfo.displayName = 'proto.yamcs.protobuf.mdb.ParameterInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.AncillaryDataInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.AncillaryDataInfo.displayName = 'proto.yamcs.protobuf.mdb.AncillaryDataInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.ArgumentTypeInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ArgumentTypeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ArgumentTypeInfo.displayName = 'proto.yamcs.protobuf.mdb.ArgumentTypeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ArgumentDimensionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.displayName = 'proto.yamcs.protobuf.mdb.ArgumentDimensionInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ArgumentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ArgumentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ArgumentInfo.displayName = 'proto.yamcs.protobuf.mdb.ArgumentInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.displayName = 'proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.SignificanceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.SignificanceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.SignificanceInfo.displayName = 'proto.yamcs.protobuf.mdb.SignificanceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ComparisonInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ComparisonInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ComparisonInfo.displayName = 'proto.yamcs.protobuf.mdb.ComparisonInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.TransmissionConstraintInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.TransmissionConstraintInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.displayName = 'proto.yamcs.protobuf.mdb.TransmissionConstraintInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.CommandInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.CommandInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.CommandInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.CommandInfo.displayName = 'proto.yamcs.protobuf.mdb.CommandInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.VerifierInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.VerifierInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.VerifierInfo.displayName = 'proto.yamcs.protobuf.mdb.VerifierInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.CheckWindowInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.CheckWindowInfo.displayName = 'proto.yamcs.protobuf.mdb.CheckWindowInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.RepeatInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.RepeatInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.RepeatInfo.displayName = 'proto.yamcs.protobuf.mdb.RepeatInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.SequenceEntryInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.SequenceEntryInfo.displayName = 'proto.yamcs.protobuf.mdb.SequenceEntryInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.FixedValueInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.FixedValueInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.FixedValueInfo.displayName = 'proto.yamcs.protobuf.mdb.FixedValueInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.CommandContainerInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.CommandContainerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.CommandContainerInfo.displayName = 'proto.yamcs.protobuf.mdb.CommandContainerInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ContainerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.ContainerInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ContainerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ContainerInfo.displayName = 'proto.yamcs.protobuf.mdb.ContainerInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.InputParameterInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.InputParameterInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.InputParameterInfo.displayName = 'proto.yamcs.protobuf.mdb.InputParameterInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.OutputParameterInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.OutputParameterInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.OutputParameterInfo.displayName = 'proto.yamcs.protobuf.mdb.OutputParameterInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.MathElement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.MathElement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.MathElement.displayName = 'proto.yamcs.protobuf.mdb.MathElement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.AlgorithmInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.AlgorithmInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.AlgorithmInfo.displayName = 'proto.yamcs.protobuf.mdb.AlgorithmInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.displayName = 'proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ListContainersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ListContainersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ListContainersRequest.displayName = 'proto.yamcs.protobuf.mdb.ListContainersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ListParameterTypesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ListParameterTypesRequest.displayName = 'proto.yamcs.protobuf.mdb.ListParameterTypesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ListAlgorithmsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.displayName = 'proto.yamcs.protobuf.mdb.ListAlgorithmsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ListCommandsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ListCommandsRequest.displayName = 'proto.yamcs.protobuf.mdb.ListCommandsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.GetParameterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.GetParameterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.GetParameterRequest.displayName = 'proto.yamcs.protobuf.mdb.GetParameterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ListParametersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.ListParametersRequest.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ListParametersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ListParametersRequest.displayName = 'proto.yamcs.protobuf.mdb.ListParametersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ListParametersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.ListParametersResponse.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ListParametersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ListParametersResponse.displayName = 'proto.yamcs.protobuf.mdb.ListParametersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.BatchGetParametersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.BatchGetParametersRequest.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.BatchGetParametersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.BatchGetParametersRequest.displayName = 'proto.yamcs.protobuf.mdb.BatchGetParametersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.BatchGetParametersResponse.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.BatchGetParametersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.BatchGetParametersResponse.displayName = 'proto.yamcs.protobuf.mdb.BatchGetParametersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.displayName = 'proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ListContainersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.ListContainersResponse.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ListContainersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ListContainersResponse.displayName = 'proto.yamcs.protobuf.mdb.ListContainersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.ListParameterTypesResponse.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ListParameterTypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ListParameterTypesResponse.displayName = 'proto.yamcs.protobuf.mdb.ListParameterTypesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.ListCommandsResponse.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ListCommandsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ListCommandsResponse.displayName = 'proto.yamcs.protobuf.mdb.ListCommandsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ListAlgorithmsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.displayName = 'proto.yamcs.protobuf.mdb.ListAlgorithmsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.GetAlgorithmRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.GetAlgorithmRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.GetAlgorithmRequest.displayName = 'proto.yamcs.protobuf.mdb.GetAlgorithmRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.CreateParameterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.CreateParameterRequest.displayName = 'proto.yamcs.protobuf.mdb.CreateParameterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.CreateParameterTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.displayName = 'proto.yamcs.protobuf.mdb.CreateParameterTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest.displayName = 'proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest.displayName = 'proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.displayName = 'proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yamcs.protobuf.mdb.MissionDatabaseItem.oneofGroups_);
};
goog.inherits(proto.yamcs.protobuf.mdb.MissionDatabaseItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.MissionDatabaseItem.displayName = 'proto.yamcs.protobuf.mdb.MissionDatabaseItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.displayName = 'proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.GetSpaceSystemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.GetSpaceSystemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.displayName = 'proto.yamcs.protobuf.mdb.GetSpaceSystemRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.ExportXtceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.ExportXtceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.ExportXtceRequest.displayName = 'proto.yamcs.protobuf.mdb.ExportXtceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.GetCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.GetCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.GetCommandRequest.displayName = 'proto.yamcs.protobuf.mdb.GetCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.mdb.SpaceSystemInfo.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.mdb.SpaceSystemInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.mdb.SpaceSystemInfo.displayName = 'proto.yamcs.protobuf.mdb.SpaceSystemInfo';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.MissionDatabase.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.MissionDatabase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.MissionDatabase} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.MissionDatabase.toObject = function(includeInstance, msg) {
  var f, obj = {
    configname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    version: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    spacesystemList: jspb.Message.toObjectList(msg.getSpacesystemList(),
    proto.yamcs.protobuf.mdb.SpaceSystemInfo.toObject, includeInstance),
    parametercount: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    containercount: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    commandcount: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    algorithmcount: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    parametertypecount: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.MissionDatabase;
  return proto.yamcs.protobuf.mdb.MissionDatabase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.MissionDatabase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 4:
      var value = new proto.yamcs.protobuf.mdb.SpaceSystemInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.SpaceSystemInfo.deserializeBinaryFromReader);
      msg.addSpacesystem(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParametercount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setContainercount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCommandcount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAlgorithmcount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParametertypecount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.MissionDatabase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.MissionDatabase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.MissionDatabase.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSpacesystemList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.yamcs.protobuf.mdb.SpaceSystemInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * optional string configName = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.getConfigname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.setConfigname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.clearConfigname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.hasConfigname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated SpaceSystemInfo spaceSystem = 4;
 * @return {!Array<!proto.yamcs.protobuf.mdb.SpaceSystemInfo>}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.getSpacesystemList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.SpaceSystemInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.SpaceSystemInfo, 4));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.SpaceSystemInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
*/
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.setSpacesystemList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.SpaceSystemInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.addSpacesystem = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.yamcs.protobuf.mdb.SpaceSystemInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.clearSpacesystemList = function() {
  return this.setSpacesystemList([]);
};


/**
 * optional int32 parameterCount = 6;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.getParametercount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.setParametercount = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.clearParametercount = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.hasParametercount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 containerCount = 7;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.getContainercount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.setContainercount = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.clearContainercount = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.hasContainercount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 commandCount = 8;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.getCommandcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.setCommandcount = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.clearCommandcount = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.hasCommandcount = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 algorithmCount = 9;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.getAlgorithmcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.setAlgorithmcount = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.clearAlgorithmcount = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.hasAlgorithmcount = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 parameterTypeCount = 10;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.getParametertypecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.setParametertypecount = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabase} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.clearParametertypecount = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MissionDatabase.prototype.hasParametertypecount = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.HistoryInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.HistoryInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.HistoryInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    date: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    author: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.HistoryInfo}
 */
proto.yamcs.protobuf.mdb.HistoryInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.HistoryInfo;
  return proto.yamcs.protobuf.mdb.HistoryInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.HistoryInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.HistoryInfo}
 */
proto.yamcs.protobuf.mdb.HistoryInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.HistoryInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.HistoryInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.HistoryInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.HistoryInfo} returns this
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.HistoryInfo} returns this
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string date = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.HistoryInfo} returns this
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.setDate = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.HistoryInfo} returns this
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.clearDate = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.hasDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.HistoryInfo} returns this
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.HistoryInfo} returns this
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string author = 4;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.getAuthor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.HistoryInfo} returns this
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.setAuthor = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.HistoryInfo} returns this
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.clearAuthor = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.HistoryInfo.prototype.hasAuthor = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.UnitInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.UnitInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.UnitInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.UnitInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    unit: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.UnitInfo}
 */
proto.yamcs.protobuf.mdb.UnitInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.UnitInfo;
  return proto.yamcs.protobuf.mdb.UnitInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.UnitInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.UnitInfo}
 */
proto.yamcs.protobuf.mdb.UnitInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.UnitInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.UnitInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.UnitInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.UnitInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string unit = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.UnitInfo.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.UnitInfo} returns this
 */
proto.yamcs.protobuf.mdb.UnitInfo.prototype.setUnit = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.UnitInfo} returns this
 */
proto.yamcs.protobuf.mdb.UnitInfo.prototype.clearUnit = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.UnitInfo.prototype.hasUnit = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.AlarmRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.AlarmRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.AlarmRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    level: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    mininclusive: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    maxinclusive: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    minexclusive: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    maxexclusive: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.AlarmRange}
 */
proto.yamcs.protobuf.mdb.AlarmRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.AlarmRange;
  return proto.yamcs.protobuf.mdb.AlarmRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.AlarmRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.AlarmRange}
 */
proto.yamcs.protobuf.mdb.AlarmRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yamcs.protobuf.mdb.AlarmLevelType} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMininclusive(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxinclusive(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinexclusive(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxexclusive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.AlarmRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.AlarmRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.AlarmRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.yamcs.protobuf.mdb.AlarmLevelType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional AlarmLevelType level = 1;
 * @return {!proto.yamcs.protobuf.mdb.AlarmLevelType}
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.getLevel = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.AlarmLevelType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.AlarmLevelType} value
 * @return {!proto.yamcs.protobuf.mdb.AlarmRange} returns this
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.setLevel = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AlarmRange} returns this
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.clearLevel = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.hasLevel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double minInclusive = 2;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.getMininclusive = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.AlarmRange} returns this
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.setMininclusive = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AlarmRange} returns this
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.clearMininclusive = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.hasMininclusive = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double maxInclusive = 3;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.getMaxinclusive = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.AlarmRange} returns this
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.setMaxinclusive = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AlarmRange} returns this
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.clearMaxinclusive = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.hasMaxinclusive = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double minExclusive = 4;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.getMinexclusive = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.AlarmRange} returns this
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.setMinexclusive = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AlarmRange} returns this
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.clearMinexclusive = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.hasMinexclusive = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double maxExclusive = 5;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.getMaxexclusive = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.AlarmRange} returns this
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.setMaxexclusive = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AlarmRange} returns this
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.clearMaxexclusive = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AlarmRange.prototype.hasMaxexclusive = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.EnumerationAlarm.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.EnumerationAlarm.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.EnumerationAlarm} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.EnumerationAlarm.toObject = function(includeInstance, msg) {
  var f, obj = {
    level: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    label: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.EnumerationAlarm}
 */
proto.yamcs.protobuf.mdb.EnumerationAlarm.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.EnumerationAlarm;
  return proto.yamcs.protobuf.mdb.EnumerationAlarm.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.EnumerationAlarm} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.EnumerationAlarm}
 */
proto.yamcs.protobuf.mdb.EnumerationAlarm.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yamcs.protobuf.mdb.AlarmLevelType} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.EnumerationAlarm.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.EnumerationAlarm.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.EnumerationAlarm} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.EnumerationAlarm.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.yamcs.protobuf.mdb.AlarmLevelType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional AlarmLevelType level = 1;
 * @return {!proto.yamcs.protobuf.mdb.AlarmLevelType}
 */
proto.yamcs.protobuf.mdb.EnumerationAlarm.prototype.getLevel = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.AlarmLevelType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.AlarmLevelType} value
 * @return {!proto.yamcs.protobuf.mdb.EnumerationAlarm} returns this
 */
proto.yamcs.protobuf.mdb.EnumerationAlarm.prototype.setLevel = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.EnumerationAlarm} returns this
 */
proto.yamcs.protobuf.mdb.EnumerationAlarm.prototype.clearLevel = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.EnumerationAlarm.prototype.hasLevel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string label = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.EnumerationAlarm.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.EnumerationAlarm} returns this
 */
proto.yamcs.protobuf.mdb.EnumerationAlarm.prototype.setLabel = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.EnumerationAlarm} returns this
 */
proto.yamcs.protobuf.mdb.EnumerationAlarm.prototype.clearLabel = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.EnumerationAlarm.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.AlarmInfo.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.AlarmInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.AlarmInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.AlarmInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.AlarmInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    minviolations: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    staticalarmrangeList: jspb.Message.toObjectList(msg.getStaticalarmrangeList(),
    proto.yamcs.protobuf.mdb.AlarmRange.toObject, includeInstance),
    enumerationalarmList: jspb.Message.toObjectList(msg.getEnumerationalarmList(),
    proto.yamcs.protobuf.mdb.EnumerationAlarm.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.AlarmInfo}
 */
proto.yamcs.protobuf.mdb.AlarmInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.AlarmInfo;
  return proto.yamcs.protobuf.mdb.AlarmInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.AlarmInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.AlarmInfo}
 */
proto.yamcs.protobuf.mdb.AlarmInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinviolations(value);
      break;
    case 2:
      var value = new proto.yamcs.protobuf.mdb.AlarmRange;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.AlarmRange.deserializeBinaryFromReader);
      msg.addStaticalarmrange(value);
      break;
    case 3:
      var value = new proto.yamcs.protobuf.mdb.EnumerationAlarm;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.EnumerationAlarm.deserializeBinaryFromReader);
      msg.addEnumerationalarm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.AlarmInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.AlarmInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.AlarmInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.AlarmInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStaticalarmrangeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yamcs.protobuf.mdb.AlarmRange.serializeBinaryToWriter
    );
  }
  f = message.getEnumerationalarmList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yamcs.protobuf.mdb.EnumerationAlarm.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 minViolations = 1;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.AlarmInfo.prototype.getMinviolations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.AlarmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlarmInfo.prototype.setMinviolations = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AlarmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlarmInfo.prototype.clearMinviolations = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AlarmInfo.prototype.hasMinviolations = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated AlarmRange staticAlarmRange = 2;
 * @return {!Array<!proto.yamcs.protobuf.mdb.AlarmRange>}
 */
proto.yamcs.protobuf.mdb.AlarmInfo.prototype.getStaticalarmrangeList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.AlarmRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.AlarmRange, 2));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.AlarmRange>} value
 * @return {!proto.yamcs.protobuf.mdb.AlarmInfo} returns this
*/
proto.yamcs.protobuf.mdb.AlarmInfo.prototype.setStaticalarmrangeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.AlarmRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.AlarmRange}
 */
proto.yamcs.protobuf.mdb.AlarmInfo.prototype.addStaticalarmrange = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yamcs.protobuf.mdb.AlarmRange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.AlarmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlarmInfo.prototype.clearStaticalarmrangeList = function() {
  return this.setStaticalarmrangeList([]);
};


/**
 * repeated EnumerationAlarm enumerationAlarm = 3;
 * @return {!Array<!proto.yamcs.protobuf.mdb.EnumerationAlarm>}
 */
proto.yamcs.protobuf.mdb.AlarmInfo.prototype.getEnumerationalarmList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.EnumerationAlarm>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.EnumerationAlarm, 3));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.EnumerationAlarm>} value
 * @return {!proto.yamcs.protobuf.mdb.AlarmInfo} returns this
*/
proto.yamcs.protobuf.mdb.AlarmInfo.prototype.setEnumerationalarmList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.EnumerationAlarm=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.EnumerationAlarm}
 */
proto.yamcs.protobuf.mdb.AlarmInfo.prototype.addEnumerationalarm = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yamcs.protobuf.mdb.EnumerationAlarm, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.AlarmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlarmInfo.prototype.clearEnumerationalarmList = function() {
  return this.setEnumerationalarmList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ContextAlarmInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ContextAlarmInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    comparisonList: jspb.Message.toObjectList(msg.getComparisonList(),
    proto.yamcs.protobuf.mdb.ComparisonInfo.toObject, includeInstance),
    alarm: (f = msg.getAlarm()) && proto.yamcs.protobuf.mdb.AlarmInfo.toObject(includeInstance, f),
    context: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ContextAlarmInfo}
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ContextAlarmInfo;
  return proto.yamcs.protobuf.mdb.ContextAlarmInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ContextAlarmInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ContextAlarmInfo}
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yamcs.protobuf.mdb.ComparisonInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ComparisonInfo.deserializeBinaryFromReader);
      msg.addComparison(value);
      break;
    case 2:
      var value = new proto.yamcs.protobuf.mdb.AlarmInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.AlarmInfo.deserializeBinaryFromReader);
      msg.setAlarm(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ContextAlarmInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ContextAlarmInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComparisonList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.ComparisonInfo.serializeBinaryToWriter
    );
  }
  f = message.getAlarm();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yamcs.protobuf.mdb.AlarmInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated ComparisonInfo comparison = 1;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ComparisonInfo>}
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.prototype.getComparisonList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ComparisonInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ComparisonInfo, 1));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ComparisonInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ContextAlarmInfo} returns this
*/
proto.yamcs.protobuf.mdb.ContextAlarmInfo.prototype.setComparisonList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ComparisonInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ComparisonInfo}
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.prototype.addComparison = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yamcs.protobuf.mdb.ComparisonInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ContextAlarmInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.prototype.clearComparisonList = function() {
  return this.setComparisonList([]);
};


/**
 * optional AlarmInfo alarm = 2;
 * @return {?proto.yamcs.protobuf.mdb.AlarmInfo}
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.prototype.getAlarm = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.AlarmInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.AlarmInfo, 2));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.AlarmInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ContextAlarmInfo} returns this
*/
proto.yamcs.protobuf.mdb.ContextAlarmInfo.prototype.setAlarm = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ContextAlarmInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.prototype.clearAlarm = function() {
  return this.setAlarm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.prototype.hasAlarm = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string context = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.prototype.getContext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ContextAlarmInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.prototype.setContext = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ContextAlarmInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.prototype.clearContext = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ContextAlarmInfo.prototype.hasContext = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.DataEncodingInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.DataEncodingInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    littleendian: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    sizeinbits: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    encoding: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    defaultcalibrator: (f = msg.getDefaultcalibrator()) && proto.yamcs.protobuf.mdb.CalibratorInfo.toObject(includeInstance, f),
    contextcalibratorList: jspb.Message.toObjectList(msg.getContextcalibratorList(),
    proto.yamcs.protobuf.mdb.ContextCalibratorInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.DataEncodingInfo}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.DataEncodingInfo;
  return proto.yamcs.protobuf.mdb.DataEncodingInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.DataEncodingInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.DataEncodingInfo}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yamcs.protobuf.mdb.DataEncodingInfo.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLittleendian(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSizeinbits(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncoding(value);
      break;
    case 6:
      var value = new proto.yamcs.protobuf.mdb.CalibratorInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.CalibratorInfo.deserializeBinaryFromReader);
      msg.setDefaultcalibrator(value);
      break;
    case 7:
      var value = new proto.yamcs.protobuf.mdb.ContextCalibratorInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ContextCalibratorInfo.deserializeBinaryFromReader);
      msg.addContextcalibrator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.DataEncodingInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.DataEncodingInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.yamcs.protobuf.mdb.DataEncodingInfo.Type} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDefaultcalibrator();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yamcs.protobuf.mdb.CalibratorInfo.serializeBinaryToWriter
    );
  }
  f = message.getContextcalibratorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.yamcs.protobuf.mdb.ContextCalibratorInfo.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.Type = {
  BINARY: 0,
  BOOLEAN: 1,
  FLOAT: 2,
  INTEGER: 3,
  STRING: 4
};

/**
 * optional Type type = 1;
 * @return {!proto.yamcs.protobuf.mdb.DataEncodingInfo.Type}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.getType = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.DataEncodingInfo.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.DataEncodingInfo.Type} value
 * @return {!proto.yamcs.protobuf.mdb.DataEncodingInfo} returns this
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.DataEncodingInfo} returns this
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool littleEndian = 2;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.getLittleendian = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.DataEncodingInfo} returns this
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.setLittleendian = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.DataEncodingInfo} returns this
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.clearLittleendian = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.hasLittleendian = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 sizeInBits = 3;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.getSizeinbits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.DataEncodingInfo} returns this
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.setSizeinbits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.DataEncodingInfo} returns this
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.clearSizeinbits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.hasSizeinbits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string encoding = 4;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.getEncoding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.DataEncodingInfo} returns this
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.setEncoding = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.DataEncodingInfo} returns this
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.clearEncoding = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.hasEncoding = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CalibratorInfo defaultCalibrator = 6;
 * @return {?proto.yamcs.protobuf.mdb.CalibratorInfo}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.getDefaultcalibrator = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.CalibratorInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.CalibratorInfo, 6));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.CalibratorInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.DataEncodingInfo} returns this
*/
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.setDefaultcalibrator = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.DataEncodingInfo} returns this
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.clearDefaultcalibrator = function() {
  return this.setDefaultcalibrator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.hasDefaultcalibrator = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated ContextCalibratorInfo contextCalibrator = 7;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ContextCalibratorInfo>}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.getContextcalibratorList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ContextCalibratorInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ContextCalibratorInfo, 7));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ContextCalibratorInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.DataEncodingInfo} returns this
*/
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.setContextcalibratorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ContextCalibratorInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ContextCalibratorInfo}
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.addContextcalibrator = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.yamcs.protobuf.mdb.ContextCalibratorInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.DataEncodingInfo} returns this
 */
proto.yamcs.protobuf.mdb.DataEncodingInfo.prototype.clearContextcalibratorList = function() {
  return this.setContextcalibratorList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ContextCalibratorInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ContextCalibratorInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    comparisonList: jspb.Message.toObjectList(msg.getComparisonList(),
    proto.yamcs.protobuf.mdb.ComparisonInfo.toObject, includeInstance),
    calibrator: (f = msg.getCalibrator()) && proto.yamcs.protobuf.mdb.CalibratorInfo.toObject(includeInstance, f),
    context: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ContextCalibratorInfo}
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ContextCalibratorInfo;
  return proto.yamcs.protobuf.mdb.ContextCalibratorInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ContextCalibratorInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ContextCalibratorInfo}
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yamcs.protobuf.mdb.ComparisonInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ComparisonInfo.deserializeBinaryFromReader);
      msg.addComparison(value);
      break;
    case 2:
      var value = new proto.yamcs.protobuf.mdb.CalibratorInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.CalibratorInfo.deserializeBinaryFromReader);
      msg.setCalibrator(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ContextCalibratorInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ContextCalibratorInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComparisonList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.ComparisonInfo.serializeBinaryToWriter
    );
  }
  f = message.getCalibrator();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yamcs.protobuf.mdb.CalibratorInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated ComparisonInfo comparison = 1;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ComparisonInfo>}
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.prototype.getComparisonList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ComparisonInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ComparisonInfo, 1));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ComparisonInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ContextCalibratorInfo} returns this
*/
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.prototype.setComparisonList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ComparisonInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ComparisonInfo}
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.prototype.addComparison = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yamcs.protobuf.mdb.ComparisonInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ContextCalibratorInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.prototype.clearComparisonList = function() {
  return this.setComparisonList([]);
};


/**
 * optional CalibratorInfo calibrator = 2;
 * @return {?proto.yamcs.protobuf.mdb.CalibratorInfo}
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.prototype.getCalibrator = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.CalibratorInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.CalibratorInfo, 2));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.CalibratorInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ContextCalibratorInfo} returns this
*/
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.prototype.setCalibrator = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ContextCalibratorInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.prototype.clearCalibrator = function() {
  return this.setCalibrator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.prototype.hasCalibrator = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string context = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.prototype.getContext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ContextCalibratorInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.prototype.setContext = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ContextCalibratorInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.prototype.clearContext = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ContextCalibratorInfo.prototype.hasContext = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.CalibratorInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.CalibratorInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    polynomialcalibrator: (f = msg.getPolynomialcalibrator()) && proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.toObject(includeInstance, f),
    splinecalibrator: (f = msg.getSplinecalibrator()) && proto.yamcs.protobuf.mdb.SplineCalibratorInfo.toObject(includeInstance, f),
    javaexpressioncalibrator: (f = msg.getJavaexpressioncalibrator()) && proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.toObject(includeInstance, f),
    type: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.CalibratorInfo}
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.CalibratorInfo;
  return proto.yamcs.protobuf.mdb.CalibratorInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.CalibratorInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.CalibratorInfo}
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.deserializeBinaryFromReader);
      msg.setPolynomialcalibrator(value);
      break;
    case 3:
      var value = new proto.yamcs.protobuf.mdb.SplineCalibratorInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.SplineCalibratorInfo.deserializeBinaryFromReader);
      msg.setSplinecalibrator(value);
      break;
    case 4:
      var value = new proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.deserializeBinaryFromReader);
      msg.setJavaexpressioncalibrator(value);
      break;
    case 5:
      var value = /** @type {!proto.yamcs.protobuf.mdb.CalibratorInfo.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.CalibratorInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.CalibratorInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolynomialcalibrator();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.serializeBinaryToWriter
    );
  }
  f = message.getSplinecalibrator();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yamcs.protobuf.mdb.SplineCalibratorInfo.serializeBinaryToWriter
    );
  }
  f = message.getJavaexpressioncalibrator();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.yamcs.protobuf.mdb.CalibratorInfo.Type} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.Type = {
  POLYNOMIAL: 0,
  SPLINE: 1,
  MATH_OPERATION: 2,
  JAVA_EXPRESSION: 3
};

/**
 * optional PolynomialCalibratorInfo polynomialCalibrator = 2;
 * @return {?proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo}
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.getPolynomialcalibrator = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo, 2));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.CalibratorInfo} returns this
*/
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.setPolynomialcalibrator = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CalibratorInfo} returns this
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.clearPolynomialcalibrator = function() {
  return this.setPolynomialcalibrator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.hasPolynomialcalibrator = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SplineCalibratorInfo splineCalibrator = 3;
 * @return {?proto.yamcs.protobuf.mdb.SplineCalibratorInfo}
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.getSplinecalibrator = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.SplineCalibratorInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.SplineCalibratorInfo, 3));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.SplineCalibratorInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.CalibratorInfo} returns this
*/
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.setSplinecalibrator = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CalibratorInfo} returns this
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.clearSplinecalibrator = function() {
  return this.setSplinecalibrator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.hasSplinecalibrator = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional JavaExpressionCalibratorInfo javaExpressionCalibrator = 4;
 * @return {?proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo}
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.getJavaexpressioncalibrator = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo, 4));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.CalibratorInfo} returns this
*/
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.setJavaexpressioncalibrator = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CalibratorInfo} returns this
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.clearJavaexpressioncalibrator = function() {
  return this.setJavaexpressioncalibrator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.hasJavaexpressioncalibrator = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Type type = 5;
 * @return {!proto.yamcs.protobuf.mdb.CalibratorInfo.Type}
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.getType = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.CalibratorInfo.Type} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.CalibratorInfo.Type} value
 * @return {!proto.yamcs.protobuf.mdb.CalibratorInfo} returns this
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.setType = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CalibratorInfo} returns this
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.clearType = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CalibratorInfo.prototype.hasType = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    coefficientList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo}
 */
proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo;
  return proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo}
 */
proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCoefficient(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoefficientList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      1,
      f
    );
  }
};


/**
 * repeated double coefficient = 1;
 * @return {!Array<number>}
 */
proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.prototype.getCoefficientList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo} returns this
 */
proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.prototype.setCoefficientList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo} returns this
 */
proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.prototype.addCoefficient = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo} returns this
 */
proto.yamcs.protobuf.mdb.PolynomialCalibratorInfo.prototype.clearCoefficientList = function() {
  return this.setCoefficientList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.SplineCalibratorInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointList: jspb.Message.toObjectList(msg.getPointList(),
    proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo}
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.SplineCalibratorInfo;
  return proto.yamcs.protobuf.mdb.SplineCalibratorInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo}
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.deserializeBinaryFromReader);
      msg.addPoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.SplineCalibratorInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    calibrated: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo}
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo;
  return proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo}
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRaw(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCalibrated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double raw = 1;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.prototype.getRaw = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo} returns this
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.prototype.setRaw = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo} returns this
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.prototype.clearRaw = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.prototype.hasRaw = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double calibrated = 2;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.prototype.getCalibrated = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo} returns this
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.prototype.setCalibrated = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo} returns this
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.prototype.clearCalibrated = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo.prototype.hasCalibrated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated SplinePointInfo point = 1;
 * @return {!Array<!proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo>}
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.prototype.getPointList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo, 1));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo} returns this
*/
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.prototype.setPointList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo}
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.prototype.addPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yamcs.protobuf.mdb.SplineCalibratorInfo.SplinePointInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.SplineCalibratorInfo} returns this
 */
proto.yamcs.protobuf.mdb.SplineCalibratorInfo.prototype.clearPointList = function() {
  return this.setPointList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    formula: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo}
 */
proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo;
  return proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo}
 */
proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormula(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string formula = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.prototype.getFormula = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo} returns this
 */
proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.prototype.setFormula = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo} returns this
 */
proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.prototype.clearFormula = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.JavaExpressionCalibratorInfo.prototype.hasFormula = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.EnumValue.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.EnumValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.EnumValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.EnumValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    label: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.EnumValue}
 */
proto.yamcs.protobuf.mdb.EnumValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.EnumValue;
  return proto.yamcs.protobuf.mdb.EnumValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.EnumValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.EnumValue}
 */
proto.yamcs.protobuf.mdb.EnumValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.EnumValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.EnumValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.EnumValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.EnumValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 value = 1;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.EnumValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.EnumValue} returns this
 */
proto.yamcs.protobuf.mdb.EnumValue.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.EnumValue} returns this
 */
proto.yamcs.protobuf.mdb.EnumValue.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.EnumValue.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string label = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.EnumValue.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.EnumValue} returns this
 */
proto.yamcs.protobuf.mdb.EnumValue.prototype.setLabel = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.EnumValue} returns this
 */
proto.yamcs.protobuf.mdb.EnumValue.prototype.clearLabel = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.EnumValue.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.EnumValue.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.EnumValue} returns this
 */
proto.yamcs.protobuf.mdb.EnumValue.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.EnumValue} returns this
 */
proto.yamcs.protobuf.mdb.EnumValue.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.EnumValue.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.repeatedFields_ = [20,3,5,7,8,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ParameterTypeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
    qualifiedname: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
    shortdescription: (f = jspb.Message.getField(msg, 18)) == null ? undefined : f,
    longdescription: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    aliasList: jspb.Message.toObjectList(msg.getAliasList(),
    yamcs_protobuf_yamcs_pb.NamedObjectId.toObject, includeInstance),
    engtype: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    dataencoding: (f = msg.getDataencoding()) && proto.yamcs.protobuf.mdb.DataEncodingInfo.toObject(includeInstance, f),
    unitsetList: jspb.Message.toObjectList(msg.getUnitsetList(),
    proto.yamcs.protobuf.mdb.UnitInfo.toObject, includeInstance),
    defaultalarm: (f = msg.getDefaultalarm()) && proto.yamcs.protobuf.mdb.AlarmInfo.toObject(includeInstance, f),
    enumvalueList: jspb.Message.toObjectList(msg.getEnumvalueList(),
    proto.yamcs.protobuf.mdb.EnumValue.toObject, includeInstance),
    absolutetimeinfo: (f = msg.getAbsolutetimeinfo()) && proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.toObject(includeInstance, f),
    contextalarmList: jspb.Message.toObjectList(msg.getContextalarmList(),
    proto.yamcs.protobuf.mdb.ContextAlarmInfo.toObject, includeInstance),
    memberList: jspb.Message.toObjectList(msg.getMemberList(),
    proto.yamcs.protobuf.mdb.MemberInfo.toObject, includeInstance),
    arrayinfo: (f = msg.getArrayinfo()) && proto.yamcs.protobuf.mdb.ArrayInfo.toObject(includeInstance, f),
    ancillarydataMap: (f = msg.getAncillarydataMap()) ? f.toObject(includeInstance, proto.yamcs.protobuf.mdb.AncillaryDataInfo.toObject) : [],
    numberformat: (f = msg.getNumberformat()) && proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.toObject(includeInstance, f),
    signed: (f = jspb.Message.getBooleanField(msg, 12)) == null ? undefined : f,
    zerostringvalue: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    onestringvalue: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    usedbyList: jspb.Message.toObjectList(msg.getUsedbyList(),
    proto.yamcs.protobuf.mdb.ParameterInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ParameterTypeInfo;
  return proto.yamcs.protobuf.mdb.ParameterTypeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setQualifiedname(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortdescription(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongdescription(value);
      break;
    case 20:
      var value = new yamcs_protobuf_yamcs_pb.NamedObjectId;
      reader.readMessage(value,yamcs_protobuf_yamcs_pb.NamedObjectId.deserializeBinaryFromReader);
      msg.addAlias(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEngtype(value);
      break;
    case 2:
      var value = new proto.yamcs.protobuf.mdb.DataEncodingInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.DataEncodingInfo.deserializeBinaryFromReader);
      msg.setDataencoding(value);
      break;
    case 3:
      var value = new proto.yamcs.protobuf.mdb.UnitInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.UnitInfo.deserializeBinaryFromReader);
      msg.addUnitset(value);
      break;
    case 4:
      var value = new proto.yamcs.protobuf.mdb.AlarmInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.AlarmInfo.deserializeBinaryFromReader);
      msg.setDefaultalarm(value);
      break;
    case 5:
      var value = new proto.yamcs.protobuf.mdb.EnumValue;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.EnumValue.deserializeBinaryFromReader);
      msg.addEnumvalue(value);
      break;
    case 6:
      var value = new proto.yamcs.protobuf.mdb.AbsoluteTimeInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.deserializeBinaryFromReader);
      msg.setAbsolutetimeinfo(value);
      break;
    case 7:
      var value = new proto.yamcs.protobuf.mdb.ContextAlarmInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ContextAlarmInfo.deserializeBinaryFromReader);
      msg.addContextalarm(value);
      break;
    case 8:
      var value = new proto.yamcs.protobuf.mdb.MemberInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.MemberInfo.deserializeBinaryFromReader);
      msg.addMember(value);
      break;
    case 9:
      var value = new proto.yamcs.protobuf.mdb.ArrayInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ArrayInfo.deserializeBinaryFromReader);
      msg.setArrayinfo(value);
      break;
    case 10:
      var value = msg.getAncillarydataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.yamcs.protobuf.mdb.AncillaryDataInfo.deserializeBinaryFromReader, "", new proto.yamcs.protobuf.mdb.AncillaryDataInfo());
         });
      break;
    case 11:
      var value = new proto.yamcs.protobuf.mdb.NumberFormatTypeInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.deserializeBinaryFromReader);
      msg.setNumberformat(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSigned(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setZerostringvalue(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setOnestringvalue(value);
      break;
    case 15:
      var value = new proto.yamcs.protobuf.mdb.ParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader);
      msg.addUsedby(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ParameterTypeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeString(
      18,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getAliasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      yamcs_protobuf_yamcs_pb.NamedObjectId.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataencoding();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yamcs.protobuf.mdb.DataEncodingInfo.serializeBinaryToWriter
    );
  }
  f = message.getUnitsetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yamcs.protobuf.mdb.UnitInfo.serializeBinaryToWriter
    );
  }
  f = message.getDefaultalarm();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yamcs.protobuf.mdb.AlarmInfo.serializeBinaryToWriter
    );
  }
  f = message.getEnumvalueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.yamcs.protobuf.mdb.EnumValue.serializeBinaryToWriter
    );
  }
  f = message.getAbsolutetimeinfo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.serializeBinaryToWriter
    );
  }
  f = message.getContextalarmList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.yamcs.protobuf.mdb.ContextAlarmInfo.serializeBinaryToWriter
    );
  }
  f = message.getMemberList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.yamcs.protobuf.mdb.MemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getArrayinfo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.yamcs.protobuf.mdb.ArrayInfo.serializeBinaryToWriter
    );
  }
  f = message.getAncillarydataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.yamcs.protobuf.mdb.AncillaryDataInfo.serializeBinaryToWriter);
  }
  f = message.getNumberformat();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getUsedbyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 16;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string qualifiedName = 17;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getQualifiedname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setQualifiedname = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearQualifiedname = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.hasQualifiedname = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string shortDescription = 18;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getShortdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setShortdescription = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearShortdescription = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.hasShortdescription = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string longDescription = 19;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getLongdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setLongdescription = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearLongdescription = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.hasLongdescription = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * repeated yamcs.protobuf.NamedObjectId alias = 20;
 * @return {!Array<!proto.yamcs.protobuf.NamedObjectId>}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getAliasList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.NamedObjectId>} */ (
    jspb.Message.getRepeatedWrapperField(this, yamcs_protobuf_yamcs_pb.NamedObjectId, 20));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.NamedObjectId>} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setAliasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.yamcs.protobuf.NamedObjectId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.NamedObjectId}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.addAlias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.yamcs.protobuf.NamedObjectId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearAliasList = function() {
  return this.setAliasList([]);
};


/**
 * optional string engType = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getEngtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setEngtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearEngtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.hasEngtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DataEncodingInfo dataEncoding = 2;
 * @return {?proto.yamcs.protobuf.mdb.DataEncodingInfo}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getDataencoding = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.DataEncodingInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.DataEncodingInfo, 2));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.DataEncodingInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setDataencoding = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearDataencoding = function() {
  return this.setDataencoding(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.hasDataencoding = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated UnitInfo unitSet = 3;
 * @return {!Array<!proto.yamcs.protobuf.mdb.UnitInfo>}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getUnitsetList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.UnitInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.UnitInfo, 3));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.UnitInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setUnitsetList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.UnitInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.UnitInfo}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.addUnitset = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yamcs.protobuf.mdb.UnitInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearUnitsetList = function() {
  return this.setUnitsetList([]);
};


/**
 * optional AlarmInfo defaultAlarm = 4;
 * @return {?proto.yamcs.protobuf.mdb.AlarmInfo}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getDefaultalarm = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.AlarmInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.AlarmInfo, 4));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.AlarmInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setDefaultalarm = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearDefaultalarm = function() {
  return this.setDefaultalarm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.hasDefaultalarm = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated EnumValue enumValue = 5;
 * @return {!Array<!proto.yamcs.protobuf.mdb.EnumValue>}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getEnumvalueList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.EnumValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.EnumValue, 5));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.EnumValue>} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setEnumvalueList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.EnumValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.EnumValue}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.addEnumvalue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.yamcs.protobuf.mdb.EnumValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearEnumvalueList = function() {
  return this.setEnumvalueList([]);
};


/**
 * optional AbsoluteTimeInfo absoluteTimeInfo = 6;
 * @return {?proto.yamcs.protobuf.mdb.AbsoluteTimeInfo}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getAbsolutetimeinfo = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.AbsoluteTimeInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.AbsoluteTimeInfo, 6));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.AbsoluteTimeInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setAbsolutetimeinfo = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearAbsolutetimeinfo = function() {
  return this.setAbsolutetimeinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.hasAbsolutetimeinfo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated ContextAlarmInfo contextAlarm = 7;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ContextAlarmInfo>}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getContextalarmList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ContextAlarmInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ContextAlarmInfo, 7));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ContextAlarmInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setContextalarmList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ContextAlarmInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ContextAlarmInfo}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.addContextalarm = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.yamcs.protobuf.mdb.ContextAlarmInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearContextalarmList = function() {
  return this.setContextalarmList([]);
};


/**
 * repeated MemberInfo member = 8;
 * @return {!Array<!proto.yamcs.protobuf.mdb.MemberInfo>}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getMemberList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.MemberInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.MemberInfo, 8));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.MemberInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setMemberList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.MemberInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.MemberInfo}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.addMember = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.yamcs.protobuf.mdb.MemberInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearMemberList = function() {
  return this.setMemberList([]);
};


/**
 * optional ArrayInfo arrayInfo = 9;
 * @return {?proto.yamcs.protobuf.mdb.ArrayInfo}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getArrayinfo = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ArrayInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ArrayInfo, 9));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ArrayInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setArrayinfo = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearArrayinfo = function() {
  return this.setArrayinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.hasArrayinfo = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * map<string, AncillaryDataInfo> ancillaryData = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.yamcs.protobuf.mdb.AncillaryDataInfo>}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getAncillarydataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.yamcs.protobuf.mdb.AncillaryDataInfo>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      proto.yamcs.protobuf.mdb.AncillaryDataInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearAncillarydataMap = function() {
  this.getAncillarydataMap().clear();
  return this;
};


/**
 * optional NumberFormatTypeInfo numberFormat = 11;
 * @return {?proto.yamcs.protobuf.mdb.NumberFormatTypeInfo}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getNumberformat = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.NumberFormatTypeInfo, 11));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.NumberFormatTypeInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setNumberformat = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearNumberformat = function() {
  return this.setNumberformat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.hasNumberformat = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool signed = 12;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getSigned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setSigned = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearSigned = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.hasSigned = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string zeroStringValue = 13;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getZerostringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setZerostringvalue = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearZerostringvalue = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.hasZerostringvalue = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string oneStringValue = 14;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getOnestringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setOnestringvalue = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearOnestringvalue = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.hasOnestringvalue = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * repeated ParameterInfo usedBy = 15;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ParameterInfo>}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.getUsedbyList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ParameterInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ParameterInfo, 15));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ParameterInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.setUsedbyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ParameterInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.addUsedby = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.yamcs.protobuf.mdb.ParameterInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterTypeInfo.prototype.clearUsedbyList = function() {
  return this.setUsedbyList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    numberbase: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    minimumfractiondigits: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    maximumfractiondigits: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    minimumintegerdigits: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    maximumintegerdigits: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    negativesuffix: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    positivesuffix: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    negativeprefix: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    positiveprefix: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    showthousandsgrouping: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    notation: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.NumberFormatTypeInfo;
  return proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumberbase(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinimumfractiondigits(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaximumfractiondigits(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinimumintegerdigits(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaximumintegerdigits(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNegativesuffix(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositivesuffix(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNegativeprefix(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositiveprefix(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowthousandsgrouping(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string numberBase = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.getNumberbase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.setNumberbase = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.clearNumberbase = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.hasNumberbase = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 minimumFractionDigits = 2;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.getMinimumfractiondigits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.setMinimumfractiondigits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.clearMinimumfractiondigits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.hasMinimumfractiondigits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 maximumFractionDigits = 3;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.getMaximumfractiondigits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.setMaximumfractiondigits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.clearMaximumfractiondigits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.hasMaximumfractiondigits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 minimumIntegerDigits = 4;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.getMinimumintegerdigits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.setMinimumintegerdigits = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.clearMinimumintegerdigits = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.hasMinimumintegerdigits = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 maximumIntegerDigits = 5;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.getMaximumintegerdigits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.setMaximumintegerdigits = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.clearMaximumintegerdigits = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.hasMaximumintegerdigits = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string negativeSuffix = 6;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.getNegativesuffix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.setNegativesuffix = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.clearNegativesuffix = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.hasNegativesuffix = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string positiveSuffix = 7;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.getPositivesuffix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.setPositivesuffix = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.clearPositivesuffix = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.hasPositivesuffix = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string negativePrefix = 8;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.getNegativeprefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.setNegativeprefix = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.clearNegativeprefix = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.hasNegativeprefix = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string positivePrefix = 9;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.getPositiveprefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.setPositiveprefix = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.clearPositiveprefix = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.hasPositiveprefix = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool showThousandsGrouping = 10;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.getShowthousandsgrouping = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.setShowthousandsgrouping = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.clearShowthousandsgrouping = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.hasShowthousandsgrouping = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string notation = 11;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.getNotation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.setNotation = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.NumberFormatTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.clearNotation = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.NumberFormatTypeInfo.prototype.hasNotation = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.GetContainerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.GetContainerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.GetContainerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.GetContainerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.GetContainerRequest}
 */
proto.yamcs.protobuf.mdb.GetContainerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.GetContainerRequest;
  return proto.yamcs.protobuf.mdb.GetContainerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.GetContainerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.GetContainerRequest}
 */
proto.yamcs.protobuf.mdb.GetContainerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.GetContainerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.GetContainerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.GetContainerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.GetContainerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.GetContainerRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.GetContainerRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetContainerRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.GetContainerRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetContainerRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.GetContainerRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.GetContainerRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.GetContainerRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetContainerRequest.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.GetContainerRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetContainerRequest.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.GetContainerRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.GetParameterTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.GetParameterTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.GetParameterTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.GetParameterTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.GetParameterTypeRequest}
 */
proto.yamcs.protobuf.mdb.GetParameterTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.GetParameterTypeRequest;
  return proto.yamcs.protobuf.mdb.GetParameterTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.GetParameterTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.GetParameterTypeRequest}
 */
proto.yamcs.protobuf.mdb.GetParameterTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.GetParameterTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.GetParameterTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.GetParameterTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.GetParameterTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.GetParameterTypeRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.GetParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetParameterTypeRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.GetParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetParameterTypeRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.GetParameterTypeRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.GetParameterTypeRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.GetParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetParameterTypeRequest.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.GetParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetParameterTypeRequest.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.GetParameterTypeRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.AbsoluteTimeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    initialvalue: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    scale: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    offset: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    offsetfrom: (f = msg.getOffsetfrom()) && proto.yamcs.protobuf.mdb.ParameterInfo.toObject(includeInstance, f),
    epoch: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.AbsoluteTimeInfo}
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.AbsoluteTimeInfo;
  return proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.AbsoluteTimeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.AbsoluteTimeInfo}
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitialvalue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setScale(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOffset(value);
      break;
    case 4:
      var value = new proto.yamcs.protobuf.mdb.ParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader);
      msg.setOffsetfrom(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEpoch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.AbsoluteTimeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getOffsetfrom();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string initialValue = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.getInitialvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.AbsoluteTimeInfo} returns this
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.setInitialvalue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AbsoluteTimeInfo} returns this
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.clearInitialvalue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.hasInitialvalue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double scale = 2;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.getScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.AbsoluteTimeInfo} returns this
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.setScale = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AbsoluteTimeInfo} returns this
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.clearScale = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.hasScale = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double offset = 3;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.AbsoluteTimeInfo} returns this
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.setOffset = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AbsoluteTimeInfo} returns this
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.clearOffset = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.hasOffset = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ParameterInfo offsetFrom = 4;
 * @return {?proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.getOffsetfrom = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ParameterInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ParameterInfo, 4));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ParameterInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.AbsoluteTimeInfo} returns this
*/
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.setOffsetfrom = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AbsoluteTimeInfo} returns this
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.clearOffsetfrom = function() {
  return this.setOffsetfrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.hasOffsetfrom = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string epoch = 5;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.getEpoch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.AbsoluteTimeInfo} returns this
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.setEpoch = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AbsoluteTimeInfo} returns this
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.clearEpoch = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AbsoluteTimeInfo.prototype.hasEpoch = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.MemberInfo.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.MemberInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.MemberInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.MemberInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    shortdescription: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    longdescription: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    aliasList: jspb.Message.toObjectList(msg.getAliasList(),
    yamcs_protobuf_yamcs_pb.NamedObjectId.toObject, includeInstance),
    type: (f = msg.getType()) && proto.yamcs.protobuf.mdb.ParameterTypeInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.MemberInfo}
 */
proto.yamcs.protobuf.mdb.MemberInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.MemberInfo;
  return proto.yamcs.protobuf.mdb.MemberInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.MemberInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.MemberInfo}
 */
proto.yamcs.protobuf.mdb.MemberInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortdescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongdescription(value);
      break;
    case 5:
      var value = new yamcs_protobuf_yamcs_pb.NamedObjectId;
      reader.readMessage(value,yamcs_protobuf_yamcs_pb.NamedObjectId.deserializeBinaryFromReader);
      msg.addAlias(value);
      break;
    case 6:
      var value = new proto.yamcs.protobuf.mdb.ParameterTypeInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterTypeInfo.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.MemberInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.MemberInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.MemberInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAliasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      yamcs_protobuf_yamcs_pb.NamedObjectId.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yamcs.protobuf.mdb.ParameterTypeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.MemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string shortDescription = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.getShortdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.MemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.setShortdescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.clearShortdescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.hasShortdescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string longDescription = 4;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.getLongdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.MemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.setLongdescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.clearLongdescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.hasLongdescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated yamcs.protobuf.NamedObjectId alias = 5;
 * @return {!Array<!proto.yamcs.protobuf.NamedObjectId>}
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.getAliasList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.NamedObjectId>} */ (
    jspb.Message.getRepeatedWrapperField(this, yamcs_protobuf_yamcs_pb.NamedObjectId, 5));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.NamedObjectId>} value
 * @return {!proto.yamcs.protobuf.mdb.MemberInfo} returns this
*/
proto.yamcs.protobuf.mdb.MemberInfo.prototype.setAliasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.yamcs.protobuf.NamedObjectId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.NamedObjectId}
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.addAlias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.yamcs.protobuf.NamedObjectId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.MemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.clearAliasList = function() {
  return this.setAliasList([]);
};


/**
 * optional ParameterTypeInfo type = 6;
 * @return {?proto.yamcs.protobuf.mdb.ParameterTypeInfo}
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.getType = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ParameterTypeInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ParameterTypeInfo, 6));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ParameterTypeInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.MemberInfo} returns this
*/
proto.yamcs.protobuf.mdb.MemberInfo.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MemberInfo.prototype.hasType = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ArgumentMemberInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    shortdescription: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    longdescription: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    aliasList: jspb.Message.toObjectList(msg.getAliasList(),
    yamcs_protobuf_yamcs_pb.NamedObjectId.toObject, includeInstance),
    type: (f = msg.getType()) && proto.yamcs.protobuf.mdb.ArgumentTypeInfo.toObject(includeInstance, f),
    initialvalue: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ArgumentMemberInfo;
  return proto.yamcs.protobuf.mdb.ArgumentMemberInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortdescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongdescription(value);
      break;
    case 5:
      var value = new yamcs_protobuf_yamcs_pb.NamedObjectId;
      reader.readMessage(value,yamcs_protobuf_yamcs_pb.NamedObjectId.deserializeBinaryFromReader);
      msg.addAlias(value);
      break;
    case 6:
      var value = new proto.yamcs.protobuf.mdb.ArgumentTypeInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ArgumentTypeInfo.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitialvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ArgumentMemberInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAliasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      yamcs_protobuf_yamcs_pb.NamedObjectId.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yamcs.protobuf.mdb.ArgumentTypeInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string shortDescription = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.getShortdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.setShortdescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.clearShortdescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.hasShortdescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string longDescription = 4;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.getLongdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.setLongdescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.clearLongdescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.hasLongdescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated yamcs.protobuf.NamedObjectId alias = 5;
 * @return {!Array<!proto.yamcs.protobuf.NamedObjectId>}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.getAliasList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.NamedObjectId>} */ (
    jspb.Message.getRepeatedWrapperField(this, yamcs_protobuf_yamcs_pb.NamedObjectId, 5));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.NamedObjectId>} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo} returns this
*/
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.setAliasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.yamcs.protobuf.NamedObjectId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.NamedObjectId}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.addAlias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.yamcs.protobuf.NamedObjectId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.clearAliasList = function() {
  return this.setAliasList([]);
};


/**
 * optional ArgumentTypeInfo type = 6;
 * @return {?proto.yamcs.protobuf.mdb.ArgumentTypeInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.getType = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ArgumentTypeInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ArgumentTypeInfo, 6));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ArgumentTypeInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo} returns this
*/
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.hasType = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string initialValue = 7;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.getInitialvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.setInitialvalue = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.clearInitialvalue = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentMemberInfo.prototype.hasInitialvalue = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ParameterDimensionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ParameterDimensionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    fixedvalue: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    parameter: (f = msg.getParameter()) && proto.yamcs.protobuf.mdb.ParameterInfo.toObject(includeInstance, f),
    slope: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    intercept: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ParameterDimensionInfo}
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ParameterDimensionInfo;
  return proto.yamcs.protobuf.mdb.ParameterDimensionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ParameterDimensionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ParameterDimensionInfo}
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFixedvalue(value);
      break;
    case 2:
      var value = new proto.yamcs.protobuf.mdb.ParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader);
      msg.setParameter(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSlope(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIntercept(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ParameterDimensionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ParameterDimensionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getParameter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 fixedValue = 1;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.getFixedvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.setFixedvalue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.clearFixedvalue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.hasFixedvalue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ParameterInfo parameter = 2;
 * @return {?proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.getParameter = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ParameterInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ParameterInfo, 2));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ParameterInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterDimensionInfo} returns this
*/
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.setParameter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.clearParameter = function() {
  return this.setParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.hasParameter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 slope = 3;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.getSlope = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.setSlope = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.clearSlope = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.hasSlope = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 intercept = 4;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.getIntercept = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.setIntercept = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.clearIntercept = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterDimensionInfo.prototype.hasIntercept = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.ArrayInfo.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ArrayInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ArrayInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ArrayInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ArrayInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = msg.getType()) && proto.yamcs.protobuf.mdb.ParameterTypeInfo.toObject(includeInstance, f),
    dimensionsList: jspb.Message.toObjectList(msg.getDimensionsList(),
    proto.yamcs.protobuf.mdb.ParameterDimensionInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ArrayInfo}
 */
proto.yamcs.protobuf.mdb.ArrayInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ArrayInfo;
  return proto.yamcs.protobuf.mdb.ArrayInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ArrayInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ArrayInfo}
 */
proto.yamcs.protobuf.mdb.ArrayInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yamcs.protobuf.mdb.ParameterTypeInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterTypeInfo.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 3:
      var value = new proto.yamcs.protobuf.mdb.ParameterDimensionInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterDimensionInfo.deserializeBinaryFromReader);
      msg.addDimensions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ArrayInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ArrayInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ArrayInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ArrayInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.ParameterTypeInfo.serializeBinaryToWriter
    );
  }
  f = message.getDimensionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yamcs.protobuf.mdb.ParameterDimensionInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ParameterTypeInfo type = 1;
 * @return {?proto.yamcs.protobuf.mdb.ParameterTypeInfo}
 */
proto.yamcs.protobuf.mdb.ArrayInfo.prototype.getType = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ParameterTypeInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ParameterTypeInfo, 1));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ParameterTypeInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ArrayInfo} returns this
*/
proto.yamcs.protobuf.mdb.ArrayInfo.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArrayInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArrayInfo.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArrayInfo.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ParameterDimensionInfo dimensions = 3;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ParameterDimensionInfo>}
 */
proto.yamcs.protobuf.mdb.ArrayInfo.prototype.getDimensionsList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ParameterDimensionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ParameterDimensionInfo, 3));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ParameterDimensionInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ArrayInfo} returns this
*/
proto.yamcs.protobuf.mdb.ArrayInfo.prototype.setDimensionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ParameterDimensionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ParameterDimensionInfo}
 */
proto.yamcs.protobuf.mdb.ArrayInfo.prototype.addDimensions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yamcs.protobuf.mdb.ParameterDimensionInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ArrayInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArrayInfo.prototype.clearDimensionsList = function() {
  return this.setDimensionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.UsedByInfo.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.UsedByInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.UsedByInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.UsedByInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.UsedByInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    algorithmList: jspb.Message.toObjectList(msg.getAlgorithmList(),
    proto.yamcs.protobuf.mdb.AlgorithmInfo.toObject, includeInstance),
    containerList: jspb.Message.toObjectList(msg.getContainerList(),
    proto.yamcs.protobuf.mdb.ContainerInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.UsedByInfo}
 */
proto.yamcs.protobuf.mdb.UsedByInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.UsedByInfo;
  return proto.yamcs.protobuf.mdb.UsedByInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.UsedByInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.UsedByInfo}
 */
proto.yamcs.protobuf.mdb.UsedByInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yamcs.protobuf.mdb.AlgorithmInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.AlgorithmInfo.deserializeBinaryFromReader);
      msg.addAlgorithm(value);
      break;
    case 2:
      var value = new proto.yamcs.protobuf.mdb.ContainerInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ContainerInfo.deserializeBinaryFromReader);
      msg.addContainer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.UsedByInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.UsedByInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.UsedByInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.UsedByInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlgorithmList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.AlgorithmInfo.serializeBinaryToWriter
    );
  }
  f = message.getContainerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yamcs.protobuf.mdb.ContainerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AlgorithmInfo algorithm = 1;
 * @return {!Array<!proto.yamcs.protobuf.mdb.AlgorithmInfo>}
 */
proto.yamcs.protobuf.mdb.UsedByInfo.prototype.getAlgorithmList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.AlgorithmInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.AlgorithmInfo, 1));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.AlgorithmInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.UsedByInfo} returns this
*/
proto.yamcs.protobuf.mdb.UsedByInfo.prototype.setAlgorithmList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.AlgorithmInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo}
 */
proto.yamcs.protobuf.mdb.UsedByInfo.prototype.addAlgorithm = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yamcs.protobuf.mdb.AlgorithmInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.UsedByInfo} returns this
 */
proto.yamcs.protobuf.mdb.UsedByInfo.prototype.clearAlgorithmList = function() {
  return this.setAlgorithmList([]);
};


/**
 * repeated ContainerInfo container = 2;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ContainerInfo>}
 */
proto.yamcs.protobuf.mdb.UsedByInfo.prototype.getContainerList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ContainerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ContainerInfo, 2));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ContainerInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.UsedByInfo} returns this
*/
proto.yamcs.protobuf.mdb.UsedByInfo.prototype.setContainerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ContainerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo}
 */
proto.yamcs.protobuf.mdb.UsedByInfo.prototype.addContainer = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yamcs.protobuf.mdb.ContainerInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.UsedByInfo} returns this
 */
proto.yamcs.protobuf.mdb.UsedByInfo.prototype.clearContainerList = function() {
  return this.setContainerList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.ParameterInfo.repeatedFields_ = [5,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ParameterInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ParameterInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ParameterInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    qualifiedname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    shortdescription: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    longdescription: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    aliasList: jspb.Message.toObjectList(msg.getAliasList(),
    yamcs_protobuf_yamcs_pb.NamedObjectId.toObject, includeInstance),
    type: (f = msg.getType()) && proto.yamcs.protobuf.mdb.ParameterTypeInfo.toObject(includeInstance, f),
    datasource: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    usedby: (f = msg.getUsedby()) && proto.yamcs.protobuf.mdb.UsedByInfo.toObject(includeInstance, f),
    ancillarydataMap: (f = msg.getAncillarydataMap()) ? f.toObject(includeInstance, proto.yamcs.protobuf.mdb.AncillaryDataInfo.toObject) : [],
    pathList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ParameterInfo;
  return proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ParameterInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQualifiedname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortdescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongdescription(value);
      break;
    case 5:
      var value = new yamcs_protobuf_yamcs_pb.NamedObjectId;
      reader.readMessage(value,yamcs_protobuf_yamcs_pb.NamedObjectId.deserializeBinaryFromReader);
      msg.addAlias(value);
      break;
    case 6:
      var value = new proto.yamcs.protobuf.mdb.ParameterTypeInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterTypeInfo.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 7:
      var value = /** @type {!proto.yamcs.protobuf.mdb.DataSourceType} */ (reader.readEnum());
      msg.setDatasource(value);
      break;
    case 8:
      var value = new proto.yamcs.protobuf.mdb.UsedByInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.UsedByInfo.deserializeBinaryFromReader);
      msg.setUsedby(value);
      break;
    case 9:
      var value = msg.getAncillarydataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.yamcs.protobuf.mdb.AncillaryDataInfo.deserializeBinaryFromReader, "", new proto.yamcs.protobuf.mdb.AncillaryDataInfo());
         });
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ParameterInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAliasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      yamcs_protobuf_yamcs_pb.NamedObjectId.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yamcs.protobuf.mdb.ParameterTypeInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.yamcs.protobuf.mdb.DataSourceType} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getUsedby();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.yamcs.protobuf.mdb.UsedByInfo.serializeBinaryToWriter
    );
  }
  f = message.getAncillarydataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.yamcs.protobuf.mdb.AncillaryDataInfo.serializeBinaryToWriter);
  }
  f = message.getPathList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string qualifiedName = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.getQualifiedname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.setQualifiedname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.clearQualifiedname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.hasQualifiedname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string shortDescription = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.getShortdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.setShortdescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.clearShortdescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.hasShortdescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string longDescription = 4;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.getLongdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.setLongdescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.clearLongdescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.hasLongdescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated yamcs.protobuf.NamedObjectId alias = 5;
 * @return {!Array<!proto.yamcs.protobuf.NamedObjectId>}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.getAliasList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.NamedObjectId>} */ (
    jspb.Message.getRepeatedWrapperField(this, yamcs_protobuf_yamcs_pb.NamedObjectId, 5));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.NamedObjectId>} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
*/
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.setAliasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.yamcs.protobuf.NamedObjectId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.NamedObjectId}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.addAlias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.yamcs.protobuf.NamedObjectId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.clearAliasList = function() {
  return this.setAliasList([]);
};


/**
 * optional ParameterTypeInfo type = 6;
 * @return {?proto.yamcs.protobuf.mdb.ParameterTypeInfo}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.getType = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ParameterTypeInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ParameterTypeInfo, 6));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ParameterTypeInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
*/
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.hasType = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional DataSourceType dataSource = 7;
 * @return {!proto.yamcs.protobuf.mdb.DataSourceType}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.getDatasource = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.DataSourceType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.DataSourceType} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.setDatasource = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.clearDatasource = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional UsedByInfo usedBy = 8;
 * @return {?proto.yamcs.protobuf.mdb.UsedByInfo}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.getUsedby = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.UsedByInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.UsedByInfo, 8));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.UsedByInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
*/
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.setUsedby = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.clearUsedby = function() {
  return this.setUsedby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.hasUsedby = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * map<string, AncillaryDataInfo> ancillaryData = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.yamcs.protobuf.mdb.AncillaryDataInfo>}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.getAncillarydataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.yamcs.protobuf.mdb.AncillaryDataInfo>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      proto.yamcs.protobuf.mdb.AncillaryDataInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.clearAncillarydataMap = function() {
  this.getAncillarydataMap().clear();
  return this;
};


/**
 * repeated string path = 10;
 * @return {!Array<string>}
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.getPathList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.setPathList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.addPath = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.ParameterInfo.prototype.clearPathList = function() {
  return this.setPathList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.AncillaryDataInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.AncillaryDataInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    mimetype: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    href: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.AncillaryDataInfo}
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.AncillaryDataInfo;
  return proto.yamcs.protobuf.mdb.AncillaryDataInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.AncillaryDataInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.AncillaryDataInfo}
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimetype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHref(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.AncillaryDataInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.AncillaryDataInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.AncillaryDataInfo} returns this
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AncillaryDataInfo} returns this
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string mimeType = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.AncillaryDataInfo} returns this
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AncillaryDataInfo} returns this
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string href = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.prototype.getHref = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.AncillaryDataInfo} returns this
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.prototype.setHref = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AncillaryDataInfo} returns this
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.prototype.clearHref = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AncillaryDataInfo.prototype.hasHref = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.repeatedFields_ = [3,5,8,16];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ArgumentTypeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    engtype: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    dataencoding: (f = msg.getDataencoding()) && proto.yamcs.protobuf.mdb.DataEncodingInfo.toObject(includeInstance, f),
    unitsetList: jspb.Message.toObjectList(msg.getUnitsetList(),
    proto.yamcs.protobuf.mdb.UnitInfo.toObject, includeInstance),
    enumvalueList: jspb.Message.toObjectList(msg.getEnumvalueList(),
    proto.yamcs.protobuf.mdb.EnumValue.toObject, includeInstance),
    rangemin: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    rangemax: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
    memberList: jspb.Message.toObjectList(msg.getMemberList(),
    proto.yamcs.protobuf.mdb.ArgumentMemberInfo.toObject, includeInstance),
    zerostringvalue: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    onestringvalue: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    minchars: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    maxchars: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    signed: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f,
    minbytes: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    maxbytes: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
    dimensionsList: jspb.Message.toObjectList(msg.getDimensionsList(),
    proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.toObject, includeInstance),
    elementtype: (f = msg.getElementtype()) && proto.yamcs.protobuf.mdb.ArgumentTypeInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ArgumentTypeInfo;
  return proto.yamcs.protobuf.mdb.ArgumentTypeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEngtype(value);
      break;
    case 2:
      var value = new proto.yamcs.protobuf.mdb.DataEncodingInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.DataEncodingInfo.deserializeBinaryFromReader);
      msg.setDataencoding(value);
      break;
    case 3:
      var value = new proto.yamcs.protobuf.mdb.UnitInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.UnitInfo.deserializeBinaryFromReader);
      msg.addUnitset(value);
      break;
    case 5:
      var value = new proto.yamcs.protobuf.mdb.EnumValue;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.EnumValue.deserializeBinaryFromReader);
      msg.addEnumvalue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRangemin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRangemax(value);
      break;
    case 8:
      var value = new proto.yamcs.protobuf.mdb.ArgumentMemberInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ArgumentMemberInfo.deserializeBinaryFromReader);
      msg.addMember(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setZerostringvalue(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setOnestringvalue(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinchars(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxchars(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSigned(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinbytes(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxbytes(value);
      break;
    case 16:
      var value = new proto.yamcs.protobuf.mdb.ArgumentDimensionInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.deserializeBinaryFromReader);
      msg.addDimensions(value);
      break;
    case 17:
      var value = new proto.yamcs.protobuf.mdb.ArgumentTypeInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ArgumentTypeInfo.deserializeBinaryFromReader);
      msg.setElementtype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ArgumentTypeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataencoding();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yamcs.protobuf.mdb.DataEncodingInfo.serializeBinaryToWriter
    );
  }
  f = message.getUnitsetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yamcs.protobuf.mdb.UnitInfo.serializeBinaryToWriter
    );
  }
  f = message.getEnumvalueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.yamcs.protobuf.mdb.EnumValue.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getMemberList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.yamcs.protobuf.mdb.ArgumentMemberInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getDimensionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.serializeBinaryToWriter
    );
  }
  f = message.getElementtype();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.yamcs.protobuf.mdb.ArgumentTypeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string engType = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getEngtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setEngtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearEngtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.hasEngtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DataEncodingInfo dataEncoding = 2;
 * @return {?proto.yamcs.protobuf.mdb.DataEncodingInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getDataencoding = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.DataEncodingInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.DataEncodingInfo, 2));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.DataEncodingInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setDataencoding = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearDataencoding = function() {
  return this.setDataencoding(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.hasDataencoding = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated UnitInfo unitSet = 3;
 * @return {!Array<!proto.yamcs.protobuf.mdb.UnitInfo>}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getUnitsetList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.UnitInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.UnitInfo, 3));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.UnitInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setUnitsetList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.UnitInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.UnitInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.addUnitset = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yamcs.protobuf.mdb.UnitInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearUnitsetList = function() {
  return this.setUnitsetList([]);
};


/**
 * repeated EnumValue enumValue = 5;
 * @return {!Array<!proto.yamcs.protobuf.mdb.EnumValue>}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getEnumvalueList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.EnumValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.EnumValue, 5));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.EnumValue>} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setEnumvalueList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.EnumValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.EnumValue}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.addEnumvalue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.yamcs.protobuf.mdb.EnumValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearEnumvalueList = function() {
  return this.setEnumvalueList([]);
};


/**
 * optional double rangeMin = 6;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getRangemin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setRangemin = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearRangemin = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.hasRangemin = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double rangeMax = 7;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getRangemax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setRangemax = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearRangemax = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.hasRangemax = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated ArgumentMemberInfo member = 8;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ArgumentMemberInfo>}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getMemberList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ArgumentMemberInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ArgumentMemberInfo, 8));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ArgumentMemberInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setMemberList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ArgumentMemberInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.addMember = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.yamcs.protobuf.mdb.ArgumentMemberInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearMemberList = function() {
  return this.setMemberList([]);
};


/**
 * optional string zeroStringValue = 9;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getZerostringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setZerostringvalue = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearZerostringvalue = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.hasZerostringvalue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string oneStringValue = 10;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getOnestringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setOnestringvalue = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearOnestringvalue = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.hasOnestringvalue = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int32 minChars = 11;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getMinchars = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setMinchars = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearMinchars = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.hasMinchars = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 maxChars = 12;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getMaxchars = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setMaxchars = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearMaxchars = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.hasMaxchars = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool signed = 13;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getSigned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setSigned = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearSigned = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.hasSigned = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 minBytes = 14;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getMinbytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setMinbytes = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearMinbytes = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.hasMinbytes = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 maxBytes = 15;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getMaxbytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setMaxbytes = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearMaxbytes = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.hasMaxbytes = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * repeated ArgumentDimensionInfo dimensions = 16;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo>}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getDimensionsList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ArgumentDimensionInfo, 16));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setDimensionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.addDimensions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.yamcs.protobuf.mdb.ArgumentDimensionInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearDimensionsList = function() {
  return this.setDimensionsList([]);
};


/**
 * optional ArgumentTypeInfo elementType = 17;
 * @return {?proto.yamcs.protobuf.mdb.ArgumentTypeInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.getElementtype = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ArgumentTypeInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ArgumentTypeInfo, 17));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ArgumentTypeInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
*/
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.setElementtype = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentTypeInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.clearElementtype = function() {
  return this.setElementtype(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentTypeInfo.prototype.hasElementtype = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    fixedvalue: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    parameter: (f = msg.getParameter()) && proto.yamcs.protobuf.mdb.ParameterInfo.toObject(includeInstance, f),
    argument: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    slope: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    intercept: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ArgumentDimensionInfo;
  return proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFixedvalue(value);
      break;
    case 2:
      var value = new proto.yamcs.protobuf.mdb.ParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader);
      msg.setParameter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setArgument(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSlope(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIntercept(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getParameter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional int64 fixedValue = 1;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.getFixedvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.setFixedvalue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.clearFixedvalue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.hasFixedvalue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ParameterInfo parameter = 2;
 * @return {?proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.getParameter = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ParameterInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ParameterInfo, 2));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ParameterInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo} returns this
*/
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.setParameter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.clearParameter = function() {
  return this.setParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.hasParameter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string argument = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.getArgument = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.setArgument = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.clearArgument = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.hasArgument = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 slope = 4;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.getSlope = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.setSlope = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.clearSlope = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.hasSlope = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 intercept = 5;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.getIntercept = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.setIntercept = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentDimensionInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.clearIntercept = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentDimensionInfo.prototype.hasIntercept = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ArgumentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ArgumentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    initialvalue: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    type: (f = msg.getType()) && proto.yamcs.protobuf.mdb.ArgumentTypeInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ArgumentInfo;
  return proto.yamcs.protobuf.mdb.ArgumentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ArgumentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitialvalue(value);
      break;
    case 6:
      var value = new proto.yamcs.protobuf.mdb.ArgumentTypeInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ArgumentTypeInfo.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ArgumentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ArgumentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yamcs.protobuf.mdb.ArgumentTypeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string initialValue = 4;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.getInitialvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.setInitialvalue = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.clearInitialvalue = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.hasInitialvalue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ArgumentTypeInfo type = 6;
 * @return {?proto.yamcs.protobuf.mdb.ArgumentTypeInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.getType = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ArgumentTypeInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ArgumentTypeInfo, 6));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ArgumentTypeInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentInfo} returns this
*/
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentInfo.prototype.hasType = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    value: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo;
  return proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo}
 */
proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo} returns this
 */
proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.prototype.clearValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.SignificanceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.SignificanceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.SignificanceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.SignificanceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    consequencelevel: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    reasonforwarning: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.SignificanceInfo}
 */
proto.yamcs.protobuf.mdb.SignificanceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.SignificanceInfo;
  return proto.yamcs.protobuf.mdb.SignificanceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.SignificanceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.SignificanceInfo}
 */
proto.yamcs.protobuf.mdb.SignificanceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yamcs.protobuf.mdb.SignificanceInfo.SignificanceLevelType} */ (reader.readEnum());
      msg.setConsequencelevel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReasonforwarning(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.SignificanceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.SignificanceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.SignificanceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.SignificanceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.yamcs.protobuf.mdb.SignificanceInfo.SignificanceLevelType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yamcs.protobuf.mdb.SignificanceInfo.SignificanceLevelType = {
  NONE: 1,
  WATCH: 2,
  WARNING: 3,
  DISTRESS: 4,
  CRITICAL: 5,
  SEVERE: 6
};

/**
 * optional SignificanceLevelType consequenceLevel = 1;
 * @return {!proto.yamcs.protobuf.mdb.SignificanceInfo.SignificanceLevelType}
 */
proto.yamcs.protobuf.mdb.SignificanceInfo.prototype.getConsequencelevel = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.SignificanceInfo.SignificanceLevelType} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.SignificanceInfo.SignificanceLevelType} value
 * @return {!proto.yamcs.protobuf.mdb.SignificanceInfo} returns this
 */
proto.yamcs.protobuf.mdb.SignificanceInfo.prototype.setConsequencelevel = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SignificanceInfo} returns this
 */
proto.yamcs.protobuf.mdb.SignificanceInfo.prototype.clearConsequencelevel = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SignificanceInfo.prototype.hasConsequencelevel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string reasonForWarning = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.SignificanceInfo.prototype.getReasonforwarning = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.SignificanceInfo} returns this
 */
proto.yamcs.protobuf.mdb.SignificanceInfo.prototype.setReasonforwarning = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SignificanceInfo} returns this
 */
proto.yamcs.protobuf.mdb.SignificanceInfo.prototype.clearReasonforwarning = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SignificanceInfo.prototype.hasReasonforwarning = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ComparisonInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ComparisonInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    parameter: (f = msg.getParameter()) && proto.yamcs.protobuf.mdb.ParameterInfo.toObject(includeInstance, f),
    operator: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    value: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    argument: (f = msg.getArgument()) && proto.yamcs.protobuf.mdb.ArgumentInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ComparisonInfo}
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ComparisonInfo;
  return proto.yamcs.protobuf.mdb.ComparisonInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ComparisonInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ComparisonInfo}
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yamcs.protobuf.mdb.ParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader);
      msg.setParameter(value);
      break;
    case 2:
      var value = /** @type {!proto.yamcs.protobuf.mdb.ComparisonInfo.OperatorType} */ (reader.readEnum());
      msg.setOperator(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = new proto.yamcs.protobuf.mdb.ArgumentInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ArgumentInfo.deserializeBinaryFromReader);
      msg.setArgument(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ComparisonInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ComparisonInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParameter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.yamcs.protobuf.mdb.ComparisonInfo.OperatorType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getArgument();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yamcs.protobuf.mdb.ArgumentInfo.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.OperatorType = {
  EQUAL_TO: 1,
  NOT_EQUAL_TO: 2,
  GREATER_THAN: 3,
  GREATER_THAN_OR_EQUAL_TO: 4,
  SMALLER_THAN: 5,
  SMALLER_THAN_OR_EQUAL_TO: 6
};

/**
 * optional ParameterInfo parameter = 1;
 * @return {?proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.getParameter = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ParameterInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ParameterInfo, 1));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ParameterInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ComparisonInfo} returns this
*/
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.setParameter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ComparisonInfo} returns this
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.clearParameter = function() {
  return this.setParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.hasParameter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OperatorType operator = 2;
 * @return {!proto.yamcs.protobuf.mdb.ComparisonInfo.OperatorType}
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.getOperator = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.ComparisonInfo.OperatorType} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ComparisonInfo.OperatorType} value
 * @return {!proto.yamcs.protobuf.mdb.ComparisonInfo} returns this
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.setOperator = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ComparisonInfo} returns this
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.clearOperator = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.hasOperator = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ComparisonInfo} returns this
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ComparisonInfo} returns this
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.clearValue = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.hasValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ArgumentInfo argument = 4;
 * @return {?proto.yamcs.protobuf.mdb.ArgumentInfo}
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.getArgument = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ArgumentInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ArgumentInfo, 4));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ArgumentInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ComparisonInfo} returns this
*/
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.setArgument = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ComparisonInfo} returns this
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.clearArgument = function() {
  return this.setArgument(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ComparisonInfo.prototype.hasArgument = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.TransmissionConstraintInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    expression: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    timeout: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.TransmissionConstraintInfo}
 */
proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.TransmissionConstraintInfo;
  return proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.TransmissionConstraintInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.TransmissionConstraintInfo}
 */
proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpression(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.TransmissionConstraintInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string expression = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.prototype.getExpression = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.TransmissionConstraintInfo} returns this
 */
proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.prototype.setExpression = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.TransmissionConstraintInfo} returns this
 */
proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.prototype.clearExpression = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.prototype.hasExpression = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 timeout = 2;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.TransmissionConstraintInfo} returns this
 */
proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.prototype.setTimeout = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.TransmissionConstraintInfo} returns this
 */
proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.prototype.clearTimeout = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.CommandInfo.repeatedFields_ = [5,8,9,11,14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.CommandInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.CommandInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.CommandInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    qualifiedname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    shortdescription: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    longdescription: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    aliasList: jspb.Message.toObjectList(msg.getAliasList(),
    yamcs_protobuf_yamcs_pb.NamedObjectId.toObject, includeInstance),
    basecommand: (f = msg.getBasecommand()) && proto.yamcs.protobuf.mdb.CommandInfo.toObject(includeInstance, f),
    pb_abstract: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    argumentList: jspb.Message.toObjectList(msg.getArgumentList(),
    proto.yamcs.protobuf.mdb.ArgumentInfo.toObject, includeInstance),
    argumentassignmentList: jspb.Message.toObjectList(msg.getArgumentassignmentList(),
    proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.toObject, includeInstance),
    significance: (f = msg.getSignificance()) && proto.yamcs.protobuf.mdb.SignificanceInfo.toObject(includeInstance, f),
    constraintList: jspb.Message.toObjectList(msg.getConstraintList(),
    proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.toObject, includeInstance),
    commandcontainer: (f = msg.getCommandcontainer()) && proto.yamcs.protobuf.mdb.CommandContainerInfo.toObject(includeInstance, f),
    verifierList: jspb.Message.toObjectList(msg.getVerifierList(),
    proto.yamcs.protobuf.mdb.VerifierInfo.toObject, includeInstance),
    ancillarydataMap: (f = msg.getAncillarydataMap()) ? f.toObject(includeInstance, proto.yamcs.protobuf.mdb.AncillaryDataInfo.toObject) : [],
    effectivesignificance: (f = msg.getEffectivesignificance()) && proto.yamcs.protobuf.mdb.SignificanceInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo}
 */
proto.yamcs.protobuf.mdb.CommandInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.CommandInfo;
  return proto.yamcs.protobuf.mdb.CommandInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.CommandInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo}
 */
proto.yamcs.protobuf.mdb.CommandInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQualifiedname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortdescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongdescription(value);
      break;
    case 5:
      var value = new yamcs_protobuf_yamcs_pb.NamedObjectId;
      reader.readMessage(value,yamcs_protobuf_yamcs_pb.NamedObjectId.deserializeBinaryFromReader);
      msg.addAlias(value);
      break;
    case 6:
      var value = new proto.yamcs.protobuf.mdb.CommandInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.CommandInfo.deserializeBinaryFromReader);
      msg.setBasecommand(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAbstract(value);
      break;
    case 8:
      var value = new proto.yamcs.protobuf.mdb.ArgumentInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ArgumentInfo.deserializeBinaryFromReader);
      msg.addArgument(value);
      break;
    case 9:
      var value = new proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.deserializeBinaryFromReader);
      msg.addArgumentassignment(value);
      break;
    case 10:
      var value = new proto.yamcs.protobuf.mdb.SignificanceInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.SignificanceInfo.deserializeBinaryFromReader);
      msg.setSignificance(value);
      break;
    case 11:
      var value = new proto.yamcs.protobuf.mdb.TransmissionConstraintInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.deserializeBinaryFromReader);
      msg.addConstraint(value);
      break;
    case 13:
      var value = new proto.yamcs.protobuf.mdb.CommandContainerInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.CommandContainerInfo.deserializeBinaryFromReader);
      msg.setCommandcontainer(value);
      break;
    case 14:
      var value = new proto.yamcs.protobuf.mdb.VerifierInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.VerifierInfo.deserializeBinaryFromReader);
      msg.addVerifier(value);
      break;
    case 15:
      var value = msg.getAncillarydataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.yamcs.protobuf.mdb.AncillaryDataInfo.deserializeBinaryFromReader, "", new proto.yamcs.protobuf.mdb.AncillaryDataInfo());
         });
      break;
    case 16:
      var value = new proto.yamcs.protobuf.mdb.SignificanceInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.SignificanceInfo.deserializeBinaryFromReader);
      msg.setEffectivesignificance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.CommandInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.CommandInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.CommandInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAliasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      yamcs_protobuf_yamcs_pb.NamedObjectId.serializeBinaryToWriter
    );
  }
  f = message.getBasecommand();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yamcs.protobuf.mdb.CommandInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getArgumentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.yamcs.protobuf.mdb.ArgumentInfo.serializeBinaryToWriter
    );
  }
  f = message.getArgumentassignmentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo.serializeBinaryToWriter
    );
  }
  f = message.getSignificance();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.yamcs.protobuf.mdb.SignificanceInfo.serializeBinaryToWriter
    );
  }
  f = message.getConstraintList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.yamcs.protobuf.mdb.TransmissionConstraintInfo.serializeBinaryToWriter
    );
  }
  f = message.getCommandcontainer();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.yamcs.protobuf.mdb.CommandContainerInfo.serializeBinaryToWriter
    );
  }
  f = message.getVerifierList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.yamcs.protobuf.mdb.VerifierInfo.serializeBinaryToWriter
    );
  }
  f = message.getAncillarydataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(15, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.yamcs.protobuf.mdb.AncillaryDataInfo.serializeBinaryToWriter);
  }
  f = message.getEffectivesignificance();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.yamcs.protobuf.mdb.SignificanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string qualifiedName = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.getQualifiedname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.setQualifiedname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.clearQualifiedname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.hasQualifiedname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string shortDescription = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.getShortdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.setShortdescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.clearShortdescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.hasShortdescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string longDescription = 4;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.getLongdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.setLongdescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.clearLongdescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.hasLongdescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated yamcs.protobuf.NamedObjectId alias = 5;
 * @return {!Array<!proto.yamcs.protobuf.NamedObjectId>}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.getAliasList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.NamedObjectId>} */ (
    jspb.Message.getRepeatedWrapperField(this, yamcs_protobuf_yamcs_pb.NamedObjectId, 5));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.NamedObjectId>} value
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
*/
proto.yamcs.protobuf.mdb.CommandInfo.prototype.setAliasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.yamcs.protobuf.NamedObjectId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.NamedObjectId}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.addAlias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.yamcs.protobuf.NamedObjectId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.clearAliasList = function() {
  return this.setAliasList([]);
};


/**
 * optional CommandInfo baseCommand = 6;
 * @return {?proto.yamcs.protobuf.mdb.CommandInfo}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.getBasecommand = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.CommandInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.CommandInfo, 6));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.CommandInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
*/
proto.yamcs.protobuf.mdb.CommandInfo.prototype.setBasecommand = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.clearBasecommand = function() {
  return this.setBasecommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.hasBasecommand = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool abstract = 7;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.getAbstract = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.setAbstract = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.clearAbstract = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.hasAbstract = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated ArgumentInfo argument = 8;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ArgumentInfo>}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.getArgumentList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ArgumentInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ArgumentInfo, 8));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ArgumentInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
*/
proto.yamcs.protobuf.mdb.CommandInfo.prototype.setArgumentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ArgumentInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ArgumentInfo}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.addArgument = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.yamcs.protobuf.mdb.ArgumentInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.clearArgumentList = function() {
  return this.setArgumentList([]);
};


/**
 * repeated ArgumentAssignmentInfo argumentAssignment = 9;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo>}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.getArgumentassignmentList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo, 9));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
*/
proto.yamcs.protobuf.mdb.CommandInfo.prototype.setArgumentassignmentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.addArgumentassignment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.yamcs.protobuf.mdb.ArgumentAssignmentInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.clearArgumentassignmentList = function() {
  return this.setArgumentassignmentList([]);
};


/**
 * optional SignificanceInfo significance = 10;
 * @return {?proto.yamcs.protobuf.mdb.SignificanceInfo}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.getSignificance = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.SignificanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.SignificanceInfo, 10));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.SignificanceInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
*/
proto.yamcs.protobuf.mdb.CommandInfo.prototype.setSignificance = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.clearSignificance = function() {
  return this.setSignificance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.hasSignificance = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated TransmissionConstraintInfo constraint = 11;
 * @return {!Array<!proto.yamcs.protobuf.mdb.TransmissionConstraintInfo>}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.getConstraintList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.TransmissionConstraintInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.TransmissionConstraintInfo, 11));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.TransmissionConstraintInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
*/
proto.yamcs.protobuf.mdb.CommandInfo.prototype.setConstraintList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.TransmissionConstraintInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.TransmissionConstraintInfo}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.addConstraint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.yamcs.protobuf.mdb.TransmissionConstraintInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.clearConstraintList = function() {
  return this.setConstraintList([]);
};


/**
 * optional CommandContainerInfo commandContainer = 13;
 * @return {?proto.yamcs.protobuf.mdb.CommandContainerInfo}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.getCommandcontainer = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.CommandContainerInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.CommandContainerInfo, 13));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.CommandContainerInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
*/
proto.yamcs.protobuf.mdb.CommandInfo.prototype.setCommandcontainer = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.clearCommandcontainer = function() {
  return this.setCommandcontainer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.hasCommandcontainer = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated VerifierInfo verifier = 14;
 * @return {!Array<!proto.yamcs.protobuf.mdb.VerifierInfo>}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.getVerifierList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.VerifierInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.VerifierInfo, 14));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.VerifierInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
*/
proto.yamcs.protobuf.mdb.CommandInfo.prototype.setVerifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.VerifierInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.addVerifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.yamcs.protobuf.mdb.VerifierInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.clearVerifierList = function() {
  return this.setVerifierList([]);
};


/**
 * map<string, AncillaryDataInfo> ancillaryData = 15;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.yamcs.protobuf.mdb.AncillaryDataInfo>}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.getAncillarydataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.yamcs.protobuf.mdb.AncillaryDataInfo>} */ (
      jspb.Message.getMapField(this, 15, opt_noLazyCreate,
      proto.yamcs.protobuf.mdb.AncillaryDataInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.clearAncillarydataMap = function() {
  this.getAncillarydataMap().clear();
  return this;
};


/**
 * optional SignificanceInfo effectiveSignificance = 16;
 * @return {?proto.yamcs.protobuf.mdb.SignificanceInfo}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.getEffectivesignificance = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.SignificanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.SignificanceInfo, 16));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.SignificanceInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
*/
proto.yamcs.protobuf.mdb.CommandInfo.prototype.setEffectivesignificance = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.clearEffectivesignificance = function() {
  return this.setEffectivesignificance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandInfo.prototype.hasEffectivesignificance = function() {
  return jspb.Message.getField(this, 16) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.VerifierInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.VerifierInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.VerifierInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    stage: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    container: (f = msg.getContainer()) && proto.yamcs.protobuf.mdb.ContainerInfo.toObject(includeInstance, f),
    algorithm: (f = msg.getAlgorithm()) && proto.yamcs.protobuf.mdb.AlgorithmInfo.toObject(includeInstance, f),
    onsuccess: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    onfail: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    ontimeout: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    checkwindow: (f = msg.getCheckwindow()) && proto.yamcs.protobuf.mdb.CheckWindowInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.VerifierInfo;
  return proto.yamcs.protobuf.mdb.VerifierInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.VerifierInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStage(value);
      break;
    case 2:
      var value = new proto.yamcs.protobuf.mdb.ContainerInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ContainerInfo.deserializeBinaryFromReader);
      msg.setContainer(value);
      break;
    case 3:
      var value = new proto.yamcs.protobuf.mdb.AlgorithmInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.AlgorithmInfo.deserializeBinaryFromReader);
      msg.setAlgorithm(value);
      break;
    case 4:
      var value = /** @type {!proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType} */ (reader.readEnum());
      msg.setOnsuccess(value);
      break;
    case 5:
      var value = /** @type {!proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType} */ (reader.readEnum());
      msg.setOnfail(value);
      break;
    case 6:
      var value = /** @type {!proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType} */ (reader.readEnum());
      msg.setOntimeout(value);
      break;
    case 7:
      var value = new proto.yamcs.protobuf.mdb.CheckWindowInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.CheckWindowInfo.deserializeBinaryFromReader);
      msg.setCheckwindow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.VerifierInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.VerifierInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.VerifierInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContainer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yamcs.protobuf.mdb.ContainerInfo.serializeBinaryToWriter
    );
  }
  f = message.getAlgorithm();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yamcs.protobuf.mdb.AlgorithmInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {!proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCheckwindow();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.yamcs.protobuf.mdb.CheckWindowInfo.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType = {
  SUCCESS: 1,
  FAIL: 2
};

/**
 * optional string stage = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.getStage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo} returns this
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.setStage = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo} returns this
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.clearStage = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.hasStage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ContainerInfo container = 2;
 * @return {?proto.yamcs.protobuf.mdb.ContainerInfo}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.getContainer = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ContainerInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ContainerInfo, 2));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ContainerInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo} returns this
*/
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.setContainer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo} returns this
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.clearContainer = function() {
  return this.setContainer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.hasContainer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AlgorithmInfo algorithm = 3;
 * @return {?proto.yamcs.protobuf.mdb.AlgorithmInfo}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.getAlgorithm = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.AlgorithmInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.AlgorithmInfo, 3));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.AlgorithmInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo} returns this
*/
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.setAlgorithm = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo} returns this
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.clearAlgorithm = function() {
  return this.setAlgorithm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.hasAlgorithm = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TerminationActionType onSuccess = 4;
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.getOnsuccess = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType} */ (jspb.Message.getFieldWithDefault(this, 4, 1));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType} value
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo} returns this
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.setOnsuccess = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo} returns this
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.clearOnsuccess = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.hasOnsuccess = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TerminationActionType onFail = 5;
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.getOnfail = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType} */ (jspb.Message.getFieldWithDefault(this, 5, 1));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType} value
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo} returns this
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.setOnfail = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo} returns this
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.clearOnfail = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.hasOnfail = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TerminationActionType onTimeout = 6;
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.getOntimeout = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType} */ (jspb.Message.getFieldWithDefault(this, 6, 1));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.VerifierInfo.TerminationActionType} value
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo} returns this
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.setOntimeout = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo} returns this
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.clearOntimeout = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.hasOntimeout = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CheckWindowInfo checkWindow = 7;
 * @return {?proto.yamcs.protobuf.mdb.CheckWindowInfo}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.getCheckwindow = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.CheckWindowInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.CheckWindowInfo, 7));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.CheckWindowInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo} returns this
*/
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.setCheckwindow = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.VerifierInfo} returns this
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.clearCheckwindow = function() {
  return this.setCheckwindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.VerifierInfo.prototype.hasCheckwindow = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.CheckWindowInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.CheckWindowInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    timetostartchecking: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    timetostopchecking: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    relativeto: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.CheckWindowInfo}
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.CheckWindowInfo;
  return proto.yamcs.protobuf.mdb.CheckWindowInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.CheckWindowInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.CheckWindowInfo}
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimetostartchecking(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimetostopchecking(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelativeto(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.CheckWindowInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.CheckWindowInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 timeToStartChecking = 1;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.prototype.getTimetostartchecking = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.CheckWindowInfo} returns this
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.prototype.setTimetostartchecking = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CheckWindowInfo} returns this
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.prototype.clearTimetostartchecking = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.prototype.hasTimetostartchecking = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 timeToStopChecking = 2;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.prototype.getTimetostopchecking = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.CheckWindowInfo} returns this
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.prototype.setTimetostopchecking = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CheckWindowInfo} returns this
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.prototype.clearTimetostopchecking = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.prototype.hasTimetostopchecking = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string relativeTo = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.prototype.getRelativeto = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CheckWindowInfo} returns this
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.prototype.setRelativeto = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CheckWindowInfo} returns this
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.prototype.clearRelativeto = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CheckWindowInfo.prototype.hasRelativeto = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.RepeatInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.RepeatInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.RepeatInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.RepeatInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    fixedcount: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    dynamiccount: (f = msg.getDynamiccount()) && proto.yamcs.protobuf.mdb.ParameterInfo.toObject(includeInstance, f),
    bitsbetween: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.RepeatInfo}
 */
proto.yamcs.protobuf.mdb.RepeatInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.RepeatInfo;
  return proto.yamcs.protobuf.mdb.RepeatInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.RepeatInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.RepeatInfo}
 */
proto.yamcs.protobuf.mdb.RepeatInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFixedcount(value);
      break;
    case 2:
      var value = new proto.yamcs.protobuf.mdb.ParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader);
      msg.setDynamiccount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBitsbetween(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.RepeatInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.RepeatInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.RepeatInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.RepeatInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDynamiccount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int64 fixedCount = 1;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.RepeatInfo.prototype.getFixedcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.RepeatInfo} returns this
 */
proto.yamcs.protobuf.mdb.RepeatInfo.prototype.setFixedcount = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.RepeatInfo} returns this
 */
proto.yamcs.protobuf.mdb.RepeatInfo.prototype.clearFixedcount = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.RepeatInfo.prototype.hasFixedcount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ParameterInfo dynamicCount = 2;
 * @return {?proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.RepeatInfo.prototype.getDynamiccount = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ParameterInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ParameterInfo, 2));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ParameterInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.RepeatInfo} returns this
*/
proto.yamcs.protobuf.mdb.RepeatInfo.prototype.setDynamiccount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.RepeatInfo} returns this
 */
proto.yamcs.protobuf.mdb.RepeatInfo.prototype.clearDynamiccount = function() {
  return this.setDynamiccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.RepeatInfo.prototype.hasDynamiccount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 bitsBetween = 3;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.RepeatInfo.prototype.getBitsbetween = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.RepeatInfo} returns this
 */
proto.yamcs.protobuf.mdb.RepeatInfo.prototype.setBitsbetween = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.RepeatInfo} returns this
 */
proto.yamcs.protobuf.mdb.RepeatInfo.prototype.clearBitsbetween = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.RepeatInfo.prototype.hasBitsbetween = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.SequenceEntryInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationinbits: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    referencelocation: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    container: (f = msg.getContainer()) && proto.yamcs.protobuf.mdb.ContainerInfo.toObject(includeInstance, f),
    parameter: (f = msg.getParameter()) && proto.yamcs.protobuf.mdb.ParameterInfo.toObject(includeInstance, f),
    argument: (f = msg.getArgument()) && proto.yamcs.protobuf.mdb.ArgumentInfo.toObject(includeInstance, f),
    fixedvalue: (f = msg.getFixedvalue()) && proto.yamcs.protobuf.mdb.FixedValueInfo.toObject(includeInstance, f),
    repeat: (f = msg.getRepeat()) && proto.yamcs.protobuf.mdb.RepeatInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.SequenceEntryInfo;
  return proto.yamcs.protobuf.mdb.SequenceEntryInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLocationinbits(value);
      break;
    case 2:
      var value = /** @type {!proto.yamcs.protobuf.mdb.SequenceEntryInfo.ReferenceLocationType} */ (reader.readEnum());
      msg.setReferencelocation(value);
      break;
    case 3:
      var value = new proto.yamcs.protobuf.mdb.ContainerInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ContainerInfo.deserializeBinaryFromReader);
      msg.setContainer(value);
      break;
    case 4:
      var value = new proto.yamcs.protobuf.mdb.ParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader);
      msg.setParameter(value);
      break;
    case 6:
      var value = new proto.yamcs.protobuf.mdb.ArgumentInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ArgumentInfo.deserializeBinaryFromReader);
      msg.setArgument(value);
      break;
    case 7:
      var value = new proto.yamcs.protobuf.mdb.FixedValueInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.FixedValueInfo.deserializeBinaryFromReader);
      msg.setFixedvalue(value);
      break;
    case 5:
      var value = new proto.yamcs.protobuf.mdb.RepeatInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.RepeatInfo.deserializeBinaryFromReader);
      msg.setRepeat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.SequenceEntryInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {!proto.yamcs.protobuf.mdb.SequenceEntryInfo.ReferenceLocationType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getContainer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yamcs.protobuf.mdb.ContainerInfo.serializeBinaryToWriter
    );
  }
  f = message.getParameter();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter
    );
  }
  f = message.getArgument();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yamcs.protobuf.mdb.ArgumentInfo.serializeBinaryToWriter
    );
  }
  f = message.getFixedvalue();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.yamcs.protobuf.mdb.FixedValueInfo.serializeBinaryToWriter
    );
  }
  f = message.getRepeat();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.yamcs.protobuf.mdb.RepeatInfo.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.ReferenceLocationType = {
  CONTAINER_START: 1,
  PREVIOUS_ENTRY: 2
};

/**
 * optional int32 locationInBits = 1;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.getLocationinbits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} returns this
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.setLocationinbits = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} returns this
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.clearLocationinbits = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.hasLocationinbits = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ReferenceLocationType referenceLocation = 2;
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo.ReferenceLocationType}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.getReferencelocation = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.SequenceEntryInfo.ReferenceLocationType} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.SequenceEntryInfo.ReferenceLocationType} value
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} returns this
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.setReferencelocation = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} returns this
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.clearReferencelocation = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.hasReferencelocation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ContainerInfo container = 3;
 * @return {?proto.yamcs.protobuf.mdb.ContainerInfo}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.getContainer = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ContainerInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ContainerInfo, 3));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ContainerInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} returns this
*/
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.setContainer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} returns this
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.clearContainer = function() {
  return this.setContainer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.hasContainer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ParameterInfo parameter = 4;
 * @return {?proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.getParameter = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ParameterInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ParameterInfo, 4));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ParameterInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} returns this
*/
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.setParameter = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} returns this
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.clearParameter = function() {
  return this.setParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.hasParameter = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ArgumentInfo argument = 6;
 * @return {?proto.yamcs.protobuf.mdb.ArgumentInfo}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.getArgument = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ArgumentInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ArgumentInfo, 6));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ArgumentInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} returns this
*/
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.setArgument = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} returns this
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.clearArgument = function() {
  return this.setArgument(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.hasArgument = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional FixedValueInfo fixedValue = 7;
 * @return {?proto.yamcs.protobuf.mdb.FixedValueInfo}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.getFixedvalue = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.FixedValueInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.FixedValueInfo, 7));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.FixedValueInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} returns this
*/
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.setFixedvalue = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} returns this
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.clearFixedvalue = function() {
  return this.setFixedvalue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.hasFixedvalue = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional RepeatInfo repeat = 5;
 * @return {?proto.yamcs.protobuf.mdb.RepeatInfo}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.getRepeat = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.RepeatInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.RepeatInfo, 5));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.RepeatInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} returns this
*/
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.setRepeat = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo} returns this
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.clearRepeat = function() {
  return this.setRepeat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SequenceEntryInfo.prototype.hasRepeat = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.FixedValueInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.FixedValueInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    hexvalue: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    sizeinbits: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.FixedValueInfo}
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.FixedValueInfo;
  return proto.yamcs.protobuf.mdb.FixedValueInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.FixedValueInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.FixedValueInfo}
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHexvalue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSizeinbits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.FixedValueInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.FixedValueInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.FixedValueInfo} returns this
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.FixedValueInfo} returns this
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string hexValue = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.prototype.getHexvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.FixedValueInfo} returns this
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.prototype.setHexvalue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.FixedValueInfo} returns this
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.prototype.clearHexvalue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.prototype.hasHexvalue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 sizeInBits = 3;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.prototype.getSizeinbits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.FixedValueInfo} returns this
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.prototype.setSizeinbits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.FixedValueInfo} returns this
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.prototype.clearSizeinbits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.FixedValueInfo.prototype.hasSizeinbits = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.repeatedFields_ = [5,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.CommandContainerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.CommandContainerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    qualifiedname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    shortdescription: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    longdescription: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    aliasList: jspb.Message.toObjectList(msg.getAliasList(),
    yamcs_protobuf_yamcs_pb.NamedObjectId.toObject, includeInstance),
    sizeinbits: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    basecontainer: (f = msg.getBasecontainer()) && proto.yamcs.protobuf.mdb.CommandContainerInfo.toObject(includeInstance, f),
    entryList: jspb.Message.toObjectList(msg.getEntryList(),
    proto.yamcs.protobuf.mdb.SequenceEntryInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.CommandContainerInfo;
  return proto.yamcs.protobuf.mdb.CommandContainerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.CommandContainerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQualifiedname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortdescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongdescription(value);
      break;
    case 5:
      var value = new yamcs_protobuf_yamcs_pb.NamedObjectId;
      reader.readMessage(value,yamcs_protobuf_yamcs_pb.NamedObjectId.deserializeBinaryFromReader);
      msg.addAlias(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSizeinbits(value);
      break;
    case 7:
      var value = new proto.yamcs.protobuf.mdb.CommandContainerInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.CommandContainerInfo.deserializeBinaryFromReader);
      msg.setBasecontainer(value);
      break;
    case 8:
      var value = new proto.yamcs.protobuf.mdb.SequenceEntryInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.SequenceEntryInfo.deserializeBinaryFromReader);
      msg.addEntry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.CommandContainerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.CommandContainerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAliasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      yamcs_protobuf_yamcs_pb.NamedObjectId.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getBasecontainer();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.yamcs.protobuf.mdb.CommandContainerInfo.serializeBinaryToWriter
    );
  }
  f = message.getEntryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.yamcs.protobuf.mdb.SequenceEntryInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string qualifiedName = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.getQualifiedname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.setQualifiedname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.clearQualifiedname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.hasQualifiedname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string shortDescription = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.getShortdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.setShortdescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.clearShortdescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.hasShortdescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string longDescription = 4;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.getLongdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.setLongdescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.clearLongdescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.hasLongdescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated yamcs.protobuf.NamedObjectId alias = 5;
 * @return {!Array<!proto.yamcs.protobuf.NamedObjectId>}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.getAliasList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.NamedObjectId>} */ (
    jspb.Message.getRepeatedWrapperField(this, yamcs_protobuf_yamcs_pb.NamedObjectId, 5));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.NamedObjectId>} value
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
*/
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.setAliasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.yamcs.protobuf.NamedObjectId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.NamedObjectId}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.addAlias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.yamcs.protobuf.NamedObjectId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.clearAliasList = function() {
  return this.setAliasList([]);
};


/**
 * optional int32 sizeInBits = 6;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.getSizeinbits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.setSizeinbits = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.clearSizeinbits = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.hasSizeinbits = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CommandContainerInfo baseContainer = 7;
 * @return {?proto.yamcs.protobuf.mdb.CommandContainerInfo}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.getBasecontainer = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.CommandContainerInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.CommandContainerInfo, 7));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.CommandContainerInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
*/
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.setBasecontainer = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.clearBasecontainer = function() {
  return this.setBasecontainer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.hasBasecontainer = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated SequenceEntryInfo entry = 8;
 * @return {!Array<!proto.yamcs.protobuf.mdb.SequenceEntryInfo>}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.getEntryList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.SequenceEntryInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.SequenceEntryInfo, 8));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.SequenceEntryInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
*/
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.setEntryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.SequenceEntryInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo}
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.addEntry = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.yamcs.protobuf.mdb.SequenceEntryInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.CommandContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.CommandContainerInfo.prototype.clearEntryList = function() {
  return this.setEntryList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.ContainerInfo.repeatedFields_ = [5,9,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ContainerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ContainerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ContainerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    qualifiedname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    shortdescription: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    longdescription: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    aliasList: jspb.Message.toObjectList(msg.getAliasList(),
    yamcs_protobuf_yamcs_pb.NamedObjectId.toObject, includeInstance),
    maxinterval: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    sizeinbits: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    basecontainer: (f = msg.getBasecontainer()) && proto.yamcs.protobuf.mdb.ContainerInfo.toObject(includeInstance, f),
    restrictioncriteriaList: jspb.Message.toObjectList(msg.getRestrictioncriteriaList(),
    proto.yamcs.protobuf.mdb.ComparisonInfo.toObject, includeInstance),
    entryList: jspb.Message.toObjectList(msg.getEntryList(),
    proto.yamcs.protobuf.mdb.SequenceEntryInfo.toObject, includeInstance),
    usedby: (f = msg.getUsedby()) && proto.yamcs.protobuf.mdb.UsedByInfo.toObject(includeInstance, f),
    ancillarydataMap: (f = msg.getAncillarydataMap()) ? f.toObject(includeInstance, proto.yamcs.protobuf.mdb.AncillaryDataInfo.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ContainerInfo;
  return proto.yamcs.protobuf.mdb.ContainerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ContainerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQualifiedname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortdescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongdescription(value);
      break;
    case 5:
      var value = new yamcs_protobuf_yamcs_pb.NamedObjectId;
      reader.readMessage(value,yamcs_protobuf_yamcs_pb.NamedObjectId.deserializeBinaryFromReader);
      msg.addAlias(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxinterval(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSizeinbits(value);
      break;
    case 8:
      var value = new proto.yamcs.protobuf.mdb.ContainerInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ContainerInfo.deserializeBinaryFromReader);
      msg.setBasecontainer(value);
      break;
    case 9:
      var value = new proto.yamcs.protobuf.mdb.ComparisonInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ComparisonInfo.deserializeBinaryFromReader);
      msg.addRestrictioncriteria(value);
      break;
    case 10:
      var value = new proto.yamcs.protobuf.mdb.SequenceEntryInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.SequenceEntryInfo.deserializeBinaryFromReader);
      msg.addEntry(value);
      break;
    case 11:
      var value = new proto.yamcs.protobuf.mdb.UsedByInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.UsedByInfo.deserializeBinaryFromReader);
      msg.setUsedby(value);
      break;
    case 12:
      var value = msg.getAncillarydataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.yamcs.protobuf.mdb.AncillaryDataInfo.deserializeBinaryFromReader, "", new proto.yamcs.protobuf.mdb.AncillaryDataInfo());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ContainerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ContainerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ContainerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAliasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      yamcs_protobuf_yamcs_pb.NamedObjectId.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getBasecontainer();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.yamcs.protobuf.mdb.ContainerInfo.serializeBinaryToWriter
    );
  }
  f = message.getRestrictioncriteriaList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.yamcs.protobuf.mdb.ComparisonInfo.serializeBinaryToWriter
    );
  }
  f = message.getEntryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.yamcs.protobuf.mdb.SequenceEntryInfo.serializeBinaryToWriter
    );
  }
  f = message.getUsedby();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.yamcs.protobuf.mdb.UsedByInfo.serializeBinaryToWriter
    );
  }
  f = message.getAncillarydataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(12, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.yamcs.protobuf.mdb.AncillaryDataInfo.serializeBinaryToWriter);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string qualifiedName = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.getQualifiedname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.setQualifiedname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.clearQualifiedname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.hasQualifiedname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string shortDescription = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.getShortdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.setShortdescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.clearShortdescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.hasShortdescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string longDescription = 4;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.getLongdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.setLongdescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.clearLongdescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.hasLongdescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated yamcs.protobuf.NamedObjectId alias = 5;
 * @return {!Array<!proto.yamcs.protobuf.NamedObjectId>}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.getAliasList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.NamedObjectId>} */ (
    jspb.Message.getRepeatedWrapperField(this, yamcs_protobuf_yamcs_pb.NamedObjectId, 5));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.NamedObjectId>} value
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
*/
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.setAliasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.yamcs.protobuf.NamedObjectId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.NamedObjectId}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.addAlias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.yamcs.protobuf.NamedObjectId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.clearAliasList = function() {
  return this.setAliasList([]);
};


/**
 * optional int64 maxInterval = 6;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.getMaxinterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.setMaxinterval = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.clearMaxinterval = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.hasMaxinterval = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 sizeInBits = 7;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.getSizeinbits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.setSizeinbits = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.clearSizeinbits = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.hasSizeinbits = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ContainerInfo baseContainer = 8;
 * @return {?proto.yamcs.protobuf.mdb.ContainerInfo}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.getBasecontainer = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ContainerInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ContainerInfo, 8));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ContainerInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
*/
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.setBasecontainer = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.clearBasecontainer = function() {
  return this.setBasecontainer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.hasBasecontainer = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated ComparisonInfo restrictionCriteria = 9;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ComparisonInfo>}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.getRestrictioncriteriaList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ComparisonInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ComparisonInfo, 9));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ComparisonInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
*/
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.setRestrictioncriteriaList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ComparisonInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ComparisonInfo}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.addRestrictioncriteria = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.yamcs.protobuf.mdb.ComparisonInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.clearRestrictioncriteriaList = function() {
  return this.setRestrictioncriteriaList([]);
};


/**
 * repeated SequenceEntryInfo entry = 10;
 * @return {!Array<!proto.yamcs.protobuf.mdb.SequenceEntryInfo>}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.getEntryList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.SequenceEntryInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.SequenceEntryInfo, 10));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.SequenceEntryInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
*/
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.setEntryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.SequenceEntryInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.SequenceEntryInfo}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.addEntry = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.yamcs.protobuf.mdb.SequenceEntryInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.clearEntryList = function() {
  return this.setEntryList([]);
};


/**
 * optional UsedByInfo usedBy = 11;
 * @return {?proto.yamcs.protobuf.mdb.UsedByInfo}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.getUsedby = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.UsedByInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.UsedByInfo, 11));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.UsedByInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
*/
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.setUsedby = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.clearUsedby = function() {
  return this.setUsedby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.hasUsedby = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * map<string, AncillaryDataInfo> ancillaryData = 12;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.yamcs.protobuf.mdb.AncillaryDataInfo>}
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.getAncillarydataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.yamcs.protobuf.mdb.AncillaryDataInfo>} */ (
      jspb.Message.getMapField(this, 12, opt_noLazyCreate,
      proto.yamcs.protobuf.mdb.AncillaryDataInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo} returns this
 */
proto.yamcs.protobuf.mdb.ContainerInfo.prototype.clearAncillarydataMap = function() {
  this.getAncillarydataMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.InputParameterInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.InputParameterInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    parameter: (f = msg.getParameter()) && proto.yamcs.protobuf.mdb.ParameterInfo.toObject(includeInstance, f),
    inputname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    parameterinstance: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    mandatory: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    argument: (f = msg.getArgument()) && proto.yamcs.protobuf.mdb.ArgumentInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.InputParameterInfo}
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.InputParameterInfo;
  return proto.yamcs.protobuf.mdb.InputParameterInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.InputParameterInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.InputParameterInfo}
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yamcs.protobuf.mdb.ParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader);
      msg.setParameter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputname(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParameterinstance(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMandatory(value);
      break;
    case 5:
      var value = new proto.yamcs.protobuf.mdb.ArgumentInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ArgumentInfo.deserializeBinaryFromReader);
      msg.setArgument(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.InputParameterInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.InputParameterInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParameter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getArgument();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.yamcs.protobuf.mdb.ArgumentInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ParameterInfo parameter = 1;
 * @return {?proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.getParameter = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ParameterInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ParameterInfo, 1));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ParameterInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.InputParameterInfo} returns this
*/
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.setParameter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.InputParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.clearParameter = function() {
  return this.setParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.hasParameter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string inputName = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.getInputname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.InputParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.setInputname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.InputParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.clearInputname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.hasInputname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 parameterInstance = 3;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.getParameterinstance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.InputParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.setParameterinstance = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.InputParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.clearParameterinstance = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.hasParameterinstance = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool mandatory = 4;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.getMandatory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.InputParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.setMandatory = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.InputParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.clearMandatory = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.hasMandatory = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ArgumentInfo argument = 5;
 * @return {?proto.yamcs.protobuf.mdb.ArgumentInfo}
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.getArgument = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ArgumentInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ArgumentInfo, 5));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ArgumentInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.InputParameterInfo} returns this
*/
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.setArgument = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.InputParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.clearArgument = function() {
  return this.setArgument(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.InputParameterInfo.prototype.hasArgument = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.OutputParameterInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.OutputParameterInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.OutputParameterInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.OutputParameterInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    parameter: (f = msg.getParameter()) && proto.yamcs.protobuf.mdb.ParameterInfo.toObject(includeInstance, f),
    outputname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.OutputParameterInfo}
 */
proto.yamcs.protobuf.mdb.OutputParameterInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.OutputParameterInfo;
  return proto.yamcs.protobuf.mdb.OutputParameterInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.OutputParameterInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.OutputParameterInfo}
 */
proto.yamcs.protobuf.mdb.OutputParameterInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yamcs.protobuf.mdb.ParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader);
      msg.setParameter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutputname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.OutputParameterInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.OutputParameterInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.OutputParameterInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.OutputParameterInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParameter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ParameterInfo parameter = 1;
 * @return {?proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.OutputParameterInfo.prototype.getParameter = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ParameterInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ParameterInfo, 1));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ParameterInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.OutputParameterInfo} returns this
*/
proto.yamcs.protobuf.mdb.OutputParameterInfo.prototype.setParameter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.OutputParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.OutputParameterInfo.prototype.clearParameter = function() {
  return this.setParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.OutputParameterInfo.prototype.hasParameter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string outputName = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.OutputParameterInfo.prototype.getOutputname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.OutputParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.OutputParameterInfo.prototype.setOutputname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.OutputParameterInfo} returns this
 */
proto.yamcs.protobuf.mdb.OutputParameterInfo.prototype.clearOutputname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.OutputParameterInfo.prototype.hasOutputname = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.MathElement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.MathElement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.MathElement.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    operator: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    value: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    parameter: (f = msg.getParameter()) && proto.yamcs.protobuf.mdb.ParameterInfo.toObject(includeInstance, f),
    parameterinstance: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.MathElement}
 */
proto.yamcs.protobuf.mdb.MathElement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.MathElement;
  return proto.yamcs.protobuf.mdb.MathElement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.MathElement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.MathElement}
 */
proto.yamcs.protobuf.mdb.MathElement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yamcs.protobuf.mdb.MathElement.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 4:
      var value = new proto.yamcs.protobuf.mdb.ParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader);
      msg.setParameter(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParameterinstance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.MathElement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.MathElement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.MathElement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.yamcs.protobuf.mdb.MathElement.Type} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getParameter();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yamcs.protobuf.mdb.MathElement.Type = {
  VALUE_OPERAND: 1,
  THIS_PARAMETER_OPERAND: 2,
  OPERATOR: 3,
  PARAMETER: 4
};

/**
 * optional Type type = 1;
 * @return {!proto.yamcs.protobuf.mdb.MathElement.Type}
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.getType = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.MathElement.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.MathElement.Type} value
 * @return {!proto.yamcs.protobuf.mdb.MathElement} returns this
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MathElement} returns this
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string operator = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.MathElement} returns this
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.setOperator = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MathElement} returns this
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.clearOperator = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.hasOperator = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double value = 3;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.MathElement} returns this
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MathElement} returns this
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.clearValue = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.hasValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ParameterInfo parameter = 4;
 * @return {?proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.getParameter = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ParameterInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ParameterInfo, 4));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ParameterInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.MathElement} returns this
*/
proto.yamcs.protobuf.mdb.MathElement.prototype.setParameter = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MathElement} returns this
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.clearParameter = function() {
  return this.setParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.hasParameter = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 parameterInstance = 5;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.getParameterinstance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.MathElement} returns this
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.setParameterinstance = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MathElement} returns this
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.clearParameterinstance = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MathElement.prototype.hasParameterinstance = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.repeatedFields_ = [5,9,10,11,12,14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.AlgorithmInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.AlgorithmInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    qualifiedname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    shortdescription: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    longdescription: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    aliasList: jspb.Message.toObjectList(msg.getAliasList(),
    yamcs_protobuf_yamcs_pb.NamedObjectId.toObject, includeInstance),
    scope: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    type: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    language: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    text: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    inputparameterList: jspb.Message.toObjectList(msg.getInputparameterList(),
    proto.yamcs.protobuf.mdb.InputParameterInfo.toObject, includeInstance),
    outputparameterList: jspb.Message.toObjectList(msg.getOutputparameterList(),
    proto.yamcs.protobuf.mdb.OutputParameterInfo.toObject, includeInstance),
    onparameterupdateList: jspb.Message.toObjectList(msg.getOnparameterupdateList(),
    proto.yamcs.protobuf.mdb.ParameterInfo.toObject, includeInstance),
    onperiodicrateList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    mathelementsList: jspb.Message.toObjectList(msg.getMathelementsList(),
    proto.yamcs.protobuf.mdb.MathElement.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.AlgorithmInfo;
  return proto.yamcs.protobuf.mdb.AlgorithmInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.AlgorithmInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQualifiedname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortdescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongdescription(value);
      break;
    case 5:
      var value = new yamcs_protobuf_yamcs_pb.NamedObjectId;
      reader.readMessage(value,yamcs_protobuf_yamcs_pb.NamedObjectId.deserializeBinaryFromReader);
      msg.addAlias(value);
      break;
    case 6:
      var value = /** @type {!proto.yamcs.protobuf.mdb.AlgorithmInfo.Scope} */ (reader.readEnum());
      msg.setScope(value);
      break;
    case 13:
      var value = /** @type {!proto.yamcs.protobuf.mdb.AlgorithmInfo.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 9:
      var value = new proto.yamcs.protobuf.mdb.InputParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.InputParameterInfo.deserializeBinaryFromReader);
      msg.addInputparameter(value);
      break;
    case 10:
      var value = new proto.yamcs.protobuf.mdb.OutputParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.OutputParameterInfo.deserializeBinaryFromReader);
      msg.addOutputparameter(value);
      break;
    case 11:
      var value = new proto.yamcs.protobuf.mdb.ParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader);
      msg.addOnparameterupdate(value);
      break;
    case 12:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOnperiodicrate(values[i]);
      }
      break;
    case 14:
      var value = new proto.yamcs.protobuf.mdb.MathElement;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.MathElement.deserializeBinaryFromReader);
      msg.addMathelements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.AlgorithmInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.AlgorithmInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAliasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      yamcs_protobuf_yamcs_pb.NamedObjectId.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.yamcs.protobuf.mdb.AlgorithmInfo.Scope} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {!proto.yamcs.protobuf.mdb.AlgorithmInfo.Type} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getInputparameterList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.yamcs.protobuf.mdb.InputParameterInfo.serializeBinaryToWriter
    );
  }
  f = message.getOutputparameterList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.yamcs.protobuf.mdb.OutputParameterInfo.serializeBinaryToWriter
    );
  }
  f = message.getOnparameterupdateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter
    );
  }
  f = message.getOnperiodicrateList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      12,
      f
    );
  }
  f = message.getMathelementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.yamcs.protobuf.mdb.MathElement.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.Type = {
  CUSTOM: 1,
  MATH: 2
};

/**
 * @enum {number}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.Scope = {
  GLOBAL: 0,
  COMMAND_VERIFICATION: 1,
  CONTAINER_PROCESSING: 2
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string qualifiedName = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.getQualifiedname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.setQualifiedname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.clearQualifiedname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.hasQualifiedname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string shortDescription = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.getShortdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.setShortdescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.clearShortdescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.hasShortdescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string longDescription = 4;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.getLongdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.setLongdescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.clearLongdescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.hasLongdescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated yamcs.protobuf.NamedObjectId alias = 5;
 * @return {!Array<!proto.yamcs.protobuf.NamedObjectId>}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.getAliasList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.NamedObjectId>} */ (
    jspb.Message.getRepeatedWrapperField(this, yamcs_protobuf_yamcs_pb.NamedObjectId, 5));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.NamedObjectId>} value
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
*/
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.setAliasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.yamcs.protobuf.NamedObjectId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.NamedObjectId}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.addAlias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.yamcs.protobuf.NamedObjectId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.clearAliasList = function() {
  return this.setAliasList([]);
};


/**
 * optional Scope scope = 6;
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo.Scope}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.getScope = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.AlgorithmInfo.Scope} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.AlgorithmInfo.Scope} value
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.setScope = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.clearScope = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.hasScope = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Type type = 13;
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo.Type}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.getType = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.AlgorithmInfo.Type} */ (jspb.Message.getFieldWithDefault(this, 13, 1));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.AlgorithmInfo.Type} value
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.setType = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.clearType = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.hasType = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string language = 7;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.setLanguage = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.clearLanguage = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.hasLanguage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string text = 8;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.setText = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.clearText = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.hasText = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated InputParameterInfo inputParameter = 9;
 * @return {!Array<!proto.yamcs.protobuf.mdb.InputParameterInfo>}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.getInputparameterList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.InputParameterInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.InputParameterInfo, 9));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.InputParameterInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
*/
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.setInputparameterList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.InputParameterInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.InputParameterInfo}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.addInputparameter = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.yamcs.protobuf.mdb.InputParameterInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.clearInputparameterList = function() {
  return this.setInputparameterList([]);
};


/**
 * repeated OutputParameterInfo outputParameter = 10;
 * @return {!Array<!proto.yamcs.protobuf.mdb.OutputParameterInfo>}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.getOutputparameterList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.OutputParameterInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.OutputParameterInfo, 10));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.OutputParameterInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
*/
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.setOutputparameterList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.OutputParameterInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.OutputParameterInfo}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.addOutputparameter = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.yamcs.protobuf.mdb.OutputParameterInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.clearOutputparameterList = function() {
  return this.setOutputparameterList([]);
};


/**
 * repeated ParameterInfo onParameterUpdate = 11;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ParameterInfo>}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.getOnparameterupdateList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ParameterInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ParameterInfo, 11));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ParameterInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
*/
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.setOnparameterupdateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ParameterInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.addOnparameterupdate = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.yamcs.protobuf.mdb.ParameterInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.clearOnparameterupdateList = function() {
  return this.setOnparameterupdateList([]);
};


/**
 * repeated int64 onPeriodicRate = 12;
 * @return {!Array<number>}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.getOnperiodicrateList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.setOnperiodicrateList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.addOnperiodicrate = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.clearOnperiodicrateList = function() {
  return this.setOnperiodicrateList([]);
};


/**
 * repeated MathElement mathElements = 14;
 * @return {!Array<!proto.yamcs.protobuf.mdb.MathElement>}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.getMathelementsList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.MathElement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.MathElement, 14));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.MathElement>} value
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
*/
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.setMathelementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.MathElement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.MathElement}
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.addMathelements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.yamcs.protobuf.mdb.MathElement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo} returns this
 */
proto.yamcs.protobuf.mdb.AlgorithmInfo.prototype.clearMathelementsList = function() {
  return this.setMathelementsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    q: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    next: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    pos: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    limit: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest;
  return proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQ(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNext(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPos(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string q = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.getQ = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.setQ = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.clearQ = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.hasQ = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string next = 7;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.getNext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.setNext = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.clearNext = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.hasNext = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 pos = 8;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.getPos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.setPos = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.clearPos = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.hasPos = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 limit = 9;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsRequest.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ListContainersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ListContainersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    q: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    system: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    next: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    pos: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    limit: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ListContainersRequest}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ListContainersRequest;
  return proto.yamcs.protobuf.mdb.ListContainersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ListContainersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ListContainersRequest}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQ(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSystem(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNext(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPos(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ListContainersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ListContainersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListContainersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListContainersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string q = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.getQ = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListContainersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.setQ = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListContainersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.clearQ = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.hasQ = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string system = 10;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.getSystem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListContainersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.setSystem = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListContainersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.clearSystem = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.hasSystem = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string next = 7;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.getNext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListContainersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.setNext = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListContainersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.clearNext = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.hasNext = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 pos = 8;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.getPos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListContainersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.setPos = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListContainersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.clearPos = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.hasPos = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 limit = 9;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListContainersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListContainersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListContainersRequest.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ListParameterTypesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    q: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    system: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    next: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    pos: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    limit: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ListParameterTypesRequest;
  return proto.yamcs.protobuf.mdb.ListParameterTypesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQ(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSystem(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNext(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPos(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ListParameterTypesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string q = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.getQ = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.setQ = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.clearQ = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.hasQ = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string system = 10;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.getSystem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.setSystem = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.clearSystem = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.hasSystem = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string next = 7;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.getNext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.setNext = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.clearNext = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.hasNext = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 pos = 8;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.getPos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.setPos = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.clearPos = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.hasPos = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 limit = 9;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesRequest.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    q: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    system: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    next: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    pos: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    limit: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    scope: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ListAlgorithmsRequest;
  return proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQ(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSystem(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNext(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPos(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 11:
      var value = /** @type {!proto.yamcs.protobuf.mdb.AlgorithmInfo.Scope} */ (reader.readEnum());
      msg.setScope(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {!proto.yamcs.protobuf.mdb.AlgorithmInfo.Scope} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeEnum(
      11,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string q = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.getQ = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.setQ = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.clearQ = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.hasQ = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string system = 10;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.getSystem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.setSystem = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.clearSystem = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.hasSystem = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string next = 7;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.getNext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.setNext = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.clearNext = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.hasNext = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 pos = 8;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.getPos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.setPos = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.clearPos = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.hasPos = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 limit = 9;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AlgorithmInfo.Scope scope = 11;
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo.Scope}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.getScope = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.AlgorithmInfo.Scope} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.AlgorithmInfo.Scope} value
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.setScope = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.clearScope = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsRequest.prototype.hasScope = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ListCommandsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ListCommandsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    q: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    system: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    details: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    next: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    pos: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    limit: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    noabstract: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ListCommandsRequest;
  return proto.yamcs.protobuf.mdb.ListCommandsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ListCommandsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQ(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSystem(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDetails(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNext(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPos(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoabstract(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ListCommandsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ListCommandsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string q = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.getQ = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.setQ = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.clearQ = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.hasQ = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string system = 11;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.getSystem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.setSystem = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.clearSystem = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.hasSystem = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool details = 4;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.getDetails = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.setDetails = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.clearDetails = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string next = 7;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.getNext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.setNext = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.clearNext = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.hasNext = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 pos = 8;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.getPos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.setPos = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.clearPos = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.hasPos = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 limit = 9;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool noAbstract = 10;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.getNoabstract = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.setNoabstract = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.clearNoabstract = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListCommandsRequest.prototype.hasNoabstract = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.GetParameterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.GetParameterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.GetParameterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.GetParameterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.GetParameterRequest}
 */
proto.yamcs.protobuf.mdb.GetParameterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.GetParameterRequest;
  return proto.yamcs.protobuf.mdb.GetParameterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.GetParameterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.GetParameterRequest}
 */
proto.yamcs.protobuf.mdb.GetParameterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.GetParameterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.GetParameterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.GetParameterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.GetParameterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.GetParameterRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.GetParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetParameterRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.GetParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetParameterRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.GetParameterRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.GetParameterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.GetParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetParameterRequest.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.GetParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetParameterRequest.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.GetParameterRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ListParametersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ListParametersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    q: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    searchmembers: (f = jspb.Message.getBooleanField(msg, 12)) == null ? undefined : f,
    details: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    typeList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    source: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    system: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    next: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    pos: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    limit: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ListParametersRequest;
  return proto.yamcs.protobuf.mdb.ListParametersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ListParametersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQ(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSearchmembers(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDetails(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addType(value);
      break;
    case 10:
      var value = /** @type {!proto.yamcs.protobuf.mdb.DataSourceType} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSystem(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNext(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPos(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ListParametersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ListParametersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getTypeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = /** @type {!proto.yamcs.protobuf.mdb.DataSourceType} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string q = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.getQ = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.setQ = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.clearQ = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.hasQ = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool searchMembers = 12;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.getSearchmembers = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.setSearchmembers = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.clearSearchmembers = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.hasSearchmembers = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool details = 4;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.getDetails = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.setDetails = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.clearDetails = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string type = 5;
 * @return {!Array<string>}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.getTypeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.setTypeList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.addType = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.clearTypeList = function() {
  return this.setTypeList([]);
};


/**
 * optional DataSourceType source = 10;
 * @return {!proto.yamcs.protobuf.mdb.DataSourceType}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.getSource = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.DataSourceType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.DataSourceType} value
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.setSource = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.clearSource = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.hasSource = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string system = 11;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.getSystem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.setSystem = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.clearSystem = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.hasSystem = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string next = 7;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.getNext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.setNext = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.clearNext = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.hasNext = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 pos = 8;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.getPos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.setPos = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.clearPos = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.hasPos = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 limit = 9;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParametersRequest.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.repeatedFields_ = [4,1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ListParametersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ListParametersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    spacesystemsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto.yamcs.protobuf.mdb.ParameterInfo.toObject, includeInstance),
    continuationtoken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    totalsize: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersResponse}
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ListParametersResponse;
  return proto.yamcs.protobuf.mdb.ListParametersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ListParametersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersResponse}
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpacesystems(value);
      break;
    case 1:
      var value = new proto.yamcs.protobuf.mdb.ParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader);
      msg.addParameters(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContinuationtoken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ListParametersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ListParametersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpacesystemsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated string spaceSystems = 4;
 * @return {!Array<string>}
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.getSpacesystemsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yamcs.protobuf.mdb.ListParametersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.setSpacesystemsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ListParametersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.addSpacesystems = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.clearSpacesystemsList = function() {
  return this.setSpacesystemsList([]);
};


/**
 * repeated ParameterInfo parameters = 1;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ParameterInfo>}
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ParameterInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ParameterInfo, 1));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ParameterInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ListParametersResponse} returns this
*/
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ParameterInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yamcs.protobuf.mdb.ParameterInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.clearParametersList = function() {
  return this.setParametersList([]);
};


/**
 * optional string continuationToken = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.getContinuationtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListParametersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.setContinuationtoken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.clearContinuationtoken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.hasContinuationtoken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 totalSize = 3;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.getTotalsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListParametersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.setTotalsize = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParametersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.clearTotalsize = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParametersResponse.prototype.hasTotalsize = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.BatchGetParametersRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.BatchGetParametersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.BatchGetParametersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.BatchGetParametersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    idList: jspb.Message.toObjectList(msg.getIdList(),
    yamcs_protobuf_yamcs_pb.NamedObjectId.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersRequest}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.BatchGetParametersRequest;
  return proto.yamcs.protobuf.mdb.BatchGetParametersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.BatchGetParametersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersRequest}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 1:
      var value = new yamcs_protobuf_yamcs_pb.NamedObjectId;
      reader.readMessage(value,yamcs_protobuf_yamcs_pb.NamedObjectId.deserializeBinaryFromReader);
      msg.addId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.BatchGetParametersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.BatchGetParametersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.BatchGetParametersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIdList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yamcs_protobuf_yamcs_pb.NamedObjectId.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.BatchGetParametersRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.BatchGetParametersRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated yamcs.protobuf.NamedObjectId id = 1;
 * @return {!Array<!proto.yamcs.protobuf.NamedObjectId>}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersRequest.prototype.getIdList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.NamedObjectId>} */ (
    jspb.Message.getRepeatedWrapperField(this, yamcs_protobuf_yamcs_pb.NamedObjectId, 1));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.NamedObjectId>} value
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersRequest} returns this
*/
proto.yamcs.protobuf.mdb.BatchGetParametersRequest.prototype.setIdList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yamcs.protobuf.NamedObjectId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.NamedObjectId}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersRequest.prototype.addId = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yamcs.protobuf.NamedObjectId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersRequest} returns this
 */
proto.yamcs.protobuf.mdb.BatchGetParametersRequest.prototype.clearIdList = function() {
  return this.setIdList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.BatchGetParametersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responseList: jspb.Message.toObjectList(msg.getResponseList(),
    proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.BatchGetParametersResponse;
  return proto.yamcs.protobuf.mdb.BatchGetParametersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.deserializeBinaryFromReader);
      msg.addResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.BatchGetParametersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponseList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && yamcs_protobuf_yamcs_pb.NamedObjectId.toObject(includeInstance, f),
    parameter: (f = msg.getParameter()) && proto.yamcs.protobuf.mdb.ParameterInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse;
  return proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yamcs_protobuf_yamcs_pb.NamedObjectId;
      reader.readMessage(value,yamcs_protobuf_yamcs_pb.NamedObjectId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto.yamcs.protobuf.mdb.ParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader);
      msg.setParameter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yamcs_protobuf_yamcs_pb.NamedObjectId.serializeBinaryToWriter
    );
  }
  f = message.getParameter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional yamcs.protobuf.NamedObjectId id = 1;
 * @return {?proto.yamcs.protobuf.NamedObjectId}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.prototype.getId = function() {
  return /** @type{?proto.yamcs.protobuf.NamedObjectId} */ (
    jspb.Message.getWrapperField(this, yamcs_protobuf_yamcs_pb.NamedObjectId, 1));
};


/**
 * @param {?proto.yamcs.protobuf.NamedObjectId|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse} returns this
*/
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse} returns this
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ParameterInfo parameter = 2;
 * @return {?proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.prototype.getParameter = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ParameterInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ParameterInfo, 2));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ParameterInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse} returns this
*/
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.prototype.setParameter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse} returns this
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.prototype.clearParameter = function() {
  return this.setParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse.prototype.hasParameter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated GetParameterResponse response = 1;
 * @return {!Array<!proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse>}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.prototype.getResponseList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse, 1));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse>} value
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse} returns this
*/
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.prototype.setResponseList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse}
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.prototype.addResponse = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yamcs.protobuf.mdb.BatchGetParametersResponse.GetParameterResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.BatchGetParametersResponse} returns this
 */
proto.yamcs.protobuf.mdb.BatchGetParametersResponse.prototype.clearResponseList = function() {
  return this.setResponseList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.repeatedFields_ = [4,1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ListContainersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ListContainersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    spacesystemsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    containersList: jspb.Message.toObjectList(msg.getContainersList(),
    proto.yamcs.protobuf.mdb.ContainerInfo.toObject, includeInstance),
    continuationtoken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    totalsize: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ListContainersResponse}
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ListContainersResponse;
  return proto.yamcs.protobuf.mdb.ListContainersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ListContainersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ListContainersResponse}
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpacesystems(value);
      break;
    case 1:
      var value = new proto.yamcs.protobuf.mdb.ContainerInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ContainerInfo.deserializeBinaryFromReader);
      msg.addContainers(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContinuationtoken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ListContainersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ListContainersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpacesystemsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getContainersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.ContainerInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated string spaceSystems = 4;
 * @return {!Array<string>}
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.getSpacesystemsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yamcs.protobuf.mdb.ListContainersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.setSpacesystemsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ListContainersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.addSpacesystems = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ListContainersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.clearSpacesystemsList = function() {
  return this.setSpacesystemsList([]);
};


/**
 * repeated ContainerInfo containers = 1;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ContainerInfo>}
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.getContainersList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ContainerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ContainerInfo, 1));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ContainerInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ListContainersResponse} returns this
*/
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.setContainersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ContainerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ContainerInfo}
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.addContainers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yamcs.protobuf.mdb.ContainerInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ListContainersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.clearContainersList = function() {
  return this.setContainersList([]);
};


/**
 * optional string continuationToken = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.getContinuationtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListContainersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.setContinuationtoken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListContainersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.clearContinuationtoken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.hasContinuationtoken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 totalSize = 3;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.getTotalsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListContainersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.setTotalsize = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListContainersResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.clearTotalsize = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListContainersResponse.prototype.hasTotalsize = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.repeatedFields_ = [4,1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ListParameterTypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ListParameterTypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    spacesystemsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    parametertypesList: jspb.Message.toObjectList(msg.getParametertypesList(),
    proto.yamcs.protobuf.mdb.ParameterTypeInfo.toObject, includeInstance),
    continuationtoken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    totalsize: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesResponse}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ListParameterTypesResponse;
  return proto.yamcs.protobuf.mdb.ListParameterTypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ListParameterTypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesResponse}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpacesystems(value);
      break;
    case 1:
      var value = new proto.yamcs.protobuf.mdb.ParameterTypeInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterTypeInfo.deserializeBinaryFromReader);
      msg.addParametertypes(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContinuationtoken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ListParameterTypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ListParameterTypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpacesystemsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getParametertypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.ParameterTypeInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated string spaceSystems = 4;
 * @return {!Array<string>}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.getSpacesystemsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.setSpacesystemsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.addSpacesystems = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.clearSpacesystemsList = function() {
  return this.setSpacesystemsList([]);
};


/**
 * repeated ParameterTypeInfo parameterTypes = 1;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ParameterTypeInfo>}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.getParametertypesList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ParameterTypeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ParameterTypeInfo, 1));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ParameterTypeInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesResponse} returns this
*/
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.setParametertypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ParameterTypeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ParameterTypeInfo}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.addParametertypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yamcs.protobuf.mdb.ParameterTypeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.clearParametertypesList = function() {
  return this.setParametertypesList([]);
};


/**
 * optional string continuationToken = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.getContinuationtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.setContinuationtoken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.clearContinuationtoken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.hasContinuationtoken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 totalSize = 3;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.getTotalsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.setTotalsize = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListParameterTypesResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.clearTotalsize = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListParameterTypesResponse.prototype.hasTotalsize = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.repeatedFields_ = [4,1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ListCommandsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ListCommandsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    spacesystemsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    commandsList: jspb.Message.toObjectList(msg.getCommandsList(),
    proto.yamcs.protobuf.mdb.CommandInfo.toObject, includeInstance),
    continuationtoken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    totalsize: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsResponse}
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ListCommandsResponse;
  return proto.yamcs.protobuf.mdb.ListCommandsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ListCommandsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsResponse}
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpacesystems(value);
      break;
    case 1:
      var value = new proto.yamcs.protobuf.mdb.CommandInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.CommandInfo.deserializeBinaryFromReader);
      msg.addCommands(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContinuationtoken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ListCommandsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ListCommandsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpacesystemsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getCommandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.CommandInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated string spaceSystems = 4;
 * @return {!Array<string>}
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.getSpacesystemsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.setSpacesystemsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.addSpacesystems = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.clearSpacesystemsList = function() {
  return this.setSpacesystemsList([]);
};


/**
 * repeated CommandInfo commands = 1;
 * @return {!Array<!proto.yamcs.protobuf.mdb.CommandInfo>}
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.getCommandsList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.CommandInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.CommandInfo, 1));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.CommandInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsResponse} returns this
*/
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.setCommandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.CommandInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.CommandInfo}
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.addCommands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yamcs.protobuf.mdb.CommandInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.clearCommandsList = function() {
  return this.setCommandsList([]);
};


/**
 * optional string continuationToken = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.getContinuationtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.setContinuationtoken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.clearContinuationtoken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.hasContinuationtoken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 totalSize = 3;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.getTotalsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.setTotalsize = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListCommandsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.clearTotalsize = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListCommandsResponse.prototype.hasTotalsize = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.repeatedFields_ = [4,1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ListAlgorithmsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    spacesystemsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    algorithmsList: jspb.Message.toObjectList(msg.getAlgorithmsList(),
    proto.yamcs.protobuf.mdb.AlgorithmInfo.toObject, includeInstance),
    continuationtoken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    totalsize: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsResponse}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ListAlgorithmsResponse;
  return proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ListAlgorithmsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsResponse}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpacesystems(value);
      break;
    case 1:
      var value = new proto.yamcs.protobuf.mdb.AlgorithmInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.AlgorithmInfo.deserializeBinaryFromReader);
      msg.addAlgorithms(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContinuationtoken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ListAlgorithmsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpacesystemsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getAlgorithmsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.AlgorithmInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated string spaceSystems = 4;
 * @return {!Array<string>}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.getSpacesystemsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.setSpacesystemsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.addSpacesystems = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.clearSpacesystemsList = function() {
  return this.setSpacesystemsList([]);
};


/**
 * repeated AlgorithmInfo algorithms = 1;
 * @return {!Array<!proto.yamcs.protobuf.mdb.AlgorithmInfo>}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.getAlgorithmsList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.AlgorithmInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.AlgorithmInfo, 1));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.AlgorithmInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsResponse} returns this
*/
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.setAlgorithmsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.AlgorithmInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.AlgorithmInfo}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.addAlgorithms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yamcs.protobuf.mdb.AlgorithmInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.clearAlgorithmsList = function() {
  return this.setAlgorithmsList([]);
};


/**
 * optional string continuationToken = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.getContinuationtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.setContinuationtoken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.clearContinuationtoken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.hasContinuationtoken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 totalSize = 3;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.getTotalsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.setTotalsize = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListAlgorithmsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.clearTotalsize = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListAlgorithmsResponse.prototype.hasTotalsize = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.GetAlgorithmRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.GetAlgorithmRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.GetAlgorithmRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.GetAlgorithmRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.GetAlgorithmRequest}
 */
proto.yamcs.protobuf.mdb.GetAlgorithmRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.GetAlgorithmRequest;
  return proto.yamcs.protobuf.mdb.GetAlgorithmRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.GetAlgorithmRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.GetAlgorithmRequest}
 */
proto.yamcs.protobuf.mdb.GetAlgorithmRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.GetAlgorithmRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.GetAlgorithmRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.GetAlgorithmRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.GetAlgorithmRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.GetAlgorithmRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.GetAlgorithmRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetAlgorithmRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.GetAlgorithmRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetAlgorithmRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.GetAlgorithmRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.GetAlgorithmRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.GetAlgorithmRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetAlgorithmRequest.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.GetAlgorithmRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetAlgorithmRequest.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.GetAlgorithmRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.CreateParameterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.CreateParameterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    shortdescription: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    longdescription: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    aliasesMap: (f = msg.getAliasesMap()) ? f.toObject(includeInstance, undefined) : [],
    datasource: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    parametertype: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterRequest}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.CreateParameterRequest;
  return proto.yamcs.protobuf.mdb.CreateParameterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.CreateParameterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterRequest}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortdescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongdescription(value);
      break;
    case 5:
      var value = msg.getAliasesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = /** @type {!proto.yamcs.protobuf.mdb.DataSourceType} */ (reader.readEnum());
      msg.setDatasource(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setParametertype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.CreateParameterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.CreateParameterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAliasesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = /** @type {!proto.yamcs.protobuf.mdb.DataSourceType} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string shortDescription = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.getShortdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.setShortdescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.clearShortdescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.hasShortdescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string longDescription = 4;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.getLongdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.setLongdescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.clearLongdescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.hasLongdescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, string> aliases = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.getAliasesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.clearAliasesMap = function() {
  this.getAliasesMap().clear();
  return this;
};


/**
 * optional DataSourceType dataSource = 6;
 * @return {!proto.yamcs.protobuf.mdb.DataSourceType}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.getDatasource = function() {
  return /** @type {!proto.yamcs.protobuf.mdb.DataSourceType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.yamcs.protobuf.mdb.DataSourceType} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.clearDatasource = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string parameterType = 7;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.getParametertype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.setParametertype = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.clearParametertype = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterRequest.prototype.hasParametertype = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.repeatedFields_ = [10,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    shortdescription: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    longdescription: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    aliasesMap: (f = msg.getAliasesMap()) ? f.toObject(includeInstance, undefined) : [],
    engtype: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    unit: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    signed: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    defaultalarm: (f = msg.getDefaultalarm()) && proto.yamcs.protobuf.mdb.AlarmInfo.toObject(includeInstance, f),
    contextalarmsList: jspb.Message.toObjectList(msg.getContextalarmsList(),
    proto.yamcs.protobuf.mdb.ContextAlarmInfo.toObject, includeInstance),
    enumerationvaluesList: jspb.Message.toObjectList(msg.getEnumerationvaluesList(),
    proto.yamcs.protobuf.mdb.EnumValue.toObject, includeInstance),
    zerostringvalue: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    onestringvalue: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.CreateParameterTypeRequest;
  return proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortdescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongdescription(value);
      break;
    case 5:
      var value = msg.getAliasesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEngtype(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSigned(value);
      break;
    case 9:
      var value = new proto.yamcs.protobuf.mdb.AlarmInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.AlarmInfo.deserializeBinaryFromReader);
      msg.setDefaultalarm(value);
      break;
    case 10:
      var value = new proto.yamcs.protobuf.mdb.ContextAlarmInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ContextAlarmInfo.deserializeBinaryFromReader);
      msg.addContextalarms(value);
      break;
    case 11:
      var value = new proto.yamcs.protobuf.mdb.EnumValue;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.EnumValue.deserializeBinaryFromReader);
      msg.addEnumerationvalues(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setZerostringvalue(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setOnestringvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAliasesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getDefaultalarm();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.yamcs.protobuf.mdb.AlarmInfo.serializeBinaryToWriter
    );
  }
  f = message.getContextalarmsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.yamcs.protobuf.mdb.ContextAlarmInfo.serializeBinaryToWriter
    );
  }
  f = message.getEnumerationvaluesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.yamcs.protobuf.mdb.EnumValue.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string shortDescription = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.getShortdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.setShortdescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.clearShortdescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.hasShortdescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string longDescription = 4;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.getLongdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.setLongdescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.clearLongdescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.hasLongdescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, string> aliases = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.getAliasesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.clearAliasesMap = function() {
  this.getAliasesMap().clear();
  return this;
};


/**
 * optional string engType = 6;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.getEngtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.setEngtype = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.clearEngtype = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.hasEngtype = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string unit = 7;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.setUnit = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.clearUnit = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.hasUnit = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool signed = 8;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.getSigned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.setSigned = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.clearSigned = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.hasSigned = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional AlarmInfo defaultAlarm = 9;
 * @return {?proto.yamcs.protobuf.mdb.AlarmInfo}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.getDefaultalarm = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.AlarmInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.AlarmInfo, 9));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.AlarmInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
*/
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.setDefaultalarm = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.clearDefaultalarm = function() {
  return this.setDefaultalarm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.hasDefaultalarm = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated ContextAlarmInfo contextAlarms = 10;
 * @return {!Array<!proto.yamcs.protobuf.mdb.ContextAlarmInfo>}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.getContextalarmsList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.ContextAlarmInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.ContextAlarmInfo, 10));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.ContextAlarmInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
*/
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.setContextalarmsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.ContextAlarmInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.ContextAlarmInfo}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.addContextalarms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.yamcs.protobuf.mdb.ContextAlarmInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.clearContextalarmsList = function() {
  return this.setContextalarmsList([]);
};


/**
 * repeated EnumValue enumerationValues = 11;
 * @return {!Array<!proto.yamcs.protobuf.mdb.EnumValue>}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.getEnumerationvaluesList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.EnumValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.EnumValue, 11));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.EnumValue>} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
*/
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.setEnumerationvaluesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.EnumValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.EnumValue}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.addEnumerationvalues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.yamcs.protobuf.mdb.EnumValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.clearEnumerationvaluesList = function() {
  return this.setEnumerationvaluesList([]);
};


/**
 * optional string zeroStringValue = 12;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.getZerostringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.setZerostringvalue = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.clearZerostringvalue = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.hasZerostringvalue = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string oneStringValue = 13;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.getOnestringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.setOnestringvalue = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.CreateParameterTypeRequest} returns this
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.clearOnestringvalue = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.CreateParameterTypeRequest.prototype.hasOnestringvalue = function() {
  return jspb.Message.getField(this, 13) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest}
 */
proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest;
  return proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest}
 */
proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.GetMissionDatabaseRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest}
 */
proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest;
  return proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest}
 */
proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ExportJavaMissionDatabaseRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    includespacesystems: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    includecontainers: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    includeparameters: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    includeparametertypes: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    includecommands: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    includealgorithms: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest;
  return proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludespacesystems(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludecontainers(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeparameters(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeparametertypes(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludecommands(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludealgorithms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool includeSpaceSystems = 2;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.getIncludespacesystems = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.setIncludespacesystems = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.clearIncludespacesystems = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.hasIncludespacesystems = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool includeContainers = 3;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.getIncludecontainers = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.setIncludecontainers = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.clearIncludecontainers = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.hasIncludecontainers = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool includeParameters = 4;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.getIncludeparameters = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.setIncludeparameters = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.clearIncludeparameters = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.hasIncludeparameters = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool includeParameterTypes = 5;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.getIncludeparametertypes = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.setIncludeparametertypes = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.clearIncludeparametertypes = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.hasIncludeparametertypes = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool includeCommands = 6;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.getIncludecommands = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.setIncludecommands = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.clearIncludecommands = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.hasIncludecommands = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool includeAlgorithms = 7;
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.getIncludealgorithms = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.setIncludealgorithms = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest} returns this
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.clearIncludealgorithms = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.StreamMissionDatabaseRequest.prototype.hasIncludealgorithms = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.ItemCase = {
  ITEM_NOT_SET: 0,
  SPACESYSTEM: 1,
  CONTAINER: 2,
  PARAMETER: 3,
  PARAMETERTYPE: 4,
  COMMAND: 5,
  ALGORITHM: 6
};

/**
 * @return {proto.yamcs.protobuf.mdb.MissionDatabaseItem.ItemCase}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.getItemCase = function() {
  return /** @type {proto.yamcs.protobuf.mdb.MissionDatabaseItem.ItemCase} */(jspb.Message.computeOneofCase(this, proto.yamcs.protobuf.mdb.MissionDatabaseItem.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.MissionDatabaseItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.MissionDatabaseItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    spacesystem: (f = msg.getSpacesystem()) && proto.yamcs.protobuf.mdb.SpaceSystemInfo.toObject(includeInstance, f),
    container: (f = msg.getContainer()) && proto.yamcs.protobuf.mdb.ContainerInfo.toObject(includeInstance, f),
    parameter: (f = msg.getParameter()) && proto.yamcs.protobuf.mdb.ParameterInfo.toObject(includeInstance, f),
    parametertype: (f = msg.getParametertype()) && proto.yamcs.protobuf.mdb.ParameterTypeInfo.toObject(includeInstance, f),
    command: (f = msg.getCommand()) && proto.yamcs.protobuf.mdb.CommandInfo.toObject(includeInstance, f),
    algorithm: (f = msg.getAlgorithm()) && proto.yamcs.protobuf.mdb.AlgorithmInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabaseItem}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.MissionDatabaseItem;
  return proto.yamcs.protobuf.mdb.MissionDatabaseItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.MissionDatabaseItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabaseItem}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yamcs.protobuf.mdb.SpaceSystemInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.SpaceSystemInfo.deserializeBinaryFromReader);
      msg.setSpacesystem(value);
      break;
    case 2:
      var value = new proto.yamcs.protobuf.mdb.ContainerInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ContainerInfo.deserializeBinaryFromReader);
      msg.setContainer(value);
      break;
    case 3:
      var value = new proto.yamcs.protobuf.mdb.ParameterInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterInfo.deserializeBinaryFromReader);
      msg.setParameter(value);
      break;
    case 4:
      var value = new proto.yamcs.protobuf.mdb.ParameterTypeInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.ParameterTypeInfo.deserializeBinaryFromReader);
      msg.setParametertype(value);
      break;
    case 5:
      var value = new proto.yamcs.protobuf.mdb.CommandInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.CommandInfo.deserializeBinaryFromReader);
      msg.setCommand(value);
      break;
    case 6:
      var value = new proto.yamcs.protobuf.mdb.AlgorithmInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.AlgorithmInfo.deserializeBinaryFromReader);
      msg.setAlgorithm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.MissionDatabaseItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.MissionDatabaseItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpacesystem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.SpaceSystemInfo.serializeBinaryToWriter
    );
  }
  f = message.getContainer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yamcs.protobuf.mdb.ContainerInfo.serializeBinaryToWriter
    );
  }
  f = message.getParameter();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yamcs.protobuf.mdb.ParameterInfo.serializeBinaryToWriter
    );
  }
  f = message.getParametertype();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yamcs.protobuf.mdb.ParameterTypeInfo.serializeBinaryToWriter
    );
  }
  f = message.getCommand();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.yamcs.protobuf.mdb.CommandInfo.serializeBinaryToWriter
    );
  }
  f = message.getAlgorithm();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yamcs.protobuf.mdb.AlgorithmInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional SpaceSystemInfo spaceSystem = 1;
 * @return {?proto.yamcs.protobuf.mdb.SpaceSystemInfo}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.getSpacesystem = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.SpaceSystemInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.SpaceSystemInfo, 1));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.SpaceSystemInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabaseItem} returns this
*/
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.setSpacesystem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.yamcs.protobuf.mdb.MissionDatabaseItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabaseItem} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.clearSpacesystem = function() {
  return this.setSpacesystem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.hasSpacesystem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ContainerInfo container = 2;
 * @return {?proto.yamcs.protobuf.mdb.ContainerInfo}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.getContainer = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ContainerInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ContainerInfo, 2));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ContainerInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabaseItem} returns this
*/
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.setContainer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.yamcs.protobuf.mdb.MissionDatabaseItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabaseItem} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.clearContainer = function() {
  return this.setContainer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.hasContainer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ParameterInfo parameter = 3;
 * @return {?proto.yamcs.protobuf.mdb.ParameterInfo}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.getParameter = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ParameterInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ParameterInfo, 3));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ParameterInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabaseItem} returns this
*/
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.setParameter = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.yamcs.protobuf.mdb.MissionDatabaseItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabaseItem} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.clearParameter = function() {
  return this.setParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.hasParameter = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ParameterTypeInfo parameterType = 4;
 * @return {?proto.yamcs.protobuf.mdb.ParameterTypeInfo}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.getParametertype = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.ParameterTypeInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.ParameterTypeInfo, 4));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.ParameterTypeInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabaseItem} returns this
*/
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.setParametertype = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.yamcs.protobuf.mdb.MissionDatabaseItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabaseItem} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.clearParametertype = function() {
  return this.setParametertype(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.hasParametertype = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CommandInfo command = 5;
 * @return {?proto.yamcs.protobuf.mdb.CommandInfo}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.getCommand = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.CommandInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.CommandInfo, 5));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.CommandInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabaseItem} returns this
*/
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.setCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.yamcs.protobuf.mdb.MissionDatabaseItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabaseItem} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.clearCommand = function() {
  return this.setCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.hasCommand = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AlgorithmInfo algorithm = 6;
 * @return {?proto.yamcs.protobuf.mdb.AlgorithmInfo}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.getAlgorithm = function() {
  return /** @type{?proto.yamcs.protobuf.mdb.AlgorithmInfo} */ (
    jspb.Message.getWrapperField(this, proto.yamcs.protobuf.mdb.AlgorithmInfo, 6));
};


/**
 * @param {?proto.yamcs.protobuf.mdb.AlgorithmInfo|undefined} value
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabaseItem} returns this
*/
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.setAlgorithm = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.yamcs.protobuf.mdb.MissionDatabaseItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.MissionDatabaseItem} returns this
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.clearAlgorithm = function() {
  return this.setAlgorithm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.MissionDatabaseItem.prototype.hasAlgorithm = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    spacesystemsList: jspb.Message.toObjectList(msg.getSpacesystemsList(),
    proto.yamcs.protobuf.mdb.SpaceSystemInfo.toObject, includeInstance),
    continuationtoken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    totalsize: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse;
  return proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yamcs.protobuf.mdb.SpaceSystemInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.SpaceSystemInfo.deserializeBinaryFromReader);
      msg.addSpacesystems(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContinuationtoken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpacesystemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yamcs.protobuf.mdb.SpaceSystemInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated SpaceSystemInfo spaceSystems = 1;
 * @return {!Array<!proto.yamcs.protobuf.mdb.SpaceSystemInfo>}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.prototype.getSpacesystemsList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.SpaceSystemInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.SpaceSystemInfo, 1));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.SpaceSystemInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse} returns this
*/
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.prototype.setSpacesystemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.SpaceSystemInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.prototype.addSpacesystems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yamcs.protobuf.mdb.SpaceSystemInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.prototype.clearSpacesystemsList = function() {
  return this.setSpacesystemsList([]);
};


/**
 * optional string continuationToken = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.prototype.getContinuationtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.prototype.setContinuationtoken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.prototype.clearContinuationtoken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.prototype.hasContinuationtoken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 totalSize = 3;
 * @return {number}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.prototype.getTotalsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.prototype.setTotalsize = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse} returns this
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.prototype.clearTotalsize = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ListSpaceSystemsResponse.prototype.hasTotalsize = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.GetSpaceSystemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.GetSpaceSystemRequest}
 */
proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.GetSpaceSystemRequest;
  return proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.GetSpaceSystemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.GetSpaceSystemRequest}
 */
proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.GetSpaceSystemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.GetSpaceSystemRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.GetSpaceSystemRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.GetSpaceSystemRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.GetSpaceSystemRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.GetSpaceSystemRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.ExportXtceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.ExportXtceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.ExportXtceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ExportXtceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.ExportXtceRequest}
 */
proto.yamcs.protobuf.mdb.ExportXtceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.ExportXtceRequest;
  return proto.yamcs.protobuf.mdb.ExportXtceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.ExportXtceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.ExportXtceRequest}
 */
proto.yamcs.protobuf.mdb.ExportXtceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.ExportXtceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.ExportXtceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.ExportXtceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.ExportXtceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ExportXtceRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ExportXtceRequest} returns this
 */
proto.yamcs.protobuf.mdb.ExportXtceRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ExportXtceRequest} returns this
 */
proto.yamcs.protobuf.mdb.ExportXtceRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ExportXtceRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.ExportXtceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.ExportXtceRequest} returns this
 */
proto.yamcs.protobuf.mdb.ExportXtceRequest.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.ExportXtceRequest} returns this
 */
proto.yamcs.protobuf.mdb.ExportXtceRequest.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.ExportXtceRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.GetCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.GetCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.GetCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.GetCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.GetCommandRequest}
 */
proto.yamcs.protobuf.mdb.GetCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.GetCommandRequest;
  return proto.yamcs.protobuf.mdb.GetCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.GetCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.GetCommandRequest}
 */
proto.yamcs.protobuf.mdb.GetCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.GetCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.GetCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.GetCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.GetCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.GetCommandRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.GetCommandRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetCommandRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.GetCommandRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetCommandRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.GetCommandRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.GetCommandRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.GetCommandRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetCommandRequest.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.GetCommandRequest} returns this
 */
proto.yamcs.protobuf.mdb.GetCommandRequest.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.GetCommandRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.repeatedFields_ = [16,14,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.mdb.SpaceSystemInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    qualifiedname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    shortdescription: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    longdescription: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    aliasList: jspb.Message.toObjectList(msg.getAliasList(),
    yamcs_protobuf_yamcs_pb.NamedObjectId.toObject, includeInstance),
    version: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    historyList: jspb.Message.toObjectList(msg.getHistoryList(),
    proto.yamcs.protobuf.mdb.HistoryInfo.toObject, includeInstance),
    subList: jspb.Message.toObjectList(msg.getSubList(),
    proto.yamcs.protobuf.mdb.SpaceSystemInfo.toObject, includeInstance),
    ancillarydataMap: (f = msg.getAncillarydataMap()) ? f.toObject(includeInstance, proto.yamcs.protobuf.mdb.AncillaryDataInfo.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.mdb.SpaceSystemInfo;
  return proto.yamcs.protobuf.mdb.SpaceSystemInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQualifiedname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortdescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongdescription(value);
      break;
    case 16:
      var value = new yamcs_protobuf_yamcs_pb.NamedObjectId;
      reader.readMessage(value,yamcs_protobuf_yamcs_pb.NamedObjectId.deserializeBinaryFromReader);
      msg.addAlias(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 14:
      var value = new proto.yamcs.protobuf.mdb.HistoryInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.HistoryInfo.deserializeBinaryFromReader);
      msg.addHistory(value);
      break;
    case 15:
      var value = new proto.yamcs.protobuf.mdb.SpaceSystemInfo;
      reader.readMessage(value,proto.yamcs.protobuf.mdb.SpaceSystemInfo.deserializeBinaryFromReader);
      msg.addSub(value);
      break;
    case 17:
      var value = msg.getAncillarydataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.yamcs.protobuf.mdb.AncillaryDataInfo.deserializeBinaryFromReader, "", new proto.yamcs.protobuf.mdb.AncillaryDataInfo());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.mdb.SpaceSystemInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAliasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      yamcs_protobuf_yamcs_pb.NamedObjectId.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.yamcs.protobuf.mdb.HistoryInfo.serializeBinaryToWriter
    );
  }
  f = message.getSubList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.yamcs.protobuf.mdb.SpaceSystemInfo.serializeBinaryToWriter
    );
  }
  f = message.getAncillarydataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(17, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.yamcs.protobuf.mdb.AncillaryDataInfo.serializeBinaryToWriter);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string qualifiedName = 2;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.getQualifiedname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.setQualifiedname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.clearQualifiedname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.hasQualifiedname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string shortDescription = 3;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.getShortdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.setShortdescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.clearShortdescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.hasShortdescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string longDescription = 4;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.getLongdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.setLongdescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.clearLongdescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.hasLongdescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated yamcs.protobuf.NamedObjectId alias = 16;
 * @return {!Array<!proto.yamcs.protobuf.NamedObjectId>}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.getAliasList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.NamedObjectId>} */ (
    jspb.Message.getRepeatedWrapperField(this, yamcs_protobuf_yamcs_pb.NamedObjectId, 16));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.NamedObjectId>} value
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
*/
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.setAliasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.yamcs.protobuf.NamedObjectId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.NamedObjectId}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.addAlias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.yamcs.protobuf.NamedObjectId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.clearAliasList = function() {
  return this.setAliasList([]);
};


/**
 * optional string version = 5;
 * @return {string}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated HistoryInfo history = 14;
 * @return {!Array<!proto.yamcs.protobuf.mdb.HistoryInfo>}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.getHistoryList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.HistoryInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.HistoryInfo, 14));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.HistoryInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
*/
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.setHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.HistoryInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.HistoryInfo}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.addHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.yamcs.protobuf.mdb.HistoryInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.clearHistoryList = function() {
  return this.setHistoryList([]);
};


/**
 * repeated SpaceSystemInfo sub = 15;
 * @return {!Array<!proto.yamcs.protobuf.mdb.SpaceSystemInfo>}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.getSubList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.mdb.SpaceSystemInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.mdb.SpaceSystemInfo, 15));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.mdb.SpaceSystemInfo>} value
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
*/
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.setSubList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.yamcs.protobuf.mdb.SpaceSystemInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.addSub = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.yamcs.protobuf.mdb.SpaceSystemInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.clearSubList = function() {
  return this.setSubList([]);
};


/**
 * map<string, AncillaryDataInfo> ancillaryData = 17;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.yamcs.protobuf.mdb.AncillaryDataInfo>}
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.getAncillarydataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.yamcs.protobuf.mdb.AncillaryDataInfo>} */ (
      jspb.Message.getMapField(this, 17, opt_noLazyCreate,
      proto.yamcs.protobuf.mdb.AncillaryDataInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yamcs.protobuf.mdb.SpaceSystemInfo} returns this
 */
proto.yamcs.protobuf.mdb.SpaceSystemInfo.prototype.clearAncillarydataMap = function() {
  this.getAncillarydataMap().clear();
  return this;
};


/**
 * @enum {number}
 */
proto.yamcs.protobuf.mdb.DataSourceType = {
  TELEMETERED: 0,
  DERIVED: 1,
  CONSTANT: 2,
  LOCAL: 3,
  SYSTEM: 4,
  COMMAND: 5,
  COMMAND_HISTORY: 6,
  EXTERNAL1: 7,
  EXTERNAL2: 8,
  EXTERNAL3: 9,
  GROUND: 10
};

/**
 * @enum {number}
 */
proto.yamcs.protobuf.mdb.AlarmLevelType = {
  NORMAL: 0,
  WATCH: 1,
  WARNING: 2,
  DISTRESS: 3,
  CRITICAL: 4,
  SEVERE: 5
};

goog.object.extend(exports, proto.yamcs.protobuf.mdb);
