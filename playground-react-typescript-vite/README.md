# React + TypeScript + Vite

`yarn create vite` currently cannot be used on mac M1

## What technologies we are using?

- [Eslint](https://eslint.org/docs/latest)
- [Plop](https://plopjs.com)
- [React Router Dom](https://reactrouter.com/en/main/start/tutorial)
- [Styled-components](https://styled-components.com/docs)
- [Vite](https://vitejs.dev/guide/)

## How to setup path aliases w/ React + Vite + TS?

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

## How to setup router?

[Browser Router](https://reactrouter.com/en/main/router-components/browser-router)

```js
// main.tsx

import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>{/* The rest of your app goes here */}</BrowserRouter>
);
```

```js
// App.tsx

function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  );
}
```
