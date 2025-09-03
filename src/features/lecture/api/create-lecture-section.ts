import { createApi } from "@/src/shared/api/axios";
import { ICreateLectureSectionForm } from "../type/create-form-lecture-section";
import { AxiosResponse } from "axios";


export const CreateLectureSectionMutation = async (
  data: ICreateLectureSectionForm,
  lecture_id: string,
): Promise<AxiosResponse> => {
  const axios = createApi();
  return await axios.put("/admin/lectures/sections/create", {
    lecture_id,
    ...data
  });
}
