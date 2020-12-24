#!/bin/bash

echo "💃 Time to build the Gutenberg Templates plugin ZIP file 🕺"

echo "Creating archive... 🎁"

zip -r gutenberg-templates.zip \
    classes \
    dist \
    gutenberg-templates.php \
    package.json

echo "Done. You've built Gutenberg Templates! 🎉 "