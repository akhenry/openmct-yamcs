/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2022, United States Government
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
 ****************************************************************************/

import { pluginFixtures, appActions } from 'openmct-e2e';
const { test, expect } = pluginFixtures;
const { createDomainObjectWithDefaults } = appActions;

const STRING_PARAM = {
    name: 'String_Param',
    qualifiedName: '/myproject/String_Param',
    type: { engType: 'string' }
};

// No underscores in these names: #formatAggregateMembers derives a member's
// displayed option label from the parent's name with its *first* underscore
// replaced by '.', then prefixes the member name with everything before that
// dot whenever the result contains a dot. Underscore-free names sidestep that
// prefixing so the member's option label is simply its own name, keeping this
// test focused on the string-format gap rather than that label-munging logic.
const AGGREGATE_WITH_STRING_MEMBER = {
    name: 'AggregateWithStringMember',
    qualifiedName: '/myproject/AggregateWithStringMember',
    type: {
        engType: 'aggregate',
        member: [
            {
                name: 'StatusMember',
                type: { engType: 'string' }
            }
        ]
    }
};

const NUMERIC_PARAM_NAME = 'Battery1_Voltage';

const STRING_COMPARATORS = [
    'text contains',
    'text does not contain',
    'text starts with',
    'text ends with',
    'text is exactly'
];

const NUMERIC_ONLY_COMPARATORS = [
    'is equal to',
    'is greater than',
    'is less than'
];

/**
 * Injects synthetic parameters into every MDB parameter list/search response
 * for the myproject instance. Scoped to requests carrying a query string
 * (the dictionary load and search calls), not any hypothetical single-parameter
 * subresource fetch.
 */
async function mockParameters(page, parameters) {
    await page.route(/\/api\/mdb\/myproject\/parameters\?/, async (route) => {
        const response = await route.fetch();
        const body = await response.json();
        body.parameters = [...(body.parameters ?? []), ...parameters];
        await route.fulfill({
            response,
            json: body
        });
    });
}

async function createConditionSetWithCriterion(page, { name, parameterName, metadataLabel }) {
    const conditionSet = await createDomainObjectWithDefaults(page, {
        type: 'Condition Set',
        name
    });

    await page.goto(conditionSet.url, { waitUntil: 'domcontentloaded' });
    await page.getByLabel('Show selected item in tree').click();
    await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').fill(parameterName);
    const searchResult = page.getByLabel('Object Search Result').filter({ hasText: parameterName }).first();
    await expect(searchResult).toBeVisible();
    await searchResult.getByText(parameterName, { exact: true }).dragTo(page.locator('#conditionCollection'));
    await expect(page.getByRole('button', { name: 'Add Condition' })).toBeVisible();
    await page.getByRole('button', { name: 'Add Condition' }).click();

    const telemetrySelect = page.getByLabel('Criterion Telemetry Selection');
    const option = telemetrySelect.locator('option').filter({ hasText: parameterName }).first();
    const optionLabel = (await option.textContent()).trim();
    await telemetrySelect.selectOption({ label: optionLabel });
    await page.getByLabel('Criterion Metadata Selection').selectOption({ label: metadataLabel });

    return conditionSet;
}

function exactOptionMatch(label) {
    return new RegExp(`^${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`);
}

async function assertComparators(page, { stringPresent, numericPresent }) {
    const comparison = page.getByLabel('Criterion Comparison Selection');
    const options = comparison.locator('option');

    for (const label of STRING_COMPARATORS) {
        await expect(options.filter({ hasText: exactOptionMatch(label) })).toHaveCount(stringPresent ? 1 : 0);
    }

    for (const label of NUMERIC_ONLY_COMPARATORS) {
        await expect(options.filter({ hasText: exactOptionMatch(label) })).toHaveCount(numericPresent ? 1 : 0);
    }
}

test.describe('Condition set string comparators @yamcs', () => {
    test('string telemetry parameters expose string comparators', async ({ page }) => {
        await mockParameters(page, [STRING_PARAM]);

        await page.goto('./');
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();

        await createConditionSetWithCriterion(page, {
            name: 'String Comparator Condition Set',
            parameterName: STRING_PARAM.name,
            metadataLabel: 'Value'
        });

        await assertComparators(page, {
            stringPresent: true,
            numericPresent: false
        });
    });

    test('numeric telemetry parameters do not expose string comparators (control case)', async ({ page }) => {
        await page.goto('./');
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();

        await createConditionSetWithCriterion(page, {
            name: 'Numeric Comparator Condition Set',
            parameterName: NUMERIC_PARAM_NAME,
            metadataLabel: 'Value'
        });

        await assertComparators(page, {
            stringPresent: false,
            numericPresent: true
        });
    });

    test('string members of aggregate parameters expose string comparators', async ({ page }) => {
        // Known gap: #formatAggregateMembers only special-cases array members when
        // building the parent aggregate object's own telemetry metadata, so a string
        // member's entry there still has no format and falls back to numeric
        // comparators. Marked as an expected failure until that's fixed; this will
        // start failing (in the "unexpectedly passed" sense) once it is, which is the
        // point.
        test.fail();

        await mockParameters(page, [AGGREGATE_WITH_STRING_MEMBER]);

        await page.goto('./');
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();

        await createConditionSetWithCriterion(page, {
            name: 'Aggregate String Member Condition Set',
            parameterName: AGGREGATE_WITH_STRING_MEMBER.name,
            metadataLabel: 'StatusMember'
        });

        await assertComparators(page, {
            stringPresent: true,
            numericPresent: false
        });
    });
});
