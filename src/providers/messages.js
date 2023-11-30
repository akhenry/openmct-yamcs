import {OBJECT_TYPES, DATA_TYPES, MDB_TYPE} from '../const';
import { yamcs } from 'yamcs-protobufjs-static';

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
            const { instance, processor = "realtime", name } = subscriptionDetails;
            let arrayBuffer;
            let message;

            if (isEventType(objectType)) {
                message = {
                    instance: `${instance}`
                };
                arrayBuffer = yamcs.protobuf.events.SubscribeEventsRequest.encode(message).finish();
            } else if (isAlarmType(objectType)) {
                message = {
                    instance: `${instance}`,
                    processor: `${processor}`
                };
                arrayBuffer = yamcs.protobuf.alarms.SubscribeAlarmsRequest.encode(message).finish();
            } else if (isCommandType(objectType)) {
                message = {
                    instance: `${instance}`,
                    processor: `${processor}`,
                    ignorePastCommands: true
                };
                arrayBuffer = yamcs.protobuf.commanding.SubscribeCommandsRequest.encode(message).finish();

            } else if (isMdbChangesType(objectType)) {
                message = {
                    instance: `${instance}`,
                    processor: `${processor}`
                };
                arrayBuffer = yamcs.protobuf.processing.SubscribeMdbChangesRequest.encode(message).finish();
            } else {
                message = {
                    type: `${dataType}`,
                    instance: `${instance}`,
                    processor: `${processor}`,
                    id: [{
                        name: `${name}`
                    }],
                    sendFromCache: true,
                    updateOnExpiration: true
                };
                arrayBuffer = yamcs.protobuf.processing.SubscribeParametersRequest.encode(message).finish();
            }

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
