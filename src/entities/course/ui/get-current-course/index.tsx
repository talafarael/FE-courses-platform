"use client"
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useCurrentCourseStore } from "../../model/use-current-course";

export const GetCurrentCourse = () => {
  const { getCurrentCourse } = useCurrentCourseStore();
  const params = useParams<{ id: string; "entries-id": string }>();

  useEffect(() => {
    if (!params?.id) return
    getCurrentCourse(params?.id)
  }, [params?.id])
  return null
}
