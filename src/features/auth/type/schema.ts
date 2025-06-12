import { LoginSchema, RegisterSchema } from "../model/auth-schema";
import { z } from "zod";

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
