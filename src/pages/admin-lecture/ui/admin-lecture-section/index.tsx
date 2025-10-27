import { IEntriesLecture } from "@/src/entities/entries/model/entries";
import { LectureTemplate } from "@/src/entities/lecture/ui/lecture-template";
import { ListLectureSection } from "@/src/entities/lecture/ui/list-lecture-section";
import { LectureSection } from "@/src/features/lecture/model/lecture-section.model";

export interface LectureSectionPageProps {
  currentSection: LectureSection;
  currentUnit: IEntriesLecture;
}
export const AdminLectureSectionPage = (data: LectureSectionPageProps) => {
  return (
    <LectureTemplate>
      <ListLectureSection {...data} />
    </LectureTemplate>
  );
};
