export interface HeaderProps {
  title: string;
}
export const HeaderTest = ({ title }: HeaderProps) => {
  return (
    <div>
      <h1 className="text-[28px]">{title}</h1>
    </div>
  );
};
