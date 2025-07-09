import { z } from "zod";

export const FormQuestionSchema = z.object({
  type: z.enum(["form-question", "select-question"]),
  question_text: z.string().min(4, "Ім’я є обов’язковим"),
});
