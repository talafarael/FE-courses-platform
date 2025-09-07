import { LectureSection } from '@/src/features/lecture/model/lecture-section.model'
import React from 'react'

export interface ItemLectureSectionProps {
  lectureSection?: LectureSection
}
export const ItemLectureSection = ({ lectureSection }: ItemLectureSectionProps) => {
  return (
    <div>
      <h1>
        {lectureSection?.text}
      </h1>

    </div>
  )
}
