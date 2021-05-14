module.exports = {
  parcer: "@babel/eslint-parser",
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "comma-dangle": "off",
  },
};
