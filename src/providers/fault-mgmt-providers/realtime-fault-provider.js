import { FAULT_MANAGEMENT_TYPE } from './fault-mgmt-constants.js';
import { DATA_TYPES, NAMESPACE, OBJECT_TYPES } from '../../const.js';

export default class RealtimeFaultProvider {
    #openmct;
    constructor(openmct, faultModelConverter, instance) {
        this.#openmct = openmct;
        this.faultModelConverter = faultModelConverter;
        this.instance = instance;

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
        const globalUnsubscribe = this.#openmct.telemetry.subscribe(
            this.GLOBAL_STATUS_OBJECT,
            (response) => {
                this.handleResponse(DATA_TYPES.DATA_TYPE_GLOBAL_STATUS, response, callback);
            });

        const alarmsUnsubscribe = this.#openmct.telemetry.subscribe(
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
