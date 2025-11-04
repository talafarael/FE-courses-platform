import { IEntriesLecture } from "@/src/entities/entries/model/entries";
import { LectureTemplate } from "@/src/entities/lecture/ui/lecture-template";
import { ListLectureSection } from "@/src/entities/lecture/ui/list-lecture-section";
import { LectureSection } from "@/src/features/lecture/model/lecture-section.model";
import { BorderedContainer } from "@/src/widgets/border-container";

export interface LectureSectionPageProps {
  currentSection: LectureSection;
  currentUnit: IEntriesLecture;
}
export const LecturePage = (data: LectureSectionPageProps) => {
  return (
    <LectureTemplate style="!p-[20px]">
      <BorderedContainer>
        <ListLectureSection {...data} />
      </BorderedContainer>
    </LectureTemplate>
  );
};
