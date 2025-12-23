import { ISelectAnswer } from "../../select-answer/model/select-answer";

interface QuestionImages {
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}

interface FormQuestionAnswers {
  additionalProp1: (string | null)[];
  additionalProp2: (string | null)[];
  additionalProp3: (string | null)[];
}

interface SelectQuestion {
  id?: string;
  question_text: string;
  question_images: QuestionImages;
  answers: ISelectAnswer[];
}

interface FormQuestion {
  question_text: string;
  question_images: QuestionImages;
  answers: FormQuestionAnswers;
}

export type ITest = ITestSelect | ITestForm;
//   {
//   id?: string;
//   test_id: string;
//   order: number;
//   select_question?: SelectQuestion;
//   form_question?: FormQuestion;
// }
export interface ITestSelect {
  id?: string;
  test_id: string;
  order: number;
  select_question: SelectQuestion;
  form_question?: null;
  answers: FormQuestionAnswers;
}
export interface ITestForm {
  id?: string;
  test_id: string;
  order: number;
  select_question: null;
  form_question?: FormQuestion;
}
