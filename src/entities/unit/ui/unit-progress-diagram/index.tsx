import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

export const UnitProgressDiagram = () => {
  const percentage = 54;

  return (
    <div className="h-[60px] w-[60px]">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: "24px",
          pathColor: "#6b46c1",
          textColor: "#50328e",
          trailColor: "#eee",
        })}
      />
    </div>
  );
};
