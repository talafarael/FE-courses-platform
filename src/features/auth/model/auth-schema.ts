import { z } from "zod";

export const LoginSchema = z.object({
  password: z.string().min(6),
  login: z.string().min(6),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string().min(6),
  lastName: z.string().min(6),
  login: z.string().min(6),
});
