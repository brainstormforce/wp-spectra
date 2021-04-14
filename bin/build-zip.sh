#!/usr/bin/env bash

# Exit if any command fails.
set -e

# Enable nicer messaging for build status.
BLUE_BOLD='\033[1;34m';
GREEN_BOLD='\033[1;32m';
RED_BOLD='\033[1;31m';
YELLOW_BOLD='\033[1;33m';
COLOR_RESET='\033[0m';
error () {
	echo -e "\n${RED_BOLD}$1${COLOR_RESET}\n"
}
status () {
	echo -e "\n${BLUE_BOLD}$1${COLOR_RESET}\n"
}
success () {
	echo -e "\n${GREEN_BOLD}$1${COLOR_RESET}\n"
}
warning () {
	echo -e "\n${YELLOW_BOLD}$1${COLOR_RESET}\n"
}


status "💃 Time to build the plugin ZIP file 🕺"

BUILD_VERSION=$(node -pe "require('./package.json').version")
export BUILD_VERSION
BUILD_NAME=$(node -pe "require('./package.json').name")
export BUILD_NAME


echo "BUILD_NAME=$BUILD_NAME"  >> $GITHUB_ENV
echo "BUILD_VERSION=$BUILD_VERSION"  >> $GITHUB_ENV

# if [ ! -d "ultimate-addons-for-gutenberg" ]; then
#   mkdir "ultimate-addons-for-gutenberg"
# fi

if [ ! -d "artifact" ]; then
  mkdir "artifact"
fi

rsync -rc --exclude-from ".distignore" "./" "artifact/ultimate-addons-for-gutenberg"

cd artifact
zip -r ultimate-addons-for-gutenberg.zip "./ultimate-addons-for-gutenberg"
# cd -

rm -rf ultimate-addons-for-gutenberg

success "Done. Your UAG zip is ready..! 🎉"

