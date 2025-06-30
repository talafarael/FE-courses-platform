export interface ICreateEntries {
  unit_id: string;
  order: number;
  lecture?: {
    name?: string | null;
  } | null;
  test?: {
    name?: string | null;
  } | null;
}
