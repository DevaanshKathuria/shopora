module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react-refresh"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
  settings: {
    react: { version: "detect" },
  },
  overrides: [
    {
      files: ["**/*.test.{js,jsx}", "src/setupTests.js"],
      globals: {
        afterEach: "readonly",
        beforeEach: "readonly",
        describe: "readonly",
        expect: "readonly",
        global: "readonly",
        it: "readonly",
        vi: "readonly",
      },
    },
  ],
};
