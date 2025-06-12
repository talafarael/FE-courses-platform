import axios from "axios";
const API_PORT = `${process.env.NEXT_PUBLIC_BE_URL}/api/`;

export const createApi = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: API_PORT,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
