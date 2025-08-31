
export interface ICraeteQuestionForm {
  type: "form-question"
  question_text: string;
  //assessment1: string;
  //answer1: string
  //assessment2: string;
  //answer2: string
  //assessment3?: string;
  //answer3?: string
  //assessment4?: string;
  //answer4?: string
}

export interface ICraeteQuestionSelector {
  type: "select-question"
  question_text: string;
  assessment1: string;
}
export type ICreateQuestionForm = ICraeteQuestionSelector | ICraeteQuestionForm;

export type IQuestionType = "form-question" | "select-question";

export type IQuestionAnswer = {
  [key: string]: [number, string]
}

type IQuestionImages = {
  [key: string]: string
}

// Create Form
interface IFormQuestion {
  answers: IQuestionAnswer
  question_text: string;
  question_images?: IQuestionImages;

}
export interface ICreatQuestionForm {
  test_id: string;
  order: number;
  select_question?: null;
  form_question: IFormQuestion
}


//Select
export interface ISelectQuestion {
  question_text: string;
  question_images?: IQuestionImages;
}
export interface ICreateQuestionSelect {
  test_id: string;
  order: number;
  select_question: ISelectQuestion;
  form_question?: null;
}


export type ICraeteQuestionFormApi = ICreatQuestionForm | ICreateQuestionSelect;
