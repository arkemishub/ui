# @arkejs/ui

![UI](https://user-images.githubusercontent.com/81776297/233085905-585ea964-cfa5-4672-90e3-d63910b0583f.png)

[![codecov](https://codecov.io/gh/arkemishub/ui/branch/main/graph/badge.svg?token=RXV4ARVWHO)](https://codecov.io/gh/arkemishub/ui)
![Build Status](https://img.shields.io/github/actions/workflow/status/arkemishub/ui/release.yml)
[![npm latest package](https://img.shields.io/npm/v/@arkejs/ui/latest.svg)](https://www.npmjs.com/package/@arkejs/ui)
[![License](https://img.shields.io/badge/license-Apache2.0-blue.svg)](https://github.com/arkemishub/arke-monorepo/blob/master/LICENSE.txt)

### Getting started

Install the package by running:
```shell
pnpm i @arkejs/ui
```

Extend your `tailwind.config.js` with

```js
module.exports = {
    content: [
        // ... others
        './node_modules/@arkejs/ui/dist/**/*.{js,ts,jsx,tsx}',
    ],
    plugins: [require("@arkejs/ui/plugin")],
}
```

### How versioning with changesets

The @arkejs/ui use [changeset](https://github.com/changesets/changesets) to versioning changes.

After your commits run `npx changeset`, it will ask if you want to use a patch/minor/major a summary for your changes.

Completed the process will be created a `.md` file under `.changeset` folder, commit it to create your PR. 