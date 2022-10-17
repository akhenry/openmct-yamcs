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
    accumulateResults
} from '../utils.js';

import { OBJECT_TYPES, NAMESPACE } from '../const';
import OperatorStatusParameter from './user/operator-status-parameter.js';
import { createCommandsObject } from './commands.js';
import { createEventsObject } from './events.js';
import limitConfig from "../limits-config.json";

const YAMCS_API_MAP = {
    'space-systems': 'spaceSystems',
    'parameters': 'parameters'
};
const operatorStatusParameter = new OperatorStatusParameter();

export default class YamcsObjectProvider {
    constructor(openmct, url, instance, folderName, roleStatusTelemetry, pollQuestionParameter, pollQuestionTelemetry) {
        this.openmct = openmct;
        this.url = url;
        this.instance = instance;
        this.folderName = folderName;
        this.dictionary = null;
        this.namespace = NAMESPACE;
        this.key = 'spacecraft';
        this.objects = {};
        this.dictionaryPromise = null;
        this.roleStatusTelemetry = roleStatusTelemetry;
        this.pollQuestionParameter = pollQuestionParameter;
        this.pollQuestionTelemetry = pollQuestionTelemetry;

        this.#initialize();
    }

    #initialize() {
        this.#createRootObject();
        const eventsObject = createEventsObject(this.openmct, this.key, this.namespace);
        const commandsObject = createCommandsObject(this.openmct, this.key, this.namespace);

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
                key: this.key,
                namespace: this.namespace
            },
            name: this.folderName,
            type: 'folder',
            location: 'ROOT',
            composition: []
        };

        this.#addObject(this.rootObject);
    }

    async get(identifier) {
        const { key } = identifier;
        // If it's a custom telemetry object we've added, return it
        if (key !== this.key && Object.hasOwn(this.objects, key)) {
            return this.objects[key];
        }

        // Otherwise, return a telemetry object from the telemetry dictionary
        const dictionary = await this.#getTelemetryDictionary();

        return dictionary[key];
    }

    supportsSearchType(type) {
        return type === this.openmct.objects.SEARCH_TYPES.OBJECTS;
    }

    async search(query, options) {
        const spaceSystemsSearch = this.#searchMdbApi('space-systems', query, options);
        const parametersSearch = this.#searchMdbApi('parameters', query, options);

        const [spaceSystemsResults, parametersResults] = await Promise.all([spaceSystemsSearch, parametersSearch]);

        return [...spaceSystemsResults, ...parametersResults];
    }

    async #convertSingleSearchHitToTelemetry(qualifiedName) {
        const identifier = {
            key: qualifiedNameToId(qualifiedName),
            namespace: this.namespace
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

    async #searchMdbApi(operation, query, options) {
        const key = YAMCS_API_MAP[operation];
        const search = await this.#fetchMdbApi(`${operation}?q=${query}&searchMembers=true&details=false`);
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

    async #getTelemetryDictionary() {
        if (this.dictionary) {
            return this.dictionary;
        }

        const dictionary = await this.#fetchTelemetryDictionary(this.url, this.instance, this.folderName);
        this.dictionary = dictionary;
        this.roleStatusTelemetry.dictionaryLoadComplete();

        return dictionary;
    }

    async #fetchTelemetryDictionary() {
        const operation = 'parameters?details=yes&limit=1000';
        const parameterUrl = this.url + 'api/mdb/' + this.instance + '/' + operation;

        if (!this.dictionaryPromise) {
            let url = this.#getMdbUrl('space-systems');
            const spaceSystems = this.dictionaryPromise = await accumulateResults(url, {}, 'spaceSystems', []);

            const parameters = await accumulateResults(parameterUrl, {}, 'parameters', []);
            /* Sort the space systems by name, so that the
               children of the root object are in sorted order. */
            spaceSystems.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
            spaceSystems.forEach(spaceSystem => {
                this.#addSpaceSystem(spaceSystem);
            });

            parameters.forEach(parameter => {
                this.#addParameterObject(parameter);
            });

            this.dictionaryPromise = null;

            return this.objects;
        }

        return this.dictionaryPromise;
    }

    #getMdbUrl(operation, name = '') {
        return this.url + 'api/mdb/' + this.instance + '/' + operation + name;
    }

    async #fetchMdbApi(operation, name = '') {
        const mdbURL = `${this.url}api/mdb/${this.instance}/${operation}${name}`;
        const response = await fetch(mdbURL);
        const parsedJSON = await response.json();

        return parsedJSON;
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
                        namespace: this.namespace
                    });
                });
            }

            let id = qualifiedNameToId(spaceSystem.qualifiedName);
            const locationId = id.substring(0, id.lastIndexOf('~'));
            const isSubSystem = locationId.includes('~');
            const key = isSubSystem ? locationId : this.key;
            const location = this.openmct.objects.makeKeyString({
                namespace: this.namespace,
                key: key
            });
            let obj = {
                identifier: {
                    key: id,
                    namespace: this.namespace
                },
                name: spaceSystem.name,
                type: 'folder',
                composition: composition,
                location: location
            };

            this.#addObject(obj);

            /* Add the space system to the root object if it's top-level. */
            if (spaceSystem.qualifiedName.lastIndexOf('/') === 0) {
                this.rootObject.composition.push({
                    key: id,
                    namespace: this.namespace
                });
            }
        }
    }

    #addObject(object) {
        this.objects[object.identifier.key] = object;
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
            let parent = this.objects[parentId];

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
        const location = this.openmct.objects.makeKeyString({
            key: parent.identifier.key,
            namespace: parent.identifier.namespace
        });
        const obj = {
            identifier: {
                key: id,
                namespace: this.namespace
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
                possibleStatuses.forEach(state => this.roleStatusTelemetry.addStatus(state));
                this.roleStatusTelemetry.addStatusRole(role);
                this.roleStatusTelemetry.setTelemetryObjectForRole(role, obj);
            }

            if (this.pollQuestionParameter.isPollQuestionParameter(parameter)) {
                this.pollQuestionParameter.setPollQuestionParameter(parameter);
                this.pollQuestionTelemetry.setTelemetryObject(obj);
                telemetryValue.format = 'string';
            }

            if (this.#isEnumeration(parameter)) {
                telemetryValue.format = 'enum';
                const yamcsEnumerations = parameter.type.enumValue || [];
                telemetryValue.enumerations = yamcsEnumerations.map(enumValue => {
                    let rawValue = enumValue.value;

                    if (!(Number.isNaN(rawValue))) {
                        // eslint-disable-next-line radix
                        rawValue = parseInt(rawValue);
                    }

                    return {
                        value: rawValue,
                        string: enumValue.label
                    };
                });
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
                this.#addParameter(member, memberQualifiedName, obj, name + '_');
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
                formatted.push({
                    key,
                    name,
                    hints: {
                        range: rangeHint++
                    }
                });
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
