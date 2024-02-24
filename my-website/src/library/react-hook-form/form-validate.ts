import { z, ZodType } from "zod";
import { FormInput } from "./react-hook-form";

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
