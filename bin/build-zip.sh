#!/usr/bin/env bash

BUILD_VERSION=$(node -pe "require('./package.json').version")
export BUILD_VERSION
BUILD_NAME=$(node -pe "require('./package.json').name")
export BUILD_NAME


echo "BUILD_NAME=$BUILD_NAME"  >> $GITHUB_ENV
echo "BUILD_VERSION=$BUILD_VERSION"  >> $GITHUB_ENV

if [ ! -d "ultimate-addons-for-gutenberg" ]; then
  mkdir "ultimate-addons-for-gutenberg"
fi

# if [ ! -d "artifact" ]; then
#   mkdir "artifact"
# fi

rsync -rc --exclude-from ".distignore" "./" "ultimate-addons-for-gutenberg"

# cd ultimate-addons-for-gutenberg
zip -r "ultimate-addons-for-gutenberg.zip" "./ultimate-addons-for-gutenberg"
# cd -

rm -rf ./ultimate-addons-for-gutenberg

success "Done. Your UAG zip is ready..! 🎉"

