# Publishing

This package is published to [npm](https://www.npmjs.com/package/@open-runtimes/types).

## Setup

1. Create an npm account at https://www.npmjs.com
2. Create the `@open-runtimes` organization if it doesn't exist
3. Generate an access token at https://www.npmjs.com/settings/~/tokens
   - Select "Automation" token type
4. Add the token as a GitHub Actions secret:
   - Secret name: `NPM_TOKEN`
   - Secret value: the generated token

## Publishing

Publishing is automated via GitHub Actions. To publish a new version:

1. Create a new GitHub release with a tag matching the desired version (e.g., `0.1.0`)
2. The workflow will automatically update `package.json` and publish to npm

## Manual Publishing

```bash
npm install
npm run build
npm publish --access public
```
