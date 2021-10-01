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
import { AGGREGATE_TYPE, UNSUPPORTED_TYPE } from './const';

function idToQualifiedName(id) {
    return id.replace(/~/g, '/');
}

function qualifiedNameToId(name) {
    return name.replace(/\//g, '~');
}

const VALUE_EXTRACT_MAP = {
    'UINT64': (value) => value.uint64Value,
    'INT64': (value) => value.int64Value,
    'SINT64': (value) => value.sint64Value,
    'UINT32': (value) => value.uint32Value,
    'INT32': (value) => value.int32Value,
    'SINT32': (value) => value.sint32Value,
    'UINT16': (value) => value.uint16Value,
    'INT16': (value) => value.int16Value,
    'SINT16': (value) => value.sint16Value,
    'FLOAT': (value) => value.floatValue,
    'DOUBLE': (value) => value.doubleValue,
    'STRING': (value) => value.stringValue,
    'ENUMERATED': (value) => value.stringValue,
    'TIMESTAMP': (value) => value.stringValue,
    'BOOLEAN': (value) => value.booleanValue
};

/*
 * Takes a value and determines what value to return based on
 * that values type property
 *
 * Parameters:
 *     value          the value to check
 *
 * Returns:
 *     depending on value type: an appropriate value, a string
 *     of appropriate values or an "unsupported" notification string
 */
function getValue(item) {
    let value = item.engValue || item;

    if (VALUE_EXTRACT_MAP[value.type]) {
        return VALUE_EXTRACT_MAP[value.type](value);
    }

    if (value.type === 'ARRAY') {
        let valueResults = [];

        for (const arrayValue of value.arrayValue) {
            if (!VALUE_EXTRACT_MAP[arrayValue.type]) {
                warnUnsupportedType(arrayValue.type);

                return UNSUPPORTED_TYPE;
            }

            valueResults.push(VALUE_EXTRACT_MAP[arrayValue.type](arrayValue));
        }

        return JSON.stringify(valueResults);
    }

    if (value.type === AGGREGATE_TYPE) {
        if (item && item.id && item.id.name) {
            if (['pose', 'pose.orientation', 'pose.position'].includes(item.id.name)) {
                console.log('sup', item);
            }
        } else {
            console.log('no name?', item);
        }
        return getAggregateValues(value, item.id.name);
    }

    warnUnsupportedType(value.type);

    return UNSUPPORTED_TYPE;

}

function getAggregateValues(value, name, existing = {}) {
    let values = value.aggregateValue.value;
    let names = value.aggregateValue.name;

    // map parent name so keys are unique for aggregates
    names = names.map(n => [name, n].join('.'));

    for (let i = 0, len = values.length; i < len; i++) {
        let currentValue = values[i];

        if (currentValue.type !== AGGREGATE_TYPE) {
            existing[names[i]] = getValue(currentValue);
        } else {
            existing = { ...existing, ...getAggregateValues(currentValue, names[i]) };
        }
    }
    console.log(existing);
    return existing;
}

function warnUnsupportedType(type) {
    console.warn(`${UNSUPPORTED_TYPE}: ${type}`);
}

/*
 * Accumulates results from a Yamcs API request that does paging
 * with a continuation token. The Yamcs responses generally contain
 * an indication of the total size, a continuation token, if there
 * are more results, and another property that is an array of results
 * for the current request. That array is what is to be accumulated
 * over multiple requests. The property name for that array is a
 * parameter to this function.
 *
 * Parameters:
 *     url          the API URL
 *     property     the property of the JSON responses to be gathered
 *     totalLimit   (optional) a limit on the total number of objects
 *                  to gather over multiple requests
 *     token        (optional) the continuation token value from
 *                  a prior request
 *
 * Returns:
 *     a promise for an array of results accumulated over the requests
 */
function accumulateResults(url, options, property, soFar, totalLimit, token) {
    if (aborted(options.signal)) {
        return [];
    }

    let newUrl = formatUrl(url, token);

    const result = fetch(newUrl, options)
        .then(res => res.json());

    return result.then(res => {
        if (property in res) {
            soFar = soFar.concat(res[property]);
        }
        if (res.continuationToken===undefined || soFar.length >= totalLimit) {
            return soFar;
        }
        return accumulateResults(url, options, property, soFar, totalLimit,
            res.continuationToken);
    });
}

async function yieldResults(url, { signal, responseKeyName, totalRequestSize, onPartialResponse, formatter }) {

    if (aborted(signal)) {
        return [];
    }

    const yieldRequestHistory = getHistoryYieldRequest(signal);
    let count = 0;
    let stop = false;
    let newUrl = formatUrl(url);
    let token;
    let result;
    let data;

    while (!stop) {
        result = await yieldRequestHistory.next(newUrl).value;
        data = result[responseKeyName];

        if (data) {
            count += data.length;
            token = result.continuationToken;

            onPartialResponse(formatter(data));

            if (token) {
                newUrl = formatUrl(url, token);
                yieldRequestHistory.next();
            }
        }

        if (aborted(signal) || count >= totalRequestSize || !token || !data) {
            stop = true;
        }
    }

    yieldRequestHistory.return();

    return [];

}

function getHistoryYieldRequest(signal) {

    function* yieldRequestHistory() {
        let url = true;

        while (url) {
            url = yield;
            yield fetch(url, { signal})
                .then(res => res.json());
        }
    }

    const generator = yieldRequestHistory();
    generator.next(); // prime

    return generator;
}

function formatUrl(url, token) {
    const urlObject = new URL(url);

    if (token !== undefined) {
        urlObject.searchParams.set("next", token);

        return urlObject.toString();
    }

    return urlObject.toString();
}

function aborted(signal) {
    return signal && signal.aborted;
}

/*
 * Adds information about limit violations and ranges to a telemetry
 * point object.
 */
function addLimitInformation(parameter, point) {
    /* Add information for the limit evaluator, if present. */
    if (parameter.monitoringResult) {
        point.monitoringResult = parameter.monitoringResult;
    }
    if (parameter.rangeCondition) {
        point.rangeCondition = parameter.rangeCondition;
    }
    if (parameter.alarmRange) {
        point.alarmRange = parameter.alarmRange;
    }
}

export {
    idToQualifiedName,
    qualifiedNameToId,
    getValue,
    accumulateResults,
    addLimitInformation,
    yieldResults
};
