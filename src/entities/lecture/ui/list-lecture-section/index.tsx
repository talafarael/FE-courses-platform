import { LectureSection } from '@/src/features/lecture/model/lecture-section.model'
import React, { useState } from 'react'

export interface ListLectureSectionProps {
  lectureSections: LectureSection[]
}
export const ListLectureSection = () => {
  const [currentSlide, setCurrentSlide] = useState<boolean>()
  return (
    <div>

    </div>
  )
}
