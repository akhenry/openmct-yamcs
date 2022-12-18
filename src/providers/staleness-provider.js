import { DATA_TYPES, NAMESPACE, OBJECT_TYPES } from '../../const';

export default class StalenessProvider {
    constructor(instance, realtimeTelemetryProvider) {
        this.instance = instance;
        this.realtimeProvider = realtimeTelemetryProvider;

        this.lastSubscriptionId = 1;
        this.subscriptionsByCall = new Map();
        this.subscriptionsById = {};
    }

    supportsStaleness(domainObject) {
        return domainObject.type.startsWith('yamcs.');
    }

    subscribe(domainObject, callback) {
        const UPDATE_ON_EXPIRATION = true;
        const stalenessUnsubscribe = this.realtimeProvider.subscribe(
            domainObject,
            (response) => {
                this.handleResponse(response, callback);
            },
            UPDATE_ON_EXPIRATION
        );

        return () => {
            stalenessUnsubscribe();
        };
    }

    handleResponse(type, response, callback) {
        // determin staleness based on aquisitionStatus
        console.log('response', response);

        callback(response);
    }
}
