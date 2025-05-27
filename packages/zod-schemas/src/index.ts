import { z } from "zod";

const id = z.preprocess((x: unknown) => Number(x), z.number());

const patchRefine = (data: object) =>
  Object.keys(data).some((key) => data[key as keyof typeof data] !== undefined);

const createNameSchema = (prefix: string) =>
  z
    .string()
    .min(1, `${prefix}name is Required`)
    .max(50, `${prefix}name can be a maximum of 50 characters`);

const firstName = createNameSchema("first ");
const lastName = createNameSchema("last ");
const email = z.string().email();

export const signupSchema = z.object({
  firstName,
  lastName,
  email,
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password cannot be more than 32 characters"),
});

export const LoginSchema = z.object({
  email,
  password: z.string().min(1, "Password is required"),
});

export const patchUserSchema = z
  .object({ firstName, lastName })
  .partial()
  .refine(patchRefine, { message: "Atleast one field must be present" });

export const userId = id;
export const userIdParams = z.object({ userId });
