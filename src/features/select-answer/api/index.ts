import { createApi } from "@/src/shared/api/axios";
import { ISelectAnswerCraete } from "../model/select-answer-create";
import { AxiosResponse } from "axios";

export const CreateSelectAnswer = async (
  data: ISelectAnswerCraete,
  path: string,
): Promise<AxiosResponse> => {
  const axios = createApi();
  return await axios.post(path, data);
};
