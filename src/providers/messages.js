import { OBJECT_TYPES } from '../const';

export const DATA_TYPE_EVENTS = 'events';
export const DATA_TYPE_TELEMETRY = 'parameters';
export const DATA_TYPE_REPLY = 'reply';

export const SUPPORTED_DATA_TYPES = [DATA_TYPE_EVENTS, DATA_TYPE_TELEMETRY];

const typeMap = {
    [OBJECT_TYPES.EVENTS_OBJECT_TYPE]: DATA_TYPE_EVENTS,
    [OBJECT_TYPES.TELEMETRY_OBJECT_TYPE]: DATA_TYPE_TELEMETRY,
    [OBJECT_TYPES.STRING_OBJECT_TYPE]: DATA_TYPE_TELEMETRY,
    [OBJECT_TYPES.IMAGE_OBJECT_TYPE]: DATA_TYPE_TELEMETRY
};

function buildSubscribeMessages() {
    let subscriptionMessages = {};

    for (let objectType in typeMap) {
        if (typeMap[objectType]) {
            let dataType = typeMap[objectType];

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
                            "sendFromCache": false
                        }
                    }`;
                }

                return message;
            };
        }
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
