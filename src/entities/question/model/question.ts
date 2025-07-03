interface IQuestion {
  question_text: string;
  question_images: string[];
}

interface IFormQuestion extends IQuestion {
  answers: {
    [key: string]: (null | string)[];
  };
}

export interface ITest {
  test_id: string;
  order: number;
  select_question: IQuestion;
  form_question: IFormQuestion;
}
