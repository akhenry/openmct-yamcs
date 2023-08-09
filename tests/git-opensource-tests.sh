#!/bin/sh
#
# This script is designed copy the necessary e2e framework and test scripts from the Open MCT
# repository.
#
# Usage:
# ./git-opensource-tests.sh [branch-name]
#
# If no branch name is provided, the script defaults to the 'master' branch.

set -e # Exit immediately if a command exits with a nonzero exit value

SCRIPT_PATH=${0%/*} # Get the relative path to the script dir from the cwd
if [ "$0" != "$SCRIPT_PATH" ] && [ "$SCRIPT_PATH" != "" ]; then 
    cd "$SCRIPT_PATH"
fi

rm -rf e2e/opensource

REPO_URL=https://github.com/nasa/openmct.git
REPO_BRANCH=${1:-master} # Use the first argument as the branch, or default to 'master'
REPO_PATH=e2e
LOCAL_REPO_ROOT="e2e/opensource"
E2E_PATH="e2e/opensource/e2e"

git clone --no-checkout --depth 1 --branch $REPO_BRANCH $REPO_URL "$LOCAL_REPO_ROOT"
cd "$LOCAL_REPO_ROOT"
git config core.sparsecheckout true
echo "/$REPO_PATH/**" > .git/info/sparse-checkout
git read-tree -m -u HEAD

# Debugging information
echo "Listing contents of $E2E_PATH:"
ls -l $E2E_PATH

# Move all required files and folders
mv $E2E_PATH/*Fixtures.js $E2E_PATH/appActions.js $E2E_PATH/* $E2E_PATH/.eslintrc.js ../opensource

# Cleanup
rm -rf $E2E_PATH

