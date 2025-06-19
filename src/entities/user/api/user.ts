import { createApi } from "@/src/shared/api/axios";
import { AxiosResponse } from "axios";
import { UserResponse } from "../type/user-api";

export const getMeQuery = async (): Promise<void> => {
  const axios = createApi();

  try {
    const res: AxiosResponse<UserResponse> = await axios.get("/user/get-me");
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
};
