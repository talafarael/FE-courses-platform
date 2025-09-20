"use client";
import React from "react";
import { LectureSection } from "../../model/lecture-section.model";
import { ICreateLectureSectionForm } from "../../type/create-form-lecture-section";
import { useChangeLectureSection } from "../../hook/use-change-lecture-section";
import { useFindCurrentSection } from "@/src/entities/lecture/hook/use-find-current-lecture-section";
import { FormLectureSection } from "@/src/entities/lecture/ui/form-lecture-section";
import { guardLecture } from "@/src/entities/lecture/utils/guard-type-section";
import { LoadImageLecture } from "../load-image-lecture-section";
import { UploadRoundImage } from "../upload-round-image";
import { useParams } from "next/navigation";
export interface ChangeLectureSectionProps {
  sectionLecture?: LectureSection;
}

export const ChangeLectureSection = () => {
  const { changeLectureSection, loading, error } = useChangeLectureSection();
  const params = useParams<{ id: string; "section-id": string }>();
  const { currentSection } = useFindCurrentSection();
  const handlerSubmit = (data: ICreateLectureSectionForm) => {
    if (!params?.["section-id"] || !params?.id) return;
    changeLectureSection(data, params["section-id"]);
  };
  return (
    <div className="w-[83vw] max-w-[1200px] h-[53vh] bg-[#DFD5EC] flex flex-col justify-center items-center rounded-[10px]">
      af
      <div className="w-[70vw]  max-w-[1200px] bg flex justify-center h-[90%] ">
        {currentSection && guardLecture(currentSection) && (
          <div className="w-[90%] relative bg-questPurple flex flex-col justify-center items-center rounded-[10px]">
            <div className="flex  justify-center items-center">
              <UploadRoundImage img={currentSection?.rounded_image} />
              <FormLectureSection
                error={error}
                loading={loading}
                handlerSend={handlerSubmit}
                lectureSectionDefaultValue={currentSection}
                label="Змінити"
              />
            </div>

            <LoadImageLecture img={currentSection.images} />
          </div>
        )}
      </div>
    </div>
  );
};
