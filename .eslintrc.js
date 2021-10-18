module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended", "prettier"],
  plugins: [],
  // add your custom rules here
  rules: {
    "vue/component-definition-name-casing": ["error", "kebab-case"],
    "import/order": "off", // does not recognize '~/' aliases as internal modules
    "unicorn/error-message": "off",
    "no-shadow": "warn",
  },
};
