import { ICreateCourse } from "@/src/features/course/model/create-course";
import { IUnit } from "../../unit/model/unit";

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
  units: IUnit[];
}
