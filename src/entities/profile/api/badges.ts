import { createApi } from "@/src/shared/api/axios";
import { AxiosResponse } from "axios";
import { BadgeResponse } from "../type/badges-api";


export const getBadgesQuery = async (): Promise<BadgeResponse | null> => {
  const axios = createApi();
  try {
    const res: AxiosResponse<BadgeResponse> = await axios.get("/user/get-badges");
    return res.data;
  } catch (e) {
    console.error(e);
    return null;
  }
};
