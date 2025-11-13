import { ITest } from "../../model/test";
import { AdminItemTest } from "../admin-item-test-section";

export interface AdminListTestProps {
  tests: ITest[];
}

export const AdminListTest = ({ tests }: AdminListTestProps) => {
  return (
    <div>
      {tests.map((test) => (
        <AdminItemTest test={test} />
      ))}
    </div>
  );
};
