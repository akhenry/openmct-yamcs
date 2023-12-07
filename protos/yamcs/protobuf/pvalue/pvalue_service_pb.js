// source: yamcs/protobuf/pvalue/pvalue_service.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var yamcs_api_annotations_pb = require('../../../yamcs/api/annotations_pb.js');
goog.object.extend(proto, yamcs_api_annotations_pb);
var yamcs_protobuf_yamcs_pb = require('../../../yamcs/protobuf/yamcs_pb.js');
goog.object.extend(proto, yamcs_protobuf_yamcs_pb);
goog.exportSymbol('proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest', null, global);
goog.exportSymbol('proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse', null, global);
goog.exportSymbol('proto.yamcs.protobuf.pvalue.ParameterValueUpdate', null, global);
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
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.repeatedFields_, null);
};
goog.inherits(proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.displayName = 'proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest';
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
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.displayName = 'proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse';
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
proto.yamcs.protobuf.pvalue.ParameterValueUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.pvalue.ParameterValueUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.pvalue.ParameterValueUpdate.displayName = 'proto.yamcs.protobuf.pvalue.ParameterValueUpdate';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.repeatedFields_ = [3];



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
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    stream: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.yamcs.protobuf.pvalue.ParameterValueUpdate.toObject, includeInstance)
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
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest;
  return proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setStream(value);
      break;
    case 3:
      var value = new proto.yamcs.protobuf.pvalue.ParameterValueUpdate;
      reader.readMessage(value,proto.yamcs.protobuf.pvalue.ParameterValueUpdate.deserializeBinaryFromReader);
      msg.addValues(value);
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
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yamcs.protobuf.pvalue.ParameterValueUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest} returns this
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest} returns this
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string stream = 2;
 * @return {string}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.prototype.getStream = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest} returns this
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.prototype.setStream = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest} returns this
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.prototype.clearStream = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.prototype.hasStream = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ParameterValueUpdate values = 3;
 * @return {!Array<!proto.yamcs.protobuf.pvalue.ParameterValueUpdate>}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.yamcs.protobuf.pvalue.ParameterValueUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yamcs.protobuf.pvalue.ParameterValueUpdate, 3));
};


/**
 * @param {!Array<!proto.yamcs.protobuf.pvalue.ParameterValueUpdate>} value
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest} returns this
*/
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yamcs.protobuf.pvalue.ParameterValueUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yamcs.protobuf.pvalue.ParameterValueUpdate}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yamcs.protobuf.pvalue.ParameterValueUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest} returns this
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesRequest.prototype.clearValuesList = function() {
  return this.setValuesList([]);
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
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuecount: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    mingenerationtime: (f = msg.getMingenerationtime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    maxgenerationtime: (f = msg.getMaxgenerationtime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse;
  return proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setValuecount(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setMingenerationtime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setMaxgenerationtime(value);
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
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMingenerationtime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMaxgenerationtime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 valueCount = 1;
 * @return {number}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.prototype.getValuecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse} returns this
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.prototype.setValuecount = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse} returns this
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.prototype.clearValuecount = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.prototype.hasValuecount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp minGenerationTime = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.prototype.getMingenerationtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse} returns this
*/
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.prototype.setMingenerationtime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse} returns this
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.prototype.clearMingenerationtime = function() {
  return this.setMingenerationtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.prototype.hasMingenerationtime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp maxGenerationTime = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.prototype.getMaxgenerationtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse} returns this
*/
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.prototype.setMaxgenerationtime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse} returns this
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.prototype.clearMaxgenerationtime = function() {
  return this.setMaxgenerationtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.pvalue.LoadParameterValuesResponse.prototype.hasMaxgenerationtime = function() {
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
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.pvalue.ParameterValueUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.pvalue.ParameterValueUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    parameter: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    value: (f = msg.getValue()) && yamcs_protobuf_yamcs_pb.Value.toObject(includeInstance, f),
    generationtime: (f = msg.getGenerationtime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expiresin: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.yamcs.protobuf.pvalue.ParameterValueUpdate}
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.pvalue.ParameterValueUpdate;
  return proto.yamcs.protobuf.pvalue.ParameterValueUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.pvalue.ParameterValueUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.pvalue.ParameterValueUpdate}
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParameter(value);
      break;
    case 2:
      var value = new yamcs_protobuf_yamcs_pb.Value;
      reader.readMessage(value,yamcs_protobuf_yamcs_pb.Value.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setGenerationtime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExpiresin(value);
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
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.pvalue.ParameterValueUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.pvalue.ParameterValueUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yamcs_protobuf_yamcs_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getGenerationtime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string parameter = 1;
 * @return {string}
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.getParameter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.pvalue.ParameterValueUpdate} returns this
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.setParameter = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.pvalue.ParameterValueUpdate} returns this
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.clearParameter = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.hasParameter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional yamcs.protobuf.Value value = 2;
 * @return {?proto.yamcs.protobuf.Value}
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.getValue = function() {
  return /** @type{?proto.yamcs.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, yamcs_protobuf_yamcs_pb.Value, 2));
};


/**
 * @param {?proto.yamcs.protobuf.Value|undefined} value
 * @return {!proto.yamcs.protobuf.pvalue.ParameterValueUpdate} returns this
*/
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.pvalue.ParameterValueUpdate} returns this
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp generationTime = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.getGenerationtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yamcs.protobuf.pvalue.ParameterValueUpdate} returns this
*/
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.setGenerationtime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yamcs.protobuf.pvalue.ParameterValueUpdate} returns this
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.clearGenerationtime = function() {
  return this.setGenerationtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.hasGenerationtime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 expiresIn = 4;
 * @return {number}
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.getExpiresin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yamcs.protobuf.pvalue.ParameterValueUpdate} returns this
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.setExpiresin = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.pvalue.ParameterValueUpdate} returns this
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.clearExpiresin = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.pvalue.ParameterValueUpdate.prototype.hasExpiresin = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.yamcs.protobuf.pvalue);
