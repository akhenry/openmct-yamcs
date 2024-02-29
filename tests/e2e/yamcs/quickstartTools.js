/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2024, United States Government
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
async function disableLink(yamcsURL) {
    await fetch(`${yamcsURL}/api/links/myproject/udp-in:disable`, {
        method: 'POST'
    });
}

async function enableLink(yamcsURL) {
    await fetch(`${yamcsURL}/api/links/myproject/udp-in:enable`, {
        method: 'POST'
    });
}

async function isLinkEnabled(yamcsURL) {
    const response = await (await fetch(`${yamcsURL}/api/links/myproject/udp-in`)).json();

    return response.disabled !== true;
}

async function latestParameterValues(parameterIds, yamcsURL) {
    const parameterIdsRequest = {
        fromCache: true,
        id: parameterIds.map(parameterName => {
            return {
                name: parameterName
            };
        })
    };
    const parameterIdsRequestSerialized = JSON.stringify(parameterIdsRequest);

    const response = await (await fetch(`${yamcsURL}/api/processors/myproject/realtime/parameters:batchGet`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: parameterIdsRequestSerialized
    })).json();

    return response.value;
}

async function parameterArchive({start, end, parameterId, yamcsURL}) {
    const url = new URL(`api/archive/myproject/parameters/${parameterId}`, `${yamcsURL}`);
    url.searchParams.set('start', start);
    url.searchParams.set('stop', end);

    const response = await (await fetch(url.toString())).json();

    return response.parameter;
}

export {
    disableLink,
    enableLink,
    isLinkEnabled,
    latestParameterValues,
    parameterArchive
};
