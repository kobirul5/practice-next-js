import { z } from 'zod';

export const usernameValidation = z
    .string()
    .min(2, "Username Must be 2 characters")
    .max(20, "Username Must be no more 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message:"Invalid Email"}),
    password: z.string().min(6,{message: "password Must be 6 characters"})
})