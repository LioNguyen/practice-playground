# NEXT API?

- [NEXT API?](#next-api)
  - [Basic usage](#basic-usage)
  - [API with Params](#api-with-params)

## Basic usage

```js
// app/api/route.ts

import { NextResponse } from "next/server";

export const GET = () => {
  try {
    return NextResponse.json({ status: "success", data: [] });
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
};
```

## API with Params

```js
// app/api/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";

export const GET = (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string,
    },
  }
) => {
  try {
    const { id } = params;
    return NextResponse.json({ status: "success", id });
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
};
```
