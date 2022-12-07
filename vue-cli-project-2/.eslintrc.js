module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "vue/setup-compiler-macros": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module",
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "no-unused-vars": "off",
        "@typescript-eslint/no-var-requires":0
    }
};
