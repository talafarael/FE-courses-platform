import { ICreateCourse } from "@/src/features/course/model/create-course";

export interface ICourse extends ICreateCourse {
  id: string;
}
export interface IFullCourse {
  id: string;
  name: string;
  description: string;
  price_in_pln: number;
  picture: string;
  is_hidden: boolean;
  //now not have unit
  //units: Unit[];
}
