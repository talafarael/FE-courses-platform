import { z } from "zod";

export const FormLectureSectionSchema = z.object({
  task: z.string(),
  text: z.string(),
  rounded_image: z.string().optional(),
  images: z.record(z.string()).optional(),
  files: z.record(z.string()).optional(),
});
