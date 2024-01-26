# PLAYGROUND EXPRESS TYPESCRIPT

## What technologies we are using?

- [Cookie Parser](https://www.npmjs.com/package/cookie-parser)
- [Config](https://www.npmjs.com/package/config)
- [ExpressJS](https://expressjs.com/en/starter/installing.html)
- [Express Async Handler](https://www.npmjs.com/package/express-async-handler)

## How to setup

### Install library

- Init project with yarn and typescript (check playground-typescript folder)
- Install express
- Install necessary library

```bash
yarn add express@5
yarn add -D @types/express
yarn add -D @types/node nodemon ts-node tsconfig-paths typescript

yarn add config cookie-parser dotenv express-async-handler
yarn add -D @types/config @types/cookie-parser
```

### Setup middleware

```js
// src/app.ts

import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

### Setup env

```js
// config/default.ts

export default {
  port: 8000,
};
```

```js
// src/app.ts

require("dotenv").config();
import config from "config";

const PORT = config.get("port") || 8000;
```
