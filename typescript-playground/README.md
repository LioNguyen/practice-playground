# TYPESCRIPT PLAYGROUND

## How to install

```bash
yarn init
yarn add typescript ts-node-dev tsconfig-paths --dev
tsc --init
```

```json
// package.json

"scripts": {
    "dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpile-only src/app.ts"
 },
```

```json
// tsconfig.json

{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```
