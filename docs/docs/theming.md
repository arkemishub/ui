---
sidebar_position: 2
---

# Theming

To customize your app and ArkeUI exported components, you will need to add the following configuration to your `tailwind.config.js` file:

```js title='tailwind.config.js'
module.exports = {
    theme: {
        // your theme here
    },
    arkeUI: {
        theme: {
            colors: {
                primary: '#419c34',
                'primary-contrast': '#ffffff',
                secondary: '#049bdc',
                background: '#ffffff',
            },
            extra: {
                rounded: 4,
                'rounded-sm': 4,
            },
        },
    },
}
```

This configuration will extend the ArkeUI theme and add custom colors and extra configurations, such as rounded corners.

After adding this configuration, you can use the custom colors and extra configurations in your CSS classes and utility classes. For example, you can use the bg-primary class to set the background color to the primary color defined in the ArkeUI theme.


Following the full list of keys that can be configured through your tailwind configuration file:

| Name                           | Default Value  |
|--------------------------------|----------------|
| `theme.primary`                | `#A8FBD7`      |
| `theme['primary-contrast']`    | auto-generated |
| `theme.secondary`              | `#000000`      |
| `theme['secondary-contrast']`  | auto-generated |
| `theme.background`             | `#FFFFFF`      |
| `theme['background-contrast']` | auto-generated |
| `theme.neutral`                | `#c8d6e5`      |
| `theme['neutral-contrast']`    | auto-generated |
| `theme.error`                  | `#e74c3c`      |
| `theme['error-contrast']`      | auto-generated |
| `theme.success`                | `#2ecc71`      |
| `theme['success-contrast']`    | auto-generated |
| `extra.rounded`                | `12`           |
| `extra['rounded-sm']`          | `4`            |

:::note

Contrast colors are auto-generated but you still can configure them manually by changing the configuration.

:::
