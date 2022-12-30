export default class StalenessProvider {
    constructor(instance, realtimeTelemetryProvider) {
        this.instance = instance;
        this.realtimeProvider = realtimeTelemetryProvider;

        this.subscribeToStaleness = this.subscribeToStaleness.bind(this);
    }

    supportsStaleness(domainObject) {
        console.log('supports staleness?', domainObject.name,  domainObject.type.startsWith('yamcs.'));
        return domainObject.type.startsWith('yamcs.');
    }

    subscribeToStaleness(domainObject, callback) {
        console.log('yamcs staleness provider, subscribe to staleness', domainObject.name);
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
        // determine staleness based on aquisitionStatus
        console.log('staleness handleResponse', response);

        callback(response);
    }
}
