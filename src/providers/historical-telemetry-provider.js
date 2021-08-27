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
import { AGGREGATE_TYPE, OBJECT_TYPES } from '../const';
import {
    idToQualifiedName,
    getValue,
    addLimitInformation,
    accumulateResults
} from '../utils.js';

export default class YamcsHistoricalTelemetryProvider {
    constructor(openmct, url, instance) {
        this.url = url;
        this.instance = instance;
        this.openmct = openmct;
        this.supportedTypes = {};

        this.addSupportedTypes();
    }

    addSupportedTypes() {
        const types = Object.values(OBJECT_TYPES);
        types.forEach(type => {
            this.supportedTypes[type] = type;
        });
    }

    supportsRequest(domainObject) {
        return this.supportedTypes[domainObject.type];
    }

    request(domainObject, options) {
        // console.log('request', domainObject.type);
        this.standardizeOptions(options);
        let idAndOptions = [domainObject.identifier.key, options];

        if (options.strategy === 'minmax') {
            options.sizeType = 'limit';

            return this.getMinMaxHistory(...idAndOptions);
        }

        return this.getHistory(...idAndOptions);
    }

    getHistory(id, options) {
        let url = this.buildUrl(id, options);
        console.log('getHistory url', url);
        let totalRequestSize = this.getAppropriateSize(options.size);
        let responseKeyName = this.getResponseKeyById(id);

        return accumulateResults(url, { signal: options.signal }, responseKeyName, [], totalRequestSize)
            .then((res) => this.convertPointHistory(id, res));
    }

    getMinMaxHistory(id, options) {
        let url = `${this.url}api/archive/${this.instance}/samples/${this.buildUrl(id, options)}`;
        console.log('getMinMaxHistory url', url);
        let totalRequestSize = this.getAppropriateSize(options.size);
        let responseKeyName = 'sample';

        return accumulateResults(url, { signal: options.signal }, responseKeyName, [], totalRequestSize)
            .then((res) => this.convertSampleHistory(id, res));
    }

    standardizeOptions(options) {
        options.sizeType = 'count';
        options.order = 'asc';

        if (options.strategy) {
            options.strategy = options.strategy.toLowerCase();

            if (options.strategy === 'latest') {
                options.size = 1;
                options.order = 'desc';
            }
        }
    }

    buildUrl(id, options) {
        let url = `${this.url}api/archive/${this.instance}/${this.getLinkParamsSpecificToId(id)}`;

        url += `?start=${new Date(options.start).toISOString()}`;
        url += `&stop=${new Date(options.end).toISOString()}`;
        url += `&${options.sizeType}=${options.size}`;
        url += `&order=${options.order}`;

        return url;
    }

    // cap size at 1000, temporarily to prevent errors
    getAppropriateSize(size) {
        if (!size || size > 1000) {
            size = 1000;
        }

        return size;
    }

    isImagery(domainObject) {
        let metadata = this.openmct.telemetry.getMetadata(domainObject);

        return metadata.valuesForHints(['image']).length !== 0;
    }


    getLinkParamsSpecificToId(id) {
        let endpoint = this.getEndpointById(id);

        if (id === OBJECT_TYPES.EVENTS_OBJECT_TYPE) {
            return endpoint;
        }

        return endpoint + idToQualifiedName(id);
    }

    getEndpointById(id) {
        if (id === OBJECT_TYPES.EVENTS_OBJECT_TYPE) {
            return 'events';
        }

        return 'parameters';
    }

    getResponseKeyById(id) {
        if (id === OBJECT_TYPES.EVENTS_OBJECT_TYPE) {
            return 'event';
        }

        return 'parameter';
    }

    convertEventHistory(id, results) {
        if (!results) {
            return [];
        }

        return results.map(e => {
            return {
                id,
                ...e
            };
        });
    }

    convertPointHistory(id, results) {
        if (id === OBJECT_TYPES.EVENTS_OBJECT_TYPE) {
            return this.convertEventHistory(id, results);
        }


        if (!(results)) {
            return [];
        }

        let values = [];
        results.forEach(result => {
            let point = {
                id: result.id.name,
                timestamp: result.generationTimeUTC
            };
            let value = getValue(result.engValue);

            if (result.engValue.type !== AGGREGATE_TYPE) {
                point.value = value;
            } else {
                point = { ...point, ...value };
            }

            addLimitInformation(result, point);
            values.push(point);
        });

        return values;
    }

    convertSampleHistory(id, results) {
        if (!(results)) {
            return [];
        }

        let values = [];
        results.forEach(result => {
            if (result.n > 0) {
                let min_value = {
                    timestamp: result.time,
                    value: result.min,
                    id: id
                };

                addLimitInformation(result, min_value);
                values.push(min_value);
            }

            if (result.n > 1) {
                let max_value = {
                    timestamp: result.time,
                    value: result.max,
                    id: id
                };

                addLimitInformation(result, max_value);
                values.push(max_value);
            }
        });

        return values;
    }
}
