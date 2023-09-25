module.exports = {
  "extends": [
    "next/core-web-vitals",
    "@tophat/eslint-config/base",
    "@tophat/eslint-config/web"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
    tsconfigRootDir: __dirname,
  }
}
