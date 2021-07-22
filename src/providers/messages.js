import * as OBJECT_TYPES from '../const';

export const DATA_TYPE_EVENTS = 'events';
export const DATA_TYPE_TELEMETRY = 'parameters';
export const DATA_TYPE_STRING = 'string';
export const DATA_TYPE_IMAGE = 'image';

// YAMCS built-in types
export const DATA_TYPE_REPLY = 'reply';

const typeMap = {
    [OBJECT_TYPES.EVENTS_OBJECT_TYPE]: DATA_TYPE_EVENTS,
    [OBJECT_TYPES.TELEMETRY_OBJECT_TYPE]: DATA_TYPE_TELEMETRY,
    [OBJECT_TYPES.STRING_OBJECT_TYPE]: DATA_TYPE_STRING,
    [OBJECT_TYPES.IMAGE_OBJECT_TYPE]: DATA_TYPE_IMAGE
};

export const SUBSCRIBE = buildSubscribeMessages();

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

    for (let objectType in typeMap) {
        if (typeMap[objectType]) {
            let dataType = typeMap[objectType];

            subscriptionMessages[objectType] = (subscriptionDetails) => {
                return `{
                    "type": ${dataType},
                    "id": "${subscriptionDetails.subscriptionId}",
                    "options": {
                        "instance": "${subscriptionDetails.instance}",
                        "type": "realtime"
                    }
                }`;
            };
        }
    }

    return subscriptionMessages;
}
