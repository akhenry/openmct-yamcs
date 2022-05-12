import { FAULT_MANAGEMENT_ALARMS, FAULT_MANAGEMENT_TYPE } from './fault-mgmt-constants';

export default class HistoricalFaultProvider {
    constructor(configuration) {
        this.configuration = configuration;
    }

    shelveFault(fault) {
        console.log('shelveFault', fault, this.configuration);
    }

    acknowledgeFault(fault) {
        console.log('acknowledgeFault', fault, this.configuration);
    }
}
