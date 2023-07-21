/**
 * Copyright 2023 Arkemis S.r.l.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @ts-nocheck
const Color = require("color");
const plugin = require("tailwindcss/plugin");
const components = require("../../dist/components.js");
const utilities = require("../../dist/utilities.js");
const theme = require("../theme/index.js");
const defaultTheme = require("../theme/defaultTheme.js");

const accents = [
  "100",
  "200",
  "300",
  "400",
  "DEFAULT",
  "600",
  "700",
  "800",
  "900",
];

const getRGBColor = (color) => {
  const { r, g, b } = Color(color).rgb().object();
  return `${r} ${g} ${b}`;
};

const getAccentColor = (color, accent) => {
  return Color(color)
    .lightness(100 - accent / 10)
    .hex();
};

const getColor = (customTheme, key, accent) => {
  const color = customTheme?.colors?.[key] ?? defaultTheme.colors[key];

  // If the color is a string, return it if accent is DEFAULT otherwise return getAccentColor
  if (typeof color === "string") {
    return accent === "DEFAULT" ? color : getAccentColor(color, accent);
  }

  // If the color is an object, return the color if it exists, otherwise return getAccentColor
  if (!color.DEFAULT) {
    throw new Error(
      `Color ${key} is missing a DEFAULT value. Please add it to your theme.`
    );
  }

  return color[accent] ?? getAccentColor(color.DEFAULT, accent);
};

const getContrastColor = (customTheme, key, accent) => {
  return customTheme?.colors?.[`${key}-contrast`] ??
    Color(getColor(customTheme, key, accent)).isDark()
    ? "#ffffff"
    : "#000000";
};

const getKey = (key, accent, contrast) => {
  return `--${key}${accent !== "DEFAULT" ? `-${accent}` : ""}${
    contrast ? "-contrast" : ""
  }`;
};

const generateBase = (customTheme) => ({
  ...Object.keys(defaultTheme.colors).reduce((acc, key) => {
    accents.forEach((accent) => {
      acc[getKey(key, accent)] = getRGBColor(
        getColor(customTheme, key, accent)
      );
      acc[getKey(key, accent, true)] = getRGBColor(
        getContrastColor(customTheme, key, accent)
      );
    });
    return acc;
  }, {}),
  ...Object.keys(defaultTheme.extra).reduce((acc, key) => {
    acc[`--${key}`] = customTheme?.extra?.[key] ?? defaultTheme.extra[key];
    return acc;
  }, {}),
});

const arkeUiPlugin = plugin(
  ({ config, addBase, addComponents }) => {
    console.log();
    console.log("\x1b[96m\x1b[40m Arke UI ✨ \x1b[0m");

    try {
      addBase({
        [":root"]: generateBase(config("arkeUI.theme")),
      });
    } catch (e) {
      console.error(`\x1b[31m @arkejs/ui: ${e}`);
    }

    addComponents(utilities);
    addComponents(components);
  },
  {
    theme: {
      extend: theme,
    },
  }
);

module.exports = arkeUiPlugin;
