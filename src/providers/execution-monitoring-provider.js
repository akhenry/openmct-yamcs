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

import { OBJECT_TYPES, NAMESPACE } from '../const.js';
import { qualifiedNameToId } from '../utils.js';

const PLAN_OBJECT_TYPE = 'plan';

/**
 * Reports plan execution monitoring status (nominal/ahead/behind schedule,
 * with a duration) for a single plan, sourced from a single Yamcs aggregate
 * parameter with members { planIdentifier, status, duration }.
 */
export default class ExecutionMonitoringProvider {
    #openmct;
    #telemetryObject;
    #latestEntry;
    #subscribers = new Set();

    constructor(openmct, { parameterName }) {
        this.#openmct = openmct;
        this.#telemetryObject = {
            identifier: {
                key: qualifiedNameToId(parameterName),
                namespace: NAMESPACE
            },
            type: OBJECT_TYPES.EXECUTION_MONITOR_TYPE
        };

        const unsubscribe = this.#openmct.telemetry.subscribe(
            this.#telemetryObject,
            this.#onDatum.bind(this)
        );
        openmct.once('destroy', unsubscribe);
    }

    supportsExecutionMonitoring(domainObject) {
        return domainObject.type === PLAN_OBJECT_TYPE;
    }

    getExecutionMonitoring(domainObject) {
        const planKeyString = this.#openmct.objects.makeKeyString(domainObject.identifier);

        return {
            status: () => Promise.resolve(this.#statusForPlan(planKeyString))
        };
    }

    subscribeToExecutionMonitoring(domainObject, callback) {
        const planKeyString = this.#openmct.objects.makeKeyString(domainObject.identifier);
        const subscriber = {
            planKeyString,
            callback
        };
        this.#subscribers.add(subscriber);

        return () => this.#subscribers.delete(subscriber);
    }

    #statusForPlan(planKeyString) {
        if (this.#latestEntry && this.#latestEntry.planIdentifier === planKeyString) {
            return this.#latestEntry.status;
        }

        return undefined;
    }

    #onDatum(datum) {
        const entry = parseExecutionMonitoringEntry(datum);
        if (!entry) {
            return;
        }

        this.#latestEntry = entry;

        this.#subscribers.forEach((subscriber) => {
            if (subscriber.planKeyString === entry.planIdentifier) {
                subscriber.callback(entry.status);
            }
        });
    }
}

function parseExecutionMonitoringEntry(datum) {
    if (!datum || datum.planIdentifier === undefined || datum.status === undefined) {
        return undefined;
    }

    return {
        planIdentifier: String(datum.planIdentifier),
        status: {
            status: String(datum.status).toLowerCase(),
            duration: Number(datum.duration) || 0
        }
    };
}
