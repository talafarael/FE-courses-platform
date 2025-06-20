import { createApi } from "@/src/shared/api/axios";
import { AxiosError, AxiosResponse } from "axios";
import { IUser } from "../type/user-api";

export const getMeQuery = async (): Promise<AxiosResponse<IUser>> => {
  const axios = createApi();
  return await axios.get("/user/get-me");
};
