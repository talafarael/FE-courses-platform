import { IINputDataExtend } from "@/src/shared/model/input-data";
import { IFormLectureSection } from "../../model/form-lecture-section";

export const inputsLectureSectionData: IINputDataExtend<keyof IFormLectureSection>[] = [
  {
    name: "task",
    placeholder: "Прихований",
    state: "normal-input",
  },
  {
    name: "text",
    placeholder: "Прихований",
    state: "normal-input",
  }
]
