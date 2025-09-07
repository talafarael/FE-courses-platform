import { IEntries, IEntriesLecture, IEntriesTest } from "../model/entries";

export const isLectureEntry = (entry: IEntries): entry is IEntriesLecture => {
  return entry.lecture !== undefined && entry.lecture !== null;
}

export const isTestEntry = (entry: IEntries): entry is IEntriesTest => {
  return !!entry.test;
};
