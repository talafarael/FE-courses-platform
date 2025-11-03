"use client";
import { IEntriesLecture } from "@/src/entities/entries/model/entries";
import { ItemLectureSection } from "@/src/entities/lecture/ui/item-lecture-section";
import { useUserStore } from "@/src/entities/user/model/userStore";
import { LectureSection } from "@/src/features/lecture/model/lecture-section.model";
import { ROUTES } from "@/src/shared/lib/constants/routes";
import { Button } from "@/src/shared/ui/button/button";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface AdminListLectureSectionProps {
  currentSection: LectureSection;
  currentUnit: IEntriesLecture;
}
export const AdminListLectureSection = ({
  currentUnit,
}: AdminListLectureSectionProps) => {
  const [currentLectureSectionIndex, setCurrentLectureSectionIndex] =
    useState<number>(0);
  const params = useParams<{ id: string; "entries-id": string }>();
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const handlerNextLectureSection = () => {
    if (
      currentUnit?.lecture &&
      currentLectureSectionIndex + 1 >= currentUnit?.lecture.sections.length
    )
      return;
    setCurrentLectureSectionIndex((state) => state + 1);
  };
  const handlerPreviousLectureSection = () => {
    if (currentLectureSectionIndex <= 0) return;
    setCurrentLectureSectionIndex((state) => state - 1);
  };
  const handlerNavToChange = (sectionId: string) => {
    router.push(
      ROUTES.changeLectureSection(
        params?.id ?? "",
        params?.["entries-id"] ?? "",
        sectionId,
      ),
    );
  };

  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center flex-col">
      <div className="w-[90%] max-w-[1200px] flex justify-between">
        <div>
          <h1 className="">{currentUnit?.lecture?.name}</h1>
          <p>
            {currentLectureSectionIndex + 1}/
            {currentUnit?.lecture?.sections.length}
          </p>
        </div>
        {user?.has_admin_rights && (
          <Button
            handlerEvent={() =>
              handlerNavToChange(
                currentUnit?.lecture?.sections[currentLectureSectionIndex].id ??
                  "",
              )
            }
            label="Змінити"
          />
        )}
      </div>
      <div className="w-[70vw] h-[45vh] bg-questPurple flex justify-center items-center rounded-[10px]">
        <ItemLectureSection
          lectureSection={
            currentUnit?.lecture?.sections[currentLectureSectionIndex]
          }
        />
      </div>
      <div className="w-[70vw] h-[60px] max-w-[1200px] flex items-center justify-between">
        <Button
          style="h-[40px]"
          handlerEvent={handlerPreviousLectureSection}
          label="Назад"
        />
        <Button handlerEvent={handlerNextLectureSection} label="Впeред" />
      </div>
    </div>
  );
};
