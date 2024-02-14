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

const MISSION_STATUS_TYPE = 'yamcs.missionStatus';
const MISSION_ACTION_NAMESPACE = 'OpenMCT:action';

/**
 * Check if the parameter is a mission status parameter
 * @param {*} parameter
 * @returns {boolean} true if the parameter is a mission status parameter, false otherwise
 */
export function isMissionStatusParameter(parameter) {
    const aliases = parameter.alias;

    return aliases !== undefined
        && aliases.some(alias => alias.name === MISSION_STATUS_TYPE);
}

/**
 * Get the mission action from the parameter
 * @param {*} parameter
 * @returns {import("./mission-status-telemetry").MissionAction? } the mission action name if the parameter is a mission action parameter, null otherwise
 */
export function getMissionActionFromParameter(parameter) {
    const aliases = parameter.alias;

    return aliases.find(alias => alias.namespace === MISSION_ACTION_NAMESPACE)?.name ?? null;
}

/**
 * Get the possible mission action statuses from the parameter
 * @param {*} parameter 
 * @returns {string[]}
 */
export function getPossibleMissionActionStatusesFromParameter(parameter) {
    return parameter.type.enumValue;
}
