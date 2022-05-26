import HistoricalFaultProvider from './historical-fault-provider';
import RealtimeFaultProvider from './realtime-fault-provider';

export default class YamcsFaultProvider {
    constructor({ historicalEndpoint, yamcsInstance, yamcsWebSocket} = {}) {
        this.historicalFaultProvider = new HistoricalFaultProvider(
            historicalEndpoint,
            yamcsInstance
        );

        this.realtimeFaultProvider = new RealtimeFaultProvider(
            yamcsWebSocket,
            yamcsInstance
        );

        this.request = this.historicalFaultProvider.request;
        this.subscribe = this.realtimeFaultProvider.subscribe;
        this.supportsRequest = this.historicalFaultProvider.supportsRequest;
        this.supportsSubscribe = this.realtimeFaultProvider.supportsSubscribe;
    }
}
