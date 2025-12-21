export interface ISelectAnswerCraete {
  question_id: string;
  answer_text: string;
  answer_images: string[];
  order: number;
  is_correct: boolean;
  points: number;
}
