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

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('webpack').Configuration} */
const commonConfig = {
    context: __dirname,
    performance: {
        hints: false
    },
    entry: {
        'openmct-yamcs': '../src/openmct-yamcs.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"]
            }
        ],
    },
    output: {
        globalObject: "this",
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'umd',
            export: 'default',
            name: 'openmctYamcs'
        }
    },
    devServer: {
        compress: true,
        port: 9000,
        static: [{
            directory: path.join(__dirname, '../example'),
        }, {
            directory: path.join(__dirname, '../node_modules/openmct/dist'),
            publicPath: '/dist',
        }],
        proxy: [
            {
                context: ['/yamcs-proxy/'],
                target: "http://0.0.0.0:8090/",
                secure: false,
                changeOrigin: true,
                pathRewrite: { '^/yamcs-proxy/': '' }
            },
            {
                context: ['/yamcs-proxy-ws/'],
                target: "ws://0.0.0.0:8090/api/websocket",
                secure: false,
                changeOrigin: true,
                ws: true,
                pathRewrite: { '^/yamcs-proxy-ws/': '' }
            }
        ]
    },
    resolve: {
        alias: {
            openmct: path.resolve(__dirname, '../node_modules/openmct/dist/openmct.js')
        }
    }
};

export default commonConfig;

