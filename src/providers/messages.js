import {OBJECT_TYPES, DATA_TYPES, MDB_TYPE} from '../const';

const { Any } = require('google-protobuf/google/protobuf/any_pb.js');
const { SubscribeEventsRequest } = require('../../protos/yamcs/protobuf/events/events_service_pb.js');
const { SubscribeAlarmsRequest } = require('../../protos/yamcs/protobuf/alarms/alarms_service_pb.js');
const { SubscribeCommandsRequest } = require('../../protos/yamcs/protobuf/commanding/commands_service_pb.js');
const { SubscribeParametersRequest } = require('../../protos/yamcs/protobuf/processing/processing_pb.js');
const { SubscribeMdbChangesRequest } = require('../../protos/yamcs/protobuf/processing/mdb_override_service_pb.js');
const { NamedObjectId } = require('../../protos/yamcs/protobuf/yamcs_pb.js');
const { ClientMessage } = require('../../protos/yamcs/api/websocket_pb');
console.log('ClientMessage', ClientMessage);

const typeMap = {
    [OBJECT_TYPES.COMMANDS_OBJECT_TYPE]: DATA_TYPES.DATA_TYPE_COMMANDS,
    [OBJECT_TYPES.EVENTS_OBJECT_TYPE]: DATA_TYPES.DATA_TYPE_EVENTS,
    [OBJECT_TYPES.TELEMETRY_OBJECT_TYPE]: DATA_TYPES.DATA_TYPE_TELEMETRY,
    [OBJECT_TYPES.STRING_OBJECT_TYPE]: DATA_TYPES.DATA_TYPE_TELEMETRY,
    [OBJECT_TYPES.IMAGE_OBJECT_TYPE]: DATA_TYPES.DATA_TYPE_TELEMETRY,
    [OBJECT_TYPES.AGGREGATE_TELEMETRY_TYPE]: DATA_TYPES.DATA_TYPE_TELEMETRY,
    [OBJECT_TYPES.OPERATOR_STATUS_TYPE]: DATA_TYPES.DATA_TYPE_TELEMETRY,
    [OBJECT_TYPES.POLL_QUESTION_TYPE]: DATA_TYPES.DATA_TYPE_TELEMETRY,
    [OBJECT_TYPES.ALARMS_TYPE]: DATA_TYPES.DATA_TYPE_ALARMS,
    [OBJECT_TYPES.GLOBAL_STATUS_TYPE]: DATA_TYPES.DATA_TYPE_GLOBAL_STATUS,
    [MDB_TYPE]: DATA_TYPES.DATA_TYPE_MDB_CHANGES
};

export const SUBSCRIBE = buildSubscribeMessages();
// eslint-disable-next-line func-style
export const UNSUBSCRIBE = (subscriptionDetails) => {
    return {
        call: `${subscriptionDetails.call}`
    };
};

function buildSubscribeMessages() {
    let subscriptionMessages = {};

    for (const [objectType, dataType] of Object.entries(typeMap)) {

        subscriptionMessages[objectType] = (subscriptionDetails) => {
            const { subscriptionId, instance, processor = "realtime", name } = subscriptionDetails;
            let payload;
            let arrayBuffer;
            let message;
            let payloadAny = new Any();

            if (isEventType(objectType)) {
                message = {
                    instance
                };

                payload = new SubscribeEventsRequest();
                payload.setInstance(instance);
                payloadAny.pack(payload.serializeBinary(), 'yamcs.protobuf.events.SubscribeEventsRequest');
            } else if (isAlarmType(objectType)) {
                message = {
                    instance,
                    processor
                };

                payload = new SubscribeAlarmsRequest();
                payload.setInstance(instance);
                payload.setProcessor(processor);
                payloadAny.pack(payload.serializeBinary(), 'yamcs.protobuf.alarms.SubscribeAlarmsRequest');
            } else if (isCommandType(objectType)) {
                message = {
                    instance,
                    processor,
                    ignorePastCommands: true
                };

                payload = new SubscribeCommandsRequest();
                payload.setInstance(instance);
                payload.setProcessor(processor);
                payload.setIgnorepastcommands(true);
                payloadAny.pack(payload.serializeBinary(), 'yamcs.protobuf.commanding.SubscribeCommandsRequest');

            } else if (isMdbChangesType(objectType)) {
                message = {
                    instance,
                    processor
                };

                payload = new SubscribeMdbChangesRequest();
                payload.setInstance(instance);
                payload.setProcessor(processor);
                payloadAny.pack(payload.serializeBinary(), 'yamcs.protobuf.processing.SubscribeMdbChangesRequest');
            } else {
                const id = [new NamedObjectId()];
                id[0].setName(name);

                payload = new SubscribeParametersRequest();
                payload.setInstance(instance);
                payload.setProcessor(processor);
                payload.setIdList(id);
                payload.setSendfromcache(true);
                payload.setUpdateonexpiration(true);
                payloadAny.pack(payload.serializeBinary(), 'yamcs.protobuf.processing.SubscribeParametersRequest');
            }

            const clientMessage = new ClientMessage();
            clientMessage.setType(dataType);
            clientMessage.setId(subscriptionId);
            clientMessage.setOptions(payloadAny);

            arrayBuffer = clientMessage.serializeBinary();

            return arrayBuffer;
        };
    }

    return subscriptionMessages;
}

function isEventType(type) {
    return type === OBJECT_TYPES.EVENTS_OBJECT_TYPE;
}

function isAlarmType(type) {
    return type === OBJECT_TYPES.ALARMS_TYPE
        || type === OBJECT_TYPES.GLOBAL_STATUS_TYPE;
}

function isCommandType(type) {
    return type === OBJECT_TYPES.COMMANDS_OBJECT_TYPE;
}

function isMdbChangesType(type) {
    return type === MDB_TYPE;
}
