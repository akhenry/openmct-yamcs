/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2023, United States Government
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
import { OBJECT_TYPES } from "../../const";
import {idToQualifiedName} from "../../utils";
import {saveAs} from 'saveAs';

const SUPPORTED_TYPES = [OBJECT_TYPES.TELEMETRY_OBJECT_TYPE, OBJECT_TYPES.AGGREGATE_TELEMETRY_TYPE];

export default class ExportToCSVAction {
    constructor(openmct, url, instance) {
        this.name = 'Export to CSV';
        this.key = 'exportToCSV';
        this.cssClass = "icon-export";
        this.description = 'Export the values for this telemetry object for a given time range.';
        this.group = 'action';
        this.priority = 2;

        this.url = url;
        this.instance = instance;
        this.openmct = openmct;
    }

    // Only allow export to CSV for telemetry objects, aggregates and objects with composition.
    // Objects with composition may not have valid children, which could result in an error.
    appliesTo(objectPath) {
        if (!objectPath.length) {
            return false;
        }

        const object = objectPath[0];
        const composition = this.openmct.composition.get(object);

        //allow if the object has composition or if it is a supported telemetry object
        return composition !== undefined || SUPPORTED_TYPES.includes(object.type);
    }

    // Exports telemetry (or groups of telemetry) data into CSV file
    invoke(objectPath) {
        const object = objectPath[0];
        let parameterIds = [];
        let parameterIdsPromise;
        const composition = this.openmct.composition.get(object);

        if (composition) {
            parameterIdsPromise = Promise.resolve(composition.load());
        } else {
            parameterIdsPromise = Promise.resolve([object]);
        }

        parameterIdsPromise.then(async (childObjects) => {
            //Check if the objects are of a supported type
            childObjects.forEach(childObject => {
                if (SUPPORTED_TYPES.includes(childObject.type)) {
                    parameterIds.push(this.getParameter(childObject.identifier));
                }
            });

            if (!parameterIds.length) {
                this.openmct.notifications.error(`Failed to export: no telemetry objects found`);

                return;
            }

            //Get the CSV data if some parameter ids are valid
            const response = await this.fetchExportedValues(parameterIds);
            if (response?.msg) {
                this.openmct.notifications.error(`Failed to export: ${response.msg}`);
            } else {
                let filename = `${parameterIds.join('-')}.csv`;
                let blob = new Blob([response], { type: "text/csv" });
                saveAs(blob, filename);
            }
        })
            .catch((error) => {
                this.openmct.notifications.error(`Failed to export: ${error}`);
            });
    }

    //Change openmct id to yamcs name and remove namespace from identifier
    getParameter(identifier) {
        let id = this.openmct.objects.makeKeyString(identifier);
        id = idToQualifiedName(id).replace(/^.*:\//, '');

        return id;
    }

    async fetchExportedValues(parameterIds) {
        const bounds = this.openmct.time.bounds();
        const start = bounds.start;
        const end = bounds.end;
        const parameterIdsString = parameterIds.join(',');

        let url = `${this.url}api/archive/${this.instance}:exportParameterValues`;
        url += `?start=${new Date(start).toISOString()}`;
        url += `&stop=${new Date(end).toISOString()}`;
        url += `&parameters=${parameterIdsString}`;
        url += `&delimiter=COMMA`;

        const response = await fetch(url);
        if (!response.ok) {
            return response.json();
        } else {
            return response.text();
        }

    }
}
