export interface ProgressBarProps {
  progress: number;
  styleBar?: string;
}
export const ProgressBar = ({ progress, styleBar }: ProgressBarProps) => {
  console.log(progress);
  return (
    <div
      className={`h-[14] bg-[white] w-[200px] overflow-hidden  rounded-[30px] ${styleBar}`}
    >
      <div
        style={{ width: `${progress}%` }}
        className="bg-darkPurple h-[100%] rounded-[30px]  "
      ></div>
    </div>
  );
};
