import { z } from "zod";

export const SelectAnswerSchema = z.object({
  question_id: z.string(),
  answer_text: z.string(),
  answer_images: z.array(z.string()),
  order: z.number(),
  is_correct: z.boolean(),
  points: z.number(),
});

// export type ISelectAnswer = z.infer<typeof SelectAnswerSchema>;
