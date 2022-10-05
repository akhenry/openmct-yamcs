#!/bin/sh
#
# This script can clone/checkout a single folder from git repository 
# - Might be used for checking out micro-services from monolithic git repository
#
# - You can even do checkout into home directory, for example
#   git-sparse-clone.sh git@github.com:readdle/fluix-web.git /home/login login
#

SCRIPT_PATH=${0%/*} # Get the relative path to the script dir from the cwd
if [ "$0" != "$SCRIPT_PATH" ] && [ "$SCRIPT_PATH" != "" ]; then 
    cd "$SCRIPT_PATH"
fi

rm -rf e2e/opensource

# This will cause the shell to exit immediately if a simple command exits with a nonzero exit value.
set -e

REPO_URL=https://github.com/nasa/openmct.git
REPO_PATH=e2e
LOCAL_REPO_ROOT="e2e/opensource"

git clone --no-checkout --depth 1 $REPO_URL "$LOCAL_REPO_ROOT"
cd "$LOCAL_REPO_ROOT"
git config core.sparsecheckout true
echo "/$REPO_PATH/**" > .git/info/sparse-checkout
git read-tree -m -u HEAD

# moving back to /tests/ dir
cd ..

# Move fixtures and appActions
mv opensource/e2e/*Fixtures.js ./opensource
mv opensource/e2e/appActions.js ./opensource
# Move subfolders
mv opensource/e2e/*/ ./opensource
# Move eslint config
mv opensource/e2e/.eslintrc.js ./opensource
# Cleanup
rm -rf opensource/e2e
