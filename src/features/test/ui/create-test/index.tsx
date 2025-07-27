import type { IEntriesTest } from "@/src/entities/entries/model/entries";
import { FormQuestion } from "../form-question";
import { FactoryQuestion } from "../factory-question";

export interface CreateTestProps {
  entry: Partial<IEntriesTest>;
  order: number;
}
export const CreateTest = ({ entry, order }: CreateTestProps) => {
  //{entry.test?.sections?.map()}

  return (
    <div className="w-[100%]">
      <FactoryQuestion order={order} />
    </div>
  );
};
