"use client";
import { useCurrentCourseStore } from "@/src/entities/course/model/use-current-course";
import {
  IEntries,
  IEntriesLecture,
  IEntriesTest,
} from "@/src/entities/entries/model/entries";
import { FactoryLecture } from "@/src/entities/lecture/ui/factory-lecture";
import { CreateTest } from "@/src/features/test/ui/create-test";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const FactoryEntries = () => {
  const { getCurrentCourse, currentCurse } = useCurrentCourseStore();
  const [currentUnit, setCurrentUnit] = useState<
    IEntriesLecture | IEntriesTest
  >();
  const params = useParams<{ id: string; "entries-id": string }>();

  useEffect(() => {
    getCurrentCourse(params?.id ?? "");
  }, []);
  useEffect(() => {
    const entriesId = params?.["entries-id"];
    currentCurse?.units?.forEach((unit) => {
      unit?.entries?.forEach((entry: IEntries) => {
        const ent: IEntriesLecture | IEntriesTest = entry;
        if (entry.id === entriesId) {
          setCurrentUnit(ent);
        }
      });
    });
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
        <FactoryLecture
          order={currentCurse?.units?.entries?.length ?? 0}
          entry={currentUnit}
        />
      )}
    </div>
  );
};
