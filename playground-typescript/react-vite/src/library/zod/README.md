# ZOD

- [ZOD](#zod)
  - [Resources](#resources)
  - [What is Zod?](#what-is-zod)
    - [How to create Zod?](#how-to-create-zod)
    - [How to create a type and check data from zod object?](#how-to-create-a-type-and-check-data-from-zod-object)
    - [How to get errors from zod?](#how-to-get-errors-from-zod)
    - [How to use enum with zod?](#how-to-use-enum-with-zod)
  - [Validate vs Parse](#validate-vs-parse)
  - [TypeScript vs Zod](#typescript-vs-zod)
  - [Use cases](#use-cases)
  - [Important parts](#important-parts)
    - [Basics](#basics)
    - [Parsing](#parsing)
    - [Refine](#refine)
    - [Enums](#enums)

## Resources

- [Learn Just Enough Zod to be Productive](https://youtu.be/1MT3mOsVxAo?si=gXXFISS4nPx7CaRX)
- [Tutorial Github Repo](https://github.com/TomDoesTech/just-enough-zod-to-be-productive)
- [Zod Homepage](https://zod.dev)

## What is Zod?

- Parse data with a pre-defined schema
- TypeScript-first

### How to create Zod?

```js
import z from "zod";

const schema = z
  .object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    age: z.number(),
    isAlive: z.boolean(),
    hobbies: z.array(z.string()),
    address: z.object({
      street: z.string(),
    }),
    password: z.string({}).min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string({}),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );
// .strict()
// .passthrough();
```

### How to create a type and check data from zod object?

```js
type CreateUserInput = z.infer<typeof schema>;

function createUser(props: CreateUserInput) {
  const result = schema.safeParse(props);

  return result; // {success: true/false, data: {}, error: {} }
}
```

### How to get errors from zod?

```js
if (checkResult.success) {
  setUser(checkResult.data);
} else {
  setError(checkResult.error.errors);
}
```

### How to use enum with zod?

```js
import z from "zod";

const userTypes = z.enum(["admin", "user", "guest"]);

const userSchema = z.object({
  name: z.string(),
  type: userTypes,
});

// type UserTypes = z.infer<typeof userTypes>;
type User = z.infer<typeof userSchema>;

const user: User = {
  name: "Lio",
  type: userTypes.Enum.admin,
};

var result = userSchema.parse(user);
```

## Validate vs Parse

- Validate: check if data is valid
- Parse: check if data is valid and return the parsed data

## TypeScript vs Zod

- TypeScript: Static type checking
- <mark>Zod: Parse at runtime</mark>

## Use cases

- Parse form data before sending to the server
- Parse data before sending back out to the client
- Parse data at the API boundary before sending to the database
- Parse data in functions around your application
- Parse data from an external data source

## Important parts

### Basics

- Defining a schema
- Parsing data with a schema
- Infer TypeScript types from a schema
- Custom error messages
- Different data types (object, array, string, number, boolean, etc.)

### Parsing

- parse
- safeParse
- strict
- passThrough

### Refine

- Validate one field against another
- parseAsync

### Enums

- Zod enums
- Native enums
