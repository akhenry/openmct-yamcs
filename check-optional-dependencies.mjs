// check-optional-dependencies.mjs
import fs from 'node:fs/promises';
import semver from 'semver';
import process from 'node:process';

async function checkOptionalDependency(dependency, expectedVersion) {
    try {
        const packageJsonPath = new URL(`./node_modules/${dependency}/package.json`, import.meta.url);
        const installedPackageJsonData = await fs.readFile(packageJsonPath);
        const { version: installedVersion } = JSON.parse(installedPackageJsonData);

        if (!semver.satisfies(installedVersion, expectedVersion)) {
            return `The installed version of optional dependency ${dependency} is ${installedVersion}, which does not satisfy the expected version ${expectedVersion}. Please update it before building.`;
        }
    } catch (error) {
        return `The optional dependency ${dependency} is not installed. Please install it before building.\n${error}`;
    }

    return null;
}

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
