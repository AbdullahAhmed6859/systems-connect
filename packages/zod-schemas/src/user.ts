import { z } from "zod";
import { id, patchRefine } from "./common";

const createNameSchema = (prefix: string) =>
  z
    .string()
    .min(1, `${prefix}name is Required`)
    .max(50, `${prefix}name can be a maximum of 50 characters`);

const firstName = createNameSchema("first ");
const lastName = createNameSchema("last ");
const email = z.string().email();

const userCommon = {
  email,
  firstName,
  lastName,
  picture: z.string().optional(),
};

export const googleDataSchema = z.object({
  googleId: z.string(),
  ...userCommon,
});

export const tokenDataSchema = z.object({
  id,
  ...userCommon,
});

export type TokenData = z.infer<typeof tokenDataSchema>;

export const userId = id;
export const userIdParams = z.object({ userId });
