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

/*
 * BinaryToHexFormatter#parse and #validate, and hexToBase64, back the editing
 * direction of the binary/hex formatter (turning user-typed hex back into the
 * base64 value Yamcs expects, and validating input as it's typed). Stock
 * QuickStart has no editable binary-typed field that exercises this direction
 * -- commands.e2e.spec.mjs already covers #format (the display direction, base64
 * -> hex) via the real Commands table, but there's no XTCE binary command
 * argument in QuickStart's MDB for a user to edit, so #parse/#validate are only
 * reachable by calling them directly.
 */

import { describe, it, expect } from 'vitest';

import BinaryToHexFormatter from '../../../../src/plugins/binaryToHexFormatter/BinaryToHexFormatter.js';
import hexToBase64 from '../../../../src/plugins/binaryToHexFormatter/hexToBase64.js';
import base64ToHex from '../../../../src/plugins/binaryToHexFormatter/base64ToHex.js';

describe('hexToBase64', () => {
    it('converts a plain hex string to its base64 representation', () => {
        // '48656C6C6F' is the hex encoding of the ASCII bytes for 'Hello'
        expect(hexToBase64('48656C6C6F')).toBe(btoa('Hello'));
    });

    it('strips a leading 0x prefix before converting', () => {
        expect(hexToBase64('0x48656C6C6F')).toBe(btoa('Hello'));
    });

    it('round-trips through base64ToHex for arbitrary binary content', () => {
        const originalBase64 = btoa('\x00\x01\xFF\x7F');
        const hex = base64ToHex(originalBase64);

        expect(hexToBase64(hex)).toBe(originalBase64);
    });
});

describe('BinaryToHexFormatter', () => {
    const formatter = new BinaryToHexFormatter();

    describe('format', () => {
        it('passes undefined through unmodified', () => {
            expect(formatter.format(undefined)).toBeUndefined();
        });

        it('formats a base64 value as hex', () => {
            expect(formatter.format(btoa('Hi'))).toBe(base64ToHex(btoa('Hi')));
        });
    });

    describe('parse', () => {
        it('passes undefined through unmodified', () => {
            expect(formatter.parse(undefined)).toBeUndefined();
        });

        it('parses user-typed hex text back into base64', () => {
            expect(formatter.parse('48656C6C6F')).toBe(btoa('Hello'));
        });
    });

    describe('validate', () => {
        it('accepts valid base64 text', () => {
            expect(formatter.validate(btoa('Hello'))).toBe(true);
        });

        it('rejects text that atob cannot decode', () => {
            expect(formatter.validate('not valid base64!!!')).toBe(false);
        });
    });
});
