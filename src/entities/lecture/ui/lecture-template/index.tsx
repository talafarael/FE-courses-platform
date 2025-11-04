import clsx from "clsx";

export const LectureTemplate = ({
  children,
  style,
}: {
  style?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-[100%] flex justify-center items-center overflow-hidden">
      <div
        className={clsx(
          "w-[90vw] max-w-[1250px]   h-[70vh] bg-[#DFD5EC] flex flex-col justify-center items-center rounded-[10px]  ",
          style,
        )}
      >
        {children}
      </div>
    </div>
  );
};
