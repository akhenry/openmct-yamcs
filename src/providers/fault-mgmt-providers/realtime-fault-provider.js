import { FAULT_MANAGEMENT_TYPE } from './fault-mgmt-constants';
import { NAMESPACE } from '../../const';
import { OBJECT_TYPES } from '../../const';

export default class RealtimeFaultProvider {
    constructor(faultModelConvertor, instance, realtimeTelemetryProvider) {
        this.faultModelConvertor = faultModelConvertor;
        this.instance = instance;
        this.realtimeProvider = realtimeTelemetryProvider;

        this.lastSubscriptionId = 1;
        this.subscriptionsByCall = new Map();
        this.subscriptionsById = {};

        this.ALARMS_OBJECT = Object.freeze({
            identifier: {
                namespace: NAMESPACE,
                key: OBJECT_TYPES.ALARMS_TYPE
            },
            type: OBJECT_TYPES.ALARMS_TYPE
        });

        this.GLOBAL_STATUS_OBJECT = Object.freeze({
            identifier: {
                namespace: NAMESPACE,
                key: OBJECT_TYPES.GLOBAL_STATUS_TYPE
            },
            type: OBJECT_TYPES.GLOBAL_STATUS_TYPE
        });
    }

    supportsSubscribe(domainObject) {
        return domainObject.type === FAULT_MANAGEMENT_TYPE;
    }

    subscribe(domainObject, callback) {
        const globalUnsubscribe = this.realtimeProvider.subscribe(this.GLOBAL_STATUS_OBJECT, (response) => this.handleResponse(response, callback));
        const alarmsUnsubscribe = this.realtimeProvider.subscribe(this.ALARMS_OBJECT, (response) => this.handleResponse(response, callback));

        return () => {
            globalUnsubscribe();
            alarmsUnsubscribe();
        };
    }

    handleResponse(response, callback) {
        const eventData = JSON.parse(response.data);
        const faultData = this.faultModelConvertor(eventData.data, eventData.type);

        callback(faultData);
    }
}
