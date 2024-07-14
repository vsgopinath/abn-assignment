import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:playwright/playwright-test",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },
    files: [['./e2e/*.ts']],
    languageOptions: {
        globals: {
            ...globals.commonjs,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.json",
        },
    },

    rules: {
        indent: "off",
        "@typescript-eslint/indent": "off",
        "linebreak-style": "off",
        quotes: "off",
        "no-trailing-spaces": "off",
        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/quotes": "off",
        "no-underscore-dangle": "off",
        semi: ["error", "always"],
        "object-shorthand": "off",
        "no-console": "off",
        "class-methods-use-this": "off",
        "no-plusplus": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "no-await-in-loop": "off",
        "function-paren-newline": "off",
        "function-call-argument-newline": "off",
        "import/no-extraneous-dependencies": "off",

        "max-len": ["warn", {
            code: 120,
            ignoreComments: true,
            ignoreTrailingComments: true,
            ignoreTemplateLiterals: true,
            ignoreUrls: true,
        }],
    },
}];