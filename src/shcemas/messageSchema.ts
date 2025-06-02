import { z } from "zod";

export const massageSchema = z.object({
    content: z
    .string()
     .min(10, "Username Must be 2 characters")
    .max(300, "Username Must be no more 300 characters")
})