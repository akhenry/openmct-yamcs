import {
    YamcsTaxonomyPlugin,
    YamcsHistoricalTelemetryPlugin,
    YamcsRealtimeTelemetryPlugin
} from './yamcs-integration.js';

export default function (configuration) {
    return function install(openmct) {
        //TODO: Validate provided configuration
        openmct.install(YamcsTaxonomyPlugin(
            configuration.yamcsDictionaryEndpoint,
            configuration.yamcsInstance,
            configuration.yamcsFolder));
        
        openmct.install(YamcsHistoricalTelemetryPlugin(
            configuration.yamcsHistoricalEndpoint,
            configuration.yamcsInstance));

        openmct.install(YamcsRealtimeTelemetryPlugin(
            configuration.yamcsRealtimeEndpoint,
            configuration.yamcsInstance));
    };
};
