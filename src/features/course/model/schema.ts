import { z } from "zod";

export const FormCourseSchema = z.object({
  name: z.string().min(6),
  description: z.string().min(6),
  price_in_pln: z.number(),
  is_hidden: z.boolean(),
});
