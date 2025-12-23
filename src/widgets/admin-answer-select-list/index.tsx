import { ISelectAnswer } from "@/src/entities/select-answer/model/select-answer";
import { AdminSelectAnswerItem } from "@/src/entities/select-answer/ui/admin-select-answer-item";

export interface AdminAnswerSelectListProps {
  answers: ISelectAnswer[];
}
export const AdminSelectAnswerList = ({
  answers,
}: AdminAnswerSelectListProps) => {
  return (
    <div className="rounded-[5px] bg-purpleExtraLight w-[80%]">
      {answers.map((answer) => (
        <AdminSelectAnswerItem key={answer?.id} answer={answer} />
      ))}
    </div>
  );
};
