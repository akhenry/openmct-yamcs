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
    idToQualifiedName
} from '../../utils.js';

export default class PollQuestionTelemetry {
    #setReady;
    #readyPromise;
    #url;
    #instance;
    #processor;
    #openmct;
    #telemetryObject;

    constructor(openmct, {url, instance, processor = 'realtime'}) {
        this.#readyPromise = new Promise((resolve) => this.#setReady = resolve);
        this.#url = url;
        this.#instance = instance;
        this.#processor = processor;
        this.#openmct = openmct;
    }
    setTelemetryObject(telemetryObject) {
        this.#telemetryObject = telemetryObject;
        this.#setReady();
    }
    async getTelemetryObject() {
        await this.#readyPromise;

        return this.#telemetryObject;
    }
    async setPollQuestion(question) {
        const telemetryObject = await this.getTelemetryObject();
        const setParameterUrl = this.#buildUrl(telemetryObject.identifier);
        let success = false;

        try {
            const result = await fetch(setParameterUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: 'STRING',
                    stringValue: question
                })
            });
            success = result.ok === true;
        } catch (error) {
            console.error(error);
        }

        return success;
    }
    toPollQuestionObjectFromTelemetry(telemetryObject, datum) {
        const metadata = this.#openmct.telemetry.getMetadata(telemetryObject);
        const questionMetadata = metadata.getDefaultDisplayValue();
        const timestampMetadata = metadata.valuesForHints(['domain'])[0];
        const questionFormatter = this.#openmct.telemetry.getValueFormatter(questionMetadata);
        const dateFormatter = this.#openmct.telemetry.getValueFormatter(timestampMetadata);

        return {
            timestamp: dateFormatter.parse(datum),
            question: questionFormatter.parse(datum)
        };

    }
    #buildUrl(id) {
        let url = `${this.#url}api/processors/${this.#instance}/${this.#processor}/parameters/${idToQualifiedName(id.key)}`;

        return url;
    }
}
