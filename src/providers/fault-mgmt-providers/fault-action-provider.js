import { FAULT_MANAGEMENT_ALARMS, FAULT_MANAGEMENT_DEFAULT_SHELVE_DURATION } from './fault-mgmt-constants';

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
        const url = this._getUrl(fault);

        return this._sendRequest(url, options);
    }

    shelveFault(fault, { shelved = true, comment = '', shelveDuration = FAULT_MANAGEMENT_DEFAULT_SHELVE_DURATION } = {}) {
        let payload = {};
        if (shelved) {
            payload.comment = comment;
            payload.shelveDuration = shelveDuration;
            payload.state = 'shelved';
        } else {
            payload.state = 'unshelved';
        }

        const options = this._getOptions(payload);
        let url = this._getUrl(fault);

        return this._sendRequest(url, options);
    }

    _getOptions(payload) {
        return {
            body: JSON.stringify(payload),
            // credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            mode: 'cors'
        };
    }

    _getUrl(fault) {
        let url = `${this.url}api/processors/${this.instance}/${this.processor}/${FAULT_MANAGEMENT_ALARMS}`;
        url += `${fault.namespace}/${fault.name}`;
        url += `/${fault.seqNum}`;

        return url;
    }

    _sendRequest(url, options) {
        return fetch(url, options);
    }
}
