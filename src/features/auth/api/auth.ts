import { createApi } from "@/src/shared/api/axios";
import { RegisterFormData } from "../model/auth";
import { AxiosError, AxiosResponse } from "axios";

export const RegisterUserApi = async (data: RegisterFormData) => {
  const axios = createApi();
  const body = {
    full_name: `${data?.firstName} ${data?.lastName}`,
    ...data,
  };
  try {
    const res = (await axios.post("auth/register", body)) as AxiosResponse;
    console.log(res?.data);
    return res?.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(e.response?.data?.detail);
      return e.response?.data?.detail;
    }
    console.log("suika");
    return "Oops! Something went wrong.";
  }
};
