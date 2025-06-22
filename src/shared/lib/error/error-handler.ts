import { AxiosError } from "axios";

export const handlerError = (e: unknown): string => {
  if (e instanceof AxiosError && e?.response?.data?.detail?.message) {
    return e?.response?.data?.detail?.message;
  } else {
    return "Oops! Something went wrong.";
  }
};
