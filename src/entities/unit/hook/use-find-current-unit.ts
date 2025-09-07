"use client"
import { useEffect, useState } from "react";
import { useCurrentCourseStore } from "../../course/model/use-current-course";
import { IEntries, IEntriesLecture, IEntriesTest } from "../../entries/model/entries";
import { useParams } from "next/navigation";

export const useFindCurrentUnit = () => {
  const { currentCurse } = useCurrentCourseStore();
  const [currentUnit, setCurrentUnit] = useState<IEntriesLecture | IEntriesTest>();
  const params = useParams<{ id: string; "entries-id": string }>();

  useEffect(() => {
    const entriesId = params?.["entries-id"];
    if (!entriesId) return
    currentCurse?.units?.forEach((unit) => {
      unit?.entries?.forEach((entry: IEntries) => {
        const ent: IEntriesLecture | IEntriesTest = entry
        if (entry.id === entriesId) {
          setCurrentUnit(ent);
        }
      });
    });
  }, [currentCurse]);
  return { currentUnit, setCurrentUnit }
}
