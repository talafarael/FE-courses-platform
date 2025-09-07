import React from 'react'
import { LectureSection } from '../../model/lecture-section.model';

export interface ChangeLectureSectionProps {
  sectionLecture?: LectureSection
}

export const ChangeLectureSection = ({ sectionLecture }: ChangeLectureSectionProps) => {
  return (
    <div>
      {sectionLecture?.task}
    </div>
  )
}
