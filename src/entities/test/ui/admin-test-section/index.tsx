import { IEntriesTest } from "@/src/entities/entries/model/entries";
import { HeaderTest } from "../header-test";
import { AdminListTest } from "../admin-list-test";

export interface AdminListTestSectionProps {
  currentUnit: IEntriesTest;
}
export const AdminTestSection = ({
  currentUnit,
}: AdminListTestSectionProps) => {
  const currentTest = currentUnit.test;
  console.log(currentTest);
  return (
    <div className="h-200vh">
      <HeaderTest title={currentTest.name} />
      <AdminListTest tests={currentTest.questions} />
    </div>
  );
};
