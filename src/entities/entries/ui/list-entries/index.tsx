"use client";
import { useEffect, useState } from "react";
import { IEntries } from "../../model/entries";
import { CardEntry } from "../card-entry";

export interface AdminListEntriesProps {
  entries: IEntries[];
}
export const ListEntries = ({ entries }: AdminListEntriesProps) => {
  const [entriesOrder, setEntriesOrder] = useState<IEntries[]>(
    [...entries].sort((a, b) => a.order - b.order),
  );
  useEffect(
    () => setEntriesOrder([...entries].sort((a, b) => a.order - b.order)),
    [entries],
  );

  return (
    <div className="w-[95%] mb-[20px] flex flex-col transition-all duration-300 ease-in-out  gap-[8px]">
      {entriesOrder.map((elem) => (
        <CardEntry key={elem.id} entry={elem} />
      ))}
    </div>
  );
};
