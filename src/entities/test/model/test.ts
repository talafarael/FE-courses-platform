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
  question_text: string;
  question_images: QuestionImages;
}

interface FormQuestion {
  question_text: string;
  question_images: QuestionImages;
  answers: FormQuestionAnswers;
}

export interface ITest {
  id?: string
  test_id: string;
  order: number;
  select_question: SelectQuestion;
  form_question: FormQuestion;
}
