// check-optional-dependencies.js
import fs from 'node:fs';
import semver from 'semver';
const myPackageJson = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url)));


function checkOptionalDependency(dependency, expectedVersion) {
  if (!fs.existsSync(`node_modules/${dependency}`)) {
    console.error(`The optional dependency ${dependency} is not installed. Please install it before building.`);
    process.exit(1);
  } else {
    const installedPackageJson = JSON.parse(fs.readFileSync(new URL(`./node_modules/${dependency}/package.json`, import.meta.url)));
    const installedVersion = installedPackageJson.version;
    if (!semver.satisfies(installedVersion, expectedVersion)) {
      console.error(`The installed version of optional dependency ${dependency} is ${installedVersion}, which does not satisfy the expected version ${expectedVersion}. Please update it before building.`);
      process.exit(1);
    }
  }
}

const optionalDependencies = myPackageJson.optionalDependencies;
for (const [dependency, expectedVersion] of Object.entries(optionalDependencies)) {
  checkOptionalDependency(dependency, expectedVersion);
}
