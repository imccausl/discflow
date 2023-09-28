module.exports = {
    extends: [
        '@remix-run/eslint-config',
        '@remix-run/eslint-config/node',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    ignorePatterns: ['public/**/*', 'build/**/*'],
    root: true,
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 80,
                tabWidth: 4,
                semi: false,
                trailingComma: 'all' /* Reduces git diff. */,
                singleQuote: true,
                arrowParens: 'always', // Reduces character diff when adding Typescript types.
            },
        ],
    },
}
