import { ITest } from "../../model/test";
import { AdminItemTestSection } from "../admin-item-test-section";

export interface AdminListTestProps {
  tests: ITest[];
}

export const AdminListTest = ({ tests }: AdminListTestProps) => {
  return (
    <div>
      {tests.map((test) => (
        <AdminItemTestSection />
      ))}
    </div>
  );
};
