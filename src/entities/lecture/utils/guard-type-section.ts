import { LectureSection } from "@/src/features/lecture/model/lecture-section.model";
import { ITest } from "../../test/model/test";

export const guardLecture = (section: LectureSection | ITest): section is LectureSection => {
  return (section as LectureSection).lecture_id !== undefined;
}

export const guardTest = (section: LectureSection | ITest): section is ITest => {
  return (section as ITest).test_id !== undefined;
};
