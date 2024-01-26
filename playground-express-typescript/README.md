# PLAYGROUND EXPRESS TYPESCRIPT

## What technologies we are using?

- [Config](https://www.npmjs.com/package/config)
- [ExpressJS](https://expressjs.com/en/starter/installing.html)

## How to setup

### Install library

- Init project with yarn and typescript (check playground-typescript folder)
- Install express

```bash
yarn add express
yarn add @types/express -D
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
