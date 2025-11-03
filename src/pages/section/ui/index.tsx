"use client";
import { useFindCurrentSection } from "@/src/entities/lecture/hook/use-find-current-lecture-section";
import { AdminTestPage } from "../../admin-test/ui/page";
import { LectureSection } from "@/src/features/lecture/model/lecture-section.model";
import { LecturePage } from "../../lecture/ui/lecture-page";

export const SectionPage = () => {
  const { currentUnit, currentSection } = useFindCurrentSection();
  return (
    <>
      {currentUnit?.lecture && (
        <LecturePage
          currentUnit={currentUnit}
          currentSection={currentSection as LectureSection}
        />
      )}
      {currentUnit?.test && <AdminTestPage currentUnit={currentUnit} />}
    </>
  );
};
