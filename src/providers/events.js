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
                        // this is used in the EventTimelineView to provide a title for the event
                        // label can be changed to other properties for the title (e.g., the `name` property)
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

export function createEventsSeverityObjects(openmct, parentEventsObject, namespace) {
    const eventsSeverityObjects = SEVERITY_LEVELS.map((severity) => {
        const identifier = {
            key: `${OBJECT_TYPES.EVENTS_SEVERITY_OBJECT_TYPE}.${severity}`,
            namespace
        };

        const name = `${parentEventsObject.name}: ${severity}`;

        return createEventObject(
            openmct,
            parentEventsObject.identifier.key,
            namespace,
            identifier,
            name,
            OBJECT_TYPES.EVENTS_SEVERITY_OBJECT_TYPE
        );
    });

    return eventsSeverityObjects;
}

export function createEventsSourceSeverityObjects(openmct, parentEventsObject, namespace) {
    const eventsSourceSeverityObjects = [];
    for (const severity of SEVERITY_LEVELS) {
        const severityIdentifier = {
            key: `${parentEventsObject.identifier.key}.${severity}`,
            namespace
        };

        const severityName = `${parentEventsObject.name}: ${severity}`;

        const eventsSourceSeverityObject = createEventObject(
            openmct,
            parentEventsObject.identifier.key,
            namespace,
            severityIdentifier,
            severityName,
            OBJECT_TYPES.EVENTS_SOURCE_SEVERITY_OBJECT_TYPE
        );

        eventsSourceSeverityObjects.push(eventsSourceSeverityObject);
    }

    return eventsSourceSeverityObjects;
}

export async function getEventSources(url, instance) {
    const eventSourceURL = `${url}api/archive/${instance}/events/sources`;
    const eventSourcesReply = await fetch(eventSourceURL);
    if (!eventSourcesReply.ok) {
        console.error(`🛑 Failed to fetch event sources: ${eventSourcesReply.statusText}`);

        return [];
    }

    const eventSourcesJson = await eventSourcesReply.json();

    if (eventSourcesJson.sources) {
        return eventSourcesJson.sources;
    } else if (eventSourcesJson.source) {
        // backwards compatibility with older YAMCS versions that only have `source` key
        return eventSourcesJson.source;
    } else {
        return [];
    }
}

export function eventShouldBeFiltered(event, subscriptionDetails) {
    const { severity, source } = event;
    const { domainObject, options } = subscriptionDetails;

    const domainObjectSource = getEventSource(domainObject);
    const shouldFilterBySource = domainObjectSource && domainObjectSource !== source;

    const incomingEventSeverity = severity?.toLowerCase();
    const filterSeverity = options?.filters?.severity?.equals?.[0];
    const domainObjectSeverity = getEventSeverity(domainObject);
    const severityLevelToFilterIndex = Math.max(
        SEVERITY_LEVELS.indexOf(domainObjectSeverity),
        SEVERITY_LEVELS.indexOf(filterSeverity));
    const incomingEventSeverityIndex = SEVERITY_LEVELS.indexOf(incomingEventSeverity);
    const shouldFilterBySeverity = incomingEventSeverityIndex < severityLevelToFilterIndex;

    return shouldFilterBySource || shouldFilterBySeverity;
}

export function getEventSource(domainObject) {
    const name = domainObject.identifier.key;

    if (name.startsWith(OBJECT_TYPES.EVENTS_SOURCE_OBJECT_TYPE)) {
        const prefix = `${OBJECT_TYPES.EVENTS_SOURCE_OBJECT_TYPE}.`;
        const nameWithoutPrefix = name.replace(prefix, '');
        const [sourceName] = nameWithoutPrefix.split('.');

        return sourceName;
    }
}

export function getEventSeverity(domainObject) {
    if (domainObject.type === OBJECT_TYPES.EVENTS_SEVERITY_OBJECT_TYPE || domainObject.type === OBJECT_TYPES.EVENTS_SOURCE_SEVERITY_OBJECT_TYPE) {
        const keyAsArray = domainObject.identifier.key.split('.');
        const severity = keyAsArray[keyAsArray.length - 1];

        return severity;
    }
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
        id: OBJECT_TYPES.EVENTS_SOURCE_OBJECT_TYPE,
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
