import { IEntries } from "../../model/entries"
import { CardEntry } from "../card-entry"

export interface ListEntriesProps {
  entries: IEntries[]
}
export const ListEntries = ({ entries }: ListEntriesProps) => {
  return (
    <div>
      {
        entries?.map((elem) => <CardEntry entry={elem} />)


      }

    </div>
  )
}
