import HistoricalFaultProvider from './historical-fault-provider';
import RealtimeFaultProvider from './realtime-fault-provider';
import FaultActionrovider from './fault-action-provider';

export default class YamcsFaultProvider {
    constructor({ faultModelConvertor, historicalEndpoint, yamcsInstance, yamcsWebSocket } = {}) {
        this.historicalFaultProvider = new HistoricalFaultProvider(
            faultModelConvertor,
            historicalEndpoint,
            yamcsInstance
        );

        this.realtimeFaultProvider = new RealtimeFaultProvider(
            faultModelConvertor,
            yamcsWebSocket,
            yamcsInstance
        );

        this.faultActionrovider = new FaultActionrovider(
            historicalEndpoint,
            yamcsInstance
        )

        this.request = this.historicalFaultProvider.request.bind(this.historicalFaultProvider);
        this.subscribe = this.realtimeFaultProvider.subscribe.bind(this.realtimeFaultProvider);
        this.supportsRequest = this.historicalFaultProvider.supportsRequest.bind(this.historicalFaultProvider);
        this.supportsSubscribe = this.realtimeFaultProvider.supportsSubscribe.bind(this.realtimeFaultProvider);
        this.acknowledgeFault = this.faultActionrovider.acknowledgeFault.bind(this.faultActionrovider);
        this.shelveFault = this.faultActionrovider.shelveFault.bind(this.faultActionrovider);
    }
}
