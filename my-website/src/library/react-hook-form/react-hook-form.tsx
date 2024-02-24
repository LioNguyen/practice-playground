import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { SelectOption } from "@/components";
import { UserSchema } from "./form-validate";

enum Gender {
  male = "male",
  female = "female",
  other = "other",
}

export interface FormInput {
  firstName: string;
  gender?: Gender;
  password: string;
  confirmPassword: string;
}

export function ReactHookForm() {
  return (
    <Stack>
      <TraditionalWay />
      <HookFormWay />
    </Stack>
  );
}

function TraditionalWay() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const name = formData.get("name");
    const email = formData.get("email");

    console.log({ name, email });

    // Use entries() to get value list
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  };

  return (
    <>
      <Text variant="heading-2">Traditional Form</Text>
      <form id="form" onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" name="name" />
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" name="email" />
        <Button mt="20px" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}

function HookFormWay() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({ resolver: zodResolver(UserSchema) });

  const genderList = [
    {
      name: "Female",
      value: "female",
    },
    {
      name: "Male",
      value: "male",
    },
    {
      name: "Other",
      value: "other",
    },
  ];

  const onSubmit: SubmitHandler<FormInput> = (value) => {
    console.log(
      "🚀 @log ~ file: react-hook-form.tsx:9 ~ onSubmit ~ value:",
      value
    );
  };

  return (
    <>
      <Text variant="heading-2">React Hook Form</Text>

      <FormControl
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        isInvalid={!!Object.keys(errors).length}
        display="flex"
        flexDirection="column"
        gap="10px"
      >
        <Stack>
          <FormLabel>Your first name</FormLabel>
          <Input type="text" width="500px" {...register("firstName")} />

          {errors.firstName?.message ? (
            <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
          ) : (
            <FormHelperText color="default.text">
              Please input your name
            </FormHelperText>
          )}
        </Stack>

        <Stack>
          <FormLabel>Password</FormLabel>
          <Input type="password" width="500px" {...register("password")} />

          {errors.password?.message && (
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          )}
        </Stack>

        <Stack>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            width="500px"
            {...register("confirmPassword")}
          />

          {errors.confirmPassword?.message && (
            <FormErrorMessage>
              {errors.confirmPassword?.message}
            </FormErrorMessage>
          )}
        </Stack>

        <Stack>
          <FormLabel>Gender</FormLabel>
          <SelectOption
            optionList={genderList}
            placeholder="Select gender"
            register={register("gender")}
          />
          <Button type="submit" mt="15px" width="300px">
            Submit
          </Button>
        </Stack>
      </FormControl>
    </>
  );
}
