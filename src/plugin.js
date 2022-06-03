/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2022, United States Government
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

import { faultModelConvertor } from './providers/fault-mgmt-providers/utils';
import FaultActionProvider from './providers/fault-mgmt-providers/fault-action-provider';
import YamcsFaultProvider from './providers/fault-mgmt-providers/yamcs-fault-provider';
import YamcsWebSocket from './providers/yamcs-web-socket';

import { OBJECT_TYPES } from './const';

export default function installYamcsPlugin(configuration) {
    return function install(openmct) {

        //TODO: Validate provided configuration
        const userProvider = new UserProvider(
            openmct,
            configuration.yamcsUserEndpoint
        );
        openmct.user.setProvider(userProvider);

        openmct.install(openmct.plugins.ISOTimeFormat());

        const yamcsWebSocket = new YamcsWebSocket(configuration.yamcsWebsocketEndpoint);
        yamcsWebSocket.createWebsocket();

        const historicalTelemetryProvider = new YamcsHistoricalTelemetryProvider(
            openmct,
            configuration.yamcsHistoricalEndpoint,
            configuration.yamcsInstance);
        openmct.telemetry.addProvider(historicalTelemetryProvider);

        const realtimeTelemetryProvider = new RealtimeProvider(
            yamcsWebSocket,
            configuration.yamcsInstance
        );
        openmct.telemetry.addProvider(realtimeTelemetryProvider);

        openmct.faults.addProvider(new YamcsFaultProvider({
            faultModelConvertor,
            historicalEndpoint: configuration.yamcsHistoricalEndpoint,
            yamcsInstance: configuration.yamcsInstance,
            yamcsWebSocket
        }));

        openmct.faults.addFaultActionProvider(new FaultActionProvider(
            configuration.yamcsHistoricalEndpoint,
            configuration.yamcsInstance
        ));

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
