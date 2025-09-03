import { LectureSection } from "@/src/features/lecture/model/lecture-section.model";
import { ITest } from "../../test/model/test";

export interface IEntries {
  course_id: string;
  name: string;
  price_in_pln: number;
  order: number;
  id: string;
  lecture?: {
    id: string;
    name: string;
    sections: LectureSection[];
  };
  test?: {
    id: string;
    name: string;
    sections: ITest[];
  };
}
export interface IEntriesLecture {
  course_id: string;
  name: string;
  price_in_pln: number;
  order: number;
  id: string;
  lecture?: {
    id: string;
    name: string;
    sections: [];
  };
  test: null;
}

export interface IEntriesTest {
  course_id: string;
  name: string;
  price_in_pln: number;
  order: number;
  id: string;
  lecture: null;
  test: {
    id: string;
    name: string;
    sections: ITest[];
  };
}
