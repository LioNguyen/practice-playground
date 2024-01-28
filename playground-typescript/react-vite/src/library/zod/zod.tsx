import {
  Button,
  Divider,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { z } from "zod";

const User = z.enum(["guest", "member"]);

const UserInfo = z
  .object({
    type: User,
    name: z.string().min(5, { message: "Name must be at least 5 chars" }),
    email: z.string({ required_error: "This field is required" }).optional(),
    password: z.string().min(5, { message: "Name must be at least 5 chars" }),
    confirmPassword: z
      .string()
      .min(5, { message: "Name must be at least 5 chars" }),
  })
  .refine(
    ({ confirmPassword, password }) => {
      return confirmPassword === password;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

type UserInfoType = z.infer<typeof UserInfo>;
// type UserType = z.infer<typeof User>;

export function Zod() {
  const [user, setUser] = useState<UserInfoType>({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    type: User.enum.guest,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    try {
      const checkResult = UserInfo.safeParse({
        name,
        email,
        password,
        confirmPassword,
        type: User.enum.member,
      });

      if (checkResult.success) {
        console.log(
          "🚀 @log ~ file: zod.tsx:27 ~ handleSubmit ~ checkResult",
          checkResult
        );
        setUser(checkResult.data);
      } else {
        console.log(
          "🚀 @log ~ file: zod.tsx:27 ~ handleSubmit ~ checkResult.error.errors",
          checkResult.error.errors
        );
      }
    } catch (error) {}
  };

  return (
    <Stack>
      <Text variant="heading-2">Zod</Text>
      <Text variant="text">Name: {user?.name || ""}</Text>
      <Text variant="text">Email: {user?.email || ""}</Text>
      <Divider />

      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" name="name" mb="15px" />

        {/* Email Input */}
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" name="email" mb="15px" />

        {/* Password Input */}
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" name="password" mb="15px" />

        {/* Confirm Password Input */}
        <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
        <Input id="confirmPassword" name="confirmPassword" mb="15px" />

        <Button type="submit">Submit</Button>
      </form>
    </Stack>
  );
}
