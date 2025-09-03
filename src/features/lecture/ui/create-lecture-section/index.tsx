import React from 'react'
import { FormLectureSection } from '@/src/entities/lecture/ui/form-lecture-section'
import { ICreateLectureSectionForm } from '../../type/create-form-lecture-section'
import { lectureSectionMock } from '@/src/entities/lecture/mock/create-lecture-section-mock'

export interface CreateLectionSectionProps {
  order: number
}
export const CreateLectionSection = ({ order }: CreateLectionSectionProps) => {
  const handlerSend = (data: ICreateLectureSectionForm) => {

  }
  return (
    <div>
      <FormLectureSection
        handlerSend={handlerSend}
        lectureSectionDefaultValue={lectureSectionMock}
      />

    </div>
  )
}
