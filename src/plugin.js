import YamcsHistoricalTelemetryProvider from './providers/historical-telemetry-provider.js';
import YamcsRealtimeTelemetryProvider from './providers/realtime-telemetry-provider.js';
import YamcsObjectProvider from './providers/object-provider.js';

import {
    TELEMETRY_OBJECT_TYPE,
    IMAGE_OBJECT_TYPE,
    STRING_OBJECT_TYPE
} from './const.js';

export default function installYamcsPlugin(configuration) {
    return function install(openmct) {

        //TODO: Validate provided configuration

        const historicalProvider = new YamcsHistoricalTelemetryProvider(
            configuration.yamcsHistoricalEndpoint,
            configuration.yamcsInstance);
        openmct.telemetry.addProvider(historicalProvider);

        const realtimeProvider = new YamcsRealtimeTelemetryProvider(
            configuration.yamcsRealtimeEndpoint,
            configuration.yamcsInstance
        );
        openmct.telemetry.addProvider(realtimeProvider);
        realtimeProvider.connect();

        const objectProvider = new YamcsObjectProvider(
            configuration.yamcsDictionaryEndpoint,
            configuration.yamcsInstance,
            configuration.yamcsFolder
        );

        openmct.objects.addRoot({
            namespace: 'taxonomy',
            key: 'spacecraft'
        });

        openmct.objects.addProvider('taxonomy', objectProvider);

        openmct.types.addType(TELEMETRY_OBJECT_TYPE, {
            name: 'Telemetry Point',
            description: 'Spacecraft Telemetry point',
            cssClass: 'icon-telemetry'
        });

        openmct.types.addType(IMAGE_OBJECT_TYPE, {
            name: 'Telemetry Image',
            description: 'Spacecraft camera image',
            cssClass: 'icon-telemetry'
        });

        openmct.types.addType(STRING_OBJECT_TYPE, {
            name: 'Telemetry String',
            description: 'Spacecraft telemetry string value',
            cssClass: 'icon-telemetry'
        });
    };
}
