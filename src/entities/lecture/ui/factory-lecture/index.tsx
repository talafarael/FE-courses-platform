"use client";
import { IEntriesLecture } from "@/src/entities/entries/model/entries";
import { ChangeLectureSection } from "@/src/features/lecture/ui/change-lecture-section";
import { CreateLectionSection } from "@/src/features/lecture/ui/create-lecture-section";
import { useParams } from "next/navigation";

export interface LectureProps {
  entry: Partial<IEntriesLecture>;
  order: number;
}
export const FactoryLecture = ({ entry }: LectureProps) => {
  const params = useParams<{ "section-id": string }>();
  const sectionId = Array.isArray(params?.["section-id"])
    ? params["section-id"][0]
    : params?.["section-id"];

  return (
    <div>
      {" "}
      {sectionId ? <ChangeLectureSection /> : <CreateLectionSection />}
    </div>
  );
};
