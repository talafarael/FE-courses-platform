"use client";
import { useFindCurrentSection } from "@/src/entities/lecture/hook/use-find-current-lecture-section";
import { LecturePage } from "../../lecture/ui/lecture";
import { LectureSectionPage } from "../../lecture/ui/lecture-section";
import { TestPage } from "../../test/ui/page";
import { LectureSection } from "@/src/features/lecture/model/lecture-section.model";

export const SectionPage = () => {
  const { currentUnit, currentSection } = useFindCurrentSection();
  return (
    <div>
      {currentUnit?.lecture && (
        <LectureSectionPage
          currentUnit={currentUnit}
          currentSection={currentSection as LectureSection}
        />
      )}
      {currentUnit?.test && <TestPage currentUnit={currentUnit} />}
    </div>
  );
};
