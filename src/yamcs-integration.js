// Implementation of YAMCS/OpenMCT integration
//
// To install: within the <script> where OpenMCT is initialized, add
// the following.
//
// openmct.install(YamcsTaxonomyPlugin(url, instanceName, folderName));
// openmct.install(YamcsHistoricalTelemetryPlugin(url, instanceName));
// openmct.install(YamcsRealtimeTelemetryPlugin(url, instanceName,
//                                              [timeCallback]));
//
// where:
//     url             the URL for accessing YAMCS on this host, an 'http:'
//                     or 'https:' URL for the taxonomy and historical plugins,
//                     and a 'ws:' or 'wss:' URL for the realtime plugin; the
//                     URL must end with a trailing slash
//     instanceName    the space system instance name on YAMCS
//     folderName      the top-level folder to create for YAMCS telemetry
//     timeCallback    [optional] if supplied, a callback function to
//                     be called every time a subscribed telemetry value
//                     is updated, of the form:
//                         myCallback(theDate) { ... }
//                     where 'theDate' is a Javascript Date object.

// Web socket idle packet interval is 10s.
let WS_IDLE_INTERVAL = 10000

// Object types provided by this plugin.
let TELEMETRY_OBJECT_TYPE = 'yamcs.telemetry'
let IMAGE_OBJECT_TYPE = 'yamcs.image'
let STRING_OBJECT_TYPE = 'yamcs.string'

let instances
let tlmdict

function qualified_name_to_id(s) {
    return s.replace(/\//g, '~')
}

function id_to_qualified_name(s) {
    return s.replace(/~/g, '/')
}

function fetch_mdb_api(url, instance, operation, name='') {
    return fetch(url + 'api/mdb/' + instance + '/' + operation + name)
        .then(res => {return res.json()})
}

function get_tlm_dict(url, instance, folderName) {
    if (tlmdict !== undefined) {
        return tlmdict
    }

    tlmdict = fetch_tlm_dict(url, instance, folderName)
    return tlmdict
}

function fetch_tlm_dict(url, instance, folderName) {
    let objects = {}
    let namespace = 'taxonomy'
    let root_obj = {
        identifier: {
            key: 'spacecraft',
            namespace: namespace
        },
        name: folderName,
        type: 'folder',
        location: 'ROOT',
        composition: []
    }
    add_object(root_obj, objects)
    return fetch_mdb_api(url, instance, 'containers').then(containers => {
        return fetch_mdb_api(url, instance,
                             'parameters?details=yes&limit=10000&recurse=yes')
        .then(parameters => {
            let paramMap = {}
            if ('parameters' in parameters) {
                parameters.parameters.forEach(parameter => {
                    paramMap[parameter.qualifiedName] = parameter
                })
            }

            if ('containers' in containers) {
                containers.containers.forEach(container => {
                    add_container(container, root_obj, paramMap, objects,
                                  namespace)
                })
            }
            return objects
        })
    })
}

function add_object(obj, objects) {
    objects[obj.identifier.key] = obj
}

function get_container_names(yamcsPrefix, instance) {
    return fetch_mdb_api(yamcsPrefix, instance, 'containers')
        .then(res => {return res.containers.map(e => {return e.qualifiedName})})
}

function add_container(container, parent, paramMap, objects, namespace) {
    /*console.log('Adding container ', container.name)*/
    let id = qualified_name_to_id('container' + container.qualifiedName)
    let obj = {
        identifier: {
            key: id,
            namespace: namespace
        },
        name: container.name,
        type: 'folder',
        composition: []
    }
    add_object(obj, objects)
    parent.composition.push(obj.identifier)
    if ('entry' in container) {
        container.entry.forEach(entry => {
            let parameter = paramMap[entry.parameter.qualifiedName]
            add_parameter(parameter, parameter.qualifiedName, obj, objects, namespace)
        })
    }
}

function get_parameter_type(parameter) {
    for (let i in parameter.alias) {
        if (parameter.alias[i].namespace == 'OpenMCT:type') {
            return parameter.alias[i].name
        }
    }

    if (parameter.type.engType=='integer' || parameter.type.engType=='float') {
        return TELEMETRY_OBJECT_TYPE
    }

    return STRING_OBJECT_TYPE
}

function add_parameter(parameter, qualifiedName, parent, objects, namespace) {
    /*console.log('Adding parameter ', parameter.name)*/
    let id = qualified_name_to_id(qualifiedName)
    let obj = {
        identifier: {
            key: id,
            namespace: namespace
        },
        name: parameter.name
    }
    if (parameter.type.engType == 'aggregate') {
        obj.type = 'folder'
        obj.composition = []
    } else {
        obj.type = get_parameter_type(parameter)
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
        }

        if (obj.type == STRING_OBJECT_TYPE) {
            obj.telemetry.values[0].hints = {}
        } else if (obj.type == IMAGE_OBJECT_TYPE) {
            obj.telemetry.values[0].hints = { image: 1 }
            obj.telemetry.values[0].format = 'image'
        }
    }

    add_object(obj, objects)
    parent.composition.push(obj.identifier)
    if (parameter.type.engType == 'aggregate') {
        if ('member' in parameter.type) {
            parameter.type.member.forEach(member => {
                let memberQualifiedName = qualifiedName + '.' + member.name
                add_parameter(member, memberQualifiedName, obj, objects,
                              namespace)
            })
        }
    }
}

function YamcsTaxonomyPlugin(url, instance, folderName) {
    let objectProvider = {
        get: function (identifier) {
            return get_tlm_dict(url, instance, folderName).then(dictionary => {
                return dictionary[identifier.key]
            })
        }
    }

    return function install(openmct) {
        openmct.objects.addRoot({
            namespace: 'taxonomy',
            key: 'spacecraft'
        })

        openmct.objects.addProvider('taxonomy', objectProvider)

        openmct.types.addType(TELEMETRY_OBJECT_TYPE, {
            name: 'Telemetry Point',
            description: 'Spacecraft Telemetry point',
            cssClass: 'icon-telemetry'
        })

        openmct.types.addType(IMAGE_OBJECT_TYPE, {
            name: 'Telemetry Image',
            description: 'Spacecraft camera image',
            cssClass: 'icon-telemetry'
        })

        openmct.types.addType(STRING_OBJECT_TYPE, {
            name: 'Telemetry String',
            description: 'Spacecraft telemetry string value',
            cssClass: 'icon-telemetry'
        })
    }
}

function convert_point_history(id, results) {
    if (!('parameter' in results)) {
        return []
    }
    
    let values = []
    results.parameter.forEach(parameter => {
        let point = {
            id: parameter.id.name,
            timestamp: parameter.generationTimeUTC,
            value: get_value(parameter.engValue)
        }
        /*console.log('point: ' + JSON.stringify(point))*/
        values.push(point)
    })

    return values
}

function convert_sample_history(id, results) {
    if (!('sample' in results)) {
        return []
    }
    
    let values = []
    if ('sample' in results) {
        results.sample.forEach(sample => {
            if (sample.n > 0) {
                let min_value = {
                    timestamp: sample.time,
                    value: sample.min,
                    id: id
                }
                /*console.log('min: ' + JSON.stringify(min_value))*/
                values.push(min_value)
            }

            if (sample.n > 1) {
                let max_value = {
                    timestamp: sample.time,
                    value: sample.max,
                    id: id
                }
                /*console.log('max: ' + JSON.stringify(max_value))*/
                values.push(max_value)
            }
        })
    }

    return values
}

function getSampleHistory(baseUrl, instance, id, start, end, size=300) {
    let url = baseUrl + 'api/archive/' + instance + '/parameters' + id_to_qualified_name(id)
    url += '/samples'
    url += '?start=' + (new Date(start).toISOString())
    url += '&stop=' + (new Date(end).toISOString())
    url += '&count=' + size
    url += "&order=asc"

    console.log(url)

    return fetch(encodeURI(url))
        .then(res => {return res.json()})
        .then(res => {return convert_sample_history(id, res)})
}

function getHistory(baseUrl, instance, id, strategy, start, end, size=300) {
    let url = baseUrl + 'api/archive/' + instance + '/parameters' + id_to_qualified_name(id)
    url += '?start=' + (new Date(start).toISOString())
    url += '&stop=' + (new Date(end).toISOString())
    url += '&limit=' + size
    url += "&order=asc"

    console.log(url)

    return fetch(encodeURI(url))
        .then(res => {return res.json()})
        .then(res => {
            if (!('continuationToken' in res)) {
                return convert_point_history(id, res)
            } else {
                return getSampleHistory(baseUrl, instance, id, start, end, size)
            }
        })
}

function YamcsHistoricalTelemetryPlugin(url, instance) {
    return function install (openmct) {
        let provider = {
            supportsRequest: function (domainObject) {
                return domainObject.type.startsWith('yamcs.')
            },
            request: function (domainObject, options) {
                return Promise.resolve(
                    getHistory(url, instance,
                               domainObject.identifier.key,
                               options.strategy, options.start,
                               options.end, options.size)
                )
            }
        }
    
        openmct.telemetry.addProvider(provider)
    }
}

let socket
let seq_no = 0

function send_request(request) {
    let payload = '[1, 1, ' + (++seq_no) + ', ' + request + ']'
    /*console.log('ws request: ' + payload)*/
    socket.send(payload)
}

function idle_subscribe() {
    send_request('{"parameter": "subscribe", "data": { "id": [] }}')
    setTimeout(idle_subscribe, WS_IDLE_INTERVAL)
}

function tlm_subscribe(id) {
    send_request('{"parameter": "subscribe",'
                 + ' "data": { "id": [{ "name": "' + id + '" }], '
                 + '   "sendFromCache": false }}')
}

function tlm_unsubscribe(id) {
    send_request('{"parameter": "unsubscribe",'
                 + ' "data": { "id": [{ "name": "' + id + '" }] }}')
}

function get_value(value) {
    if (value.type == 'UINT32') {
        return value.uint32Value
    } else if (value.type == 'INT32') {
        return value.int32Value
    } else if (value.type == 'UINT32') {
        return value.uint32Value
    } else if (value.type == 'SINT32') {
        return value.sint32Value
    } else if (value.type == 'UINT16') {
        return value.uint16Value
    } else if (value.type == 'INT16') {
        return value.int16Value
    } else if (value.type == 'FLOAT') {
        return value.floatValue
    } else if (value.type == 'DOUBLE') {
        return value.doubleValue
    } else if (value.type=='STRING' || value.type=='ENUMERATED') {
        return value.stringValue
    } else if (value.type == 'TIMESTAMP') {
        return value.stringValue
    } else if (value.type == 'BOOLEAN') {
        return value.booleanValue
    }
}

function YamcsRealtimeTelemetryPlugin(url, instance, timeCallback) {
    return function install(openmct) {
        socket = new WebSocket(url + '_websocket/' + instance)
        setTimeout(idle_subscribe, WS_IDLE_INTERVAL)

        let listener = {}
    
        socket.onmessage = function (event) {
            let data = JSON.parse(event.data)

            if (data.length>=4 && data[3].dt=='PARAMETER') {
                data[3].data.parameter.forEach(parameter => {
                    let point = {
                        id: qualified_name_to_id(parameter.id.name),
                        timestamp: parameter.generationTimeUTC,
                        value: get_value(parameter.engValue)
                    }

                    if (timeCallback != undefined) {
                        timeCallback(Date.parse(parameter.generationTimeUTC))
                    }

                    if (listener[point.id]) {
                        listener[point.id](point)

                    }
                })
            }
        }
        
        let provider = {
            supportsSubscribe: function (domainObject) {
                return domainObject.type.startsWith('yamcs.')
            },
            subscribe: function (domainObject, callback) {
                listener[domainObject.identifier.key] = callback
                let name = id_to_qualified_name(domainObject.identifier.key)
                tlm_subscribe(name)
                return function unsubscribe() {
                    tlm_unsubscribe(name)
                    delete listener[domainObject.identifier.key]
                }
            }
        }
        
        openmct.telemetry.addProvider(provider)
    }
}

export {
    YamcsTaxonomyPlugin,
    YamcsHistoricalTelemetryPlugin,
    YamcsRealtimeTelemetryPlugin
}
