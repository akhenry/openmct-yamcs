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
import { OBJECT_TYPES, METADATA_TIME_KEY, SEVERITY_LEVELS } from "../const.js";

export function createRootEventsObject(openmct, parentKey, namespace) {
    const rootEventIdentifier = {
        key: OBJECT_TYPES.EVENTS_ROOT_OBJECT_TYPE,
        namespace
    };
    const rootEventObject = createEventObject(openmct, parentKey, namespace, rootEventIdentifier);
    rootEventObject.composition = [];

    return rootEventObject;
}

export function createEventObject(openmct, parentKey, namespace, identifier, name = 'Events', type = OBJECT_TYPES.EVENTS_ROOT_OBJECT_TYPE) {
    const location = openmct.objects.makeKeyString({
        key: parentKey,
        namespace
    });

    const baseEventObject = {
        identifier,
        location,
        name,
        type,
        telemetry: {
            values: [
                {
                    key: 'severity',
                    name: 'Severity Threshold',
                    format: 'string',
                    filters: [{
                        singleSelectionThreshold: true,
                        comparator: 'equals',
                        possibleValues: SEVERITY_LEVELS.map((level) => {
                            return {
                                label: level,
                                value: level
                            };
                        })
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
                    name: 'Reception Time',
                    format: 'iso'
                },
                {
                    key: 'seqNumber',
                    name: 'Sequence Number',
                    format: 'number'
                },
                {
                    key: 'message',
                    name: 'Message',
                    format: 'string',
                    hints: {
                        label: 0
                    }
                },
                {
                    key: 'type',
                    name: 'Type',
                    format: 'string'
                },
                {
                    key: 'source',
                    name: 'Source',
                    format: 'string'
                },
                {
                    key: 'createdBy',
                    name: 'Created By',
                    format: 'string'
                }
            ]
        }
    };

    return baseEventObject;
}

export function createEventSeverityObjects(openmct, parentEventObject, namespace) {
    const childSeverityObjects = [];
    for (const severity of SEVERITY_LEVELS) {
        const severityIdentifier = {
            key: `${parentEventObject.identifier.key}.${severity}`,
            namespace
        };

        const severityName = `${parentEventObject.name}: ${severity}`;

        const severityEventObject = createEventObject(
            openmct,
            parentEventObject.identifier.key,
            namespace,
            severityIdentifier,
            severityName,
            OBJECT_TYPES.EVENT_SPECIFIC_SEVERITY_OBJECT_TYPE
        );

        childSeverityObjects.push(severityEventObject);
    }

    return childSeverityObjects;
}

export async function getEventSources(url, instance) {
    const eventSourceURL = `${url}api/archive/${instance}/events/sources`;
    console.log('getEventSources');
    console.log(eventSourceURL);
    const eventSourcesReply = await fetch(eventSourceURL);
    console.log('eventSourcesReply');
    console.log(eventSourcesReply);
    if (!eventSourcesReply.ok) {
        console.error(`🛑 Failed to fetch event sources: ${eventSourcesReply.statusText}`);

        return [];
    }

    console.log(eventSourcesReply);
    const eventSourcesJson = await eventSourcesReply.json();
    console.log(eventSourcesJson);

    return eventSourcesJson.sources;
}

export function eventShouldBeFiltered(event, options) {
    const { severity } = event;
    const incomingEventSeverity = severity?.toLowerCase();
    const severityLevelToFilter = options?.filters?.severity?.equals?.[0];
    const severityLevelToFilterIndex = SEVERITY_LEVELS.indexOf(severityLevelToFilter);
    const incomingEventSeverityIndex = SEVERITY_LEVELS.indexOf(incomingEventSeverity);

    return incomingEventSeverityIndex < severityLevelToFilterIndex;
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
        id: OBJECT_TYPES.EVENT_SPECIFIC_OBJECT_TYPE,
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
