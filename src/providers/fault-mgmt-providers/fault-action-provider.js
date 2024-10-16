import { FAULT_MGMT_ALARMS, FAULT_MGMT_ACTIONS } from './fault-mgmt-constants.js';

export default class FaultActionProvider {
    constructor(url, instance, processor) {
        this.url = url;
        this.instance = instance;
        this.processor = processor;
    }

    acknowledgeFault(fault, { comment = '' } = {}) {
        const payload = {
            comment
        };
        const options = this.#getOptions(payload);
        const url = this.#getUrl(fault, FAULT_MGMT_ACTIONS.ACKNOWLEDGE);

        return this.#sendRequest(url, options);
    }

    /**
     * Shelves or unshelves a fault.
     * @param {FaultModel} fault the fault to perform the action on
     * @param {Object} options the options to perform the action with
     * @param {boolean} options.shelved whether to shelve or unshelve the fault
     * @param {string} options.comment the comment to add to the fault
     * @param {number} options.shelveDuration the duration to shelve the fault for
     * @returns {Promise<Response>} the response from the server
     */
    shelveFault(fault, { shelved = true, comment = '', shelveDuration } = {}) {
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

    /**
     * @typedef {Object} ShelveDuration
     * @property {string} name - The name of the shelve duration
     * @property {number|null} value - The value of the shelve duration in milliseconds, or null for unlimited
     */

    /**
     * @returns {ShelveDuration[]} the list of shelve durations
     */
    getShelveDurations() {
        return [
            {
                name: '15 Minutes',
                value: 1000 * 60 * 15
            },
            {
                name: '30 Minutes',
                value: 1000 * 60 * 30
            },
            {
                name: '1 Hour',
                value: 1000 * 60 * 60
            },
            {
                name: '2 Hours',
                value: 1000 * 60 * 60 * 2
            },
            {
                name: '1 Day',
                value: 1000 * 60 * 60 * 24
            },
            {
                name: 'Unlimited',
                value: null
            }
        ];
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
