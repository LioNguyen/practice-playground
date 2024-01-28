# REACT HOOK FORM

- [REACT HOOK FORM](#react-hook-form)
  - [Resources](#resources)
  - [What technologies we are using?](#what-technologies-we-are-using)
  - [How to add react-hook-form into form?](#how-to-add-react-hook-form-into-form)
  - [How to validate form with Zod?](#how-to-validate-form-with-zod)

## Resources

- [How to Validate Forms with Zod and React-Hook-Form](https://www.freecodecamp.org/news/react-form-validation-zod-react-hook-form/)

## What technologies we are using?

- [React Hook Form Homepage](https://react-hook-form.com/get-started)
- [Zod](https://zod.dev)
- [Hookform Resolvers](https://www.npmjs.com/package/@hookform/resolvers)

## How to add react-hook-form into form?

```js
// form.tsx
import { useForm, SubmitHandler } from "react-hook-form";

interface InputType {
  firstName: string
}

function MyForm() {
  const { handleSubmit, register, formState: { errors } } = useForm<InputType>()

  const onSubmit: SubmitHandler<InputType> = (value) => {
    console.log(value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <input {...register("firstName", { required: true })} />
      <button type="submit">Send Name</button>
      {errors.firstName?.type === "required" && <p>First name is required</p>}
    </form>
  )
}
```

## How to validate form with Zod?

`yarn add zod`
`yarn add @hookform/resolvers`

```js
// form.tsx
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "./form-validate";

export interface FormInput {
  firstName: string;
  password: string;
  confirmPassword: string;
}

function MyForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm <
  FormInput >
  {
    resolver: zodResolver(UserSchema),
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      <button type="submit">Send Name</button>
      {errors.firstName?.message && <p>{errors.firstName?.message}</p>}
    </form>
  );
}
```

```js
// form-validate.ts

import { z, ZodType } from "zod";
import { FormInput } from "./form";

export const UserSchema: ZodType<FormInput> = z
  .object({
    firstName: z
      .string({ required_error: "First name is required" })
      .min(5, { message: "First name has at least 5 characters" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, { message: "Password is too short" }),
    confirmPassword: z
      .string({ required_error: "Password is required" })
      .min(8, { message: "Password is too short" }),
  })
  .refine(
    ({ password, confirmPassword }) => {
      return password === confirmPassword;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );
```
