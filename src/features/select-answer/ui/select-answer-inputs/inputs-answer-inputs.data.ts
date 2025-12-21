import { IINputDataExtend } from "@/src/shared/model/input-data";
import { ISelectAnswerForm } from "../../model/select-answer-form";
import { Path } from "react-hook-form";

export const selectAnswerInputsData: IINputDataExtend<
  Path<ISelectAnswerForm>
>[] = [
  {
    name: "answer_text",
    placeholder: "Текст відповіді",
    state: "normal-input",
  },
  {
    name: "is_correct",
    placeholder: "Правильна відповідь",
    state: "boolean-input",
  },
  {
    name: "points",
    placeholder: "Бали",
    state: "small-input",
  },
];
