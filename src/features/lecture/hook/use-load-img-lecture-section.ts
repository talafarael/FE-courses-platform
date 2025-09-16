import { useApi } from "@/src/shared/hook/use-api";
import { useCallback } from "react";
import { loadImageMutation } from "../api/load-img";
import { useCurrentCourseStore } from "@/src/entities/course/model/use-current-course";
import { useParams } from "next/navigation";

export const useLoadImgLectureSection = () => {
  const { handlerSubmit, loading, error } = useApi();
  const params = useParams<{ id: string }>();
  const { getCurrentCourse } = useCurrentCourseStore();
  const uploadImg = useCallback(
    async (img: File, section_id: string) => {
      const form = new FormData();
      form.append("is_image", "true");
      form.append("media", img);
      form.append("section_id", section_id);
      await handlerSubmit(() => loadImageMutation(form));
      if (!params?.id) return;
      await getCurrentCourse(params?.id);
    },
    [handlerSubmit],
  );

  return { uploadImg, loading, error };
};
