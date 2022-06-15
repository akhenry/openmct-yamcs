import { FAULT_MANAGEMENT_ALARMS, FAULT_MANAGEMENT_TYPE } from './fault-mgmt-constants';

export default class HistoricalFaultProvider {
    constructor(faultModelConverter, url, instance) {
        this.faultModelConverter = faultModelConverter;
        this.url = url;
        this.instance = instance;
    }

    supportsRequest(domainObject) {
        return domainObject.type === FAULT_MANAGEMENT_TYPE;
    }

    request() {
        let url = `${this.url}api/processors/${this.instance}/realtime/${FAULT_MANAGEMENT_ALARMS}`;

        return fetch(url)
            .then(res => res.json())
            .then(faultsData => {
                return faultsData.alarms?.map(this.faultModelConverter);
            });
    }
}
