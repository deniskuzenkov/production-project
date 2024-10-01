import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
    {files: ["**/*.{js,ts,jsx,tsx}"]},
    {languageOptions: {globals: globals.browser}},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            "react/jsx-indent": [2, 4],
            "react/jsx-filename-extension": [2, {"extensions": [".js", ".jsx", ".tsx"]}],
            "import/prefer-default-export": "off",
            "import/no-default-export": "off",
            "no-unused-vars": "warn",
            "indent": ["error", 4],
            "react/require-default-prop": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-props-no-spreading": "warn",
            "react/function-component-definition": "off",
            "import/extensions": "off",
            "import/no-extraneous-dependencies": "off",
            "no-underscore-dangle": "off",
        }
    }
];