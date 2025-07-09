export interface ICraeteQuestionForm {
  type: "form-question" | "select-question";
  question_text: string;
}

export interface QuestionImages {
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}

export interface ISelectQuestion {
  question_text: string;
  question_images?: QuestionImages;
}

export interface IFormQuestion {
  question_text: string;
  question_images?: QuestionImages;
}

interface ICreateQuestionSelect {
  test_id: string;
  order: number;
  select_question: ISelectQuestion;
  form_question?: null;
}
interface ICreatQuestionForm {
  test_id: string;
  order: number;
  select_question?: null;
  form_question: IFormQuestion;
}
export type ICraeteQuestionFormApi = ICreatQuestionForm | ICreateQuestionSelect;
