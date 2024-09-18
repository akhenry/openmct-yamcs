import { FAULT_MGMT_ALARMS, DEFAULT_SHELVE_DURATION, FAULT_MGMT_ACTIONS } from './fault-mgmt-constants.js';

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
        const options = this.#getOptions(payload);
        const url = this.#getUrl(fault, FAULT_MGMT_ACTIONS.ACKNOWLEDGE);

        return this.#sendRequest(url, options);
    }

    shelveFault(fault, { shelved = true, comment = '', shelveDuration = DEFAULT_SHELVE_DURATION } = {}) {
        const payload = {};
        const action = shelved ? FAULT_MGMT_ACTIONS.SHELVE : FAULT_MGMT_ACTIONS.UNSHELVE;

        if (shelved) {
            payload.comment = comment;
            payload.shelveDuration = shelveDuration;
        }

        const options = this.#getOptions(payload);
        const url = this.#getUrl(fault, action);

        return this.#sendRequest(url, options);
    }

    #getOptions(payload) {
        return {
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'cors'
        };
    }

    /**
     * @param {FaultModel} fault the fault to perform the action on
     * @param {'acknowledge' | 'shelve' | 'unshelve' | 'clear'} action the action to perform on the fault
     * @returns {string} the URL to perform the action on the fault
     */
    #getUrl(fault, action) {
        return `${this.url}api/processors/${this.instance}/${this.processor}/${FAULT_MGMT_ALARMS}`
               + `${fault.namespace}/${fault.name}/${fault.seqNum}:${action}`;
    }

    #sendRequest(url, options) {
        return fetch(url, options);
    }
}

/** @typedef {import('./utils.js').FaultModel} FaultModel */
