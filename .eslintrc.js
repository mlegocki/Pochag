module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "react-native/react-native": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-use-before-define": [
            "error"
        ],
        "no-unused-vars": [
            "error",
            { "vars": "local" }
        ],
        "react-native/no-unused-styles": "error",
        "react-native/split-platform-components": "error",
        "react-native/no-inline-styles": "error",
        "react-native/no-color-literals": "error",

        "react/jsx-no-undef": "error",
    }
};