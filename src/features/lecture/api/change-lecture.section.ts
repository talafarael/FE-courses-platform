import { AxiosResponse } from "axios";
import { IChangeLectureTaskForm } from "../type/change-form-lecture-section";
import { createApi } from "@/src/shared/api/axios";

export const changeLectureSectionMutation = async (
  data: IChangeLectureTaskForm,
  lecture_id: string,
): Promise<AxiosResponse> => {
  const axios = createApi();
  return await axios.post("/admin/lectures/sections/create", {
    lecture_id,
    ...data
  });
}
