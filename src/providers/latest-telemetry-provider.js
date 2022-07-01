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

export default class LatestTelemetryProvider {
    #pendingRequests;
    #telemetryCache;

    constructor() {
        this.#pendingRequests = new Map();
        this.#telemetryCache = new Map();
    }

    async requestLatest(domainObject) {
        const keystring = this.openmct.object.makeKeyString(domainObject.identifier);

        if (this.#isPending(keystring)) {
            return this.#pendingRequests.get(keystring).promise;
        } else {
            if (this.#hasValidCache(keystring)) {
                return Promise.resolve(this.#telemetryCache.get(keystring));
            } else {
                return this.#issueNewRequest(domainObject);
            }
        }
    }
    setPending(keystring) {
        if (this.#isPending(keystring)) {
            throw new Error(`Request for ${keystring} is already pending`);
        } else {
            let resolveFunction;
            let pendingPromise = new Promise((resolve, reject) => {
                resolveFunction = resolve;
                //What to do with reject? What would this even mean?
            });

            this.#pendingRequests.set(keystring, {
                promise: pendingPromise,
                resolve: resolveFunction
            });
        }
    }
    setDatum(keystring, datum) {
        this.#telemetryCache.set(keystring, datum);

        if (this.#isPending(keystring)) {
            const resolveFunction = this.#pendingRequests.get(keystring).resolve;
            resolveFunction(datum);
            this.#pendingRequests.delete(keystring);
        }
    }
    invalidateCache(keystring) {
        this.#telemetryCache.delete(keystring);
    }
    #issueNewRequest(domainObject) {
        const keystring = this.openmct.object.makeKeyString(domainObject.identifier);
        this.setPending(keystring);
        const unsubscribe = this.openmct.telemetry.subscribe(domainObject, (datum) => {
            this.setDatum(keystring, datum);
            unsubscribe();
        });

        return this.#pendingRequests.get(keystring).promise;
    }
    #hasValidCache(keystring) {
        return this.#telemetryCache.has(keystring);
    }
    #isPending(keystring) {
        return this.#pendingRequests.has(keystring);
    }
}
