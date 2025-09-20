import React from "react";
import { FormLectureSection } from "@/src/entities/lecture/ui/form-lecture-section";
import { ICreateLectureSectionForm } from "../../type/create-form-lecture-section";
import { lectureSectionMock } from "@/src/entities/lecture/mock/create-lecture-section-mock";
import { useCreateLecture } from "../../hook/use-create-lecture-section";
import { useParams } from "next/navigation";
import { LectureTemplate } from "@/src/entities/lecture/ui/lecture-template";

export interface CreateLectionSectionProps {
  order: number;
}
export const CreateLectionSection = () => {
  const { createLectureSection, loading, error } = useCreateLecture();
  const params = useParams<{ "entries-id": string }>();
  const handlerSend = (data: ICreateLectureSectionForm) => {
    if (!params) return;
    createLectureSection(
      {
        ...data,
        images: {},
        rounded_image: "",
        files: {},
      },
      params["entries-id"] ?? "",
    );
  };
  return (
    <LectureTemplate>
      <div className="w-[70vw] h-[45vh] bg-questPurple flex flex-col justify-center items-center rounded-[10px]">
        <h1 className="text-[white] text-[28px]">Створити секцію лекції</h1>
        <FormLectureSection
          handlerSend={handlerSend}
          loading={loading}
          error={error}
          lectureSectionDefaultValue={lectureSectionMock}
        />
      </div>
    </LectureTemplate>
  );
};
