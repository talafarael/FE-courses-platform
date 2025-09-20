export const LectureTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-[100%] flex justify-center items-center">
      <div className="w-[85vw] max-w-[1200px] h-[60vh] bg-[#DFD5EC] flex flex-col justify-center items-center rounded-[10px]  ">
        {children}
      </div>
    </div>
  );
};
