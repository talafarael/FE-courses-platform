export interface IFormUnit {
  name: string;
  description: string;
  price_in_pln: number;
}
export interface IUnitCreate extends IFormUnit {
  course_id: string;
  order: number;
}
export interface IResponseUnit extends IUnitCreate {
  id: string;
}


