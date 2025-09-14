import { createApi } from "@/src/shared/api/axios";
import { AxiosResponse } from "axios";

export const loadImageMutation = async (
  data: FormData,
): Promise<AxiosResponse> => {
  const axios = createApi();
  return await axios.post("/admin/lectures/sections/upload-media", {
    data,
  });
};
