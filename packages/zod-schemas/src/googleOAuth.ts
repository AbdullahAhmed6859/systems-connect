import { z } from "zod";

export const callbackQuerySchema = z.object({
  code: z.string().min(1, "Please provide a code"),
  state: z.string().optional(),
});
