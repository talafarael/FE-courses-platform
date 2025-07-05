import { IEntries } from "../../model/entries";

export interface CardEntryProps {
  entry: IEntries;
}

export const CardEntry = ({ entry }: CardEntryProps) => {
  return (
    <div className="h-[40px]   bg-[#4AAB4E] rounded-[100px] w-[90%] flex items-center justify-center text-white">
      <h1 className="w-[90%]">
        {entry?.lecture?.name ? "Теорія #" : "Тест #"}
        {entry?.lecture?.name ?? entry?.test?.name}
      </h1>
    </div>
  );
};
