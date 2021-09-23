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
    accumulateResults,
    yieldResults
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
        this.standardizeOptions(options, domainObject);

        let id = domainObject.identifier.key;
        let url = this.buildUrl(id, options);
        let requestArguments = [id, url, options];
        let isMinMax = !this.isImagery(domainObject)
            && domainObject.type !== OBJECT_TYPES.AGGREGATE_TELEMETRY_TYPE
            && options.strategy === 'minmax';

        if (isMinMax) {
            return this.getMinMaxHistory(...requestArguments);
        }

        return this.getHistory(...requestArguments);
    }

    getHistory(id, url, options) {
        options.responseKeyName = this.getResponseKeyById(id);

        if (!options.onPartialResponse) {
            return accumulateResults(url, { signal: options.signal }, options.responseKeyName, [], options.totalRequestSize)
                .then((res) => this.convertPointHistory(id, res));
        } else {
            options.formatter = (res) => this.convertPointHistory(id, res);

            return yieldResults(url, options);
        }
    }

    getMinMaxHistory(id, url, options) {
        options.responseKeyName = 'sample';

        if (!options.onPartialResponse) {
            return accumulateResults(url, { signal: options.signal }, options.responseKeyName, [], options.totalRequestSize)
                .then((res) => this.convertSampleHistory(id, res));
        } else {
            options.formatter = (res) => this.convertSampleHistory(id, res);

            return yieldResults(url, options);
        }
    }

    standardizeOptions(options, domainObject) {
        options.sizeType = 'limit';
        options.order = 'asc';
        options.isSamples = false;
        options.totalRequestSize = options.size || 1000000;

        options.size = this.getAppropriateSize(options.size);

        if (options.strategy) {
            options.strategy = options.strategy.toLowerCase();

            if (options.strategy === 'latest') {
                options.size = 1;
                options.totalRequestSize = 1;
                options.order = 'desc';
            } else if (
                options.strategy === 'minmax'
                && domainObject.type !== OBJECT_TYPES.AGGREGATE_TELEMETRY_TYPE
            ) {
                options.sizeType = 'count';
                options.isSamples = true;
            }
        }
    }

    buildUrl(id, options) {
        let url = `${this.url}api/archive/${this.instance}/${this.getLinkParamsSpecificToId(id)}`;

        if (options.isSamples) {
            url += '/samples';
        }

        url += '?source=ParameterArchive';
        url += `&start=${new Date(options.start).toISOString()}`;
        url += `&stop=${new Date(options.end).toISOString()}`;
        url += `&${options.sizeType}=${options.size}`;
        url += `&order=${options.order}`;
        url += '&processor=realtime';

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
        if (id === OBJECT_TYPES.EVENTS_OBJECT_TYPE) {
            return 'events';
        }

        return 'parameters' + idToQualifiedName(id);
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
