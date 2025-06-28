export interface IINputData<T> {
  name: T;
  placeholder: string;
}

export interface IINputDataExtend<T> extends IINputData<T> {
  state: "normal-input" | "large-input" | "small-input" | "boolean-input";
}
