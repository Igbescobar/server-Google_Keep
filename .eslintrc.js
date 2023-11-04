 module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:storybook/recommended",
        "prettier"
    ],
    
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "project": ["./**/tsconfig.json"],
        "sourceType": "module"
    },
    "plugins": ["typescript"],
    "ignorePatterns": [
        "**/*.eslintrc.js"
    ],
    "rules": {
        "indent": [2, "tab"],
        "no-tabs": 0,
        "semi": ["error", "always"],
        "no-multi-spaces": "error",
        "quotes": [2, "single"],
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                "checksVoidReturn": false
            }
        ],
        "@typescript-eslint/space-before-function-paren": "off"
    }
}
