import { IINputDataExtend } from "@/src/shared/model/input-data";
import { ICreateCourse } from "../../model/create-course";

export const inputsCourseData: IINputDataExtend<keyof ICreateCourse>[] = [
  {
    name: "name",
    placeholder: "Назва курсу",
    state: "normal-input",
  },
  {
    name: "description",
    placeholder: "Опис курсу",
    state: "large-input",
  },
  {
    name: "price_in_pln",
    placeholder: "Ціна (PLN)",
    state: "small-input",
  },
  {
    name: "is_hidden",
    placeholder: "Прихований",
    state: "boolean-input",
  },
];
