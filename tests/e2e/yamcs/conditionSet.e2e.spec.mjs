import { pluginFixtures, appActions } from 'openmct-e2e';
const { test, expect } = pluginFixtures;
const { createDomainObjectWithDefaults } = appActions;

const STRING_PARAM = {
    name: 'String_Param',
    qualifiedName: '/myproject/String_Param',
    type: { engType: 'string' }
};

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

test.describe('Condition set string comparators @yamcs', () => {
    test('string telemetry parameters expose string comparators', async ({ page }) => {
        await page.route('**/api/mdb/myproject/parameters**', async (route) => {
            const response = await route.fetch();
            const body = await response.json();
            body.parameters = [...(body.parameters ?? []), STRING_PARAM];
            await route.fulfill({
                response,
                json: body
            });
        });

        await page.goto('./');
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();

        const conditionSet = await createDomainObjectWithDefaults(page, {
            type: 'Condition Set',
            name: 'String Comparator Condition Set'
        });

        await page.goto(conditionSet.url, { waitUntil: 'domcontentloaded' });
        await page.getByLabel('Show selected item in tree').click();
        await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').fill('String_Param');
        const searchResult = page.getByLabel('Object Search Result').filter({ hasText: 'String_Param' }).first();
        await expect(searchResult).toBeVisible();
        await searchResult.getByText('String_Param', { exact: true }).dragTo(page.locator('#conditionCollection'));
        await expect(page.getByRole('button', { name: 'Add Condition' })).toBeVisible();
        await page.getByRole('button', { name: 'Add Condition' }).click();

        const telemetrySelect = page.getByLabel('Criterion Telemetry Selection');
        const optionLabel = await telemetrySelect
            .locator('option')
            .filter({ hasText: STRING_PARAM.name })
            .textContent();
        await telemetrySelect.selectOption({ label: optionLabel.trim() });
        await page.getByLabel('Criterion Metadata Selection').selectOption({ label: 'Value' });

        const comparison = page.getByLabel('Criterion Comparison Selection');
        const options = comparison.locator('option');

        for (const label of STRING_COMPARATORS) {
            await expect(options.filter({ hasText: label })).toHaveCount(1);
        }

        for (const label of NUMERIC_ONLY_COMPARATORS) {
            await expect(options.filter({ hasText: label })).toHaveCount(0);
        }

        await page.goto(conditionSet.url);
    });
});
