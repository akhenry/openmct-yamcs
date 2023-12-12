import { OBJECT_TYPES, DATA_TYPES, MDB_TYPE } from '../const';
import { google, yamcs } from 'yamcs-protobufjs-static';

const { SubscribeEventsRequest } = yamcs.protobuf.events;
const { SubscribeAlarmsRequest } = yamcs.protobuf.alarms;
const { SubscribeCommandsRequest } = yamcs.protobuf.commanding;
const { SubscribeParametersRequest, SubscribeMdbChangesRequest } = yamcs.protobuf.processing;
const { ClientMessage, CancelOptions } = yamcs.api;
const { Any } = google.protobuf;

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
    const { call } = subscriptionDetails;
    const payload = CancelOptions.create({
        call
    });
    const arrayBuffer = CancelOptions.encode(payload).finish();
    const any = Any.create({
        type_url: CancelOptions.getTypeUrl(),
        value: arrayBuffer
    });
    const clientMessage = ClientMessage.create({
        type: 'cancel',
        options: any
    });

    return ClientMessage.encode(clientMessage).finish();
};

function buildSubscribeMessages() {
    let subscriptionMessages = {};

    for (const [objectType, dataType] of Object.entries(typeMap)) {

        subscriptionMessages[objectType] = (subscriptionDetails) => {
            const { subscriptionId, instance, processor = "realtime", name } = subscriptionDetails;
            let payload;
            let arrayBuffer;
            let message;
            let err;

            if (isEventType(objectType)) {
                message = {
                    instance
                };
                err = SubscribeEventsRequest.verify(message);
                if (err) {
                    throw Error(err);
                }

                payload = SubscribeEventsRequest.create(message);
                arrayBuffer = SubscribeEventsRequest.encode(payload).finish();
                payload = Any.create({
                    type_url: SubscribeEventsRequest.getTypeUrl(),
                    value: arrayBuffer
                });
            } else if (isAlarmType(objectType)) {
                message = {
                    instance,
                    processor
                };
                err = SubscribeAlarmsRequest.verify(message);
                if (err) {
                    throw Error(err);
                }

                payload = SubscribeAlarmsRequest.create(message);
                arrayBuffer = SubscribeAlarmsRequest.encode(payload).finish();
                payload = Any.create({
                    type_url: SubscribeAlarmsRequest.getTypeUrl(),
                    value: arrayBuffer
                });
            } else if (isCommandType(objectType)) {
                message = {
                    instance,
                    processor,
                    ignorePastCommands: true
                };
                err = SubscribeCommandsRequest.verify(message);
                if (err) {
                    throw Error(err);
                }

                payload = SubscribeCommandsRequest.create(message);
                arrayBuffer = SubscribeCommandsRequest.encode(payload).finish();

                payload = Any.create({
                    type_url: SubscribeCommandsRequest.getTypeUrl(),
                    value: arrayBuffer
                });
            } else if (isMdbChangesType(objectType)) {
                message = {
                    instance,
                    processor
                };
                err = SubscribeMdbChangesRequest.verify(message);
                if (err) {
                    throw Error(err);
                }

                payload = SubscribeMdbChangesRequest.create(message);
                arrayBuffer = SubscribeMdbChangesRequest.encode(payload).finish();
                payload = Any.create({
                    type_url: SubscribeMdbChangesRequest.getTypeUrl(),
                    value: arrayBuffer
                });
            } else {
                const id = [yamcs.protobuf.NamedObjectId.create({ name: `${name}`})];
                message = {
                    type: dataType,
                    instance,
                    processor,
                    id,
                    sendFromCache: true,
                    updateOnExpiration: true
                };
                err = SubscribeParametersRequest.verify(message);
                if (err) {
                    throw Error(err);
                }

                payload = SubscribeParametersRequest.create(message);
                arrayBuffer = SubscribeParametersRequest.encode(payload).finish();
                payload = Any.create({
                    type_url: SubscribeParametersRequest.getTypeUrl(),
                    value: arrayBuffer
                });
            }

            const clientMessage = ClientMessage.create({
                type: dataType,
                id: subscriptionId,
                options: payload
            });

            return ClientMessage.encode(clientMessage).finish();
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
