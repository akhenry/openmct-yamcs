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
async function disableLink(yamcsURL) {
    const url = new URL(`api/links/myproject/udp-in:disable`, yamcsURL);
    await fetch(url.toString(), {
        method: 'POST'
    });
}

async function enableLink(yamcsURL) {
    const url = new URL(`api/links/myproject/udp-in:enable`, yamcsURL);
    await fetch(url.toString(), {
        method: 'POST'
    });
}

async function isLinkEnabled(yamcsURL) {
    const url = new URL(`api/links/myproject/udp-in`, yamcsURL);
    const response = await (await fetch(url.toString())).json();

    return response.disabled !== true;
}

async function latestParameterValues(parameterIds, yamcsURL) {
    const parameterIdsRequest = {
        fromCache: true,
        id: parameterIds.map(parameterName => {
            return {
                name: parameterName
            };
        })
    };
    const parameterIdsRequestSerialized = JSON.stringify(parameterIdsRequest);
    const url = new URL('api/processors/myproject/realtime/parameters:batchGet', yamcsURL);
    const response = await (await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: parameterIdsRequestSerialized
    })).json();

    return response.value;
}

async function parameterArchive({start, end, parameterId, yamcsURL}) {
    const url = new URL(`api/archive/myproject/parameters/${parameterId}`, `${yamcsURL}`);
    url.searchParams.set('start', start);
    url.searchParams.set('stop', end);

    const response = await (await fetch(url.toString())).json();

    return response.parameter;
}

async function getCommandQueues(yamcsURL, processor = 'realtime') {
    const url = new URL(`api/processors/myproject/${processor}/queues`, yamcsURL);
    const response = await (await fetch(url.toString())).json();
    const { queues = [] } = response;

    return queues.map(queue => queue.name);
}

/**
 * Issue a command directly against the running YAMCS instance via the REST API.
 * @param {Object} options
 * @param {string} options.qualifiedName fully qualified command name, e.g. "/myproject/SwitchVoltageOn"
 * @param {Object} [options.args] name/value argument assignments for the command
 * @param {string} [options.comment] optional comment attached to the command
 * @param {string} options.yamcsURL base URL of the YAMCS server
 * @param {string} [options.processor] processor name, defaults to "realtime"
 * @returns {Object} the YAMCS command response body
 */
async function issueCommand({ qualifiedName, args = {}, comment, yamcsURL, processor = 'realtime' }) {
    // qualifiedName is of the form "/myproject/SwitchVoltageOn"; the REST API expects
    // it appended (without a leading slash) after the "commands/" path segment.
    const commandPath = qualifiedName.replace(/^\//, '');
    const url = new URL(`api/processors/myproject/${processor}/commands/${commandPath}`, yamcsURL);
    const body = { args };

    if (comment !== undefined) {
        body.comment = comment;
    }

    const response = await fetch(url.toString(), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw new Error(`Error issuing command ${qualifiedName}: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

// Sets the value of a `dataSource="local"` parameter through the realtime processor,
// the same mechanism openmct-yamcs itself uses (see src/providers/user/poll-question-telemetry.js
// and src/providers/user/operator-status-telemetry.js). `value` is the Yamcs `Value` message,
// e.g. `{ type: 'BINARY', binaryValue: '<base64>' }` or `{ type: 'STRING', stringValue: '...' }`.
async function setParameterValue(parameterId, value, yamcsURL) {
    const url = new URL(`api/processors/myproject/realtime/parameters/${parameterId}`, yamcsURL);
    const response = await fetch(url.toString(), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
    });

    return response.ok;
}

/**
 * Posts a batch of events directly to the YAMCS archive events endpoint,
 * concurrently in fixed-size chunks. This is a fast, deterministic way to
 * seed a large number of archived records (e.g. to force multi-page
 * continuation-token responses) without waiting on the simulator's
 * real-time telemetry cadence.
 *
 * @param {Array<Object>} events array of YAMCS CreateEventRequest bodies,
 *   e.g. `{ type, message, severity, source, sequenceNumber, time }`
 * @param {string} yamcsURL base URL of the YAMCS server
 * @param {number} [batchSize] number of events to POST concurrently per chunk
 * @returns {Promise<void>} rejects if any individual POST fails
 */
async function postEvents(events, yamcsURL, batchSize = 100) {
    const url = new URL('api/archive/myproject/events', yamcsURL);

    for (let i = 0; i < events.length; i += batchSize) {
        const batch = events.slice(i, i + batchSize);
        const responses = await Promise.all(batch.map((event) => fetch(url.toString(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })));

        responses.forEach((response, index) => {
            if (!response.ok) {
                throw new Error(`Failed to seed event ${i + index} (sequenceNumber ${batch[index].sequenceNumber}): HTTP ${response.status} ${response.statusText}`);
            }
        });
    }
}

export {
    disableLink,
    enableLink,
    isLinkEnabled,
    latestParameterValues,
    parameterArchive,
    getCommandQueues,
    issueCommand,
    setParameterValue,
    postEvents
};
