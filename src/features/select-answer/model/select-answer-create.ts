import { IAnswerImages } from "@/src/entities/select-answer/model/answer-images";

export interface ISelectAnswerCraete {
  question_id: string;
  answer_text: string;
  answer_images: IAnswerImages;
  order: number;
  is_correct: boolean;
  points: number;
}
