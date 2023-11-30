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
            let message;

            if (isEventType(objectType)) {
                message = new yamcs.protobuf.events.SubscribeEventsRequest({
                    instance: `${instance}`
                });
            } else if (isAlarmType(objectType)) {
                message = new yamcs.protobuf.alarms.SubscribeAlarmsRequest({
                    instance: `${instance}`,
                    processor: `${processor}`
                });
            } else if (isCommandType(objectType)) {
                message = new yamcs.protobuf.commanding.SubscribeCommandsRequest({
                    instance: `${instance}`,
                    processor: `${processor}`,
                    ignorePastCommands: true
                });

            } else if (isMdbChangesType(objectType)) {
                message = new yamcs.protobuf.processing.SubscribeMdbChangesRequest({
                    instance: `${instance}`,
                    processor: `${processor}`
                });

            } else {
                message = new yamcs.protobuf.processing.SubscribeParametersRequest({
                    type: `${dataType}`,
                    instance: `${instance}`,
                    processor: `${processor}`,
                    id: [{
                        name: `${name}`
                    }],
                    sendFromCache: true,
                    updateOnExpiration: true
                });
            }

            return message;
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
