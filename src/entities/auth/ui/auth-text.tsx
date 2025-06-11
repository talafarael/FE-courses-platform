export type AuthTextProps = {
  title: string;
  subTitle: string;
};
export const AuthText = ({ title, subTitle }: AuthTextProps) => {
  return (
    <div className="flex w-auto max-lg:text-center flex-col max-lg:items-center gap-3">
      <h1 className="text-3xl ">{title}</h1>
      <p className="text-l  max-lg:mt-[5px]">{subTitle}</p>
    </div>
  );
};
