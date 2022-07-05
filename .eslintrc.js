module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["google", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
