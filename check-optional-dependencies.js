// check-optional-dependencies.js
const fs = require('fs');
const semver = require('semver');
const myPackageJson = require('./package.json');

function checkOptionalDependency(dependency, expectedVersion) {
  if (!fs.existsSync(`node_modules/${dependency}`)) {
    console.error(`The optional dependency ${dependency} is not installed. Please install it before building.`);
    process.exit(1);
  } else {
    const installedPackageJson = require(`./node_modules/${dependency}/package.json`);
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
