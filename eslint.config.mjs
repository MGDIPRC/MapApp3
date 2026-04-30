import vue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import vueParser from "vue-eslint-parser";

export default [
  // Ignore build output
  {
    ignores: ["dist/**", "build/**", "coverage/**", "node_modules/**"],
  },

  // Lint JS + Vue
  {
  files: ["src/**/*.{js,jsx,vue}"],
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      extraFileExtensions: [".vue"],
    },
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  plugins: { vue, prettier },
  rules: {
    ...vue.configs["flat/recommended"].rules,
    "prettier/prettier": "error",
  },
}

];
