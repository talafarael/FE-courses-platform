import axios, { AxiosResponse } from "axios";

const HOST =
  process.env.NEXT_PUBLIC_BE_URL ?? "https://plcoursestestapi.esp.ovh";

const API_PORT = `${HOST}/api/`;

export const createApi = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: API_PORT,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
interface AxiosMutationParams<T> {
  path: string;
  data: T;
  method?: "post" | "put";
}
export const AxiosMutation = async <T>({
  path,
  data,
  method = "post",
}: AxiosMutationParams<T>): Promise<AxiosResponse> => {
  const axios = createApi();
  return await axios[method](path, data);
};

export const AxiosQuery = async (path: string): Promise<AxiosResponse> => {
  const axios = createApi();
  return await axios.get(path);
};
