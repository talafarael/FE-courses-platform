import { ReactElement } from "react";
import { ITestSelect } from "../../model/test";

export interface AdminItemSelectTestProps {
  test: ITestSelect;
  childrenAnswer: ReactElement;
  children: ReactElement;
}
export const AdminItemSelectTest = ({
  test,
  children,
  childrenAnswer,
}: AdminItemSelectTestProps) => {
  return (
    <div
      className=" flex justify-center  items-center flex-col rounded-[20px]   flex justify-center flex-col  items-center
    w-[90%] bg-[#4F378A] "
    >
      <h1 className="text-[white] h-[46px] ml-[30px] flex   items-center text-[20px] w-[100%]">
        <span>Питання #1:{test?.select_question?.question_text}</span>
      </h1>
      {childrenAnswer}
      <div className="m-[10px] flex justify-end w-[90%] items-end">
        {children}
      </div>
    </div>
  );
};
