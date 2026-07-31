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
Tests for the `OpenMCT:*` XTCE alias hooks in `src/providers/object-provider.js`
that alter how the object tree is built from the MDB:

  - `OpenMCT:omit` (`#isSuppressed`, object-provider.js ~363-367): the
    parameter is skipped entirely when building the object tree.
  - `OpenMCT:type` (`#getParameterType`, object-provider.js ~619-641): the
    inferred Open MCT type is overridden by whatever the alias names, instead
    of the type YAMCS's declared parameter type would normally map to.

Both parameters under test are defined in the overlay MDB
(tests/e2e/test-data/mdb/openmct-test.xml, SpaceSystem "OpenMCTTest"):

  - `OmittedParameter` (IntegerParameterType, `OpenMCT:omit=true`)
  - `OverriddenParameter` (IntegerParameterType, `OpenMCT:type=yamcs.string`)

Without the `OpenMCT:type` override, an IntegerParameterType parameter would
be assigned OBJECT_TYPES.TELEMETRY_OBJECT_TYPE (`yamcs.telemetry`, "Telemetry
Point"); with it, it is assigned OBJECT_TYPES.STRING_OBJECT_TYPE
(`yamcs.string`, "Telemetry String") -- see the `OBJECT_TYPES` map and
`openmct.types.addType` calls in src/openmct-yamcs.js.

See the third test below for why an "unsupported value type" (the
`warnUnsupportedType`/`UNSUPPORTED_TYPE` fallback path in src/utils.js) is not
exercised here.
*/

import { pluginFixtures, appActions } from 'openmct-e2e';
const { test, expect } = pluginFixtures;
const { getDomainObject } = appActions;

const OVERRIDDEN_PARAMETER_IDENTIFIER = {
    key: '~OpenMCTTest~OverriddenParameter',
    namespace: 'taxonomy'
};

test.describe('MDB metadata: OpenMCT:omit and OpenMCT:type aliases @yamcs', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('./', { waitUntil: 'domcontentloaded' });
        await expect(page.getByText('Loading...')).toBeHidden();
    });

    test('OpenMCT:omit hides the parameter from the object tree and from search', async ({ page }) => {
        await test.step('OmittedParameter is absent from the OpenMCTTest folder in the tree', async () => {
            await page.getByLabel('Expand myproject folder').click();
            await page.getByLabel('Expand OpenMCTTest folder').click();

            // Sibling parameter that IS expected to appear, as a sanity check that
            // the folder actually expanded and we're not just looking at an empty list.
            await expect(page.getByRole('treeitem', { name: 'OverriddenParameter' })).toBeVisible();

            await expect(page.getByRole('treeitem', { name: 'OmittedParameter', exact: true })).toHaveCount(0);
        });

        await test.step('OmittedParameter yields zero search results', async () => {
            const searchInput = page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]');
            await searchInput.click();
            await searchInput.fill('OmittedParameter');

            await expect(page.getByLabel('Object Search Result')).toHaveCount(0);
        });

        await test.step('a sibling, non-omitted parameter DOES yield a search result (control)', async () => {
            const searchInput = page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]');
            await searchInput.click();
            await searchInput.fill('OverriddenParameter');

            await expect(page.getByLabel('Object Search Result').nth(0)).toContainText('OverriddenParameter');
        });
    });

    test('OpenMCT:type overrides the Open MCT type actually applied to the parameter', async ({ page }) => {
        await page.getByLabel('Expand myproject folder').click();
        await page.getByLabel('Expand OpenMCTTest folder').click();

        await expect(page.getByRole('treeitem', { name: 'OverriddenParameter' })).toBeVisible();

        const domainObject = await getDomainObject(page, OVERRIDDEN_PARAMETER_IDENTIFIER);

        expect(domainObject).toBeDefined();
        // The alias overrides the type to `yamcs.string`, NOT the `yamcs.telemetry`
        // type that a bare IntegerParameterType would otherwise be assigned.
        expect(domainObject.type).toBe('yamcs.string');
        expect(domainObject.type).not.toBe('yamcs.telemetry');

        const typeName = await page.evaluate(() => {
            return window.openmct.types.get('yamcs.string').definition.name;
        });
        expect(typeName).toBe('Telemetry String');
    });

    // eslint-disable-next-line playwright/no-skipped-test
    test.skip('unsupported value type triggers the warnUnsupportedType/UNSUPPORTED_TYPE fallback', () => {
        /*
        Deliberately unreachable via e2e with the current overlay MDB, documented
        here rather than silently uncovered.

        `warnUnsupportedType`/`UNSUPPORTED_TYPE` (src/utils.js ~98-127) only fire
        when a YAMCS engineering value's `type` isn't a key in `VALUE_EXTRACT_MAP`
        (UINT64/INT64/SINT64/UINT32/INT32/SINT32/UINT16/INT16/SINT16/FLOAT/DOUBLE/
        STRING/ENUMERATED/TIMESTAMP/BOOLEAN/BINARY), either directly or as an
        element of an ARRAY value.

        Every XTCE parameter type YAMCS's MDB loader accepts (Integer, Float,
        Boolean, String, Enumerated, Binary, AbsoluteTime, Aggregate, Array)
        compiles down to one of those already-supported engineering value types.
        There is no XTCE construct that both (a) YAMCS's MDB loader will accept
        without failing dictionary load, and (b) produces an engineering value
        type outside VALUE_EXTRACT_MAP. Concretely, this was checked against the
        overlay MDB used by every other spec in this suite
        (tests/e2e/test-data/mdb/openmct-test.xml, loaded by
        tests/patch-quickstart-mdb.sh): no local parameter could be added that
        both exercises this fallback and is safe to add, since a bad addition to
        that shared overlay would risk breaking dictionary load -- and therefore
        every other spec in this suite that depends on the overlay loading.

        A change to this file (or a genuinely YAMCS-accepted-but-unmapped value
        type surfacing in a future YAMCS release) could make this path reachable
        again; until then this fallback is left to be exercised at the unit-test
        level (calling getValue()/getAggregateValues() directly with a
        synthetic/unsupported `type` string), which is a separate, already
        planned unit of work.
        */
    });
});
