#!/bin/bash

echo "💃 Time to build the Gutenberg Templates plugin ZIP file 🕺"

echo "Creating archive... 🎁"

mkdir -p ast-block-templates
rsync -r ast-block-templates.zip \
    inc \
    dist \
    admin-assets \
    ast-block-templates.php \
    ast-block-plugin-loader.php \
    class-ast-block-templates.php \
    version.json \
    changelog.txt \
    ast-block-templates

echo "Done. You've built Gutenberg Templates! 🎉 "