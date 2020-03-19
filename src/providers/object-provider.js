import {
    qualifiedNameToId
} from '../utils.js';

import {
    TELEMETRY_OBJECT_TYPE,
    IMAGE_OBJECT_TYPE,
    STRING_OBJECT_TYPE
} from '../const.js';

export default class YamcsObjectProvider {
    constructor(url, instance, folderName) {
        this.url = url;
        this.instance = instance;
        this.folderName = folderName;
        this.dictionary = undefined;
        this.objects = {};
    }

    async get(identifier) {
        return this.getTelemetryDictionary().then(dictionary => {
            return dictionary[identifier.key];
        });
    }

    async getTelemetryDictionary() {
        if (this.dictionary !== undefined) {
            return Promise.resolve(this.dictionary);
        }

        this.dictionary = await this.fetchTelemetryDictionary(this.url, this.instance, this.folderName);

        return Promise.resolve(this.dictionary);
    }

    async fetchTelemetryDictionary() {
        let namespace = 'taxonomy';
        let root_obj = {
            identifier: {
                key: 'spacecraft',
                namespace: namespace
            },
            name: this.folderName,
            type: 'folder',
            location: 'ROOT',
            composition: []
        };
        this.addObject(root_obj);

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
                            this.addContainer(container, root_obj, paramMap,
                                namespace);
                        });
                    }
                    return this.objects;
                });
        });
    }

    async fetchMdbApi(operation, name='') {
        return fetch(this.url + 'api/mdb/' + this.instance + '/' + operation + name)
            .then(res => {return res.json();});
    }

    addContainer(container, parent, paramMap, namespace) {
        let id = qualifiedNameToId('container' + container.qualifiedName);
        let obj = {
            identifier: {
                key: id,
                namespace: namespace
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
                this.addParameter(parameter, parameter.qualifiedName, obj, namespace);
            });
        }
    }

    addObject(object) {
        this.objects[object.identifier.key] = object;
    }

    addParameter(parameter, qualifiedName, parent, namespace) {
        let id = qualifiedNameToId(qualifiedName);
        let obj = {
            identifier: {
                key: id,
                namespace: namespace
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
                    this.addParameter(member, memberQualifiedName, obj,
                        namespace);
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
