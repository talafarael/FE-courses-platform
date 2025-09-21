"use client";
import { useEffect, useState } from "react";

import { useParams } from "next/navigation";
import { useCurrentCourseStore } from "../../course/model/use-current-course";
import {
  IEntries,
  IEntriesLecture,
  IEntriesTest,
} from "../../entries/model/entries";
import { LectureSection } from "@/src/features/lecture/model/lecture-section.model";
import { ITest } from "../../test/model/test";

export const useFindCurrentSection = () => {
  const { currentCurse } = useCurrentCourseStore();
  const [currentUnit, setCurrentUnit] = useState<
    IEntriesLecture | IEntriesTest
  >();
  const [currentSection, setCurrentSection] = useState<
    LectureSection | ITest
  >();
  const params = useParams<{
    id: string;
    "entries-id": string;
    "section-id": string;
  }>();

  useEffect(() => {
    const entriesId = params?.["entries-id"];
    if (!entriesId) return;
    currentCurse?.units?.forEach((unit) => {
      unit?.entries?.forEach((entry: IEntries) => {
        const ent: IEntriesLecture | IEntriesTest = entry;
        if (entry.id === entriesId) {
          setCurrentUnit(ent);
          if (ent?.test) {
            const section = ent?.test?.sections?.find(
              (elem) => elem?.id == params?.["section-id"],
            );
            if (section) setCurrentSection(section);
          }
          if (ent?.lecture) {
            const section = ent.lecture.sections.find(
              (elem) => elem?.id == params?.["section-id"],
            );
            console.log(ent.lecture);

            if (section) setCurrentSection(section);
          }
        }
      });
    });
  }, [currentCurse, params?.["section-id"]]);
  return { currentUnit, setCurrentUnit, currentSection, setCurrentSection };
};
