import { FAULT_MANAGEMENT_TYPE } from './fault-mgmt-constants';
import { DATA_TYPES, NAMESPACE, OBJECT_TYPES } from '../../const';

export default class RealtimeFaultProvider {
    constructor(faultModelConverter, instance, realtimeTelemetryProvider) {
        this.faultModelConverter = faultModelConverter;
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
        const globalUnsubscribe = this.realtimeProvider.subscribe(
            this.GLOBAL_STATUS_OBJECT,
            (response) => {
                this.handleResponse(DATA_TYPES.DATA_TYPE_GLOBAL_STATUS, response, callback);
            });

        const alarmsUnsubscribe = this.realtimeProvider.subscribe(
            this.ALARMS_OBJECT,
            (response) => {
                this.handleResponse(DATA_TYPES.DATA_TYPE_ALARMS, response, callback);
            });

        return () => {
            globalUnsubscribe();
            alarmsUnsubscribe();
        };
    }

    handleResponse(type, response, callback) {
        const faultData = this.faultModelConverter(response, type);

        callback(faultData);
    }
}
