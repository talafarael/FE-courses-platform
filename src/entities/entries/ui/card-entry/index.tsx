import { IEntries } from "../../model/entries"

export interface CardEntryProps {
  entry: IEntries
}

export const CardEntry = ({ entry }: CardEntryProps) => {
  return (
    <div>
      {entry.name}
    </div>
  )
}
