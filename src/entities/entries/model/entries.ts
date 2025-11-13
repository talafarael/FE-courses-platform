import { LectureSection } from "@/src/features/lecture/model/lecture-section.model";
import { ITest } from "../../test/model/test";

export type IEntries = IEntriesTest | IEntriesLecture;
//   {
//   course_id: string;
//   name: string;
//   price_in_pln: number;
//   order: number;
//   id: string;
//   lecture?: {
//     id: string;
//     name: string;
//     sections: LectureSection[];
//   };
//   test?: {
//     id: string;
//     name: string;
//     sections: ITest[];
//   };
// }
export interface IEntriesTest {
  course_id: string;
  name: string;
  price_in_pln: number;
  order: number;
  id: string;
  lecture?: null;
  test: {
    id: string;
    name: string;
    sections: ITest[]; //test
  };
}

export interface IEntriesLecture {
  course_id: string;
  name: string;
  price_in_pln: number;
  order: number;
  id: string;
  lecture: {
    id: string;
    name: string;
    sections: LectureSection[];
  };
  test?: null;
}
