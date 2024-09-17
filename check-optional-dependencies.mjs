// check-optional-dependencies.mjs
import fs from 'node:fs/promises';
import semver from 'semver';
import process from 'node:process';

/**
 * Checks if an optional dependency satisfies the expected version.
 *
 * @param {string} dependency - The name of the dependency to check.
 * @param {string} expectedVersion - The semver range the version should satisfy.
 * @returns {Promise<string|null>} A promise that resolves with an error message if the dependency does not satisfy the expected version, or is not installed; otherwise, null.
 */
async function checkOptionalDependency(dependency, expectedVersion) {
    try {
        const packageJsonPath = new URL(`./node_modules/${dependency}/package.json`, import.meta.url).pathname;
        const installedPackageJsonData = await fs.readFile(packageJsonPath, { encoding: 'utf8' });
        const { version: installedVersion } = JSON.parse(installedPackageJsonData);

        if (!semver.satisfies(installedVersion, expectedVersion)) {
            return `The installed version of optional dependency ${dependency} is ${installedVersion}, which does not satisfy the expected version ${expectedVersion}. Please update it before building.`;
        }
    } catch (error) {
        return `The optional dependency ${dependency} is not installed. Please install it before building.\n${error}`;
    }

    return null;
}

/**
 * Checks all optional dependencies listed in the package.json against their expected versions.
 *
 * @returns {Promise<void>} A promise that resolves if all optional dependencies satisfy their expected versions, or rejects with an error message if any do not.
 */
async function checkAllOptionalDependencies() {
    const packageJsonPath = new URL('./package.json', import.meta.url);
    const myPackageJsonData = await fs.readFile(packageJsonPath);
    const { optionalDependencies } = JSON.parse(myPackageJsonData);

    const checks = Object.entries(optionalDependencies).map(([dependency, expectedVersion]) =>
        checkOptionalDependency(dependency, expectedVersion)
    );

    const results = await Promise.all(checks);
    const errors = results.filter(result => result !== null);

    if (errors.length > 0) {
        console.error(errors.join('\n'));
        process.exit(1);
    }
}

checkAllOptionalDependencies().catch(error => {
    console.error(error);
    process.exit(1);
});
