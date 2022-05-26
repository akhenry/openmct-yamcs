import { OBJECT_TYPES, DATA_TYPES } from '../const';


const typeMap = {
    [OBJECT_TYPES.EVENTS_OBJECT_TYPE]: DATA_TYPES.DATA_TYPE_EVENTS,
    [OBJECT_TYPES.TELEMETRY_OBJECT_TYPE]: DATA_TYPES.DATA_TYPE_TELEMETRY,
    [OBJECT_TYPES.STRING_OBJECT_TYPE]: DATA_TYPES.DATA_TYPE_TELEMETRY,
    [OBJECT_TYPES.IMAGE_OBJECT_TYPE]: DATA_TYPES.DATA_TYPE_TELEMETRY,
    [OBJECT_TYPES.AGGREGATE_TELEMETRY_TYPE]: DATA_TYPES.DATA_TYPE_TELEMETRY
};

function buildSubscribeMessages() {
    let subscriptionMessages = {};

    for (const [objectType, dataType] of Object.entries(typeMap)) {

        subscriptionMessages[objectType] = (subscriptionDetails) => {
            let message;

            if (objectType === OBJECT_TYPES.EVENTS_OBJECT_TYPE) {
                message = `{
                    "type": "${dataType}",
                    "id": "${subscriptionDetails.subscriptionId}",
                    "options": {
                        "instance": "${subscriptionDetails.instance}"
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
                        "sendFromCache": true
                    }
                }`;
            }

            return message;
        };
    }

    return subscriptionMessages;
}
export const SUBSCRIBE = buildSubscribeMessages();

export const UNSUBSCRIBE = (subscriptionDetails) => {
    return `{
        "type": "cancel",
        "options": {
            "call": "${subscriptionDetails.call}"
        }
    }`;
};
