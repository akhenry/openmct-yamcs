/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2023, United States Government
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

let dictionary = null;
let isDictionaryLoading = false;
let ports = [];

self.onconnect = (e) => {
    const port = e.ports[0];
    ports.push(port);

    port.onmessage = (event) => {
        const { action, data } = event.data;
        console.log('worker message', action, data);
        if (action === 'requestDictionary') {
            if (dictionary) {
                postDictionary();
            } else if (isDictionaryLoading) {
                port.postMessage({
                    action: 'dictionaryLoading'
                });
            } else {
                isDictionaryLoading = true;
                port.postMessage({
                    action: 'dictionaryNotLoaded'
                });
            }
        } else if (action === 'updateDictionary') {
            dictionary = data;
            isDictionaryLoading = false;
            postDictionaryToAll();
        }
    };

    function postDictionary() {
        console.log('worker posting dictionary data')
        port.postMessage({
            action: 'dictionaryData',
            dictionary
        });
    }

    port.start();
};

function postDictionaryToAll() {
    console.log('worker posting dictionary data to all ports');
    ports.forEach(port => {
        port.postMessage({
            action: 'dictionaryData',
            dictionary
        });
    });
}
