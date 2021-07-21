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

function idToQualifiedName(id) {
    return id.replace(/~/g, '/');
}

function qualifiedNameToId(name) {
    return name.replace(/\//g, '~');
}

const UNSUPPORTED_TYPE = 'Unsupported Data Type';
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
function getValue(value) {
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

    warnUnsupportedType(value.type);

    return UNSUPPORTED_TYPE;

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
    if (options.signal && options.signal.aborted) {
        return;
    }

    if (totalLimit === undefined) {
        totalLimit = 1000000;
    }

    let newUrl = url;
    if (token !== undefined) {
        if (url.indexOf('?') < 0) {
            newUrl += '?next=' + token;
        } else {
            newUrl += '&next=' + token;
        }
    }

    const result = fetch(encodeURI(newUrl), options)
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
    addLimitInformation
};
