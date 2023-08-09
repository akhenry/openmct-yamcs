#!/bin/sh
#
# This script is designed copy the necessary e2e framework and test scripts from the Open MCT
# repository.
#
# Usage:
# ./tests/git-opensource-tests.sh [branch-name]
#
# If no branch name is provided, the script defaults to the 'master' branch.

set -e # Exit immediately if a command exits with a nonzero exit value

SCRIPT_DIR="$(dirname "$0")" # Get the directory of the script
REPO_DIR="$SCRIPT_DIR/.."   # Get the root directory of the repository

rm -rf "$REPO_DIR/e2e/opensource"

REPO_URL=https://github.com/nasa/openmct.git
REPO_BRANCH=${1:-master} # Use the first argument as the branch, or default to 'master'
REPO_PATH=e2e
LOCAL_REPO_ROOT="$REPO_DIR/e2e/opensource"

git clone --no-checkout --depth 1 --branch $REPO_BRANCH $REPO_URL "$LOCAL_REPO_ROOT"
cd "$LOCAL_REPO_ROOT"
git config core.sparsecheckout true
echo "/$REPO_PATH/**" > .git/info/sparse-checkout
git read-tree -m -u HEAD

# Debugging information
echo "Listing contents of $LOCAL_REPO_ROOT:"
ls -l

# Move all required files and folders
mv "$LOCAL_REPO_ROOT/e2e"/*Fixtures.js "$LOCAL_REPO_ROOT/e2e/appActions.js" "$LOCAL_REPO_ROOT/e2e"/* "$LOCAL_REPO_ROOT/e2e/.eslintrc.js" "$REPO_DIR/opensource"

# Cleanup
rm -rf "$LOCAL_REPO_ROOT/e2e"

