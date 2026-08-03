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
// @ts-check
import path from "path";
import { fileURLToPath } from "url";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common.mjs";

// Replicate __dirname functionality for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Overridable so multiple worktree checkouts can run the dev server + YAMCS proxy
// against non-conflicting ports in parallel (see tests/patch-quickstart-ports.sh).
const webpackPort = Number(process.env.WEBPACK_PORT) || 9000;
const yamcsHttpPort = Number(process.env.YAMCS_HTTP_PORT) || 8090;

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  context: path.resolve(__dirname, "../"),
  devtool: "eval-source-map",
  entry: {
    "openmct-yamcs-example": path.resolve(__dirname, "../example/index.js"),
  },
  devServer: {
    compress: true,
    port: webpackPort,
    static: [
      {
        directory: path.join(__dirname, "../example"),
      },
      {
        directory: path.join(__dirname, "../node_modules/openmct/dist"),
        publicPath: "/node_modules/openmct/dist",
      },
    ],
    proxy: [
      {
        context: ["/yamcs-proxy/"],
        target: `http://0.0.0.0:${yamcsHttpPort}/`,
        secure: false,
        changeOrigin: true,
        pathRewrite: { "^/yamcs-proxy/": "" },
      },
      {
        context: ["/yamcs-proxy-ws/"],
        target: `ws://0.0.0.0:${yamcsHttpPort}/api/websocket`,
        secure: false,
        changeOrigin: true,
        ws: true,
        pathRewrite: { "^/yamcs-proxy-ws/": "" },
      },
    ],
  },
};

export default merge(commonConfig, devConfig);
