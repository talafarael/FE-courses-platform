import { createApi } from "@/src/shared/api/axios";
import { AxiosResponse } from "axios";
import { IUserResponse } from "../type/user-api";

export const getMeQuery = async (): Promise<AxiosResponse<IUserResponse>> => {
  const axios = createApi();
  return await axios.get("/user/get-me");
};
