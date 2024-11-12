import { z } from "zod";

export type TsignUpSchema = z.infer<typeof signUpSchema>;

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, "Atleast 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password mis-match",
    path: ["confirmPassword"],
  });
