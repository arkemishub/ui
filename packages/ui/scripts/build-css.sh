#!/bin/bash

# Compile PostCSS files and transform them using prejss-cli
build_css() {
    pnpm postcss --config src/components "src/plugin/$1.css" --dir temp
    prejss-cli "temp/$1.css" --format commonjs --out-dir dist
}

# Components
build_css "components"

# Utilities
build_css "utilities"
