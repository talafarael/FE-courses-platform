"use client";
import { useCurrentCourseStore } from "@/src/entities/course/model/use-current-course";
import CreateUnitPage from "@/src/pages/units/ui/create-unit";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CoursePage() {
  const [stateWindow, setStateWindow] = useState(false);
  const handlerClose = () => setStateWindow(false);
  const params = useParams();
  const { getCurrentCourse } = useCurrentCourseStore();
  useEffect(() => {
    (async () => {
      const id = params?.id;
      if (id) await getCurrentCourse(id);
    })();
  }, []);
  return (
    <div className="w-[90%] h-[90vh] bg-purplelight border-[#79747E] border-[1px] rounded-[18px]">
      {stateWindow && <CreateUnitPage handlerClose={handlerClose} />}
    </div>
  );
}
