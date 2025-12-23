import { ReactElement } from "react";
import { ISelectAnswer } from "../../model/select-answer";

export interface AdminSelectAnswerItemProps {
  answer: ISelectAnswer;
  childrenChange?: ReactElement;
}
export const AdminSelectAnswerItem = ({
  answer,
  childrenChange,
}: AdminSelectAnswerItemProps) => {
  return (
    <div
      className="min-h-[56px] border-b-[1px] border-[#CAC4D8] rounded-b-md flex justify-between
     p-[10px] items-center"
    >
      <span> Відповідь : {answer?.answer_text}</span>
      {childrenChange}
      <span> {answer.is_correct ? "Правильна" : "Неправильна"}</span>
    </div>
  );
};
