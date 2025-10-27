import { IEntriesTest } from "@/src/entities/entries/model/entries";
import { useFindCurrentSection } from "@/src/entities/lecture/hook/use-find-current-lecture-section";
import { LectureTemplate } from "@/src/entities/lecture/ui/lecture-template";
import { ListTestSection } from "@/src/entities/test/ui/list-test-section";

export interface AdminTestPageProps {
  currentUnit: IEntriesTest;
}
export const AdminTestPage = ({ currentUnit }: AdminTestPageProps) => {
  return (
    <LectureTemplate style="!min-h-[70vh] !h-[auto]">
      <div>
        <ListTestSection currentUnit={currentUnit} />
      </div>
    </LectureTemplate>
  );
};
