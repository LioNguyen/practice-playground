import z from "zod";

const userTypes = z.enum(["admin", "user", "guest"]);

type UserTypes = z.infer<typeof userTypes>;

const userSchema = z.object({
  name: z.string(),
  type: userTypes,
});

type User = z.infer<typeof userSchema>;

const user: User = {
  name: "Lio",
  // type: "admin",
  type: userTypes.Enum.admin,
};

console.log(userSchema.parse(user));
