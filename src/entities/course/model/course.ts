export interface ICourse {
  name: string;
  description: string;
  price_in_uah: number;
  is_hidden: boolean;
  units: IUnit[];
}

export interface IUnit {
  name: string;
  order: number;
  content: IContent[];
}

export interface IContent {
  order: number;
  lecture: ILecture;
  test: ITest;
}

export interface ILecture {
  name: string;
  sections: ISection[];
}

export interface ISection {
  task: string;
  text: string;
  images: string[];
}

export interface ITest {
  name: string;
  questions: IQuestion[];
}

export interface IQuestion {
  order: number;
  select_question: ISelectQuestion;
  form_question: IFormQuestion;
}

export interface ISelectQuestion {
  question_text: string;
  question_images: string[];
  answers: ISelectAnswer[];
}

export interface ISelectAnswer {
  answer_text: string;
  answer_images: string[];
  order: number;
  is_correct: boolean;
}

export interface IFormQuestion {
  question_text: string;
  question_images: string[];
  answers: { [key: string]: string };
}
