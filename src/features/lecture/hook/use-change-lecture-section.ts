"use client"
import { useApi } from "@/src/shared/hook/use-api"
import { ICreateLectureSectionForm } from "../type/create-form-lecture-section"
import { useRouter } from 'next/navigation'
import { ROUTES } from "@/src/shared/lib/constants/routes"
import { useParams } from "next/navigation"
import { useCallback } from "react"
import { useCurrentCourseStore } from "@/src/entities/course/model/use-current-course"
import { changeLectureSectionMutation } from "../api/change-lecture.section"


export const useChangeLectureSection = () => {
  const { handlerSubmit, loading, error } = useApi()
  const router = useRouter()
  const params = useParams<{ "entries-id": string, id: string, "lecture-id": string }>()
  const { getCurrentCourse, error: currentCourseError } =
    useCurrentCourseStore();

  const changeLectureSection = useCallback(async (data: ICreateLectureSectionForm, lecture_id: string) => {
    if (!params) return;

    const { id, "entries-id": entriesId, "lecture-id": lectureId } = params;
    const res = await handlerSubmit(() => changeLectureSectionMutation({
      ...data,
      id: lectureId ?? ""
    },
      lecture_id
    ));
    await getCurrentCourse(id);
    if (currentCourseError) throw new Error(currentCourseError)
    router.push(ROUTES.redactor(id, entriesId, res?.data?.data?.data?.lecture_id));
  }, [params, router, handlerSubmit]);

  return { changeLectureSection, loading, error }
}
