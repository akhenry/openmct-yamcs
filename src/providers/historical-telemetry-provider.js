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
    idToQualifiedName,
    getValue} from '../utils.js';

export default class YamcsHistoricalTelemetryProvider {
    constructor(url, instance, openmct) {
        this.url = url;
        this.instance = instance;
        this.openmct = openmct;
    }

    supportsRequest(domainObject) {
        return domainObject.type.startsWith('yamcs.');
    }

    request(domainObject, options) {
        this.dateFormatter = this.resolveDateFormatter(domainObject);
        return this.getHistory(domainObject.identifier.key,
            options.start,
            options.end,
            options.size);
    }

    resolveDateFormatter(domainObject) {
        let metadata = this.openmct.telemetry.getMetadata(domainObject);
        let domainMetadata = metadata.valuesForHints(['domain'])[0];
        return this.openmct.telemetry.getValueFormatter(domainMetadata);
    }

    getHistory(id, start, end, size=300) {
        let url = this.url + 'api/archive/' + this.instance + '/parameters' + idToQualifiedName(id);
        url += '?start=' + (new Date(start).toISOString());
        url += '&stop=' + (new Date(end).toISOString());
        url += '&limit=' + size;
        url += "&order=asc";

        return fetch(encodeURI(url))
            .then(res => {return res.json();})
            .then(res => {
                if (!('continuationToken' in res)) {
                    return this.convertPointHistory(id, res);
                } else {
                    return this.getSampleHistory(id, start, end, size);
                }
            });
    }

    getSampleHistory(id, start, end, size=300) {
        let url = this.url + 'api/archive/' + this.instance + '/parameters' + idToQualifiedName(id);
        url += '/samples';
        url += '?start=' + (new Date(start).toISOString());
        url += '&stop=' + (new Date(end).toISOString());
        url += '&count=' + size;
        url += "&order=asc";

        return fetch(encodeURI(url))
            .then(res => {return res.json();})
            .then(res => {return this.convertSampleHistory(id, res);});
    }

    convertPointHistory(id, results) {
        if (!('parameter' in results)) {
            return [];
        }

        let values = [];
        results.parameter.forEach(parameter => {
            let point = {
                id: parameter.id.name,
                timestamp: Number(parameter.generationTime),
                value: getValue(parameter.engValue)
            };
            values.push(point);
        });

        return values;
    }

    convertSampleHistory(id, results) {
        if (!('sample' in results)) {
            return [];
        }

        let values = [];
        if ('sample' in results) {
            results.sample.forEach(sample => {
                if (sample.n > 0) {
                    let min_value = {
                        timestamp: this.dateFormatter.parse(sample.time),
                        value: sample.min,
                        id: id
                    };
                    values.push(min_value);
                }

                if (sample.n > 1) {
                    let max_value = {
                        timestamp: this.dateFormatter.parse(sample.time),
                        value: sample.max,
                        id: id
                    };
                    values.push(max_value);
                }
            });
        }

        return values;
    }

}
