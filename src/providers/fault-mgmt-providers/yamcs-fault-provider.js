import HistoricalFaultProvider from './historical-fault-provider';
import RealtimeFaultProvider from './realtime-fault-provider';
import FaultActionProvider from './fault-action-provider';

export default class YamcsFaultProvider {
    constructor({ faultModelConvertor, historicalEndpoint, yamcsInstance, yamcsProcessor, realtimeTelemetryProvider } = {}) {
        this.historicalFaultProvider = new HistoricalFaultProvider(
            faultModelConvertor,
            historicalEndpoint,
            yamcsInstance,
            yamcsProcessor
        );

        this.realtimeFaultProvider = new RealtimeFaultProvider(
            faultModelConvertor,
            yamcsInstance,
            realtimeTelemetryProvider
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
