# React + TypeScript + Vite

`yarn create vite` currently cannot be used on mac M1

- [React + TypeScript + Vite](#react--typescript--vite)
  - [What technologies we are using?](#what-technologies-we-are-using)
  - [How to setup path aliases w/ React + Vite + TS?](#how-to-setup-path-aliases-w-react--vite--ts)
  - [React Router Dom - How to setup router?](#react-router-dom---how-to-setup-router)
    - [How to get \& set searchParams using react-router-dom?](#how-to-get--set-searchparams-using-react-router-dom)
  - [Plop - How to automate creating file?](#plop---how-to-automate-creating-file)
    - [Resources](#resources)
    - [How to init](#how-to-init)
    - [How to use](#how-to-use)
  - [How to fix 404 not found when reloading on sub-route in react vite (vercel)?](#how-to-fix-404-not-found-when-reloading-on-sub-route-in-react-vite-vercel)

## What technologies we are using?

- [Vite](https://vitejs.dev/guide/)
- [React Router Dom](https://reactrouter.com/en/main/start/tutorial)
- [Styled-components](https://styled-components.com/docs)
- [Chakra UI README](./src//library/chakra-ui/README.md)
- [Eslint](https://eslint.org/docs/latest)
- [Plop](https://plopjs.com)

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

## React Router Dom - How to setup router?

[Browser Router](https://reactrouter.com/en/main/router-components/browser-router)

```js
// main.tsx

import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

```js
// App.tsx

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
```

### How to get & set searchParams using react-router-dom?

- [Compare with new URLSearchParams](../../playground-javascript/web-api//bom-api/README.md)
- `new URLSearchParams(location.search)` needs `location.search` to get search params
- `useSearchParams()` directly return `search params value` and `method to set new value`

```js
import { useSearchParams } from "react-router-dom";

const [searchParams, setSearchParams] = useSearchParams();

const getQuestion = () => {
  let number = getRandomNumber(0, data.length - 1);

  // Use this method to set value for search params
  setSearchParams({ q: `${number}` });

  // This method does not work
  searchParams.set("q", `${number}`);
};

useEffect(() => {
  // Use this method to get value from search params
  const qNumber = searchParams.get("q");

  // Your code
}, [searchParams]);
```

## Plop - How to automate creating file?

### Resources

- [Speed up Your Development Workflow With Plop JS](https://youtu.be/r_fSz2KudsE?si=TrylwAaLxXeoid2m)
- [Tutorial Github Repo](https://github.com/TomDoesTech/auth-api-tutorial)
- [Plop Homepage](https://plopjs.com)

### How to init

```bash
yarn add plop -D
```

`package.json`

```json
{
  "scripts": {
    "gen": "plop"
  }
}
```

`settings.json`

```json
{
  "[handlebars]": { "editor.formatOnSave": false }
}
```

### How to use

- Create template files in templates folder
- Use `{{variable}}` to add variable

```js
// plopfile.mjs

export default function (
  /** @type {import("plop").NodePlopAPI} */
  plop
) {
  // create generators
  plop.setGenerator(<name>,{
    description: "",

    // array of inquirer prompts
    prompts: [
      {
        type: "",
        name: "",
        message: "",
      }
    ],

    // array of actions
    actions: [
      {
        type: "",
        path: "",
        templateFile: "",
        // template: ""
      }
    ],
  });

  plop.setHelper(<name>, function(){})
}
```

## How to fix 404 not found when reloading on sub-route in react vite (vercel)?

- vercel.json

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
