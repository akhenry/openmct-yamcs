/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2024, United States Government
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
import YamcsStalenessProvider from './providers/staleness-provider.js';
import LimitProvider from './providers/limit-provider.js';
import EventLimitProvider from './providers/event-limit-provider.js';
import UserProvider from './providers/user/user-provider.js';

import YamcsFaultProvider from './providers/fault-mgmt-providers/yamcs-fault-provider.js';

import { OBJECT_TYPES } from './const.js';
import OperatorStatusTelemetry from './providers/user/operator-status-telemetry.js';
import MissionStatusTelemetry from './providers/mission-status/mission-status-telemetry.js';
import LatestTelemetryProvider from './providers/latest-telemetry-provider.js';
import PollQuestionParameter from './providers/user/poll-question-parameter.js';
import PollQuestionTelemetry from './providers/user/poll-question-telemetry.js';
import ExportToCSVActionPlugin from './actions/exportToCSV/plugin.js';

import BinaryToHexFormatterPlugin from './plugins/binaryToHexFormatter/plugin.js';

export default function install(
    configuration,
    getDictionaryRequestOptions
) {
    return (openmct) => {
        openmct.install(openmct.plugins.ISOTimeFormat());
        openmct.install(BinaryToHexFormatterPlugin());

        const latestTelemetryProvider = new LatestTelemetryProvider({
            url: configuration.yamcsHistoricalEndpoint,
            instance: configuration.yamcsInstance,
            processor: configuration.yamcsProcessor,
            openmct
        });

        const historicalTelemetryProvider = new YamcsHistoricalTelemetryProvider(
            openmct,
            configuration.yamcsHistoricalEndpoint,
            configuration.yamcsInstance,
            latestTelemetryProvider);
        openmct.telemetry.addProvider(historicalTelemetryProvider);

        const realtimeTelemetryProvider = new RealtimeProvider(
            openmct,
            configuration.yamcsWebsocketEndpoint,
            configuration.yamcsInstance,
            configuration.yamcsProcessor,
            configuration.throttleRate,
            configuration.maxBufferSize
        );
        openmct.telemetry.addProvider(realtimeTelemetryProvider);
        realtimeTelemetryProvider.connect();

        openmct.faults.addProvider(new YamcsFaultProvider(openmct,
            {
                historicalEndpoint: configuration.yamcsHistoricalEndpoint,
                yamcsInstance: configuration.yamcsInstance,
                yamcsProcessor: configuration.yamcsProcessor
            }));

        const stalenessProvider = new YamcsStalenessProvider(
            realtimeTelemetryProvider,
            latestTelemetryProvider
        );
        openmct.telemetry.addProvider(stalenessProvider);

        openmct.telemetry.addProvider(new LimitProvider(
            openmct,
            configuration.yamcsHistoricalEndpoint,
            configuration.yamcsInstance,
            realtimeTelemetryProvider));

        openmct.telemetry.addProvider(new EventLimitProvider(
            openmct,
            configuration.yamcsHistoricalEndpoint,
            configuration.yamcsInstance));

        const missionStatusTelemetry = new MissionStatusTelemetry(openmct, {
            url: configuration.yamcsHistoricalEndpoint,
            instance: configuration.yamcsInstance
        });

        const roleStatusTelemetry = new OperatorStatusTelemetry(openmct, {
            url: configuration.yamcsHistoricalEndpoint,
            instance: configuration.yamcsInstance,
            styleConfig: configuration.statusStyles
        });

        const pollQuestionParameter = new PollQuestionParameter();
        const pollQuestionTelemetry = new PollQuestionTelemetry(openmct, {
            url: configuration.yamcsHistoricalEndpoint,
            instance: configuration.yamcsInstance

        });

        if (configuration.yamcsUserEndpoint !== undefined) {
            const userProvider = new UserProvider(
                openmct, {
                    userEndpoint: configuration.yamcsUserEndpoint,
                    roleStatus: roleStatusTelemetry,
                    missionStatus: missionStatusTelemetry,
                    latestTelemetryProvider,
                    pollQuestionParameter,
                    pollQuestionTelemetry
                });
            openmct.user.setProvider(userProvider);
        } else {
            console.warn('No user endpoint configured, user API unavailable in this deployment.');
        }

        const objectProvider = new YamcsObjectProvider(
            openmct,
            configuration.yamcsDictionaryEndpoint,
            configuration.yamcsInstance,
            configuration.yamcsFolder,
            roleStatusTelemetry,
            missionStatusTelemetry,
            pollQuestionParameter,
            pollQuestionTelemetry,
            realtimeTelemetryProvider,
            configuration.yamcsProcessor,
            getDictionaryRequestOptions
        );

        openmct.objects.addRoot({
            namespace: 'taxonomy',
            key: 'spacecraft'
        });

        const formatThumbnail = {
            format: function (url) {
                return url.replace(/\/images\//, '/rescaled-images/').replace(/.png$/, '_thumb.jpeg');
            }
        };

        openmct.telemetry.addFormat({
            key: 'yamcs-thumbnail',
            ...formatThumbnail
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

        openmct.types.addType(OBJECT_TYPES.EVENTS_ROOT_OBJECT_TYPE, {
            name: "Events",
            description: "To view all events",
            cssClass: "icon-generator-events"
        });

        openmct.types.addType(OBJECT_TYPES.EVENT_SPECIFIC_OBJECT_TYPE, {
            name: "Specific Event from Source",
            description: "To view events from a specific source",
            cssClass: "icon-generator-events"
        });

        openmct.types.addType(OBJECT_TYPES.EVENT_SPECIFIC_SEVERITY_OBJECT_TYPE, {
            name: "Specific Event from Source with Severity",
            description: "To view events from a specific source with a specific severity or greater",
            cssClass: "icon-generator-events"
        });

        openmct.types.addType(OBJECT_TYPES.COMMANDS_QUEUE_OBJECT_TYPE, {
            name: "Command Queue",
            description: "To view command history in a specific queue",
            cssClass: "icon-generator-events" // TODO: replace
        });

        openmct.types.addType(OBJECT_TYPES.COMMANDS_ROOT_OBJECT_TYPE, {
            name: "Commands",
            description: "To view the whole command history",
            cssClass: "icon-generator-events" // TODO: replace
        });

        openmct.types.addType(OBJECT_TYPES.POLL_QUESTION_TYPE, {
            name: 'Operator Status Poll',
            description: 'Operator status Poll Question',
            cssClass: 'icon-telemetry'
        });

        openmct.types.addType(OBJECT_TYPES.OPERATOR_STATUS_TYPE, {
            name: 'Operator Status',
            description: 'Operator status',
            cssClass: 'icon-telemetry'
        });

        openmct.types.addType(OBJECT_TYPES.MISSION_STATUS_TYPE, {
            name: 'Mission Status',
            description: 'Mission status',
            cssClass: 'icon-telemetry'
        });

        openmct.types.addType(OBJECT_TYPES.ALARMS_TYPE, {
            name: 'Alarms',
            description: 'Alarms',
            cssClass: 'icon-alert-rect'
        });

        openmct.types.addType(OBJECT_TYPES.GLOBAL_STATUS_TYPE, {
            name: 'Global Status',
            description: 'Global Status',
            cssClass: 'icon-bell'
        });

        openmct.install(ExportToCSVActionPlugin(
            configuration.yamcsHistoricalEndpoint,
            configuration.yamcsInstance));

        openmct.install(openmct.plugins.Filters(['telemetry.plot.overlay', 'table']));
    };
}
