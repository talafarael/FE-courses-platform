import { IEntries } from "../../model/entries";
import { CardEntry } from "../card-entry";

export interface ListEntriesProps {
  entries: IEntries[];
}
export const ListEntries = ({ entries }: ListEntriesProps) => {
  return (
    <div className="w-[95%] flex flex-col  gap-[8px]">
      {entries?.map((elem) => (
        <CardEntry key={elem.id} entry={elem} />
      ))}
    </div>
  );
};
