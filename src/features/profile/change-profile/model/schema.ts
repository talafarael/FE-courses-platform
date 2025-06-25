import { z } from "zod";

export const ProfileSchema = z.object({
  nickname: z.string().min(6),
  full_name: z
    .string()
    .min(6, "ПІБ має містити щонайменше 6 символів")
    .refine((val) => val.trim().split(" ").length >= 2, {
      message: "Введіть ім’я та прізвище",
    }),
  telegram: z
    .union([z.string().min(6), z.literal("")])
    .nullable()
    .optional(),
  instagram: z
    .union([z.string().min(6), z.literal("")])
    .nullable()
    .optional(),
});
