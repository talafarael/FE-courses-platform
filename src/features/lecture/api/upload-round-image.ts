import { createApi } from "@/src/shared/api/axios";
import { AxiosResponse } from "axios";

export const uploadRoundImageMutation = async (
  data: FormData,
): Promise<AxiosResponse> => {
  const axios = createApi();
  for (const [key, value] of data.entries()) {
    console.log(key, value);
  }
  return await axios.post(
    "admin/lectures/sections/upload-rounded-image",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
};
