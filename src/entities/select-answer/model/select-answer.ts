import { IAnswerImages } from "./answer-images";

export interface ISelectAnswer {
  id: string;
  question_id: string;
  answer_text: string;
  answer_images: IAnswerImages;
  order: number;
  is_correct: boolean;
  points: number;
}
