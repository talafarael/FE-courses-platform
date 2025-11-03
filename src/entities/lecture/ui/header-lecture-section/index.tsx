import { ProgressBar } from "@/src/shared/ui/progress-bar";

export interface HeaderLectureSectionProps {
  currentLectureSectionIndex: number;
  name: string;
  lectureLength: number;
  sectionTitle: string;
}

export const HeaderLectureSection = ({
  currentLectureSectionIndex,
  name,
  lectureLength,
  sectionTitle,
}: HeaderLectureSectionProps) => {
  const progress = Math.ceil(
    (currentLectureSectionIndex / lectureLength) * 100,
  );

  return (
    <div className="w-[90%] h-[170px] max-w-[1200px] flex-col flex itmes-center justify-center">
      <h1 className="text-[28px] font-bold">{name}</h1>
      <div className="flex h-[20px] items-center">
        <p className="font-mono font-bold text-[15px]">Прогресс вивчення:</p>
        <ProgressBar progress={progress} />
        <p className="font-mono">&nbsp;{progress}%</p>
      </div>
      <p>
        <span className="font-bold font-mono">
          Завдання {currentLectureSectionIndex}:{" "}
        </span>
        {sectionTitle}
      </p>
    </div>
  );
};
