module.exports = {
  "extends": [
    "@tophat/eslint-config/base",
    "@tophat/eslint-config/web",
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
    tsconfigRootDir: __dirname,
  }
}
