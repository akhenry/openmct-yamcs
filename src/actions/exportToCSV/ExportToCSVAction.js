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
        this._openmct = openmct;
    }

    // Only allow export to CSV for telemetry objects, aggregates and objects with composition.
    // Objects with composition may not have valid children, which could result in an error.
    appliesTo(objectPath) {
        if (!objectPath.length) {
            return false;
        }

        const object = objectPath[0];
        const hasChildren = object.composition && object.composition.length;

        //allow if the object has children or if it is a telemetry object
        return hasChildren || SUPPORTED_TYPES.includes(object.type);
    }

    // Exports telemetry (or groups of telemetry) data into CSV file
    async invoke(objectPath) {
        const object = objectPath[0];
        let parameterIds = [];
        let objectPromises = [];

        if (object.composition?.length) {
            object.composition.forEach((id, index) => {
                objectPromises.push(
                    this._openmct.objects.get(id).then((childObject) => {
                        if (SUPPORTED_TYPES.includes(childObject.type)) {
                            parameterIds.push(this.getParameter(childObject.identifier));
                        }
                        return true;
                    })
                );
            });
        } else {
            let objectResolve;
            const objectPromise = new Promise((resolve) => {
                objectResolve = resolve;
            });
            objectPromises.push(objectPromise);

            parameterIds.push(this.getParameter(object.identifier));
            objectResolve(true);
        }

        Promise.all(objectPromises).then(async () => {
            if (!parameterIds.length) {
                this._openmct.notifications.error(`Failed to export: no telemetry objects found`);
                return;
            }

            const response = await this.fetchExportedValues(parameterIds);
            if (response?.msg) {
                this._openmct.notifications.error(`Failed to export: ${response.msg}`);
            } else {
                let filename = `${parameterIds.join('-')}.csv`;
                let blob = new Blob([response], { type: "text/csv" });
                saveAs(blob, filename);
            }
        });
    }

    //Change openmct id to yamcs name and remove namespace from identifier
    getParameter(identifier) {
        let id = this._openmct.objects.makeKeyString(identifier);
        id = idToQualifiedName(id).replace(/^.*:\//, '');
        return id;
    }

    fetchExportedValues(parameterIds) {
        const bounds = this._openmct.time.bounds();
        const start = bounds.start;
        const end = bounds.end;
        const parameterIdsString = parameterIds.join(',');

        let url = `${this.url}api/archive/${this.instance}:exportParameterValues`;
        url += `?start=${new Date(start).toISOString()}`;
        url += `&stop=${new Date(end).toISOString()}`;
        url += `&parameters=${parameterIdsString}`;
        url += `&delimiter=COMMA`;

        return fetch(url)
            .then(async response => {
                if (!response.ok) {
                    return response.json();
                } else {
                    return response.text();
                }
            });

    }
}
