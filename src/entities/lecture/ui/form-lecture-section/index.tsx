import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { ICreateLectureSectionForm } from '@/src/features/lecture/type/create-form-lecture-section';
import { FormLectureSectionSchema } from '@/src/features/lecture/model/schema';
export interface FormLectureSectionProps {
  lectureSectionDefaultValue: ICreateLectureSectionForm
  handlerSend: (data: ICreateLectureSectionForm) => void

}
export const FormLectureSection = (
  {
    lectureSectionDefaultValue,
    handlerSend

  }: FormLectureSectionProps
) => {
  const form = useForm<ICreateLectureSectionForm>({
    resolver: zodResolver(FormLectureSectionSchema),
    defaultValues: lectureSectionDefaultValue,
  });

  return (
    <FormProvider {...form}>
      <form
        className="w-auto bg-purplelight border-[#49454F] border-[2px] max-w-[800px] p-[30px] rounded-[10px]  flex flex-col items-center justify-center  "
        onSubmit={form.handleSubmit((data) => handlerSend(data))}
      >


      </form>
    </FormProvider>

  )
}
