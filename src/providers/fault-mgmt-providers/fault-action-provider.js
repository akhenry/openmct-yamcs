import { FAULT_MANAGEMENT_ALARMS, FAULT_MANAGEMENT_DEFAULT_SHELVE_DURATION } from './fault-mgmt-constants';

export default class FaultActionrovider {
    constructor(url, instance) {
        this.url = url;
        this.instance = instance;
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
        const faultName = fault.parameterDetail.triggerValue.id.name;
        const seqNum = fault.seqNum;

        let url = `${this.url}api/processors/${this.instance}/realtime/${FAULT_MANAGEMENT_ALARMS}`;
        url += `${faultName}`;
        url += `/${seqNum}`;

        return url;
    }

    _sendRequest(url, options) {
        return fetch(url, options);
    }
}
