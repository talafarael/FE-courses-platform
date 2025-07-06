export interface IEntries {
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
  test?: {
    id: string;
    name: string;
    sections: [];
  };
}
