interface IQuest {
  question_text: string;
  question_images: string[];
}

interface IFormQuestion extends IQuestion {
  answers: {
    [key: string]: (null | string)[];
  };
}

export interface IQuestion {
  test_id: string;
  order: number;
  select_question: IQuest;
  form_question: IFormQuestion;
}
