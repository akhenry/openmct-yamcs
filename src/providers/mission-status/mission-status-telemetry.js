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
import {
    idToQualifiedName
} from '../../utils.js';

export default class MissionStatusTelemetry {
    #missionStatusMap;
    #missionRoles;
    #missionRoleToTelemetryObjectMap;
    #setReady;
    #readyPromise;
    #url;
    #instance;
    #processor;
    #openmct;

    constructor(openmct, {url, instance, processor = 'realtime'}) {
        this.#missionStatusMap = {};
        this.#missionRoles = new Set();
        this.#missionRoleToTelemetryObjectMap = {};
        this.#readyPromise = new Promise((resolve) => this.#setReady = resolve);
        this.#url = url;
        this.#instance = instance;
        this.#processor = processor;
        this.#openmct = openmct;
    }
    async setStatusForMissionRole(role, status) {
        const telemetryObject = await this.getTelemetryObjectForRole(role);
        const setParameterUrl = this.#buildUrl(telemetryObject.identifier);
        let success = false;

        try {
            const result = await fetch(setParameterUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: 'SINT64',
                    sint64Value: status.key
                })
            });

            success = result.ok === true;
        } catch (error) {
            console.error(error);
        }

        return success;
    }
    async getPossibleMissionStatuses() {
        await this.#readyPromise;

        return Object.values(this.#missionStatusMap).map(status => this.toMissionStatusFromMdbEntry(status));
    }
    async getDefaultStatusForRole() {
        const possibleStatuses = await this.getPossibleMissionStatuses();

        return possibleStatuses[0];
    }
    addStatus(status) {
        this.#missionStatusMap[status.value] = status;
    }
    async getTelemetryObjectForRole(role) {
        await this.#readyPromise;

        return this.#missionRoleToTelemetryObjectMap[role];
    }
    setTelemetryObjectForRole(role, telemetryObject) {
        this.#missionRoleToTelemetryObjectMap[role] = telemetryObject;
    }
    addMissionRole(role) {
        this.#missionRoles.add(role);
    }
    async getAllMissionRoles() {
        await this.#readyPromise;

        return Array.from(this.#missionRoles);
    }
    toMissionStatusFromMdbEntry(yamcsStatus) {
        return {
            // eslint-disable-next-line radix
            key: parseInt(yamcsStatus.value),
            label: yamcsStatus.label
        };
    }
    toStatusFromTelemetry(telemetryObject, datum) {
        const metadata = this.#openmct.telemetry.getMetadata(telemetryObject);
        const rangeMetadata = metadata.valuesForHints(['range'])[0];
        const formatter = this.#openmct.telemetry.getValueFormatter(rangeMetadata);
        const timestampMetadata = metadata.valuesForHints(['domain'])[0];
        const dateFormatter = this.#openmct.telemetry.getValueFormatter(timestampMetadata);

        return {
            key: formatter.parse(datum),
            label: formatter.format(datum),
            timestamp: dateFormatter.parse(datum)
        };

    }
    dictionaryLoadComplete() {
        this.#setReady();
    }
    #buildUrl(id) {
        let url = `${this.#url}api/processors/${this.#instance}/${this.#processor}/parameters/${idToQualifiedName(id.key)}`;

        return url;
    }
}
