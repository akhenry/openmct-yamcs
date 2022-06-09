import { FAULT_MANAGEMENT_ALARMS, FAULT_MANAGEMENT_GLOBAL_ALARMS, FAULT_MANAGEMENT_TYPE } from './fault-mgmt-constants';
import { DATA_TYPES } from '../../const';

export default class RealtimeFaultProvider {
    constructor(faultModelConvertor, socket, instance) {
        this.faultModelConvertor = faultModelConvertor;
        this.socket = socket;
        this.instance = instance;

        this.lastSubscriptionId = 1;
        this.subscriptionsByCall = new Map();
        this.subscriptionsById = {};
    }

    supportsSubscribe(domainObject) {
        return domainObject.type === FAULT_MANAGEMENT_TYPE;
    }

    subscribe(domainObject, callback) {
        const globalAlarmSubscriptionId = this.lastSubscriptionId++;
        const alarmSubscriptionId = this.lastSubscriptionId++;

        this.subscriptionsById[globalAlarmSubscriptionId] = {
            id: globalAlarmSubscriptionId,
            type: FAULT_MANAGEMENT_GLOBAL_ALARMS,
            callback
        };

        this.subscriptionsById[alarmSubscriptionId] = {
            id: alarmSubscriptionId,
            type: FAULT_MANAGEMENT_ALARMS,
            callback
        };

        this.socket.onopen(this._onopen.bind(this));
        this.socket.onmessage(this._onmessage.bind(this));

        this._sendSubscribeMessage(this.subscriptionsById[globalAlarmSubscriptionId]);
        this._sendSubscribeMessage(this.subscriptionsById[alarmSubscriptionId]);

        return () => {
            this._sendUnsubscribeMessage(this.subscriptionsById[globalAlarmSubscriptionId]);
            this._sendUnsubscribeMessage(this.subscriptionsById[alarmSubscriptionId]);

            if (this.subscriptionsById[globalAlarmSubscriptionId]) {
                this.subscriptionsByCall.delete(this.subscriptionsById[globalAlarmSubscriptionId].call);
                delete this.subscriptionsById[globalAlarmSubscriptionId];
            }

            if (this.subscriptionsById[alarmSubscriptionId]) {
                this.subscriptionsByCall.delete(this.subscriptionsById[alarmSubscriptionId].call);
                delete this.subscriptionsById[alarmSubscriptionId];
            }
        };
    }

    _onmessage(event) {
        if (!event) {
            return;
        }

        let eventData = JSON.parse(event.data);

        let subscriptionDetails;
        let isReply = eventData.type === DATA_TYPES.DATA_TYPE_REPLY;
        if (isReply) {
            let id = eventData.data.replyTo;
            let call = eventData.call;
            subscriptionDetails = this.subscriptionsById[id];
            if (!subscriptionDetails) {
                return;
            }

            subscriptionDetails.call = call;
            this.subscriptionsById[id] = subscriptionDetails;
            this.subscriptionsByCall.set(call, subscriptionDetails);
        } else {
            subscriptionDetails = this.subscriptionsByCall.get(eventData.call);
        }

        if (!subscriptionDetails) {
            return;
        }

        if (eventData.type !== FAULT_MANAGEMENT_ALARMS && eventData.type !== FAULT_MANAGEMENT_GLOBAL_ALARMS) {
            return;
        }

        const faultData = this.faultModelConvertor(eventData.data, eventData.type);

        subscriptionDetails.callback(faultData);
    }

    _onopen() {
        this._resubscribeToAll();
    }

    _resubscribeToAll() {
        this.subscriptionsByCall.forEach(this._sendSubscribeMessage);
    }

    _sendSubscribeMessage(subscriptionDetails) {
        const { id, type } = subscriptionDetails;
        let message = {
            type,
            id,
            options: {
                instance: this.instance,
                processor: 'realtime'
            }
        };

        this.socket.sendOrQueueMessage(JSON.stringify(message));
    }

    _sendUnsubscribeMessage({ call }) {
        let message = {
            type: 'cancel',
            options: {
                call
            }
        };

        this.socket.sendOrQueueMessage(JSON.stringify(message));
    }
}
