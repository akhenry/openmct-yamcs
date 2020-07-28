import {
    qualifiedNameToId
} from '../utils.js';

import {
    TELEMETRY_OBJECT_TYPE,
    IMAGE_OBJECT_TYPE,
    STRING_OBJECT_TYPE
} from '../const.js';

import _ from 'lodash';

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

export default class YamcsObjectProvider {
    constructor(url, instance, folderName) {
        this.url = url;
        this.instance = instance;
        this.folderName = folderName;
        this.dictionary = undefined;
        this.namespace = 'taxonomy';
        this.objects = {};
        this.dictionaryPromise = undefined;

        this.createRootObject();
    }

    createRootObject() {
        this.rootObject = {
            identifier: {
                key: 'spacecraft',
                namespace: this.namespace
            },
            name: this.folderName,
            type: 'folder',
            location: 'ROOT',
            composition: []
        };
        this.addObject(this.rootObject);
    }

    get(identifier) {
        return this.getTelemetryDictionary().then(dictionary => {
            return dictionary[identifier.key];
        });
    }

    getTelemetryDictionary() {
        if (this.dictionary !== undefined) {
            return Promise.resolve(this.dictionary);
        }
        return this.fetchTelemetryDictionary(this.url, this.instance, this.folderName)
            .then((dictionary) => this.dictionary = dictionary);
    }

    fetchTelemetryDictionary() {
        if(this.dictionaryPromise === undefined) {
            this.dictionaryPromise = this.fetchMdbApi('containers').then(containers => {
                return this.fetchMdbApi('parameters?details=yes&limit=1000&recurse=yes')
                    .then(parameters => {
                        let paramMap = {};
                        if ('parameters' in parameters) {
                            parameters.parameters.forEach(parameter => {
                                paramMap[parameter.qualifiedName] = parameter;
                            });
                        }

                        if ('containers' in containers) {
                            containers.containers.forEach(container => {
                                this.addContainer(container, this.rootObject, paramMap);
                            });
                        }
                        this.dictionaryPromise = undefined;
                        return this.objects;
                    });
            });
        }
        return this.dictionaryPromise;
    }

    fetchMdbApi(operation, name='') {
        return fetch(this.url + 'api/mdb/' + this.instance + '/' + operation + name)
            .then(res => {return res.json();});
    }

    addContainer(container, parent, paramMap) {
        let id = qualifiedNameToId('container' + container.qualifiedName);
        let obj = {
            identifier: {
                key: id,
                namespace: this.namespace
            },
            name: container.name,
            type: 'folder',
            composition: []
        };

        this.addObject(obj);
        parent.composition.push(obj.identifier);

        if ('entry' in container) {
            container.entry.forEach(entry => {
                let parameter = paramMap[entry.parameter.qualifiedName];
                this.addParameter(parameter, parameter.qualifiedName, obj);
            });
        }
    }

    addObject(object) {
        this.objects[object.identifier.key] = object;
    }

    addParameter(parameter, qualifiedName, parent) {
        let id = qualifiedNameToId(qualifiedName);
        let obj = {
            identifier: {
                key: id,
                namespace: this.namespace
            },
            name: parameter.name
        };
        if (parameter.type.engType === 'aggregate') {
            obj.type = 'folder';
            obj.composition = [];
        } else {
            obj.type = this.getParameterType(parameter);
            obj.telemetry = {
                values: [
                    {
                        key: 'value',
                        name: 'Value',
                        hints: {
                            range: 1
                        }
                    },
                    {
                        key: 'iso',
                        source: 'timestamp',
                        name: 'Timestamp',
                        format: 'iso',
                        hints: {
                            domain: 1
                        }
                    }
                ]
            };

            if (obj.type === STRING_OBJECT_TYPE) {
                obj.telemetry.values[0].hints = {};
            } else if (obj.type === IMAGE_OBJECT_TYPE) {
                obj.telemetry.values[0].hints = { image: 1 };
                obj.telemetry.values[0].format = 'image';
            }
        }

        this.addObject(obj);

        parent.composition.push(obj.identifier);

        if (parameter.type.engType === 'aggregate') {
            if ('member' in parameter.type) {
                parameter.type.member.forEach(member => {
                    let memberQualifiedName = qualifiedName + '.' + member.name;
                    this.addParameter(member, memberQualifiedName, obj);
                });
            }
        }
    }

    getParameterType(parameter) {
        for (let i in parameter.alias) {
            if (parameter.alias[i].namespace === 'OpenMCT:type') {
                return parameter.alias[i].name;
            }
        }

        if (parameter.type.engType === 'integer' || parameter.type.engType === 'float') {
            return TELEMETRY_OBJECT_TYPE;
        }

        return STRING_OBJECT_TYPE;
    }
}
