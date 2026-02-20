import { FAULT_MGMT_ALARMS, FAULT_MGMT_TYPE } from './fault-mgmt-constants.js';
import { convertDataToFaultModel, isTriggered } from './utils.js';

export default class HistoricalFaultProvider {
    constructor(url, instance, processor) {
        this.url = url;
        this.instance = instance;
        this.processor = processor;
    }

    /**
     * @param {import('openmct').DomainObject} domainObject
     * @returns {boolean}
     */
    supportsRequest(domainObject) {
        return domainObject.type === FAULT_MGMT_TYPE;
    }

    /**
     * @returns {Promise<FaultModel[]>}
     */
    async request() {
        const url = `${this.url}api/processors/${this.instance}/${this.processor}/${FAULT_MGMT_ALARMS}`;

        const res = await fetch(url);
        const faultsData = await res.json();

        return faultsData.alarms?.filter(isTriggered).map(convertDataToFaultModel);
    }
}

/**
 * @typedef {import('./utils.js').FaultModel} FaultModel
 */
