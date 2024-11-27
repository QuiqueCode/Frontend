module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
  ],
  ignorePatterns: [
    "dist",
    ".next",
    "node_modules",
    ".eslintrc.cjs",
    "graphql.ts",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "js-dom"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
