import { useApi } from "@/src/shared/hook/use-api";
import { useCallback } from "react";
import { loadImageMutation } from "../api/load-img";

export const useLoadImgLectureSection = () => {
  const { handlerSubmit, loading, error } = useApi();
  const uploadImg = useCallback(
    async (img: File, section_id: string) => {
      const form = new FormData();
      form.append("is_image", "true");
      form.append("media", img);
      form.append("section_id", section_id);
      await handlerSubmit(() => loadImageMutation(form));
    },
    [handlerSubmit],
  );

  return { uploadImg, loading, error };
};
