# React + TypeScript + Vite

`yarn create vite` currently cannot be used on mac M1

## What technologies we are using?

- [Eslint](https://eslint.org/docs/latest)
- [Plop](https://plopjs.com)
- [Styled-components](https://styled-components.com/docs)
- [Vite](https://vitejs.dev/guide/)

## How to setup path aliases w/ React + Vite + TS

```bash
yarn add -D @types/node
```

```js
// vite.config.ts

import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
```

`tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```
