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
import { flattenObjectArray } from "../utils";

export function createCommandsObject(openmct, parentKey, namespace) {
    const location = openmct.objects.makeKeyString({
        key: parentKey,
        namespace
    });

    const identifier = {
        key: OBJECT_TYPES.COMMANDS_OBJECT_TYPE,
        namespace: namespace
    };
    const commandObject = {
        identifier,
        location,
        name: 'Commands',
        type: OBJECT_TYPES.COMMANDS_OBJECT_TYPE,
        telemetry: {
            values: [
                {
                    key: 'commandName',
                    name: 'Command'
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
                    name: 'Sequence Number'
                },
                {
                    key: 'comment',
                    name: 'Comment'
                },
                {
                    key: 'source',
                    name: 'Source'
                },
                {
                    key: 'queue',
                    name: 'Queue'
                },
                {
                    key: 'binary',
                    name: 'Binary'
                },
                {
                    key: 'unprocessedBinary',
                    name: 'Unprocessed Binary'
                },
                {
                    key: 'Acknowledge_Queued_Status',
                    name: 'Acknowledge Queued Status'
                },
                {
                    key: 'Acknowledge_Queued_Time',
                    name: 'Acknowledge Queued Time'
                },
                {
                    key: 'Acknowledge_Released_Status',
                    name: 'Acknowledge Released Status'
                },
                {
                    key: 'Acknowledge_Released_Time',
                    name: 'Acknowledge Released Time'
                },
                {
                    key: 'Acknowledge_Sent_Status',
                    name: 'Acknowledge Sent Status'
                },
                {
                    key: 'Acknowledge_Sent_Time',
                    name: 'Acknowledge Sent Time'
                },
                {
                    key: 'username',
                    name: 'Issuer'
                },
                {
                    key: 'origin',
                    name: 'Origin'
                },
                {
                    key: 'CCSDS_Version',
                    name: 'CCSDS Version'
                },
                {
                    key: 'CCSDS_Type',
                    name: 'CCSDS Type'
                },
                {
                    key: 'CCSDS_Sec_Hdr_Flag',
                    name: 'CCSDS Sec Hdr Flag'
                },
                {
                    key: 'CCSDS_APID',
                    name: 'CCSDS APID'
                },
                {
                    key: 'CCSDS_Group_Flags',
                    name: 'CCSDS Group Flags'
                },
                {
                    key: 'Packet_ID',
                    name: 'Packet ID'
                },
                {
                    key: 'messageId',
                    name: 'row identifier',
                    useToUpdateInPlace: true
                }
            ]
        }
    };

    return commandObject;
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
        id: OBJECT_TYPES.COMMANDS_OBJECT_TYPE,
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
