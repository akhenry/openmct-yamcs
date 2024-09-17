import { FAULT_MANAGEMENT_ALARMS, FAULT_MANAGEMENT_DEFAULT_SHELVE_DURATION } from './fault-mgmt-constants.js';

export default class FaultActionProvider {
    constructor(url, instance, processor = 'realtime') {
        this.url = url;
        this.instance = instance;
        this.processor = processor;
    }

    acknowledgeFault(fault, { comment = '' } = {}) {
        const payload = {
            comment,
            state: 'acknowledged'
        };
        const options = this._getOptions(payload);
        const url = this._getUrl(fault, 'acknowledge');

        return this._sendRequest(url, options);
    }

    shelveFault(fault, { shelved = true, comment = '', shelveDuration = FAULT_MANAGEMENT_DEFAULT_SHELVE_DURATION } = {}) {
        let payload = {};
        let action = shelved ? 'shelve' : 'unshelve';

        if (shelved) {
            payload.comment = comment;
            payload.shelveDuration = shelveDuration;
        }

        const options = this._getOptions(payload);
        let url = this._getUrl(fault, action);

        return this._sendRequest(url, options);
    }

    _getOptions(payload) {
        return {
            body: JSON.stringify(payload),
            // credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'cors'
        };
    }

    _getUrl(fault, action) {
        let url = `${this.url}api/processors/${this.instance}/${this.processor}/${FAULT_MANAGEMENT_ALARMS}`;
        url += `${fault.namespace}/${fault.name}`;
        url += `/${fault.seqNum}`;
        url += `:${action}`;

        return url;
    }

    _sendRequest(url, options) {
        return fetch(url, options);
    }
}
