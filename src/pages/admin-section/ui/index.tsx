"use client";
import { useFindCurrentSection } from "@/src/entities/lecture/hook/use-find-current-lecture-section";
import { LectureSection } from "@/src/features/lecture/model/lecture-section.model";
import { AdminLectureSectionPage } from "../../admin-lecture/ui/admin-lecture-section";
import { AdminTestPage } from "../../admin-test/ui/page";

export const AdminSectionPage = () => {
  const { currentUnit, currentSection } = useFindCurrentSection();
  return (
    <div>
      {currentUnit?.lecture && (
        <AdminLectureSectionPage
          currentUnit={currentUnit}
          currentSection={currentSection as LectureSection}
        />
      )}
      {currentUnit?.test && <AdminTestPage currentUnit={currentUnit} />}
    </div>
  );
};
