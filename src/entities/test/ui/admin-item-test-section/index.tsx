import { ITest } from "../../model/test";

export interface AdminItemTestSectionProps {
  test: ITest;
}
export const AdminItemTestSection = ({ test }: AdminItemTestSectionProps) => {
  const typeQuestion;
  return (
    <div
      className=" rounded-[20px] h-[318px] flex justify-center flex-col 
    w-[90%] bg-[#4F378A] "
    >
      <h1 className="text-[white] w-[100%]">
        <span>Питання #1:{}</span>
      </h1>
      <div></div>
      <div></div>
    </div>
  );
};
