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

module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jasmine": true,
        "amd": true
    },
    "extends": "eslint:recommended",
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "allowImportExportEverywhere": true,
        "requireConfigFile": false,
        "ecmaVersion": 2015,
        "ecmaFeatures": {
            "impliedStrict": true
        }
    },
    "rules": {
        "no-bitwise": "error",
        "curly": "error",
        "eqeqeq": "error",
        "guard-for-in": "error",
        "no-extend-native": "error",
        "no-inner-declarations": "off",
        "no-use-before-define": ["error", "nofunc"],
        "no-caller": "error",
        "no-sequences": "error",
        "no-irregular-whitespace": "error",
        "no-new": "error",
        "no-shadow": "error",
        "no-undef": "error",
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "none"
            }
        ],
        "no-console": "off",
        "no-trailing-spaces": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "asyncArrow": "always",
                "named": "never",
            }
        ],
        "array-bracket-spacing": "error",
        "space-in-parens": "error",
        "space-before-blocks": "error",
        "comma-dangle": "error",
        "eol-last": "error",
        "new-cap": [
            "error",
            {
                "capIsNew": false,
                "properties": false
            }
        ],
        "dot-notation": "error",
        "indent": ["error", 4],
        "semi": "error"
    },
    "overrides": [
        {
            "files": ["*Spec.js"],
            "rules": {
                "no-unused-vars": [
                    "warn",
                    {
                        "vars": "all",
                        "args": "none",
                        "varsIgnorePattern": "controller"
                    }
                ]
            }
        }
    ]
};
