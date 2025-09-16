import { LectureSection } from "@/src/features/lecture/model/lecture-section.model";
import Image from "next/image";
import React from "react";

export interface ItemLectureSectionProps {
  lectureSection?: LectureSection;
}
export const ItemLectureSection = ({
  lectureSection,
}: ItemLectureSectionProps) => {
  return (
    <div
      className="
      w-[100%] flex justify-center relative 
      flex-row
      items-center h-[100%]"
    >
      <div className="w-[140px] mt-[50px] h-[100%] flex justify-center">
        {lectureSection?.rounded_image && (
          <Image
            src={lectureSection?.rounded_image}
            alt="preview"
            width={100}
            height={100}
            className="rounded-[50%] 
          w-[100px] h-[100px] object-cover bg-white cursor-pointer"
          />
        )}
      </div>
      <div className="w-[75%] h-[70%] flex flex-col justify-between">
        <div>
          <h1 className="text-[32px] text-[white]">{lectureSection?.task}</h1>
          <p className="text-[white] text-[15px]">{lectureSection?.text}</p>
        </div>

        <div className="flex gap-[20px]">
          {lectureSection?.images &&
            Object.entries(lectureSection?.images).map(([key, url], index) => (
              <Image
                key={`${key}-${index}`}
                src={url}
                alt={key}
                width={120}
                height={120}
                className="w-[120px] h-[120px]   object-cover "
              />
            ))}
        </div>
      </div>
    </div>
  );
};
