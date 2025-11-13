import { IEntriesTest } from "@/src/entities/entries/model/entries";
import { LectureTemplate } from "@/src/entities/lecture/ui/lecture-template";
import { AdminTestSection } from "@/src/entities/test";
import { BorderedContainer } from "@/src/widgets/border-container";

export interface AdminTestPageProps {
  currentUnit: IEntriesTest;
}
export const AdminTestPage = ({ currentUnit }: AdminTestPageProps) => {
  return (
    <LectureTemplate style="!min-h-[70vh] p-[20px] !w-[100%] relative ">
      <BorderedContainer style="!m-0">
        <AdminTestSection currentUnit={currentUnit} />
      </BorderedContainer>
    </LectureTemplate>
  );
};
