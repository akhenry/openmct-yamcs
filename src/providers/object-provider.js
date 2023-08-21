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
    accumulateResults,
    getLimitFromAlarmRange,
    getLimitOverrides
} from '../utils.js';

import { OBJECT_TYPES, NAMESPACE } from '../const';
import OperatorStatusParameter from './user/operator-status-parameter.js';
import { createCommandsObject } from './commands.js';
import { createEventsObject } from './events.js';

const YAMCS_API_MAP = {
    'space-systems': 'spaceSystems',
    'parameters': 'parameters'
};
const operatorStatusParameter = new OperatorStatusParameter();

export default class YamcsObjectProvider {
    constructor(openmct, url, instance, folderName, roleStatusTelemetry, pollQuestionParameter, pollQuestionTelemetry, realtimeTelemetryProvider, processor = 'realtime') {
        this.openmct = openmct;
        this.url = url;
        this.instance = instance;
        this.processor = processor;
        this.realtimeTelemetryProvider = realtimeTelemetryProvider;
        this.mdbChangesUnsubscribe = undefined;
        this.folderName = folderName;
        this.namespace = NAMESPACE;
        this.key = 'spacecraft';
        this.dictionary = {};
        this.limitOverrides = {};
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

        this.openmct.on('destroy', this.#unsubscribeFromAll);
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
        const dictionary = await this.#getTelemetryDictionary();

        return dictionary[key];
    }

    supportsSearchType(type) {
        return type === this.openmct.objects.SEARCH_TYPES.OBJECTS;
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

    async #searchMdbApi(operation, query, abortSignal) {
        const key = YAMCS_API_MAP[operation];
        const results = await this.#fetchMdbApi(`${operation}?q=${query}&searchMembers=true&details=false`, key, abortSignal);

        if (!results) {
            return [];
        }

        // make sure we have the dictionary loaded first
        // even though calling get will fetch dictionary if not already loaded
        await this.#getTelemetryDictionary();

        // if multiple members match, YAMCS sends us duplicates 🙇‍♂️
        const hitsWithoutDupes = [];
        results.forEach((hit) => {
            const hitExtant = hitsWithoutDupes.some((existingHit) => {
                return existingHit.qualifiedName === hit.qualifiedName;
            });

            if (!hitExtant) {
                hitsWithoutDupes.push(hit);
            }
        });

        const filteredResults = await Promise.all(
            hitsWithoutDupes.map(async hit => {
                const telemetryResults = await this.#convertSearchHitToTelemetries(query, hit);

                return telemetryResults;
            })
        );
        const flattenedResults = filteredResults.flat();

        return flattenedResults;
    }

    #getTelemetryDictionary() {
        if (!this.dictionaryPromise) {
            this.dictionaryPromise = this.#loadTelemetryDictionary(this.url, this.instance, this.folderName)
                .finally(() => {
                    this.roleStatusTelemetry.dictionaryLoadComplete();
                });
        }

        return this.dictionaryPromise;
    }

    async #loadTelemetryDictionary() {
        const operation = 'parameters?details=yes&limit=1000';
        const parameterUrl = this.url + 'api/mdb/' + this.instance + '/' + operation;
        const url = this.#getMdbUrl('space-systems');
        const spaceSystems = await accumulateResults(url, {}, 'spaceSystems', []);
        const parameters = await accumulateResults(parameterUrl, {}, 'parameters', []);

        /* Sort the space systems by name, so that the
            children of the root object are in sorted order. */
        spaceSystems.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        spaceSystems.forEach(spaceSystem => {
            this.#addSpaceSystem(spaceSystem);
        });

        //get any limit overrides and subscribe for subsequent changes
        let requestUrl = `${this.url}api/mdb-overrides/${this.instance}/${this.processor}`;
        this.limitOverrides = await getLimitOverrides(requestUrl);
        if (this.mdbChangesUnsubscribe === undefined) {
            this.mdbChangesUnsubscribe = this.realtimeTelemetryProvider.subscribeToMDBChanges(this.#updateParameterLimits.bind(this));
        }

        parameters.forEach(parameter => {
            this.#addParameterObject(parameter);
        });

        return this.dictionary;
    }

    #getMdbUrl(operation, name = '') {
        return this.url + 'api/mdb/' + this.instance + '/' + operation + name;
    }

    async #fetchMdbApi(operation, property, abortSignal) {
        const mdbURL = `${this.url}api/mdb/${this.instance}/${operation}`;
        const response = await accumulateResults(mdbURL, { signal: abortSignal }, property, []);

        return response;
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
        this.dictionary[object.identifier.key] = object;
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
            let parent = this.dictionary[parentId];

            this.#addParameter(parameter, qn, parent, '');
        }
    }

    #isSuppressed(parameter) {
        return (parameter.alias && parameter.alias.some(alias => {
            return (alias.namespace === 'OpenMCT:omit');
        }));
    }

    async #updateParameterLimits(message) {
        const parameterOverride = message.parameterOverride;
        const parameterName = parameterOverride.parameter;
        const identifier = {
            key: qualifiedNameToId(parameterName),
            namespace: this.namespace
        };

        const parameter = await this.get(identifier);
        if (parameter !== undefined) {
            const alarmRange = parameterOverride.defaultAlarm?.staticAlarmRange ?? [];
            parameter.configuration.limits = this.#convertToLimits({
                staticAlarmRange: alarmRange
            });
        }
    }
    #convertToLimits(defaultAlarm) {
        if (defaultAlarm?.staticAlarmRange) {
            return getLimitFromAlarmRange(defaultAlarm.staticAlarmRange);
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

        if (this.#isImage(obj)) {
            obj.telemetry.values.push({
                name: 'Image Thumbnail',
                key: 'yamcs-thumbnail-url',
                format: 'yamcs-thumbnail',
                hints: {
                    thumbnail: 1
                },
                source: 'value'
            });
        }

        const isAggregate = this.#isAggregate(parameter);
        let aggregateHasMembers = false;

        if (this.limitOverrides[qualifiedName] !== undefined) {
            obj.configuration.limits = this.limitOverrides[qualifiedName];
        } else if (parameter.type.defaultAlarm) {
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
        } else if (this.#isImage(obj)) {
            metadatum.hints = { image: 1 };
            metadatum.format = 'image';
        }

    }

    #isAggregate(parameter) {
        return parameter?.type?.engType === 'aggregate';
    }

    #isImage(obj) {
        return (obj.type === OBJECT_TYPES.IMAGE_OBJECT_TYPE);
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

    #unsubscribeFromAll() {
        if (this.mdbChangesUnsubscribe) {
            this.mdbChangesUnsubscribe();
            this.mdbChangesUnsubscribe = undefined;
        }
    }
}
