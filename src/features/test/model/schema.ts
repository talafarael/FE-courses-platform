import { z } from "zod";

export const FormQuestionSchema = z.union([
  z.object({
    type: z.literal("form-question"),
    question_text: z.string().min(4, "Ім’я є обов’язковим"),
    assessment1: z.number(),
    answer1: z.string(),
    assessment2: z.number(),
    answer2: z.string(),
    assessment3: z.number().optional(),
    answer3: z.string().optional(),
    assessment4: z.number().optional(),
    answer4: z.string().optional(),
  }).refine(
    (data) =>
      (!data.assessment3 && !data.answer3) ||
      (data.assessment3 && data.answer3),
    {
      message: "Якщо заповнено одне поле (3), інше також обов’язкове",
      path: ["assessment3", "answer3"],
    },
  )
    .refine(
      (data) =>
        (!data.assessment4 && !data.answer4) ||
        (data.assessment4 && data.answer4),
      {
        message: "Якщо заповнено одне поле (4), інше також обов’язкове",
        path: ["assessment4", "answer4"],
      },
    ),
  z.object({
    type: z.literal("select-question"),
    question_text: z.string().min(4, "Ім’я є обов’язковим"),
    assessment1: z.string(),
  }),
]);
