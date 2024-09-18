import HistoricalFaultProvider from './historical-fault-provider.js';
import RealtimeFaultProvider from './realtime-fault-provider.js';
import FaultActionProvider from './fault-action-provider.js';

export default class YamcsFaultProvider {
    constructor(openmct, { historicalEndpoint, yamcsInstance, yamcsProcessor } = {}) {
        this.historicalFaultProvider = new HistoricalFaultProvider(
            historicalEndpoint,
            yamcsInstance,
            yamcsProcessor
        );

        this.realtimeFaultProvider = new RealtimeFaultProvider(
            openmct,
            yamcsInstance
        );

        this.faultActionProvider = new FaultActionProvider(
            historicalEndpoint,
            yamcsInstance,
            yamcsProcessor
        );

        this.request = this.historicalFaultProvider.request.bind(this.historicalFaultProvider);
        this.subscribe = this.realtimeFaultProvider.subscribe.bind(this.realtimeFaultProvider);
        this.supportsRequest = this.historicalFaultProvider.supportsRequest.bind(this.historicalFaultProvider);
        this.supportsSubscribe = this.realtimeFaultProvider.supportsSubscribe.bind(this.realtimeFaultProvider);
        this.acknowledgeFault = this.faultActionProvider.acknowledgeFault.bind(this.faultActionProvider);
        this.shelveFault = this.faultActionProvider.shelveFault.bind(this.faultActionProvider);
    }
}
