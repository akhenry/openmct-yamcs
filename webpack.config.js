/* eslint-disable no-undef */
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

const WEBPACK_CONFIG = {
    entry: {
        'openmct-yamcs': './src/plugin.js'
    },
    mode: 'production',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd'
    },
    devtool: devMode ? 'eval-source-map' : 'source-map',
    devServer: {
        serveIndex: false,
        compress: true,
        port: 9000,
        open: true,
        openPage: '/example/index.html',
        proxy: {
            "/yamcs-proxy/*": {
                target: "http://localhost:8090/",
                secure: false,
                changeOrigin: true,
                pathRewrite: {'^/yamcs-proxy' : ''}
            },
            "/yamcs-proxy-ws/*": {
                target: "ws://localhost:8090/",
                secure: false,
                changeOrigin: true,
                ws: true,
                pathRewrite: {'^/yamcs-proxy-ws' : ''}
            }
        }
    }
};

if (devMode) {
    WEBPACK_CONFIG.entry['openmct-yamcs-example'] = './example/index.js';
}

module.exports = WEBPACK_CONFIG;
