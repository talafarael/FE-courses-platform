import { IINputDataExtend } from "@/src/shared/model/input-data";
import { ICraeteQuestionForm } from "../../model/api-question";

export const factoryInputQuestionData: IINputDataExtend<
  keyof ICraeteQuestionForm
>[] = [
  {
    name: "type",
    placeholder: "Прихований",
    state: "optional-input",
    optional: [
      {
        value: "form-question",
        text: "Текстове питання (форма)",
      },
      {
        value: "select-question",
        text: "Питання з вибором відповіді",
      },
    ],
  },
  {
    name: "question_text",
    placeholder: "Прихований",
    state: "normal-input",
  },
];
