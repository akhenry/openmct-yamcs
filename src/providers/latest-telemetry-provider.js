/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2022, United States Government
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
    getValue,
    idToQualifiedName
} from '../utils.js';

export default class LatestTelemetryProvider {
    constructor({url, instance, processor = 'realtime'}) {
        this.url = url;
        this.instance = instance;
        this.processor = processor;
    }
    async requestLatest(domainObject) {
        const url = this._buildUrl(domainObject.identifier);
        const response = await fetch(url);

        let result = await response.json();
        let openMctStyleDatum = undefined;

        if (result !== undefined) {
            if (result.acquisitionStatus !== undefined) {
                openMctStyleDatum = {
                    id: result.id.name,
                    timestamp: result.generationTime,
                    value: getValue(result)
                };
            }
        }

        return openMctStyleDatum;
    }
    _buildUrl(id) {
        let url = `${this.url}api/processors/${this.instance}/${this.processor}/parameters/${idToQualifiedName(id.key)}`;

        return url;
    }
}
