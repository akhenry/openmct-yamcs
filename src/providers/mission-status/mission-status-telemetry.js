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
    #missionActions;
    /** @type {Set<string>} */
    #missionStatusParameterNames;
    #missionActionToTelemetryObjectMap;
    #setReady;
    #readyPromise;
    #url;
    #instance;
    #processor;
    #openmct;

    constructor(openmct, { url, instance, processor = 'realtime' }) {
        this.#missionStatusMap = {};
        this.#missionActions = new Set();
        this.#missionStatusParameterNames = new Set();
        this.#missionActionToTelemetryObjectMap = {};
        this.#readyPromise = new Promise((resolve) => this.#setReady = resolve);
        this.#url = url;
        this.#instance = instance;
        this.#processor = processor;
        this.#openmct = openmct;
    }

    /**
     * Set the status for a particular mission action.
     * @param {MissionAction} action the mission action
     * @param {MissionStatus} status the status
     * @returns {Promise<boolean>} true if the status was set successfully
     */
    async setStatusForMissionAction(action, status) {
        const telemetryObject = await this.getTelemetryObjectForAction(action);
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

    /**
     * Get the possible mission statuses.
     * i.e: "Go" or "No Go"
     * @returns {Promise<MissionStatus[]>}
     */
    async getPossibleMissionStatuses() {
        await this.#readyPromise;

        return Object.values(this.#missionStatusMap).map(status => this.toMissionStatusFromMdbEntry(status));
    }

    /**
     * Get the default status for any mission action.
     * Returns the first status in the list of possible statuses.
     * @returns {Promise<MissionStatus>}
     */
    async getDefaultStatusForAction() {
        const possibleStatuses = await this.getPossibleMissionStatuses();

        return possibleStatuses[0];
    }

    /**
     * Adds a mission status to the list of possible statuses.
     * @param {MissionStatus} status
     */
    addStatus(status) {
        this.#missionStatusMap[status.value] = status;
    }

    /**
     * Get the telemetry object for a mission action.
     * @param {MissionAction} action the mission action
     * @returns {Promise<TelemetryObject>} the telemetry object
     */
    async getTelemetryObjectForAction(action) {
        await this.#readyPromise;

        return this.#missionActionToTelemetryObjectMap[action];
    }

    /**
     * Check if this parameter name is a mission status parameter name.
     * @param {string} parameterName
     * @returns {boolean} true if the parameter name is a mission status parameter name
     */
    async isMissionStatusParameterName(parameterName) {
        await this.#readyPromise;
        if (this.#missionStatusParameterNames.has(parameterName)) {
            return true;
        }

        const parameterRegExp = new RegExp(`^${parameterName}$`);
        for (const missionStatusParameterName of this.#missionStatusParameterNames) {
            if (parameterRegExp.test(missionStatusParameterName)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Set the telemetry object for a mission action.
     * @param {MissionAction} action
     * @param {TelemetryObject} telemetryObject
     */
    setTelemetryObjectForAction(action, telemetryObject) {
        this.#missionActionToTelemetryObjectMap[action] = telemetryObject;
    }

    /**
     * Add a mission action to the list of possible actions.
     * @param {MissionAction} action
     */
    addMissionAction(action) {
        this.#missionActions.add(action);
    }

    /**
     * Add a mission status parameter name to the list of parameter names.
     * @param {string} parameterName
     */
    addMissionStatusParameterName(parameterName) {
        this.#missionStatusParameterNames.add(parameterName);
    }

    /**
     * Get a list of all mission actions.
     * @returns {Promise<MissionAction[]>}
     */
    async getAllMissionActions() {
        await this.#readyPromise;

        return Array.from(this.#missionActions);
    }

    /**
     * Get the current status of a mission action given its MDB entry.
     * @param {MdbEntry} yamcsStatus the MDB entry
     * @returns {MissionStatus}
     */
    toMissionStatusFromMdbEntry(yamcsStatus) {
        return {
            // eslint-disable-next-line radix
            key: parseInt(yamcsStatus.value),
            label: yamcsStatus.label
        };
    }

    /**
     * Receives a telemetry object and a datum and returns a mission status.
     * @param {TelemetryObject} telemetryObject the telemetry object
     * @param {Datum} datum the datum object
     * @returns {MissionStatus}
     */
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

    /**
     * Fires when the dictionary is loaded.
     */
    dictionaryLoadComplete() {
        this.#setReady();
    }

    /**
     * Construct the URL for a parameter.
     * @param {import('openmct').Identifier} id the identifier
     * @returns {string}
     */
    #buildUrl(id) {
        let url = `${this.#url}api/processors/${this.#instance}/${this.#processor}/parameters/${idToQualifiedName(id.key)}`;

        return url;
    }
}

/**
 * @typedef {Object} MissionStatus
 * @property {number} key
 * @property {string} label
 * @property {number?} timestamp
 */

/**
 * @typedef {string} MissionAction
 */

/**
 * @typedef {Object} TelemetryObject
 * @property {import('openmct').Identifier} identifier
 * @property {string} name
 * @property {string} type
 * @property {string} location
 * @property {string} configuration
 * @property {string} domain
 * @property {object} telemetry
 * @property {TelemetryValue[]} telemetry.values
 * @property {string} metadata
 * @property {string} composition
 * @property {string} object
 * @property {string} value
 */

/**
 * @typedef {object} TelemetryValue
 * @property {string} key
 * @property {string} name
 * @property {string} format
 * @property {string} source
 * @property {object} hints
 * @property {number} hints.domain
 */

/**
 * @typedef {object} Datum
 * @property {string} id
 * @property {string} timestamp
 * @property {string} acquisitionStatus
 * @property {*} value
 */

/**
 * @typedef {object} MdbEntry
 * @property {string} value
 * @property {string} label
 * @property {string} description
 */
