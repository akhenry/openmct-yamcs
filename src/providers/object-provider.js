/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2020, United States Government
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

import { OBJECT_TYPES } from '../const';

const YAMCS_API_MAP = {
    'space-systems': 'spaceSystems',
    'parameters': 'parameters'
};

export default class YamcsObjectProvider {
    constructor(openmct, url, instance, folderName) {
        this.openmct = openmct;
        this.url = url;
        this.instance = instance;
        this.folderName = folderName;
        this.dictionary = undefined;
        this.namespace = 'taxonomy';
        this.key = 'spacecraft';
        this.objects = {};
        this.dictionaryPromise = undefined;

        this.createRootObject();
        this.createEventObject();
    }

    createRootObject() {
        this.rootObject = {
            identifier: {
                key: this.key,
                namespace: this.namespace
            },
            name: this.folderName,
            type: 'noneditable.folder',
            location: 'ROOT',
            composition: []
        };

        this.addObject(this.rootObject);
    }

    createEventObject() {
        const location = this.openmct.objects.makeKeyString({
            key: this.key,
            namespace: this.namespace
        });

        const identifier = {
            key: OBJECT_TYPES.EVENTS_OBJECT_TYPE,
            namespace: this.namespace
        };
        const eventObject = {
            identifier,
            location,
            name: 'Events',
            type: OBJECT_TYPES.EVENTS_OBJECT_TYPE,
            telemetry: {
                values: [
                    {
                        key: 'severity',
                        name: 'Severity'
                    },
                    {
                        key: 'utc',
                        source: 'generationTime',
                        name: 'Generation Time',
                        hints: {
                            domain: 1
                        }
                    },
                    {
                        key: 'receptionTime',
                        name: 'Reception Time'
                    },
                    {
                        key: 'seqNumber',
                        name: 'Sequence Number'
                    },
                    {
                        key: 'message',
                        name: 'Message'
                    },
                    {
                        key: 'type',
                        name: 'Type'
                    },
                    {
                        key: 'source',
                        name: 'Source'
                    },
                    {
                        key: 'createdBy',
                        name: 'Created By'
                    }
                ]
            }
        };

        this.addObject(eventObject);
        this.objects[this.key].composition.push(identifier);
    }

    get(identifier) {
        if (identifier.key === OBJECT_TYPES.EVENTS_OBJECT_TYPE) {
            return Promise.resolve(this.objects[identifier.key]);
        }

        return this.getTelemetryDictionary().then(dictionary => {
            return dictionary[identifier.key];
        });
    }

    search(query, options) {
        const spaceSystemsSearch = this.searchMdbApi('space-systems', query, options);
        const parametersSearch = this.searchMdbApi('parameters', query, options);

        return Promise.all([spaceSystemsSearch, parametersSearch])
            .then(([spaceSystemsResults, parametersResults]) => {
                return [...spaceSystemsResults, ...parametersResults];
            });
    }

    async searchMdbApi(operation, query, options) {
        const key = YAMCS_API_MAP[operation];
        const search = await this.fetchMdbApi(`${operation}?q=${query}`);
        const hits = search[key];

        if (hits === undefined) {
            return [];
        }

        // make sure we have the dictionary loaded first
        // even though calling get will fetch dictionary if not already loaded
        await this.getTelemetryDictionary();

        const results = await Promise.all(
            hits.map(async hit => {
                const identifier = {
                    key: qualifiedNameToId(hit.qualifiedName),
                    namespace: this.namespace
                };

                return this.get(identifier);
            })
        );

        return results;
    }

    getTelemetryDictionary() {
        if (this.dictionary !== undefined) {
            return Promise.resolve(this.dictionary);
        }
        return this.fetchTelemetryDictionary(this.url, this.instance, this.folderName)
            .then((dictionary) => this.dictionary = dictionary);
    }

    fetchTelemetryDictionary() {
        const operation = 'parameters?details=yes&limit=1000';
        const parameterUrl = this.url + 'api/mdb/' + this.instance + '/' + operation;

        if(this.dictionaryPromise === undefined) {
            let url = this.getMdbUrl('space-systems');
            this.dictionaryPromise = accumulateResults(url, {}, 'spaceSystems', []).then(spaceSystems => {
                return accumulateResults(parameterUrl, {}, 'parameters', [])
                    .then(parameters => {
                        /* Sort the space systems by name, so that the
                           children of the root object are in sorted order. */
                        spaceSystems.sort((a, b) => {
                            a.name.localeCompare(b.name);
                        });
                        spaceSystems.forEach(spaceSystem => {
                            this.addSpaceSystem(spaceSystem);
                        });

                        parameters.forEach(parameter => {
                            this.addParameterObject(parameter);
                        });

                        this.dictionaryPromise = undefined;

                        return this.objects;
                    });
            });
        }

        return this.dictionaryPromise;
    }

    getMdbUrl(operation, name='') {
        return this.url + 'api/mdb/' + this.instance + '/' + operation + name;
    }

    fetchMdbApi(operation, name='') {
        return fetch(this.url + 'api/mdb/' + this.instance + '/' + operation + name)
            .then(res => {return res.json();});
    }

    addSpaceSystem(spaceSystem) {
        if (spaceSystem.qualifiedName !== '/') {
            let composition = [];

            if (spaceSystem.sub !== undefined) {
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
                type: 'noneditable.folder',
                composition: composition,
                location: location
            };

            this.addObject(obj);

            /* Add the space system to the root object if it's top-level. */
            if (spaceSystem.qualifiedName.lastIndexOf('/') === 0) {
                this.rootObject.composition.push({
                    key: id,
                    namespace: this.namespace
                });
            }
        }
    }

    addObject(object) {
        this.objects[object.identifier.key] = object;
    }

    /*
     * Add a telemetry parameter object to the object tree, unless it
     * has an alias indicating to omit the parameter from OpenMCT.
     */
    addParameterObject(parameter) {
        if (!this.isSuppressed(parameter)) {
            let qn = parameter.qualifiedName;
            let lastSlashPos = qn.lastIndexOf('/');
            let parentId = qualifiedNameToId(qn.substring(0, lastSlashPos));
            let parent = this.objects[parentId];

            this.addParameter(parameter, qn, parent, '');
        }
    }

    isSuppressed(parameter) {
        return (parameter.alias && parameter.alias.some(alias => {
            return (alias.namespace === 'OpenMCT:omit');
        }));
    }

    addParameter(parameter, qualifiedName, parent, prefix) {
        let id = qualifiedNameToId(qualifiedName);
        let name = prefix + parameter.name;
        const location = this.openmct.objects.makeKeyString({
            key: parent.identifier.key,
            namespace: parent.identifier.namespace
        });
        let obj = {
            identifier: {
                key: id,
                namespace: this.namespace
            },
            type: this.getParameterType(parameter),
            name: name,
            location: location,
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
        let isAggregate = this.isAggregate(parameter);
        let aggregateHasMembers = false;

        if (!isAggregate) {
            let key = 'value';
            obj.telemetry.values.push({
                key,
                name: 'Value',
                hints: {
                    range: 1
                }
            });

            this.addHints(key, obj);
        } else {
            aggregateHasMembers = this.aggregateHasMembers(parameter);
            obj.composition = [];
            if (aggregateHasMembers) {
                let memberMetadata = this.formatAggregateMembers(parameter.type.member, parameter.name);
                if (['pose', 'pose_orientation', 'pose_position'].includes(name)) {
                    console.log('metadata', name, memberMetadata);
                }
                obj.telemetry.values = obj.telemetry.values.concat(memberMetadata);
            }
        }

        this.addObject(obj);

        parent.composition.push(obj.identifier);

        if (aggregateHasMembers) {
            parameter.type.member.forEach(member => {
                let memberQualifiedName = qualifiedName + '.' + member.name;
                /* Use current name as a prefix for the member name. */
                this.addParameter(member, memberQualifiedName, obj, name + '_');
            });
        }
    }

    addHints(key, obj) {
        let metadatum = obj.telemetry.values.find(md => md.key === key);

        if (obj.type === OBJECT_TYPES.STRING_OBJECT_TYPE) {
            metadatum.hints = {};
        } else if (obj.type === OBJECT_TYPES.IMAGE_OBJECT_TYPE) {
            metadatum.hints = { image: 1 };
            metadatum.format = 'image';
        }

    }

    isAggregate(parameter) {
        let isAggregate = false;

        if (parameter.type !== undefined) {
            isAggregate = parameter.type.engType === 'aggregate';
        }

        return isAggregate;
    }

    formatAggregateMembers(members, parentKey = '', rangeHint = 1) {
        let formatted = [];

        members.forEach(member => {
            let key = member.name;
            let name = member.name;

            if (parentKey) {
                let formattedKey = parentKey.split('.').pop();
                key = formattedKey + '.' + key;
                name = formattedKey + ' ' + name;
            }

            if (!this.isAggregate(member)) {
                formatted.push({
                    key,
                    name,
                    hints: {
                        range: rangeHint++
                    }
                });
            } else if (this.aggregateHasMembers(member)) {
                let formattedSubMembers = this.formatAggregateMembers(member.type.member, key, rangeHint);
                formatted = formatted.concat(formattedSubMembers);
            }
        });

        return formatted;
    }

    aggregateHasMembers(parameter) {
        let hasMembers = false;

        if (this.isAggregate(parameter)) {
            hasMembers = parameter.type.member !== undefined;
        }

        return hasMembers;
    }

    getParameterType(parameter) {
        for (let i in parameter.alias) {
            if (parameter.alias[i].namespace === 'OpenMCT:type') {
                return parameter.alias[i].name;
            }
        }

        if (this.isAggregate(parameter) && this.aggregateHasMembers(parameter)) {
            return OBJECT_TYPES.AGGREGATE_TELEMETRY_TYPE;
        }

        /* Built-in Yamcs telemetry does not supply type information. */
        if (
            parameter.type === undefined
            || (parameter.type.engType==='integer' || parameter.type.engType==='float')
        ) {
            return OBJECT_TYPES.TELEMETRY_OBJECT_TYPE;
        }

        return OBJECT_TYPES.STRING_OBJECT_TYPE;
    }
}
