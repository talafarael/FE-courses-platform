import { ITestSelect } from "../../model/test";

export interface AdminItemSelectTestProps {
  test: ITestSelect;
}
export const AdminItemSelectTest = ({ test }: AdminItemSelectTestProps) => {
  return (
    <div
      className=" rounded-[20px] h-[318px] flex justify-center flex-col 
    w-[90%] bg-[#4F378A] "
    >
      <h1 className="text-[white] w-[100%]">
        <span>Питання #1:{test?.select_question?.question_text}</span>
      </h1>
    </div>
  );
};
