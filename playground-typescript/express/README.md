# PLAYGROUND EXPRESS TYPESCRIPT

- [PLAYGROUND EXPRESS TYPESCRIPT](#playground-express-typescript)
  - [What technologies we are using?](#what-technologies-we-are-using)
  - [What is NodeJS and ExpressJS?](#what-is-nodejs-and-expressjs)
  - [How to setup](#how-to-setup)
    - [Install library](#install-library)
    - [Setup middleware](#setup-middleware)
    - [Setup env](#setup-env)
    - [Setup logger](#setup-logger)
  - [API routes](#api-routes)
  - [How to setup database (Prisma)?](#how-to-setup-database-prisma)
    - [How to init?](#how-to-init)
    - [How to create model and update database?](#how-to-create-model-and-update-database)

## What technologies we are using?

- [Cookie Parser](https://www.npmjs.com/package/cookie-parser)
- [Config](https://www.npmjs.com/package/config)
- [ExpressJS](https://expressjs.com/en/starter/installing.html)
- [Express Async Handler](https://www.npmjs.com/package/express-async-handler)
- [Pino](https://getpino.io/#/)
- [Prisma](https://www.prisma.io)

## What is NodeJS and ExpressJS?

- `Node.js` is an open-source, cross-platform `JavaScript runtime environment` that allows developers to execute JavaScript code `server-side`. It is built on the `V8 JavaScript runtime engine`, the `same engine used by the Google Chrome` browser to execute JavaScript code.
- `Express.js`, commonly referred to as Express, is a `web framework for Node.js`. It provides a convenient way to `build web applications and APIs` (Application Programming Interfaces) using JavaScript

## How to setup

### Install library

- Init project with yarn and typescript (check playground-typescript folder)
- Install express
- Install necessary library

```bash
yarn add express@5
yarn add -D @types/express
yarn add -D @types/node nodemon ts-node tsconfig-paths typescript

yarn add cookie-parser config dotenv express-async-handler pino
yarn add -D @types/config @types/cookie-parser pino-pretty
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

### Setup logger

```js
// config/default.ts

export default {
  port: 8000,
  logLevel: "info",
};
```

```js
// src/utils/logger/ts

import config from "config";
import dayjs from "dayjs";
import logger from "pino";

const level = config.get < string > "logLevel";

const log = logger({
  transport: {
    target: "pino-pretty",
  },
  level,
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
```

## API routes

- [NEXT API README](../next//app/api/README.md)

## How to setup database (Prisma)?

- [Prisma with Mongodb](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-typescript-mongodb)

### How to init?

```bash
yarn add -D prisma
yarn add @prisma/client

npx prisma init
```

```js
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

```
// .env

DATABASE_URL="mongodb+srv://test:test@cluster0.ns1yp.mongodb.net/myFirstDatabase"
```

### How to create model and update database?

- After changing `schema.prisma`, run `npx prisma db push` or `npx prisma generate`
- `@map("_id")` will map MongodbId with id of model
- `@db.ObjectId` is a data type of db

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Post {
  id       String @id @default(auto()) @map("_id") @db.ObjectId
  title    String
  body     String
  authorId String @db.ObjectId
  author   Author @relation(fields: [authorId], references: [id])
}

model Author {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  name  String
  posts Post[]
}
```
