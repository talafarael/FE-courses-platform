export interface ICreateCourse {
  name: string;
  description: string;
  price_in_pln: number;
  is_hidden: boolean;
}
export interface IEditCourse extends ICreateCourse {
  id: string;
}
