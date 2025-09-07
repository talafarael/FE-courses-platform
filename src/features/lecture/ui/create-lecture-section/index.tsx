import React from 'react'
import { FormLectureSection } from '@/src/entities/lecture/ui/form-lecture-section'
import { ICreateLectureSectionForm } from '../../type/create-form-lecture-section'
import { lectureSectionMock } from '@/src/entities/lecture/mock/create-lecture-section-mock'
import { useCreateLecture } from '../../hook/use-create-lecture-section'
import { useParams } from 'next/navigation'

export interface CreateLectionSectionProps {
  order: number
}
export const CreateLectionSection = () => {
  const { createLectureSection, loading, error } = useCreateLecture()
  const params = useParams<{ "entries-id": string }>()
  const handlerSend = (data: ICreateLectureSectionForm) => {
    if (!params) return;
    createLectureSection({
      ...data,
      images: {},
      rounded_image: "",
      files: {},
    }, params["entries-id"] ?? "")

  }
  return (
    <div>
      <FormLectureSection
        handlerSend={handlerSend}
        loading={loading}
        error={error}
        lectureSectionDefaultValue={lectureSectionMock}
      />

    </div>
  )
}
