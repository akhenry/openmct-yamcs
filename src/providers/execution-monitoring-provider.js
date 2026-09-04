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
 * with a duration) for every plan at once, sourced from a single Yamcs
 * parameter whose value is a JSON-encoded snapshot keyed by plan identifier:
 * { execution_monitoring: { '<planKeyString>': { status, duration }, ... } }
 */
export default class ExecutionMonitoringProvider {
    #openmct;
    #telemetryObject;
    #latestExecutionMonitoring = {};
    #subscribersByPlan = new Map();

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
            status: () => Promise.resolve(this.#latestExecutionMonitoring[planKeyString])
        };
    }

    subscribeToExecutionMonitoring(domainObject, callback) {
        const planKeyString = this.#openmct.objects.makeKeyString(domainObject.identifier);
        let callbacks = this.#subscribersByPlan.get(planKeyString);
        if (callbacks === undefined) {
            callbacks = new Set();
            this.#subscribersByPlan.set(planKeyString, callbacks);
        }

        callbacks.add(callback);

        return () => callbacks.delete(callback);
    }

    #onDatum(datum) {
        const executionMonitoring = parseExecutionMonitoring(datum);
        if (!executionMonitoring) {
            return;
        }

        this.#latestExecutionMonitoring = executionMonitoring;

        Object.entries(executionMonitoring).forEach(([planKeyString, status]) => {
            const callbacks = this.#subscribersByPlan.get(planKeyString);
            if (callbacks) {
                callbacks.forEach((callback) => callback(status));
            }
        });
    }
}

function parseExecutionMonitoring(datum) {
    if (!datum || typeof datum.value !== 'string') {
        return undefined;
    }

    try {
        return JSON.parse(datum.value).execution_monitoring;
    } catch (error) {
        console.warn('Unable to parse execution monitoring parameter value', error);

        return undefined;
    }
}
