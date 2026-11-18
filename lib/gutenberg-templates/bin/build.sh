#!/bin/bash

echo "💃 Time to build the Gutenberg Templates plugin ZIP file 🕺"

echo "Creating archive... 🎁"

zip -r ast-block-templates.zip \
    inc \
    dist \
    admin-assets \
    ast-block-templates.php \
    ast-block-plugin-loader.php \
    class-ast-block-templates.php \
    version.json \
    changelog.txt 

echo "Done. You've built Gutenberg Templates! 🎉 "