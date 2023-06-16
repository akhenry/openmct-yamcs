// check-peer-dependencies.js
const fs = require('fs');
const semver = require('semver');
const myPackageJson = require('./package.json');

function checkPeerDependency(dependency, expectedVersion) {
  if (!fs.existsSync(`node_modules/${dependency}`)) {
    console.error(`The peer dependency ${dependency} is not installed. Please install it before building.`);
    process.exit(1);
  } else {
    const installedPackageJson = require(`./node_modules/${dependency}/package.json`);
    const installedVersion = installedPackageJson.version;
    if (!semver.satisfies(installedVersion, expectedVersion)) {
      console.error(`The installed version of peer dependency ${dependency} is ${installedVersion}, which does not satisfy the expected version ${expectedVersion}. Please update it before building.`);
      process.exit(1);
    }
  }
}

const peerDependencies = myPackageJson.peerDependencies;
for (const [dependency, expectedVersion] of Object.entries(peerDependencies)) {
  checkPeerDependency(dependency, expectedVersion);
}