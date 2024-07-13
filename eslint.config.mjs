import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: globals.browser
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      "@eslint/js": pluginJs,
      "eslint-plugin-react": pluginReactConfig
    },
    extends: [
      "plugin:@eslint/js/recommended",
      "plugin:react/recommended"
    ],
    rules: {
      // Adjust or add rules as needed
    }
  }
];
