import { FAULT_MGMT_ALARMS, FAULT_MGMT_TYPE } from './fault-mgmt-constants.js';
import { convertDataToFaultModel } from './utils.js';

export default class HistoricalFaultProvider {
    constructor(url, instance, processor = 'realtime') {
        this.url = url;
        this.instance = instance;
        this.processor = processor;
    }

    supportsRequest(domainObject) {
        return domainObject.type === FAULT_MGMT_TYPE;
    }

    async request() {
        const url = `${this.url}api/processors/${this.instance}/${this.processor}/${FAULT_MGMT_ALARMS}`;

        const res = await fetch(url);
        const faultsData = await res.json();

        return faultsData.alarms?.map(convertDataToFaultModel);
    }
}
