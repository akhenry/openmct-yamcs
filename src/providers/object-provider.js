import {
    qualifiedNameToId
} from '../utils.js';

import {
    TELEMETRY_OBJECT_TYPE,
    IMAGE_OBJECT_TYPE,
    STRING_OBJECT_TYPE
} from '../const.js';

import _ from 'lodash';

export default class YamcsObjectProvider {
    constructor(url, instance, folderName) {
        this.url = url;
        this.instance = instance;
        this.folderName = folderName;
        this.dictionary = undefined;
        this.namespace = 'taxonomy'
        this.objects = {};

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
        return this.fetchMdbApi('containers').then(containers => {
            return this.fetchMdbApi('parameters?details=yes&limit=10000&recurse=yes')
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
                    return this.objects;
                });
        });
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
                        key: 'utc',
                        source: 'timestamp',
                        name: 'Timestamp',
                        format: 'utc',
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
        if (parameter.type.engType === 'integer' || parameter.type.engType === 'float') {
            return TELEMETRY_OBJECT_TYPE;
        }

        return STRING_OBJECT_TYPE;
    }
}
