#!/bin/bash

# Compile PostCSS files
compile_postcss() {
    pnpm postcss --config "$1" "$2" --base src --dir temp
    cat temp/"$3"/**/*.css > "temp/$3.css"
}

# Remove comments from CSS files
remove_comments() {
    sh scripts/remove-comments.sh "$1"
}

# Transform CSS files using prejss-cli
transform_css() {
    prejss-cli "$1" --format commonjs --out-dir dist
}

# Components
components_config="src/components"
components_src="src/components/**/*.css"
components_out="components"

compile_postcss "$components_config" "$components_src" "$components_out"
transform_css "temp/$components_out.css"

# Utilities
utilities_config="src/utilities"
utilities_src="src/utilities/*.css"
utilities_out="utilities"

compile_postcss "$utilities_config" "$utilities_src" "$utilities_out"
transform_css "temp/$utilities_out.css"

# Cleanup
rm -rf temp
