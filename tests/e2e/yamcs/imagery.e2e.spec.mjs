/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2026, United States Government
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
Imagery Tests

Exercises the `yamcs.image` `OpenMCT:type` alias (see README.md and
src/providers/object-provider.js `#isImage`/`#getParameterType`) using the
`TestImage` local parameter from the openmct-test.xml MDB overlay
(tests/e2e/test-data/mdb/openmct-test.xml).

A note on what "the image" actually is here: `TestImage` is a
`BinaryParameterType`, and Yamcs always transports BINARY parameter values as
base64 text (see the `binaryValue` field returned by
`api/processors/.../parameters:batchGet`). openmct-yamcs never base64-decodes
that text -- `getValue()`/`VALUE_EXTRACT_MAP.BINARY` in src/utils.js hands the
raw base64 string straight through as the telemetry datum's `value`, and
`#addHints()` in object-provider.js (around line 545) sets that value's format
to the built-in Open MCT `'image'` format, which has no formatter registered
for it anywhere in this plugin -- so it falls back to Open MCT's identity
formatter and the base64 text is used verbatim as the `<img>` `src`. This
matches the README's own documentation of `OpenMCT:type=yamcs.image`, which
describes it in terms of a *string* parameter holding an image URL, not a
BinaryParameterType.

Practical upshot: a real decodable PNG's raw bytes cannot be made to render as
a real image via the Imagery view through this code path, because base64 text
can never contain the `data:` URI scheme's `:` or `,` characters (they are
outside the base64 alphabet). What *can* be verified end-to-end, and is worth
pinning down as regression coverage, is that:
  - setting the local BINARY parameter's value is reflected, unmodified, as
    the main Imagery view image's `src` (src/utils.js `getValue`
    passthrough), and
  - the `yamcs-thumbnail` format registered in src/openmct-yamcs.js (around
    line 165) is exercised for the thumbnail strip's image, and produces
    exactly the URL shape its regex describes:
    `url.replace(/\/images\//, '/rescaled-images/').replace(/.png$/, '_thumb.jpeg')`.

To make that rewrite observable, the base64 text written to `TestImage` is
crafted (around a real PNG's base64 payload) so that, as literal text, it
contains a `/images/` segment and ends `png` -- both valid base64 alphabet
characters (letters and `/`), so Yamcs accepts and round-trips the value
unchanged.
*/

import { setParameterValue } from './quickstartTools.mjs';
import { pluginFixtures } from 'openmct-e2e';
const { test, expect } = pluginFixtures;

const TEST_IMAGE_PARAMETER_ID = '/OpenMCTTest/TestImage';

// A real 1x1 transparent PNG's base64 payload, wrapped with a `/images/` segment and a
// `...png` ending so it hits both legs of the yamcs-thumbnail format's regex rewrite once
// round-tripped through Yamcs (which transports BINARY values as base64 text, never decoded
// by openmct-yamcs -- see the module doc comment above).
const REAL_PNG_BASE64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=';
const RAW_IMAGE_VALUE = `/images/${REAL_PNG_BASE64.replace(/=+$/, '')}AXpng`;
const EXPECTED_THUMBNAIL_VALUE = RAW_IMAGE_VALUE
    .replace(/\/images\//, '/rescaled-images/')
    .replace(/.png$/, '_thumb.jpeg');

test.describe('Imagery view for yamcs.image parameters @yamcs', () => {
    let yamcsURL;

    test.beforeEach(async ({ page }) => {
        // The `src` text can never be a real, browser-decodable `data:` URI (base64's alphabet
        // excludes `:`/`,`, see the module doc comment above), so the browser will actually
        // request it as an HTTP path -- and unlike the thumbnail strip, Open MCT's main/focused
        // Imagery image specifically stays hidden via CSS until its `load` event fires, which a
        // permanently-404ing request never does. Serve a real, tiny PNG for that request path
        // only, so the main image genuinely loads, without touching the `src` attribute text
        // itself (the raw-value-passthrough behavior this test is actually verifying). The
        // thumbnail path is deliberately left un-intercepted -- the test below asserts it 404s.
        await page.route('**/images/**', (route) => route.fulfill({
            status: 200,
            contentType: 'image/png',
            body: Buffer.from(REAL_PNG_BASE64, 'base64')
        }));

        await page.goto('./', { waitUntil: 'domcontentloaded' });
        await expect(page.getByText('Loading...')).toBeHidden();

        // Derive the proxied Yamcs URL relative to whatever port this run's webpack dev
        // server is on (see tests/patch-quickstart-ports.sh), matching the pattern used in
        // quickstartTools.e2e.spec.mjs.
        yamcsURL = new URL('/yamcs-proxy/', page.url()).toString();

        await setParameterValue(TEST_IMAGE_PARAMETER_ID, {
            type: 'BINARY',
            binaryValue: RAW_IMAGE_VALUE
        }, yamcsURL);
    });

    test('renders TestImage in the Imagery view and exercises the yamcs-thumbnail format', async ({ page }) => {
        const thumbnailRequest = page.waitForResponse((response) => {
            return response.url().includes(encodeURIComponent(EXPECTED_THUMBNAIL_VALUE))
                || response.url().includes(EXPECTED_THUMBNAIL_VALUE);
        });

        await page.getByRole('searchbox', { name: 'Search Input' }).click();
        await page.getByRole('searchbox', { name: 'Search Input' }).fill('TestImage');
        await page.getByLabel('TestImage yamcs.image result').getByText('TestImage').click();

        // `yamcs.image` is registered as a distinct Open MCT type (src/const.js
        // IMAGE_OBJECT_TYPE) and example/index.js lists it in DisplayLayout's
        // `showAsView`, but navigating directly to the object picks Open MCT's built-in
        // Imagery view because the telemetry metadata carries an `image` hint
        // (ImageryViewProvider#canView in Open MCT core), regardless of the object's type.
        await expect(page).toHaveURL(/view=example\.imagery/);

        // exact: true -- getByLabel substring-matches by default, and would otherwise also
        // match the sibling "Focused Image Element" background div.
        const mainImage = page.getByLabel('Focused Image', { exact: true });
        await expect(mainImage).toBeVisible();
        // The main image src is the raw telemetry value, completely unmodified --
        // demonstrating the `value`/`getValue()` passthrough for BINARY parameters.
        await expect(mainImage).toHaveAttribute('src', RAW_IMAGE_VALUE);

        const thumbnailImage = page.locator('.c-thumb__image').first();
        await expect(thumbnailImage).toBeVisible();
        // The thumbnail src is the same raw value with the yamcs-thumbnail format's regex
        // rewrite applied -- proving that format (src/openmct-yamcs.js ~line 165) is
        // actually exercised, and tracing its exact output shape.
        await expect(thumbnailImage).toHaveAttribute('src', EXPECTED_THUMBNAIL_VALUE);

        // The browser genuinely requests that rewritten URL (relative to the app's own
        // origin, since it isn't a real Yamcs endpoint). This fixture doesn't stand up an
        // image-serving backend, so the request 404s -- see the module doc comment above
        // for why a real decodable image can't reach the DOM through this code path today.
        const response = await thumbnailRequest;
        expect(response.status()).toBe(404);
    });
});
