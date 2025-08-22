import pluginAstro from "eslint-plugin-astro";
import pluginOxlint from "eslint-plugin-oxlint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // We use eslint only for the Astro plugin since oxlint handles the rest.
  ...pluginAstro.configs.recommended,
  ...pluginAstro.configs["jsx-a11y-recommended"],
  {
    rules: {
      "astro/no-set-html-directive": "error",
      "astro/no-set-text-directive": "error",
      "astro/no-unused-css-selector": "error",
      "astro/prefer-class-list-directive": "error",
      "astro/prefer-object-class-list": "error",
      "astro/prefer-split-class-list": "error",
    },
  },
  globalIgnores([".astro/"]),

  // Disable all eslint rules that are already supported by oxlint.
  ...pluginOxlint.configs["flat/all"],
]);
