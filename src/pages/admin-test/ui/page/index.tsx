import { IEntriesTest } from "@/src/entities/entries/model/entries";
import { LectureTemplate } from "@/src/entities/lecture/ui/lecture-template";
import { AdminListTestSection } from "@/src/entities/test/ui/admin-list-test-section";
import { BorderedContainer } from "@/src/widgets/border-container";

export interface AdminTestPageProps {
  currentUnit: IEntriesTest;
}
export const AdminTestPage = ({ currentUnit }: AdminTestPageProps) => {
  console.log(currentUnit);
  return (
    <LectureTemplate style="!min-h-[70vh] p-[20px] !w-[100%] relative ">
      <BorderedContainer style="!m-0">
        <AdminListTestSection currentUnit={currentUnit} />
      </BorderedContainer>
    </LectureTemplate>
  );
};
