"use client"
import { useApi } from "@/src/shared/hook/use-api"
import { createLectureSectionMutation } from "../api/create-lecture-section"
import { ICreateLectureSectionForm } from "../type/create-form-lecture-section"
import { useRouter } from 'next/navigation'
import { ROUTES } from "@/src/shared/lib/constants/routes"
import { useParams } from "next/navigation"
import { useCallback } from "react"
import { useCurrentCourseStore } from "@/src/entities/course/model/use-current-course"


export const useCreateLecture = () => {
  const { handlerSubmit, loading, error } = useApi()
  const router = useRouter()
  const params = useParams<{ "entries-id": string, id: string }>()
  const { getCurrentCourse, error: currentCourseError } =
    useCurrentCourseStore();

  const createLectureSection = useCallback(async (data: ICreateLectureSectionForm, lecture_id: string) => {
    if (!params) return;

    const { id, "entries-id": entriesId } = params;
    const res = await handlerSubmit(() => createLectureSectionMutation(data, lecture_id));
    await getCurrentCourse(id);
    if (currentCourseError) throw new Error(currentCourseError)
    router.push(ROUTES.redactor(id, entriesId, res?.data?.data?.data?.lecture_id));
  }, [params, router, handlerSubmit]);

  return { createLectureSection, loading, error }
}
