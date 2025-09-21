import type { IEntriesTest } from "@/src/entities/entries/model/entries";
import { FactoryQuestion } from "../factory-question";
import { LectureTemplate } from "@/src/entities/lecture/ui/lecture-template";

export interface CreateTestProps {
  entry: Partial<IEntriesTest>;
  order: number;
}
export const CreateTest = ({ order }: CreateTestProps) => {
  return (
    <LectureTemplate>
      <FactoryQuestion order={order} />
    </LectureTemplate>
  );
};
