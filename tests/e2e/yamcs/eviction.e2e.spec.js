/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2023, United States Government
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
/* global __dirname */

const { test, expect } = require('../opensource/pluginFixtures');
const path = require('path');
const fs = require('fs').promises;
const { ShapeUnboundGrowthAnalysis } = require('@memlab/api');

test.describe.only('Telemetry eviction for @yamcs', () => {
    test.slow();
    const startDelta = 8000;
    const endDelta = 0;
    const waitPeriod = 2000;
    const snapshotsPath = path.join(__dirname, '../test-data/snapshots');
    const telemetryPath = 'taxonomy:spacecraft/taxonomy:~myproject/taxonomy:~myproject~Gyro/taxonomy:~myproject~Gyro.y';
    test.beforeEach(async ({ page }) => {
    // Go to baseURL
        await page.goto(
            `http://localhost:9000/#/browse/${telemetryPath}?tc.mode=local&tc.startDelta=${startDelta}&tc.endDelta=${endDelta}&tc.timeSystem=utc&view=`
            , { waitUntil: 'domcontentloaded' });
    });

    test('gyro plot', async ({ page }) => {
        console.debug(`⏲️  Waiting ${waitPeriod}ms...`);
        await page.waitForTimeout(waitPeriod);
        const stage1SnapshotPath = path.join(snapshotsPath, `/data/cur/s1.heapsnapshot`);
        await captureHeapSnapshot(page, stage1SnapshotPath);

        console.debug(`⏲️  Waiting ${waitPeriod}ms...`);
        await page.waitForTimeout(waitPeriod);
        const stage2SnapshotPath = path.join(snapshotsPath, 'data/cur/s2.heapsnapshot');
        await captureHeapSnapshot(page, stage2SnapshotPath);

        console.debug(`⏲️  Waiting ${waitPeriod}ms...`);
        await page.waitForTimeout(waitPeriod);
        const stage3SnapshotPath = path.join(snapshotsPath, 'data/cur/s3.heapsnapshot');
        await captureHeapSnapshot(page, stage3SnapshotPath);

        const analysis = new ShapeUnboundGrowthAnalysis();
        const heapDir = path.join(snapshotsPath, 'data/cur');
        await analysis.analyzeSnapshotsInDirectory(heapDir);
        const shapes = analysis.getShapesWithUnboundGrowth();
        console.debug(`📈 Shapes with unbound growth:`, shapes);
        const filteredShapes = shapes.filter((shape) => shape.shape.includes('mctLimitState'));
        expect(filteredShapes.length).toEqual(0);
    });

    async function forceGC(page, repeat = 6) {
        const client = await page.context().newCDPSession(page);
        for (let i = 0; i < repeat; i++) {
            await client.send('HeapProfiler.collectGarbage');
            // wait for a while and let GC do the job
            await page.waitForTimeout(200);
        }

        await page.waitForTimeout(1400);
    }

    async function captureHeapSnapshot(page, outputPath) {
        const client = await page.context().newCDPSession(page);

        const dir = path.dirname(outputPath);

        try {
            await fs.mkdir(dir, { recursive: true });
        } catch (error) {
            if (error.code !== 'EEXIST') {
                throw error; // Throw the error if it is not because the directory already exists
            }
        }

        const chunks = [];

        function dataHandler(data) {
            chunks.push(data.chunk);
        }

        try {
            client.on('HeapProfiler.addHeapSnapshotChunk', dataHandler);
            console.debug(`🚮 Running garbage collection...`);
            await forceGC(page);
            await forceGC(page);
            await client.send('HeapProfiler.enable');
            console.debug(`📸 Capturing heap snapshot to ${outputPath}`);
            await client.send('HeapProfiler.takeHeapSnapshot');
            client.removeListener('HeapProfiler.addHeapSnapshotChunk', dataHandler);
            const fullSnapshot = chunks.join('');
            await fs.writeFile(outputPath, fullSnapshot, { encoding: 'UTF-8' });
        } catch (error) {
            console.error('🛑 Error while capturing heap snapshot:', error);
        } finally {
            await client.detach();
        }
    }
});
