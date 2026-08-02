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

// Dev/coverage webpack config for the ISOLATED, security-ENABLED YAMCS instance
// (see tests/setup-quickstart-secure.sh). Identical to webpack.coverage.mjs
// EXCEPT that the YAMCS proxy injects an `Authorization` header on BOTH the
// HTTP requests and the websocket upgrade, so the browser and the (UNMODIFIED)
// openmct-yamcs adapter stay completely credential-less while YAMCS sees an
// authenticated, role-bearing user. This is the #385 "do auth at the proxy, not
// in the plugin" approach, done for a test environment.
//
// The adapter sends no credentials of its own (Open MCT core's
// BatchingWebSocket.connect(url) takes only a URL, with no header hook), so this
// proxy injection is the ONLY thing that authenticates the session -- nothing in
// src/ is touched.
import coverageConfig from './webpack.coverage.mjs';

// Isolated, non-default ports so this never collides with the default
// quickstart instance on 8090/10015. Keep in sync with
// tests/setup-quickstart-secure.sh.
const webpackPort = Number(process.env.WEBPACK_PORT) || 9070;
const yamcsHttpPort = Number(process.env.YAMCS_HTTP_PORT) || 8160;

// Real named user provisioned in quickstart-secure/.../etc/users.yaml with role
// Flight. Keep the defaults in sync with tests/setup-quickstart-secure.sh.
const yamcsUser = process.env.SECURE_YAMCS_USER || 'flight';
const yamcsPassword = process.env.SECURE_YAMCS_PASSWORD || 'flightpassword';

// HTTP Basic: no token lifecycle to manage, and YamlAuthModule validates it on
// every request -- robust for a multi-minute test run. YAMCS authenticates the
// websocket upgrade request the same way it authenticates any HTTP request, so
// the same header works for both the REST and websocket proxies.
const authHeader = `Basic ${Buffer.from(`${yamcsUser}:${yamcsPassword}`).toString('base64')}`;

const injectAuthOnRequest = (proxyReq) => {
    proxyReq.setHeader('Authorization', authHeader);
};

coverageConfig.devServer.port = webpackPort;
coverageConfig.devServer.proxy = [
    {
        context: ['/yamcs-proxy/'],
        target: `http://0.0.0.0:${yamcsHttpPort}/`,
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/yamcs-proxy/': '' },
        onProxyReq: injectAuthOnRequest
    },
    {
        context: ['/yamcs-proxy-ws/'],
        target: `ws://0.0.0.0:${yamcsHttpPort}/api/websocket`,
        secure: false,
        changeOrigin: true,
        ws: true,
        pathRewrite: { '^/yamcs-proxy-ws/': '' },
        onProxyReqWs: injectAuthOnRequest
    }
];

export default coverageConfig;
