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
    qualifiedNameToId,
    idToQualifiedName,
    accumulateResults
} from '../utils.js';

import { OBJECT_TYPES, NAMESPACE } from '../const';
import OperatorStatusParameter from './user/operator-status-parameter.js';
import { createCommandsObject } from './commands.js';
import { createEventsObject } from './events.js';
import limitConfig from "../limits-config.json";
import _ from 'lodash';

const YAMCS_API_MAP = {
    'space-systems': 'spaceSystems',
    'parameters': 'parameters'
};
const operatorStatusParameter = new OperatorStatusParameter();
const BATCH_DEBOUNCE_MS = 100;

export default class YamcsObjectProvider {
    #openmct;
    #url;
    #instance;
    #bulkParameterUrl;
    #listParameterUrl;
    #folderName;
    #namespace;
    #key;
    #dictionary;
    #spaceSystemPromise;
    #parameterLoadingQueue;
    #roleStatusTelemetry;
    #pollQuestionParameter;
    #pollQuestionTelemetry;

    constructor(openmct, url, instance, folderName, roleStatusTelemetry, pollQuestionParameter, pollQuestionTelemetry) {
        this.#openmct = openmct;
        this.#url = url;
        this.#instance = instance;
        this.#bulkParameterUrl = new URL(`${this.#url}api/mdb/${this.#instance}/parameters:batchGet`);
        this.#listParameterUrl = new URL(`${this.#url}api/mdb/${this.#instance}/parameters?details=yes&limit=1000`);
        this.#folderName = folderName;
        this.#namespace = NAMESPACE;
        this.#key = 'spacecraft';
        this.#dictionary = {};
        this.#spaceSystemPromise = null;
        this.#parameterLoadingQueue = [];
        this.flushparameterLoadingQueue = _.debounce(this.flushparameterLoadingQueue.bind(this), BATCH_DEBOUNCE_MS);
        this.#roleStatusTelemetry = roleStatusTelemetry;
        this.#pollQuestionParameter = pollQuestionParameter;
        this.#pollQuestionTelemetry = pollQuestionTelemetry;

        this.#initialize();
    }

    #initialize() {
        this.#createRootObject();
        const eventsObject = createEventsObject(this.#openmct, this.#key, this.#namespace);
        const commandsObject = createCommandsObject(this.#openmct, this.#key, this.#namespace);
        this.#addObject(commandsObject);
        this.#addObject(eventsObject);
        this.rootObject.composition.push(
            eventsObject.identifier,
            commandsObject.identifier
        );
    }

    #createRootObject() {
        this.rootObject = {
            identifier: {
                key: this.#key,
                namespace: this.#namespace
            },
            name: this.#folderName,
            type: 'folder',
            location: 'ROOT',
            composition: []
        };

        this.#addObject(this.rootObject);
    }

    async get(identifier) {
        const { key } = identifier;
        const dictionary = await this.#getTelemetryDictionary();
        if (dictionary[key]) {
            return dictionary[key];
        } else {
            // need to lazy load this
            console.debug(`❓ Lazy loading ${key} from dictionary`);

            return new Promise((resolve, reject) => {
                this.#parameterLoadingQueue.push({
                    key,
                    resolve,
                    reject
                });
                this.flushparameterLoadingQueue();
            });
        }
    }

    async flushparameterLoadingQueue(abortSignal) {
        if (this.#parameterLoadingQueue.length >= 1) {
            const batch = this.#parameterLoadingQueue.map((queued) => {
                const parameterName = idToQualifiedName(queued.key);
                console.debug(`📦 Adding ${parameterName} to batch request`);

                return {
                    name: parameterName
                };
            });
            const bodyForYamcs = {
                id: batch
            };
            const fetchOptions = {
                method: 'POST',
                body: JSON.stringify(bodyForYamcs),
                headers: {
                    "Content-Type": "application/json"
                },
                signal: abortSignal
            };
            console.debug(`📦 Fetching ${batch.length} objects from dictionary`, bodyForYamcs);
            const bulkGetResponse = await fetch(this.#bulkParameterUrl, fetchOptions);
            if (!bulkGetResponse.ok) {
                const error = new Error(`Failed to fetch objects from dictionary: ${bulkGetResponse.statusText}`);
                error.response = bulkGetResponse;
                this.#parameterLoadingQueue.forEach((queuedObject) => {
                    queuedObject.reject(error);
                });

                return;
            }

            const parameterResults = await bulkGetResponse.json();
            parameterResults.response.forEach((parameterResult) => {
                const foundQueuedParameter = this.#parameterLoadingQueue.find((queuedParameter) => {
                    const transformedResultName = qualifiedNameToId(parameterResult.parameter.qualifiedName);

                    return queuedParameter.key === transformedResultName;
                });
                if (foundQueuedParameter) {
                    console.debug(`📦 Building parameter`, parameterResult.parameter);
                    this.#addParameterObject(parameterResult.parameter);
                    const builtParameter = this.#dictionary[foundQueuedParameter.key];
                    foundQueuedParameter.resolve(builtParameter);
                }
            });
            console.debug(`📦 Received ${parameterResults.response.length} objects from dictionary`);
        }

        this.persistenceQueue = [];
    }

    supportsSearchType(type) {
        return type === this.#openmct.objects.SEARCH_TYPES.OBJECTS;
    }

    async search(query, abortSignal, searchType) {
        const spaceSystemsSearch = this.#searchMdbApi('space-systems', query, abortSignal);
        const parametersSearch = this.#searchMdbApi('parameters', query, abortSignal);

        const [spaceSystemsResults, parametersResults] = await Promise.all([spaceSystemsSearch, parametersSearch]);

        return [...spaceSystemsResults, ...parametersResults];
    }

    async #convertSingleSearchHitToTelemetry(qualifiedName) {
        const identifier = {
            key: qualifiedNameToId(qualifiedName),
            namespace: this.#namespace
        };
        const telemetry = await this.get(identifier);

        return telemetry;
    }

    async #convertSearchHitToTelemetries(query, hit) {
        let telemetries = [];

        // first check if we match the query in any case
        if ((hit.qualifiedName.toLowerCase().includes(query.toLowerCase()))) {
            const telemetry = await this.#convertSingleSearchHitToTelemetry(hit.qualifiedName);

            telemetries.push(telemetry);
        }

        // Are we an aggregated type?
        if (hit.type?.member) {
        // recurse through members to see if they match too
            await Promise.all(hit.type.member.map(async (memberParameter) => {
                const qualifiedName = `${hit.qualifiedName}.${memberParameter.name}`;
                memberParameter.qualifiedName = qualifiedName;
                const memberTelemetriesThatMatch = await this.#convertSearchHitToTelemetries(query, memberParameter);
                telemetries.push(...memberTelemetriesThatMatch);
            }));
        }

        return telemetries;
    }

    async #searchMdbApi(operation, query, abortSignal) {
        console.debug(`🕵️‍♀️ Searching MDB API for ${operation} with query ${query}`);
        const key = YAMCS_API_MAP[operation];
        const search = await this.#fetchMdbApi(`${operation}?q=${query}&searchMembers=true&details=false`, abortSignal);
        const hits = search[key];

        if (!hits) {
            return [];
        }

        // make sure we have the dictionary loaded first
        // even though calling get will fetch dictionary if not already loaded
        await this.#getTelemetryDictionary();

        // if multiple members match, YAMCS sends us duplicates 🙇‍♂️
        const hitsWithoutDupes = [];
        hits.forEach((hit) => {
            const hitExtant = hitsWithoutDupes.some((existingHit) => {
                return existingHit.qualifiedName === hit.qualifiedName;
            });

            if (!hitExtant) {
                hitsWithoutDupes.push(hit);
            }
        });

        const results = await Promise.all(
            hitsWithoutDupes.map(async hit => {
                const telemetryResults = await this.#convertSearchHitToTelemetries(query, hit);

                return telemetryResults;
            })
        );
        const flattenedResults = results.flat();

        return flattenedResults;
    }

    #getTelemetryDictionary() {
        if (!this.#spaceSystemPromise) {
            this.#spaceSystemPromise = this.#loadSpaceSystems(this.#url, this.#instance, this.#folderName)
                .finally(() => {
                    this.#roleStatusTelemetry.dictionaryLoadComplete();
                });
        }

        return this.#spaceSystemPromise;
    }

    async #loadSpaceSystems() {
        const url = this.#getMdbUrl('space-systems');
        const spaceSystems = await accumulateResults(url, {}, 'spaceSystems', []);

        /* Sort the space systems by name, so that the
            children of the root object are in sorted order. */
        spaceSystems.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        spaceSystems.forEach(spaceSystem => {
            this.#addSpaceSystem(spaceSystem);
        });

        return this.#dictionary;
    }

    #getMdbUrl(operation, name = '') {
        return this.#url + 'api/mdb/' + this.#instance + '/' + operation + name;
    }

    async #fetchMdbApi(operation, abortSignal) {
        const mdbURL = `${this.#url}api/mdb/${this.#instance}/${operation}`;
        const response = await fetch(mdbURL, { signal: abortSignal });
        const parsedJSON = await response.json();

        return parsedJSON;
    }

    async loadParametersForSpaceSystem(domainObject) {
        console.debug(`🍇 Loading parameters for space system ${domainObject.identifier.key}`);
        const spaceSystemQualifiedName = idToQualifiedName(domainObject.identifier.key);
        this.#listParameterUrl.searchParams.set('system', spaceSystemQualifiedName);
        const childParameters = await accumulateResults(this.#listParameterUrl, {}, 'parameters', []);
        childParameters.forEach(parameter => {
            this.#addParameterObject(parameter);
        });
    }

    #addSpaceSystem(spaceSystem) {
        if (spaceSystem.qualifiedName !== '/') {
            let composition = [];

            if (spaceSystem.sub) {
                /* Sort the subsidiary space systems by name. */
                spaceSystem.sub.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                });
                spaceSystem.sub.forEach(sub => {
                    let subId = qualifiedNameToId(sub.qualifiedName);
                    composition.push({
                        key: subId,
                        namespace: this.#namespace
                    });
                });
            }

            let id = qualifiedNameToId(spaceSystem.qualifiedName);
            const locationId = id.substring(0, id.lastIndexOf('~'));
            const isSubSystem = locationId.includes('~');
            const key = isSubSystem ? locationId : this.#key;
            const location = this.#openmct.objects.makeKeyString({
                namespace: this.#namespace,
                key: key
            });
            let obj = {
                identifier: {
                    key: id,
                    namespace: this.#namespace
                },
                name: spaceSystem.name,
                type: 'folder',
                composition: composition,
                location: location
            };

            this.#addObject(obj);

            /* Add the space system to the root object if it's top-level. */
            if (spaceSystem.qualifiedName.lastIndexOf('/') === 0) {
                this.#listParameterUrl.searchParams.set('system', spaceSystem.qualifiedName);
                this.rootObject.composition.push({
                    key: id,
                    namespace: this.#namespace
                });
            }
        }
    }

    #addObject(object) {
        this.#dictionary[object.identifier.key] = object;
    }

    /*
     * Add a telemetry parameter object to the object tree, unless it
     * has an alias indicating to omit the parameter from OpenMCT.
     */
    #addParameterObject(parameter) {
        if (!this.#isSuppressed(parameter)) {
            let qn = parameter.qualifiedName;
            let lastSlashPos = qn.lastIndexOf('/');
            let parentId = qualifiedNameToId(qn.substring(0, lastSlashPos));
            let parent = this.#dictionary[parentId];

            this.#addParameter(parameter, qn, parent, '');
        }
    }

    #isSuppressed(parameter) {
        return (parameter.alias && parameter.alias.some(alias => {
            return (alias.namespace === 'OpenMCT:omit');
        }));
    }

    #getLimitFromAlarmRange(alarmRange) {
        let limits = {};
        alarmRange.forEach(alarm => {
            limits[alarm.level] = {
                low: {
                    color: limitConfig[alarm.level],
                    value: alarm.minInclusive || alarm.minExclusive
                },
                high: {
                    color: limitConfig[alarm.level],
                    value: alarm.maxInclusive || alarm.maxExclusive
                }
            };
        });

        return limits;
    }

    #convertToLimits(defaultAlarm) {
        if (defaultAlarm?.staticAlarmRange) {
            return this.#getLimitFromAlarmRange(defaultAlarm.staticAlarmRange);
        } else {
            throw new Error(`Passed alarm has invalid object syntax for limit conversion`, defaultAlarm);
        }
    }

    #addParameter(parameter, qualifiedName, parent, prefix) {
        const id = qualifiedNameToId(qualifiedName);
        const name = prefix + parameter.name;
        const location = this.#openmct.objects.makeKeyString({
            key: parent.identifier.key,
            namespace: parent.identifier.namespace
        });
        const obj = {
            identifier: {
                key: id,
                namespace: this.#namespace
            },
            type: this.#getParameterType(parameter),
            name: name,
            location: location,
            configuration: {},
            telemetry: {
                values: [{
                    key: 'utc',
                    source: 'timestamp',
                    name: 'Timestamp',
                    format: 'iso',
                    hints: {
                        domain: 1
                    }
                }]
            }
        };
        const isAggregate = this.#isAggregate(parameter);
        let aggregateHasMembers = false;

        if (parameter.type.defaultAlarm) {
            obj.configuration.limits = this.#convertToLimits(parameter.type.defaultAlarm);
        }

        if (!isAggregate) {
            const key = 'value';
            const telemetryValue = {
                key,
                name: 'Value',
                hints: {
                    range: 1
                }
            };

            const hasUnits = this.#hasUnit(parameter);

            if (hasUnits) {
                const unitSuffix = this.#getUnit(parameter);
                telemetryValue.unit = unitSuffix;
            }

            if (operatorStatusParameter.isOperatorStatusParameter(parameter)) {
                const role = operatorStatusParameter.getRoleFromParameter(parameter);
                if (!role) {
                    throw new Error(`Operator Status Parameter "${parameter.qualifiedName}" does not specify a role`);
                }

                const possibleStatuses = operatorStatusParameter.getPossibleStatusesFromParameter(parameter);
                possibleStatuses.forEach(state => this.#roleStatusTelemetry.addStatus(state));
                this.#roleStatusTelemetry.addStatusRole(role);
                this.#roleStatusTelemetry.setTelemetryObjectForRole(role, obj);
            }

            if (this.#pollQuestionParameter.isPollQuestionParameter(parameter)) {
                this.#pollQuestionParameter.setPollQuestionParameter(parameter);
                this.#pollQuestionTelemetry.setTelemetryObject(obj);
                telemetryValue.format = 'string';
            }

            if (this.#isEnumeration(parameter)) {
                telemetryValue.format = 'enum';
                const yamcsEnumerations = parameter.type.enumValue || [];
                telemetryValue.enumerations = yamcsEnumerations.map(enumValue => {
                    let rawValue = enumValue.value;

                    if (!(isNaN(rawValue))) {
                        // eslint-disable-next-line radix
                        rawValue = parseInt(rawValue);
                    }

                    return {
                        value: rawValue,
                        string: enumValue.label
                    };
                });
            }

            if (this.#isArray(parameter)) {
                telemetryValue.format = parameter.type.engType;
            }

            obj.telemetry.values.push(telemetryValue);

            this.#addHints(key, obj);
        } else {
            aggregateHasMembers = this.#aggregateHasMembers(parameter);
            obj.composition = [];
            if (aggregateHasMembers) {
                const memberMetadata = this.#formatAggregateMembers(parameter.type.member, name.replace('_', '.'));
                obj.telemetry.values = obj.telemetry.values.concat(memberMetadata);
            }
        }

        this.#addObject(obj);

        parent.composition.push(obj.identifier);

        if (aggregateHasMembers) {
            parameter.type.member.forEach(member => {
                const memberQualifiedName = qualifiedName + '.' + member.name;
                /* Use current name as a prefix for the member name. */
                this.#addParameter(member, memberQualifiedName, obj, `${name}.`);
            });
        }
    }

    #addHints(key, obj) {
        const metadatum = obj.telemetry.values.find(md => md.key === key);

        if (obj.type === OBJECT_TYPES.STRING_OBJECT_TYPE) {
            metadatum.hints = {};
        } else if (obj.type === OBJECT_TYPES.IMAGE_OBJECT_TYPE) {
            metadatum.hints = { image: 1 };
            metadatum.format = 'image';
        }

    }

    #isAggregate(parameter) {
        return parameter?.type?.engType === 'aggregate';
    }

    #isEnumeration(parameter) {
        return parameter?.type?.engType === 'enumeration';
    }

    #isArray(parameter) {
        return parameter?.type?.engType.endsWith('[]');
    }

    #formatAggregateMembers(members, parentKey = '', rangeHint = 1) {
        let formatted = [];

        members.forEach(member => {
            let key = member.name;
            let name = member.name;

            if (parentKey) {
                key = parentKey + '.' + key;

                if (parentKey.includes('.')) {
                    name = parentKey.split('.').pop() + ' ' + name;
                }
            }

            if (!this.#isAggregate(member)) {
                if (this.#isArray(member)) {
                    formatted.push({
                        key,
                        name,
                        hints: {
                            range: rangeHint++
                        },
                        format: member.type.engType
                    });
                } else {
                    formatted.push({
                        key,
                        name,
                        hints: {
                            range: rangeHint++
                        }
                    });
                }
            } else if (this.#aggregateHasMembers(member)) {
                let formattedSubMembers = this.#formatAggregateMembers(member.type.member, key, rangeHint);
                formatted = formatted.concat(formattedSubMembers);
            }
        });

        return formatted;
    }

    #aggregateHasMembers(parameter) {
        return this.#isAggregate(parameter) && parameter.type.member;
    }

    #getParameterType(parameter) {
        for (let i in parameter.alias) {
            if (parameter.alias[i].namespace === 'OpenMCT:type') {
                return parameter.alias[i].name;
            }
        }

        if (this.#isAggregate(parameter) && this.#aggregateHasMembers(parameter)) {
            return OBJECT_TYPES.AGGREGATE_TELEMETRY_TYPE;
        }

        /* Built-in Yamcs telemetry does not supply type information. */
        if (
            parameter.type
            || (parameter.type.engType === 'integer'
            || parameter.type.engType === 'float'
            || parameter.type.engType === 'enumeration')
        ) {
            return OBJECT_TYPES.TELEMETRY_OBJECT_TYPE;
        }

        return OBJECT_TYPES.STRING_OBJECT_TYPE;
    }

    #hasUnit(parameter) {
        const units = parameter.type.unitSet;

        return units instanceof Array
           && units.length > 0;
    }

    #getUnit(parameter) {
        return parameter.type.unitSet?.map(unit => unit.unit).join(',');
    }
}
