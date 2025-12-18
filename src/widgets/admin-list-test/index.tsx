import { ITest } from "@/src/entities/test/model/test";
import { AdminItemFormTest } from "@/src/entities/test/ui/admin-item-form-test";
import { AdminItemSelectTest } from "@/src/entities/test/ui/admin-item-select-test";

export interface AdminListTestProps {
  tests: ITest[];
}

export const AdminListTest = ({ tests }: AdminListTestProps) => {
  console.log(tests);
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[20px] ">
      {tests?.map((test) => {
        if (test.form_question) {
          return <AdminItemFormTest key={test.id} test={test} />;
        }
        if (test.select_question) {
          return <AdminItemSelectTest key={test.id} test={test} />;
        }
        return null;
      })}
    </div>
  );
};

