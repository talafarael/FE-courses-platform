export interface IINputData<T> {
  name: T;
  placeholder: string;
}
export interface InputDataState<T> extends IINputData<T> {
  state: "normal-input" | "large-input" | "small-input" | "boolean-input";
}
export interface IOptional {
  value: string;
  text: string;
}
export type IINputDataExtend<T> = InputDataState<T> | IINputDataOptional<T>;
export interface IINputDataOptional<T> extends IINputData<T> {
  state: "optional-input";
  optional: IOptional[];
}
