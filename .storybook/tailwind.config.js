const { join } = require("path")

module.exports = {
    content: [join(__dirname,"../src/components/**/*.{js,jsx,ts,tsx}")],
    plugins: [require(join(__dirname, '../src/plugin/index.ts'))],
};
