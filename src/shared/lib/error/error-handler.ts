import { AxiosError } from "axios";

export const handlerError = (e: unknown): string => {
  if (e instanceof AxiosError && e?.response?.data?.detail?.message) {
    return e?.response?.data?.detail?.message;
  } if (e instanceof AxiosError && typeof e?.response?.data?.detail.message == "string") {
    return e.response?.data.detail.message
  } else if (e instanceof Error) {
    return e?.message;
  } else {
    return "Oops! Something went wrong.";
  }
};
