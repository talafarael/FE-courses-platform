import { createApi } from "@/src/shared/api/axios";
import { AxiosError, AxiosResponse } from "axios";
import { ResponseAuth } from "../type/api-auth";
import { LoginSchema, RegisterSchema } from "../model/auth-schema";
import { z } from "zod";

export const RegisterUserMutation = async (
  data: z.infer<typeof RegisterSchema>,
  setError: React.Dispatch<React.SetStateAction<string | undefined>>,
  setResponse: React.Dispatch<React.SetStateAction<ResponseAuth | undefined>>,
): Promise<void> => {
  const axios = createApi();
  const body = {
    full_name: `${data?.firstName} ${data?.lastName}`,
    ...data,
  };
  try {
    const res = (await axios.post("auth/register", body)) as AxiosResponse;
    setResponse(res?.data);
  } catch (e) {
    if (e instanceof AxiosError && e?.response?.data?.detail?.message) {
      setError(e?.response?.data?.detail?.message);
      return;
    } else {
      setError("Oops! Something went wrong.");
    }
  }
};
export const LoginUserMutation = async (
  data: z.infer<typeof LoginSchema>,
  setError: React.Dispatch<React.SetStateAction<string | undefined>>,
  setResponse: React.Dispatch<React.SetStateAction<ResponseAuth | undefined>>,
): Promise<void> => {
  const axios = createApi();
  try {
    const res = (await axios.post("auth/login", data)) as AxiosResponse;
    console.log(res);
    setResponse(res?.data);
  } catch (e) {
    if (e instanceof AxiosError && e?.response?.data?.detail?.message) {
      setError(e.response?.data?.detail?.message);
    } else {
      setError("Oops! Something went wrong.");
    }
  }
};
