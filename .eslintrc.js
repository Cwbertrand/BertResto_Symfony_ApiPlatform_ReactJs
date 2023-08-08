module.exports = {
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    rules: {
        "no-console": 0,
        "no-unused-vars": 0,
        'import/no-cycle': 0,
        'react/prop-types': 0,
        'linebreak-style': 0,
        'react/state-in-constructor': 0,
        'import/prefer-default-export': 0,
        'max-len': [2, 250],
        'object-curly-newline': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-one-expression-per-line': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/alt-text': 0,
        'jsx-a11y/no-autofocus': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react/no-array-index-key': 0,
        'no-param-reassign': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 0,
        'no-sparse-arrays': 0,
        'no-array-index-key': 0,
        // Indent with 4 spaces
        // indent: ['error', 4],
        indent: 'off',
        // Indent JSX with 4 spaces
        'react/jsx-indent': 'off',
        // Indent props with 4 spaces
        'react/jsx-indent-props': 'off',
        camelcase: 0,
    }
};
