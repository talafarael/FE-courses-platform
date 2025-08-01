import { z } from "zod";

export const FormQuestionSchema = z.union([
  z.object({
    type: z.literal("form-question"),
    question_text: z.string().min(4, "Ім’я є обов’язковим"),
    //assessment1: z.string(),
    //answer1: z.string(),
    //assessment2: z.string(),
    //answer2: z.string(),
    //assessment3: z.string().optional(),
    //answer3: z.string().optional(),
    //assessment4: z.string().optional(),
    //answer4: z.string().optional(),
  }),
  z.object({
    type: z.literal("select-question"),
    question_text: z.string().min(4, "Ім’я є обов’язковим"),
    assessment1: z.string(),
  }),
]);
