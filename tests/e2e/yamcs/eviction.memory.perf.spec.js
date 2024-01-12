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

import { test, expect } from '../opensource/pluginFixtures';
import { join, dirname } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import memlab from '@memlab/api';

test.describe.only('Telemetry eviction for @yamcs', () => {
    test.slow();
    const MEMORY_THRESHOLD = 500 * 1024; // 500 KB in bytes
    const { ShapeUnboundGrowthAnalysis } = memlab;
    const startDelta = 8000;
    const endDelta = 0;
    const initialWaitPeriod = 2000; // 2 seconds
    // wait for 30 seconds
    const subsequentWaitPeriod = 30000;
    const currentDirectory = dirname(fileURLToPath(import.meta.url));
    const snapshotsPath = join(currentDirectory, '../test-data/snapshots');

    test('gyro plot', async ({ page }) => {
        const telemetryPath = 'taxonomy:spacecraft/taxonomy:~myproject/taxonomy:~myproject~Gyro/taxonomy:~myproject~Gyro.y';
        await checkMemory(page, telemetryPath);
    });

    async function checkMemory(page, telemetryPath) {
        await page.goto(
            `http://localhost:9000/#/browse/${telemetryPath}?tc.mode=local&tc.startDelta=${startDelta}&tc.endDelta=${endDelta}&tc.timeSystem=utc&view=`
            , { waitUntil: 'domcontentloaded' });

        console.debug(`⏲️  Initially Waiting ${initialWaitPeriod}ms...`);
        await page.waitForTimeout(initialWaitPeriod);
        const stage1SnapshotPath = join(snapshotsPath, `/data/cur/s1.heapsnapshot`);
        await captureHeapSnapshot(page, stage1SnapshotPath);

        console.debug(`⏲️  First Wait ${subsequentWaitPeriod}ms...`);
        await page.waitForTimeout(subsequentWaitPeriod);
        const stage2SnapshotPath = join(snapshotsPath, 'data/cur/s2.heapsnapshot');
        await captureHeapSnapshot(page, stage2SnapshotPath);

        console.debug(`⏲️  Second wait ${subsequentWaitPeriod}ms...`);
        await page.waitForTimeout(subsequentWaitPeriod);
        const stage3SnapshotPath = join(snapshotsPath, 'data/cur/s3.heapsnapshot');
        await captureHeapSnapshot(page, stage3SnapshotPath);

        console.debug(`⏲️  Third wait ${subsequentWaitPeriod}ms...`);
        await page.waitForTimeout(subsequentWaitPeriod);
        const stage4SnapshotPath = join(snapshotsPath, 'data/cur/s4.heapsnapshot');
        await captureHeapSnapshot(page, stage4SnapshotPath);

        console.debug(`⏲️  Fourth wait ${subsequentWaitPeriod}ms...`);
        await page.waitForTimeout(subsequentWaitPeriod);
        const stage5SnapshotPath = join(snapshotsPath, 'data/cur/s5.heapsnapshot');
        await captureHeapSnapshot(page, stage5SnapshotPath);

        console.debug(`⏲️  Fifth wait ${subsequentWaitPeriod}ms...`);
        await page.waitForTimeout(subsequentWaitPeriod);
        const stage6SnapshotPath = join(snapshotsPath, 'data/cur/s6.heapsnapshot');
        await captureHeapSnapshot(page, stage6SnapshotPath);

        const analysis = new ShapeUnboundGrowthAnalysis();
        const heapDir = join(snapshotsPath, 'data/cur');
        await analysis.analyzeSnapshotsInDirectory(heapDir);
        const shapes = analysis.getShapesWithUnboundGrowth();
        // Filter shapes with an increasing `sizes` property after the second stage
        const shapesMeetingThreshold = shapes.filter((shape) => {
            return shape.sizes.every((size, index, self) => {
                if (index < 2) {
                    return true;
                }

                return size - self[index - 1] > MEMORY_THRESHOLD;
            });
        });
        if (shapesMeetingThreshold.length > 0) {
            console.debug(`📈 Shapes with unbound growth above threshold of ${MEMORY_THRESHOLD} bytes:`, shapesMeetingThreshold);
        }

        expect(shapesMeetingThreshold.length).toEqual(0);
    }

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

        const dir = dirname(outputPath);

        try {
            await mkdir(dir, { recursive: true });
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
            await writeFile(outputPath, fullSnapshot, { encoding: 'UTF-8' });
        } catch (error) {
            console.error('🛑 Error while capturing heap snapshot:', error);
        } finally {
            await client.detach();
        }
    }
});
