---
sidebar_position: 3
---

# Usage

Arke UI provides three levels of customization.

### 1. Theming

Configure your theme in your `tailwind.config.js` as described in [theming](./theming).

### 2. Overrides

You can override classes exported by Arke UI. Overridable classes are defined for every component, give a look at *CSS* section of each component in the docs for more info.

Here is an example of how easily components are overridable

```css title='css/global.css'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    .btn {
        @apply px-4 py-8
    }
}
```

### 3. Inline `className`

Most of the components exported by Arke UI accept `className` as prop in order to provide an extra level of granularity for customizing the look of them.
