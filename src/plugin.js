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
import RealtimeProvider from './providers/realtime-provider.js';
import YamcsObjectProvider from './providers/object-provider.js';
import LimitProvider from './providers/limit-provider';
import UserProvider from './providers/user/user-provider';


import { OBJECT_TYPES } from './const';

export default function installYamcsPlugin(configuration) {
    return function install(openmct) {

        //TODO: Validate provided configuration

        const userProvider = new UserProvider(openmct);
        openmct.user.setProvider(
            userProvider,
            configuration.yamcsDictionaryEndpoint,
            configuration.yamcsInstance
        );

        openmct.install(openmct.plugins.ISOTimeFormat());
        openmct.install(openmct.plugins.NonEditableFolder());

        const historicalProvider = new YamcsHistoricalTelemetryProvider(
            openmct,
            configuration.yamcsHistoricalEndpoint,
            configuration.yamcsInstance);
        openmct.telemetry.addProvider(historicalProvider);

        const realtimeProvider = new RealtimeProvider(
            configuration.yamcsWebsocketEndpoint,
            configuration.yamcsInstance
        );
        openmct.telemetry.addProvider(realtimeProvider);
        realtimeProvider.connect();

        openmct.telemetry.addProvider(new LimitProvider(
            openmct,
            configuration.yamcsHistoricalEndpoint,
            configuration.yamcsInstance));

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

        openmct.types.addType(OBJECT_TYPES.AGGREGATE_TELEMETRY_TYPE, {
            name: 'Aggregate Telemetry Points',
            description: 'Aggregate Spacecraft Telemetry Points',
            cssClass: 'icon-telemetry-aggregate'
        });

        openmct.types.addType(OBJECT_TYPES.TELEMETRY_OBJECT_TYPE, {
            name: 'Telemetry Point',
            description: 'Spacecraft Telemetry point',
            cssClass: 'icon-telemetry'
        });

        openmct.types.addType(OBJECT_TYPES.IMAGE_OBJECT_TYPE, {
            name: 'Telemetry Image',
            description: 'Spacecraft camera image',
            cssClass: 'icon-telemetry'
        });

        openmct.types.addType(OBJECT_TYPES.STRING_OBJECT_TYPE, {
            name: 'Telemetry String',
            description: 'Spacecraft telemetry string value',
            cssClass: 'icon-telemetry'
        });

        openmct.types.addType(OBJECT_TYPES.EVENTS_OBJECT_TYPE, {
            name: "Events",
            description: "To view events",
            cssClass: "icon-generator-events"
        });
    };
}
