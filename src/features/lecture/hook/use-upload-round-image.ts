import { useApi } from "@/src/shared/hook/use-api";
import { useCallback } from "react";
import { uploadRoundImageMutation } from "../api/upload-round-image";
import { useParams } from "next/navigation";
import { useCurrentCourseStore } from "@/src/entities/course/model/use-current-course";

export const useUploadRoundImgLectureSection = () => {
  const { handlerSubmit, loading, error } = useApi();
  const params = useParams<{ id: string }>();
  const { getCurrentCourse } = useCurrentCourseStore();

  const uploadRoundImg = useCallback(
    async (img: File, section_id: string) => {
      const form = new FormData();
      console.log(section_id);
      form.append("section_id", section_id);
      form.append("image", img);

      await handlerSubmit(() => uploadRoundImageMutation(form));
      if (!params?.id) return;
      await getCurrentCourse(params?.id);
    },
    [handlerSubmit],
  );

  return { uploadRoundImg, loading, error };
};
