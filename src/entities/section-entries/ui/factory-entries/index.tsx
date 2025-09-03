"use client";
import { useCurrentCourseStore } from "@/src/entities/course/model/use-current-course";
import { IEntries, IEntriesTest } from "@/src/entities/entries/model/entries";
import { Lecture } from "@/src/entities/lecture/ui/lecture";
import { LectureSection } from "@/src/features/lecture/model/lecture-section.model";
import { CreateTest } from "@/src/features/test/ui/create-test";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const FactoryEntries = () => {
  const { getCurrentCourse, currentCurse } = useCurrentCourseStore();
  const [currentUnit, setCurrentUnit] = useState<IEntries>();
  const params = useParams<{ id: string; "entries-id": string }>();

  useEffect(() => {
    getCurrentCourse(params?.id ?? "");
  }, []);
  useEffect(() => {
    const entriesId = params?.["entries-id"];
    currentCurse?.units?.forEach((unit) => {
      unit?.entries?.forEach((entry) => {
        if (entry.id === entriesId) {
          setCurrentUnit(entry);
        }
      });
    });
    console.log(currentUnit);
  }, [currentCurse]);
  return (
    <div className="w-[100%]">
      {currentUnit && currentUnit?.lecture === null && (
        <CreateTest
          entry={currentUnit as Partial<IEntriesTest>}
          order={currentCurse?.units?.entries?.length ?? 0}
        />
      )}
      {currentUnit && currentUnit?.test === null && (
        <Lecture
          order={currentCurse?.units?.entries?.length ?? 0}
          entry={currentUnit as Partial<LectureSection>} />
      )}
    </div>
  );
};
