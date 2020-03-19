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
        port: 9000
    }
};

if (devMode) {
    WEBPACK_CONFIG.entry['openmct-yamcs-example'] = './example/index.js';
}

module.exports = WEBPACK_CONFIG;