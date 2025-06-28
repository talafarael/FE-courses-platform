import { createApi } from "@/src/shared/api/axios";
import { AxiosResponse } from "axios";

export const FactoryCourseMutation = async (
  data: FormData,
  path: string,
): Promise<AxiosResponse> => {
  const axios = createApi();
  return await axios.put(path, data);
};
