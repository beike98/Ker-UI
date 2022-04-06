module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "vue/setup-compiler-macros": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "parser": "vue-eslint-parser",
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": "off"
    }
}
