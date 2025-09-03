import { createApi } from "@/src/shared/api/axios";

export const uploadImage = async (image: Buffer): Promise<string> => {
  const axios = createApi();
  try {
    const res = await axios.post("/admin/files/upload-image", {
      image
    })
    return res.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
