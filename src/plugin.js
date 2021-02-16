/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2020, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

import YamcsHistoricalTelemetryProvider from './providers/historical-telemetry-provider.js';
import YamcsRealtimeTelemetryProvider from './providers/realtime-telemetry-provider.js';
import YamcsObjectProvider from './providers/object-provider.js';
import LimitProvider from './providers/limit-provider';


import {
    EVENTS_OBJECT_TYPE,
    TELEMETRY_OBJECT_TYPE,
    IMAGE_OBJECT_TYPE,
    STRING_OBJECT_TYPE
} from './const.js';

export default function installYamcsPlugin(configuration) {
    return function install(openmct) {

        //TODO: Validate provided configuration

        openmct.install(openmct.plugins.ISOTimeFormat());
        openmct.install(openmct.plugins.NonEditableFolder());

        const historicalProvider = new YamcsHistoricalTelemetryProvider(
            openmct,
            configuration.yamcsHistoricalEndpoint,
            configuration.yamcsInstance);
        openmct.telemetry.addProvider(historicalProvider);

        const realtimeProvider = new YamcsRealtimeTelemetryProvider(
            configuration.yamcsRealtimeEndpoint,
            configuration.yamcsInstance
        );
        openmct.telemetry.addProvider(realtimeProvider);
        realtimeProvider.connect();

        openmct.telemetry.addProvider(new LimitProvider());

        const objectProvider = new YamcsObjectProvider(
            openmct,
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

        openmct.types.addType(EVENTS_OBJECT_TYPE, {
            name: "Events",
            description: "To view events",
            cssClass: "icon-generator-events"
        });
    };
}
