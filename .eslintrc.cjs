module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:eslint-comments/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "lint-staged.config.cjs"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "react-refresh", "prettier"],
  rules: {
    // Typescript rules
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",

    // Eslint rules
    "no-empty": "off",
    "prefer-const": "warn",
    "no-extra-semi": "off",
    "no-extra-boolean-cast": "off",

    // Eslint-comments rules
    "eslint-comments/no-unused-disable": "warn",

    // React rules
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // Prettier rules
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
  },
}
