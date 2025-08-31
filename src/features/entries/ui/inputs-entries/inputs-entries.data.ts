import { IINputDataExtend } from "@/src/shared/model/input-data";
import { IFromEntries } from "../../model/form-entries";

export const inputEntriesData: IINputDataExtend<keyof IFromEntries>[] = [
  {
    name: "name",
    placeholder: "Прихований",
    state: "normal-input",
  },
  {
    name: "typeEntries",
    placeholder: "Прихований",
    state: "optional-input",
    optional: [
      {
        value: "lecture",
        text: "Лекція",
      },
      {
        value: "test",
        text: "Тест",
      },
    ],
  },
];
