import { FAULT_MANAGEMENT_ALARMS, FAULT_MANAGEMENT_TYPE } from './fault-mgmt-constants';

export default class HistoricalFaultProvider {
    constructor(faultModelConverter, url, instance, processor = 'realtime') {
        this.faultModelConverter = faultModelConverter;
        this.url = url;
        this.instance = instance;
        this.processor = processor;
    }

    supportsRequest(domainObject) {
        return domainObject.type === FAULT_MANAGEMENT_TYPE;
    }

    async request() {
        let url = `${this.url}api/processors/${this.instance}/${this.processor}/${FAULT_MANAGEMENT_ALARMS}`;

        const res = await fetch(url);
        const faultsData = await res.json();

        return faultsData.alarms?.map(this.faultModelConverter);
    }
}
