module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/no-unresolved": "error",
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      alias: {
        map: [
          ["pages", "./src/pages"],
          ["component", "./src/component"],
          ["images", "./src/images"],
          ["templates", "./src/templates"],
          ["styles", "./src/styles"],
        ],
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types`

        // use a glob pattern
        project: "packages/*/tsconfig.json",
      },
    },
  },
};
