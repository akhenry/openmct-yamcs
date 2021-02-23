export const SUBSCRIBE = {
    'yamcs.events': (subscriptionDetails) => {
        return `{
            "type": "events",
            "id": "${subscriptionDetails.subscriptionId}",
            "options": {
                "instance": "${subscriptionDetails.instance}"
            }
          }`;
    }
};

export const UNSUBSCRIBE = {
    'yamcs.events': (subscriptionDetails) => {
        return `{
            "type": "cancel",
            "options": {
                "call": "${subscriptionDetails.call}"
            }
          }`;
    }
};

export const DATA_TYPE_REPLY = 'reply';
export const DATA_TYPE_EVENTS = 'events';
