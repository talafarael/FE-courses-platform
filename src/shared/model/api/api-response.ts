export interface IApiResponse<T> {
  ok: boolean;
  message: string;
  data: T;
}
