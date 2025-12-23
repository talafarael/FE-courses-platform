import { ITest } from "@/src/entities/test/model/test";
import { AdminItemFormTest } from "@/src/entities/test/ui/admin-item-form-test";
import { AdminItemSelectTest } from "@/src/entities/test/ui/admin-item-select-test";
import { SelectAnswerCreate } from "@/src/features/select-answer";
import { AdminSelectAnswerList } from "../admin-answer-select-list";
import { CreateTestModal } from "@/src/features/test/ui/create-test-modal";

export interface AdminListTestProps {
  tests: ITest[];
}

export const AdminListTest = ({ tests }: AdminListTestProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[20px] ">
      {tests?.map((test) => {
        if (test.form_question) {
          return <AdminItemFormTest key={test.id} test={test} />;
        }

        if (test.select_question) {
          return (
            <AdminItemSelectTest
              key={test.id}
              test={test}
              childrenAnswer={
                <AdminSelectAnswerList
                  answers={test?.select_question?.answers}
                />
              }
            >
              <SelectAnswerCreate test={test} />
            </AdminItemSelectTest>
          );
        }
        return null;
      })}
      <CreateTestModal order={0} />
    </div>
  );
};
