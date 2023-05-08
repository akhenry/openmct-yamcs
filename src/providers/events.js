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
import { OBJECT_TYPES, METADATA_TIME_KEY } from "../const";

export function createEventsObject(openmct, parentKey, namespace) {
    const location = openmct.objects.makeKeyString({
        key: parentKey,
        namespace
    });

    const identifier = {
        key: OBJECT_TYPES.EVENTS_OBJECT_TYPE,
        namespace
    };
    const eventsObject = {
        identifier,
        location,
        name: 'Events',
        type: OBJECT_TYPES.EVENTS_OBJECT_TYPE,
        telemetry: {
            values: [
                {
                    key: 'severity',
                    name: 'Severity',
                    filters: [{
                        comparator: 'equals',
                        possibleValues: [
                            {
                                value: true,
                                label: 'info'
                            }, {
                                value: false,
                                label: 'watch'
                            }, {
                                value: false,
                                label: 'warning'
                            }, {
                                value: false,
                                label: 'distress'
                            }, {
                                value: false,
                                label: 'critical'
                            }, {
                                value: false,
                                label: 'severe'
                            }
                        ]
                    }]
                },
                {
                    key: 'utc',
                    source: METADATA_TIME_KEY,
                    name: 'Generation Time',
                    format: 'iso',
                    hints: {
                        domain: 1
                    }
                },
                {
                    key: 'receptionTime',
                    name: 'Reception Time'
                },
                {
                    key: 'seqNumber',
                    name: 'Sequence Number'
                },
                {
                    key: 'message',
                    name: 'Message'
                },
                {
                    key: 'type',
                    name: 'Type'
                },
                {
                    key: 'source',
                    name: 'Source'
                },
                {
                    key: 'createdBy',
                    name: 'Created By'
                }
            ]
        }
    };

    return eventsObject;
}

/**
 * Convert raw event data from YAMCS to a format which
 * can be consumed by Open MCT as telemetry.
 * @param {Object} command
 * @returns {Object} telemetryDatum
 */
export function eventToTelemetryDatum(event) {
    const {
        severity,
        generationTime,
        receptionTime,
        seqNumber,
        message,
        type,
        source,
        createdBy
    } = event;

    return {
        id: OBJECT_TYPES.EVENTS_OBJECT_TYPE,
        severity,
        generationTime,
        receptionTime,
        seqNumber,
        message,
        type,
        source,
        createdBy
    };
}
