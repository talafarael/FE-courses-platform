import { createApi } from "@/src/shared/api/axios";
import { AxiosResponse } from "axios";

export const ChangeMeMutation = async (
  data: FormData,
): Promise<AxiosResponse> => {
  const axios = createApi();
  return await axios.put("user/edit-me", data);
};
