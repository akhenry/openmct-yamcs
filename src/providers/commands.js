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

import { OBJECT_TYPES, METADATA_TIME_KEY } from "../const.js";
import { flattenObjectArray } from "../utils.js";

export function createRootCommandsObject(openmct, parentKey, namespace) {
    const rootCommandsIdentifier = {
        key: OBJECT_TYPES.COMMANDS_ROOT_OBJECT_TYPE,
        namespace
    };
    const rootCommandsObject = createCommandObject(openmct, parentKey, namespace, rootCommandsIdentifier);

    return rootCommandsObject;
}

export function createCommandObject(openmct, parentKey, namespace, identifier, queueName = null) {
    const isRoot = queueName === null;
    const location = openmct.objects.makeKeyString({
        key: parentKey,
        namespace
    });

    const name = isRoot ? 'Commands' : queueName;
    const type = isRoot
        ? OBJECT_TYPES.COMMANDS_ROOT_OBJECT_TYPE
        : OBJECT_TYPES.COMMANDS_QUEUE_OBJECT_TYPE;

    const commandObject = {
        identifier,
        location,
        name,
        type,
        telemetry: {
            values: [
                {
                    key: 'commandName',
                    name: 'Command',
                    format: 'string',
                    hints: {
                        label: 0
                    }
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
                    key: 'sequenceNumber',
                    name: 'Sequence Number',
                    format: 'number'
                },
                {
                    key: 'comment',
                    name: 'Comment',
                    format: 'string'
                },
                {
                    key: 'source',
                    name: 'Source',
                    format: 'string'
                },
                {
                    key: 'queue',
                    name: 'Queue',
                    format: 'string'
                },
                {
                    key: 'binary',
                    name: 'Binary',
                    format: 'binary'
                },
                {
                    key: 'unprocessedBinary',
                    name: 'Unprocessed Binary',
                    format: 'string'
                },
                {
                    key: 'Acknowledge_Queued_Status',
                    name: 'Acknowledge Queued Status',
                    format: 'string'
                },
                {
                    key: 'Acknowledge_Queued_Time',
                    name: 'Acknowledge Queued Time',
                    format: 'iso'
                },
                {
                    key: 'Acknowledge_Released_Status',
                    name: 'Acknowledge Released Status',
                    format: 'string'
                },
                {
                    key: 'Acknowledge_Released_Time',
                    name: 'Acknowledge Released Time',
                    format: 'iso'
                },
                {
                    key: 'Acknowledge_Sent_Status',
                    name: 'Acknowledge Sent Status',
                    format: 'string'
                },
                {
                    key: 'Acknowledge_Sent_Time',
                    name: 'Acknowledge Sent Time',
                    format: 'iso'
                },
                {
                    key: 'username',
                    name: 'Issuer',
                    format: 'string'
                },
                {
                    key: 'origin',
                    name: 'Origin',
                    format: 'string'
                },
                {
                    key: 'CCSDS_Version',
                    name: 'CCSDS Version',
                    format: 'string'
                },
                {
                    key: 'CCSDS_Type',
                    name: 'CCSDS Type',
                    format: 'string'
                },
                {
                    key: 'CCSDS_Sec_Hdr_Flag',
                    name: 'CCSDS Sec Hdr Flag',
                    format: 'string'
                },
                {
                    key: 'CCSDS_APID',
                    name: 'CCSDS APID',
                    format: 'string'
                },
                {
                    key: 'CCSDS_Group_Flags',
                    name: 'CCSDS Group Flags',
                    format: 'string'
                },
                {
                    key: 'Packet_ID',
                    name: 'Packet ID',
                    format: 'string'
                },
                {
                    key: 'messageId',
                    name: 'row identifier',
                    format: 'string',
                    useToUpdateInPlace: true
                }
            ]
        }
    };

    if (isRoot) {
        commandObject.composition = [];
    }

    return commandObject;
}

export async function getCommandQueues(url, instance, processor = 'realtime') {
    const commandQueuesURL = `${url}api/processors/${instance}/${processor}/queues`;
    const response = await fetch(commandQueuesURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        console.error(`🛑 Error fetching command queues: ${response.statusText}`);

        return [];
    }

    const commandQueueJson = await response.json();
    const { queues } = commandQueueJson;
    const queueNames = queues.map(queue => queue.name);

    return queueNames;
}

/**
 * Convert raw command data from YAMCS to a format which
 * can be consumed by Open MCT as telemetry.
 * @param {Object} command
 * @returns {Object} telemetryDatum
 */
export function commandToTelemetryDatum(command) {
    const { generationTime, commandId, attr, assignments, id } = command;
    const { origin, sequenceNumber, commandName } = commandId;
    let datum = {
        id: OBJECT_TYPES.COMMANDS_QUEUE_OBJECT_TYPE,
        generationTime,
        origin,
        sequenceNumber,
        commandName,
        messageId: id
    };
    datum = attr ? flattenObjectArray(attr, datum) : datum;
    datum = assignments ? flattenObjectArray(assignments, datum) : datum;

    return datum;
}
