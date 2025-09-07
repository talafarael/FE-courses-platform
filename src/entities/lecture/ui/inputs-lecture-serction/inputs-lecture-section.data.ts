import { IINputDataExtend } from "@/src/shared/model/input-data";
import { ICreateLectureSectionForm } from "@/src/features/lecture/type/create-form-lecture-section";

export const inputsLectureSectionData: IINputDataExtend<keyof ICreateLectureSectionForm>[] = [
  {
    name: "task",
    placeholder: "Введіть завдання",
    state: "normal-input",
  },
  {
    name: "text",
    placeholder: "Введіть текст",
    state: "large-input",
  }
]
