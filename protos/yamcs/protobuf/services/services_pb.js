// source: yamcs/protobuf/services/services.proto
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

goog.exportSymbol('proto.yamcs.protobuf.services.ServiceInfo', null, global);
goog.exportSymbol('proto.yamcs.protobuf.services.ServiceState', null, global);
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
proto.yamcs.protobuf.services.ServiceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yamcs.protobuf.services.ServiceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yamcs.protobuf.services.ServiceInfo.displayName = 'proto.yamcs.protobuf.services.ServiceInfo';
}



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
proto.yamcs.protobuf.services.ServiceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yamcs.protobuf.services.ServiceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yamcs.protobuf.services.ServiceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.services.ServiceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    state: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    classname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    processor: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    failuremessage: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    failurecause: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.yamcs.protobuf.services.ServiceInfo}
 */
proto.yamcs.protobuf.services.ServiceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yamcs.protobuf.services.ServiceInfo;
  return proto.yamcs.protobuf.services.ServiceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yamcs.protobuf.services.ServiceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yamcs.protobuf.services.ServiceInfo}
 */
proto.yamcs.protobuf.services.ServiceInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.yamcs.protobuf.services.ServiceState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessor(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailurecause(value);
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
proto.yamcs.protobuf.services.ServiceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yamcs.protobuf.services.ServiceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yamcs.protobuf.services.ServiceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yamcs.protobuf.services.ServiceInfo.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.yamcs.protobuf.services.ServiceState} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
};


/**
 * optional string instance = 1;
 * @return {string}
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.services.ServiceInfo} returns this
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.setInstance = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.services.ServiceInfo} returns this
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.clearInstance = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.services.ServiceInfo} returns this
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.services.ServiceInfo} returns this
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ServiceState state = 3;
 * @return {!proto.yamcs.protobuf.services.ServiceState}
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.getState = function() {
  return /** @type {!proto.yamcs.protobuf.services.ServiceState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.yamcs.protobuf.services.ServiceState} value
 * @return {!proto.yamcs.protobuf.services.ServiceInfo} returns this
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.setState = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.services.ServiceInfo} returns this
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.clearState = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.hasState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string className = 4;
 * @return {string}
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.getClassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.services.ServiceInfo} returns this
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.setClassname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.services.ServiceInfo} returns this
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.clearClassname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.hasClassname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string processor = 5;
 * @return {string}
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.getProcessor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.services.ServiceInfo} returns this
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.setProcessor = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.services.ServiceInfo} returns this
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.clearProcessor = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.hasProcessor = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string failureMessage = 6;
 * @return {string}
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.services.ServiceInfo} returns this
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.services.ServiceInfo} returns this
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string failureCause = 7;
 * @return {string}
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.getFailurecause = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yamcs.protobuf.services.ServiceInfo} returns this
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.setFailurecause = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yamcs.protobuf.services.ServiceInfo} returns this
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.clearFailurecause = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yamcs.protobuf.services.ServiceInfo.prototype.hasFailurecause = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * @enum {number}
 */
proto.yamcs.protobuf.services.ServiceState = {
  NEW: 0,
  STARTING: 1,
  RUNNING: 2,
  STOPPING: 3,
  TERMINATED: 4,
  FAILED: 5
};

goog.object.extend(exports, proto.yamcs.protobuf.services);
