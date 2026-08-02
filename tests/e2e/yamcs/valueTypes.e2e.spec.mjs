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
Telemetry value-type coverage.

Exercises openmct-yamcs value-type handling that stock QuickStart's MDB has no
parameters for, using `dataSource="local"` fixtures added to the overlay MDB
(tests/e2e/test-data/mdb/openmct-test.xml, SpaceSystem "OpenMCTTest"). Each
parameter's value is set through the same YAMCS realtime REST PUT the plugin's
own providers use (see quickstartTools.mjs `setParameterValue`), then read back
through the real Open MCT telemetry API to assert the adapter surfaced it
correctly.

Parameters under test and the src/ contracts they cover:

  - `BooleanValue` (BooleanParameterType) -- src/utils.js VALUE_EXTRACT_MAP.BOOLEAN
    (`value.booleanValue`). Unlocks #365.
  - `FloatArray` (ArrayParameterType of float) -- object-provider `#isArray`
    (`engType.endsWith('[]')`) sets the value-metadata `format` to the engType,
    and src/utils.js `getValue` iterates `value.arrayValue`, extracting each
    element via the scalar VALUE_EXTRACT_MAP. Unlocks #49/#51/#76/#292.
  - `UnitFloat` (FloatParameterType with a <UnitSet>) -- object-provider
    `#hasUnit`/`#getUnit` read `parameter.type.unitSet[].unit` and attach it to
    the value metadata as `unit`. Unlocks #91/#93.
  - `NestedAggregate` (AggregateParameterType whose members are a scalar, an
    array, AND another aggregate) -- the highest-value fixture: it is the only
    thing in the suite that drives the array-member and
    nested-aggregate-with-members recursion in object-provider
    `#formatAggregateMembers` and the nested-aggregate recursion in src/utils.js
    `getAggregateValues`. Unlocks #75.

A note on which telemetry path the aggregate assertions use: aggregate members
flatten into dot-joined child keys keyed off the domain object's *name* on the
realtime path (object name "NestedAggregate" -> "NestedAggregate.scalar", ...),
which is exactly how the value metadata is keyed, so a realtime datum's keys
line up with `getMetadata().values()`. These tests therefore drive the flattened
values through `openmct.telemetry.subscribe` (the canonical live path), so the
assertions tie the object-provider metadata keys and the utils getValue output
together against the same keys.
*/

import { setParameterValue } from './quickstartTools.mjs';
import { pluginFixtures, appActions } from 'openmct-e2e';
const { test, expect } = pluginFixtures;
const { getDomainObject } = appActions;

const NAMESPACE = 'taxonomy';

function identifierFor(name) {
    return {
        namespace: NAMESPACE,
        key: `~OpenMCTTest~${name}`
    };
}

/**
 * Subscribe to a parameter's realtime telemetry, run `mutate` (which sets the
 * parameter's value via REST), and resolve with the first datum the plugin
 * pushes back that satisfies `matches`. This round-trips a value through YAMCS
 * and the plugin's realtime provider / getValue path, rather than asserting
 * against a value we set directly.
 *
 * `matches` is a self-contained predicate (serialized into the browser), used
 * only to wait for the *specific* update this call produced -- Open MCT delivers
 * the last cached value to a new subscriber immediately, so waiting merely for
 * "a datum" would return the previous value. The returned datum is still
 * asserted against in full by the caller.
 */
async function roundTripDatum(page, name, mutate, matches) {
    const matchesSource = `(${matches.toString()})`;

    const token = await page.evaluate(async ({ paramName, predicateSource }) => {
        window.__roundTrip = window.__roundTrip || {};
        // eslint-disable-next-line no-eval
        const predicate = eval(predicateSource);
        const callToken = `${paramName}:${Date.now()}:${Math.random()}`;
        const identifier = {
            namespace: 'taxonomy',
            key: `~OpenMCTTest~${paramName}`
        };
        const domainObject = await window.openmct.objects.get(identifier);
        const state = { datum: undefined };
        const unsubscribe = window.openmct.telemetry.subscribe(domainObject, (datum) => {
            if (predicate(datum)) {
                state.datum = datum;
            }
        });
        window.__roundTrip[callToken] = {
            state,
            unsubscribe
        };

        return callToken;
    }, {
        paramName: name,
        predicateSource: matchesSource
    });

    await mutate();

    await expect.poll(
        () => page.evaluate((callToken) => window.__roundTrip[callToken].state.datum !== undefined, token),
        { message: `realtime datum for ${name}` }
    ).toBe(true);

    return page.evaluate((callToken) => {
        const { state, unsubscribe } = window.__roundTrip[callToken];
        unsubscribe();
        delete window.__roundTrip[callToken];

        return state.datum;
    }, token);
}

function metadataValuesFor(page, name) {
    return page.evaluate(async (paramName) => {
        const identifier = {
            namespace: 'taxonomy',
            key: `~OpenMCTTest~${paramName}`
        };
        const domainObject = await window.openmct.objects.get(identifier);
        const metadata = window.openmct.telemetry.getMetadata(domainObject);

        return metadata.values().map((value) => ({
            key: value.key,
            name: value.name,
            unit: value.unit,
            format: value.format
        }));
    }, name);
}

test.describe('Telemetry value types @yamcs @mutatesGlobalState', () => {
    let yamcsURL;

    test.beforeEach(async ({ page }) => {
        await page.goto('./', { waitUntil: 'domcontentloaded' });
        await expect(page.getByText('Loading...')).toBeHidden();
        yamcsURL = new URL('/yamcs-proxy/', page.url()).toString();
    });

    test('boolean parameters round-trip their booleanValue (#365)', async ({ page }) => {
        const domainObject = await getDomainObject(page, identifierFor('BooleanValue'));
        expect(domainObject.type).toBe('yamcs.telemetry');

        const trueDatum = await roundTripDatum(page, 'BooleanValue', () =>
            setParameterValue('/OpenMCTTest/BooleanValue', {
                type: 'BOOLEAN',
                booleanValue: true
            }, yamcsURL),
        (datum) => datum.value === true
        );
        // A genuine JS boolean, not the string "true" -- proves VALUE_EXTRACT_MAP.BOOLEAN
        // hands back value.booleanValue verbatim.
        expect(trueDatum.value).toBe(true);

        const falseDatum = await roundTripDatum(page, 'BooleanValue', () =>
            setParameterValue('/OpenMCTTest/BooleanValue', {
                type: 'BOOLEAN',
                booleanValue: false
            }, yamcsURL),
        (datum) => datum.value === false
        );
        expect(falseDatum.value).toBe(false);
    });

    test('array parameters round-trip as an array of extracted elements (#49/#51/#76/#292)', async ({ page }) => {
        const metadataValues = await metadataValuesFor(page, 'FloatArray');
        const valueMetadatum = metadataValues.find((value) => value.key === 'value');
        // #isArray drives the value metadatum's `format` to the raw engType.
        expect(valueMetadatum.format).toBe('float[]');

        const datum = await roundTripDatum(page, 'FloatArray', () =>
            setParameterValue('/OpenMCTTest/FloatArray', {
                type: 'ARRAY',
                arrayValue: [
                    {
                        type: 'FLOAT',
                        floatValue: 1.5
                    },
                    {
                        type: 'FLOAT',
                        floatValue: 2.5
                    },
                    {
                        type: 'FLOAT',
                        floatValue: 3.5
                    }
                ]
            }, yamcsURL),
        (candidate) => Array.isArray(candidate.value) && candidate.value.length === 3
        );
        // getValue's ARRAY branch iterates value.arrayValue and extracts each
        // element via the scalar VALUE_EXTRACT_MAP, yielding a plain JS array.
        expect(datum.value).toEqual([1.5, 2.5, 3.5]);
    });

    test('numeric parameters expose their XTCE unit in telemetry metadata (#91/#93)', async ({ page }) => {
        const metadataValues = await metadataValuesFor(page, 'UnitFloat');
        const valueMetadatum = metadataValues.find((value) => value.key === 'value');
        // #hasUnit/#getUnit copy parameter.type.unitSet[].unit onto the value metadata.
        expect(valueMetadatum.unit).toBe('degC');

        const datum = await roundTripDatum(page, 'UnitFloat', () =>
            setParameterValue('/OpenMCTTest/UnitFloat', {
                type: 'FLOAT',
                floatValue: 42.5
            }, yamcsURL),
        (candidate) => candidate.value === 42.5
        );
        expect(datum.value).toBe(42.5);
    });

    test('nested aggregate parameters flatten scalar, array, and nested-aggregate members (#75)', async ({ page }) => {
        const domainObject = await getDomainObject(page, identifierFor('NestedAggregate'));
        // An aggregate with members maps to the dedicated aggregate telemetry type.
        expect(domainObject.type).toBe('yamcs.aggregate');

        await test.step('object-provider #formatAggregateMembers flattens members (incl. array + nested aggregate) into dot-joined value metadata', async () => {
            const metadataValues = await metadataValuesFor(page, 'NestedAggregate');
            const byKey = Object.fromEntries(metadataValues.map((value) => [value.key, value]));

            // Direct scalar member.
            expect(byKey['NestedAggregate.scalar']).toMatchObject({ name: 'scalar' });
            // Array-typed member -- the #isArray leg of #formatAggregateMembers,
            // which carries the engType through as `format`.
            expect(byKey['NestedAggregate.valuesArray']).toMatchObject({
                name: 'valuesArray',
                format: 'float[]'
            });
            // Members of the nested aggregate -- only reachable via the
            // nested-aggregate-with-members recursion in #formatAggregateMembers,
            // which prefixes the child names with the containing member name.
            expect(byKey['NestedAggregate.inner.innerScalar']).toMatchObject({ name: 'inner innerScalar' });
            expect(byKey['NestedAggregate.inner.innerCount']).toMatchObject({ name: 'inner innerCount' });
        });

        await test.step('utils getAggregateValues recursion flattens a realtime datum to those same keys', async () => {
            const datum = await roundTripDatum(page, 'NestedAggregate', () =>
                setParameterValue('/OpenMCTTest/NestedAggregate', {
                    type: 'AGGREGATE',
                    aggregateValue: {
                        name: ['scalar', 'valuesArray', 'inner'],
                        value: [
                            {
                                type: 'FLOAT',
                                floatValue: 9.5
                            },
                            {
                                type: 'ARRAY',
                                arrayValue: [
                                    {
                                        type: 'FLOAT',
                                        floatValue: 10.5
                                    },
                                    {
                                        type: 'FLOAT',
                                        floatValue: 11.5
                                    },
                                    {
                                        type: 'FLOAT',
                                        floatValue: 12.5
                                    }
                                ]
                            },
                            {
                                type: 'AGGREGATE',
                                aggregateValue: {
                                    name: ['innerScalar', 'innerCount'],
                                    value: [
                                        {
                                            type: 'FLOAT',
                                            floatValue: 13.5
                                        },
                                        {
                                            type: 'SINT32',
                                            sint32Value: 7
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }, yamcsURL),
            (candidate) => candidate['NestedAggregate.scalar'] === 9.5
            );

            // Scalar member, flattened under the dot-joined key.
            expect(datum['NestedAggregate.scalar']).toBe(9.5);
            // Array member survives the aggregate recursion as an extracted JS array.
            expect(datum['NestedAggregate.valuesArray']).toEqual([10.5, 11.5, 12.5]);
            // Nested-aggregate members -- only produced by getAggregateValues
            // recursing into the inner AGGREGATE value.
            expect(datum['NestedAggregate.inner.innerScalar']).toBe(13.5);
            expect(datum['NestedAggregate.inner.innerCount']).toBe(7);
        });
    });

    test('value-type parameters are discoverable in search', async ({ page }) => {
        const searchInput = page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]');

        for (const name of ['BooleanValue', 'FloatArray', 'UnitFloat', 'NestedAggregate']) {
            await searchInput.click();
            await searchInput.fill(name);
            await expect(page.getByLabel('Object Search Result').nth(0)).toContainText(name);
            await searchInput.clear();
        }
    });
});
