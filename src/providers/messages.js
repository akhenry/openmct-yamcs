import { OBJECT_TYPES, DATA_TYPES } from '../const';

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
    ['yamcs.mdbchanges']: DATA_TYPES.DATA_TYPE_MDB_CHANGES
};

export const SUBSCRIBE = buildSubscribeMessages();
// eslint-disable-next-line func-style
export const UNSUBSCRIBE = (subscriptionDetails) => {
    return `{
        "type": "cancel",
        "options": {
            "call": "${subscriptionDetails.call}"
        }
    }`;
};

function buildSubscribeMessages() {
    let subscriptionMessages = {};

    for (const [objectType, dataType] of Object.entries(typeMap)) {

        subscriptionMessages[objectType] = (subscriptionDetails) => {
            let message;

            if (isEventType(objectType)) {
                message = `{
                    "type": "${dataType}",
                    "id": "${subscriptionDetails.subscriptionId}",
                    "options": {
                        "instance": "${subscriptionDetails.instance}"
                    }
                }`;
            } else if (isAlarmType(objectType) || isCommandType(objectType) || isMdbChangesType(objectType)) {
                message = `{
                    "type": "${dataType}",
                    "id": "${subscriptionDetails.subscriptionId}",
                    "options": {
                        "instance": "${subscriptionDetails.instance}",
                        "processor": "realtime"
                    }
                }`;
            } else {
                message = `{
                    "type": "${dataType}",
                    "id": "${subscriptionDetails.subscriptionId}",
                    "options": {
                        "instance": "${subscriptionDetails.instance}",
                        "processor": "realtime",
                        "id": [{
                            "name": "${subscriptionDetails.name}"
                        }],
                        "sendFromCache": true,
                        "updateOnExpiration": true
                    }
                }`;
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
    return type === 'yamcs.mdbchanges';
}
