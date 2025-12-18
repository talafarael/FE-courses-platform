import { ITestForm } from "../../model/test";

export interface AdminItemTestSectionProps {
  test: ITestForm;
}
export const AdminItemFormTest = ({ test }: AdminItemTestSectionProps) => {
  return (
    <div
      className=" rounded-[20px] auto flex justify-center flex-col 
    w-[90%] bg-[#4F378A] p-[20px]"
    >
      <h1 className="text-[white] w-[100%]">
        <span>Питання #1:{test?.form_question?.question_text}</span>
      </h1>
    </div>
  );
};
