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
import {
    getValue,
    idToQualifiedName
} from '../utils.js';

export default class LatestTelemetryProvider {
    #bulkPromise;
    #batchIds;
    #openmct;

    constructor({url, instance, processor = 'realtime', openmct}) {
        this.url = url;
        this.instance = instance;
        this.processor = processor;
        this.#batchIds = [];
        this.#openmct = openmct;
    }
    async requestLatest(domainObject) {
        const yamcsId = idToQualifiedName(domainObject.identifier.key);
        this.#batchIds.push(yamcsId);

        if (this.#bulkPromise === undefined) {
            this.#bulkPromise = this.#deferBatchedGet();
        }

        try {
            const datumMap = await this.#bulkPromise;
            const result = datumMap[yamcsId];

            let openMctStyleDatum = undefined;

            if (result !== undefined) {
                if (result.acquisitionStatus !== undefined) {
                    openMctStyleDatum = {
                        id: result.id.name,
                        timestamp: result.generationTime,
                        value: getValue(result)
                    };
                }
            }

            return openMctStyleDatum;
        } catch (error) {
            console.error(error);
            this.#openmct.notifications.error(`Unable to fetch latest telemetry for ${domainObject.name}`);

            return undefined;
        }
    }
    async #deferBatchedGet() {
        // We until the next event loop cycle to "collect" all of the get
        // requests triggered in this iteration of the event loop

        await this.#waitOneEventCycle();
        let batchIds = [...new Set(this.#batchIds)];

        this.#clearBatch();

        return this.#bulkGet(batchIds);

    }
    async #bulkGet(batchIds) {
        const yamcsIds = batchIds.map((yamcsId) => {
            return {
                name: yamcsId
            };
        });

        const requestBody = {
            id: yamcsIds,
            fromCache: true
        };

        const response = await fetch(this.#buildUrl(), {
            method: 'POST',
            body: JSON.stringify(requestBody)
        });

        const json = await response.json();

        if (json.value !== undefined) {
            return json.value.reduce((map, parameterValue) => {
                map[parameterValue.id.name] = parameterValue;

                return map;
            }, {});
        } else {
            return {};
        }
    }

    #clearBatch() {
        this.#batchIds = [];
        this.#bulkPromise = undefined;
    }

    #waitOneEventCycle() {
        return new Promise((resolve) => {
            setTimeout(resolve);
        });
    }

    #buildUrl() {
        let url = `${this.url}api/processors/${this.instance}/${this.processor}/parameters:batchGet`;

        return url;
    }
}
