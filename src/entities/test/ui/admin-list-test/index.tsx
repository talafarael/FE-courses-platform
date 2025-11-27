import { ITest } from "../../model/test";
import { AdminItemTestSection } from "../admin-item-test-section";

export interface AdminListTestProps {
  tests: ITest[];
}

export const AdminListTest = ({ tests }: AdminListTestProps) => {
  console.log(tests);
  return (
    <div className="w-full flex flex-col jsutify-center items-center gap-[20px] ">
      {tests?.map((test) => (
        <AdminItemTestSection key={test.id} test={test} />
      ))}
    </div>
  );
};
