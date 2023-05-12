---
sidebar_position: 1
---

# Install

How to install `@arkejs/ui` and its Tailwind CSS plugin?


1. Install `@arkejs/ui`
    ```shell
    npm i @arkejs/ui
    ```
2. Then add arkeUI plugin to your `tailwind.config.js` files:
    ```js title='tailwind.config.js'
     module.exports = {
        content: [
           './node_modules/@arkejs/{ui,table}/dist/**/*.{js,ts,jsx,tsx}',
        ],
        plugins: [require("@arkejs/ui/plugin")],
     }
    ```
