import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICreateLectureSectionForm } from "@/src/features/lecture/type/create-form-lecture-section";
import { FormLectureSectionSchema } from "@/src/features/lecture/model/schema";
import { InputsLectureSection } from "../inputs-lecture-serction";
import { Button } from "@/src/shared/ui/button/button";
export interface FormLectureSectionProps {
  lectureSectionDefaultValue: ICreateLectureSectionForm;
  handlerSend: (data: ICreateLectureSectionForm) => void;
  error: string | null;
  loading: boolean;
  label?: string;
}
export const FormLectureSection = ({
  lectureSectionDefaultValue,
  handlerSend,
  error,
  loading,
  label,
}: FormLectureSectionProps) => {
  const form = useForm<ICreateLectureSectionForm>({
    resolver: zodResolver(FormLectureSectionSchema),
    defaultValues: lectureSectionDefaultValue,
  });

  return (
    <FormProvider {...form}>
      <form
        className="w-[auto]   max-w-[800px] p-[30px] rounded-[10px]  flex flex-col items-center justify-center  "
        onSubmit={form.handleSubmit((data) => handlerSend(data))}
      >
        <InputsLectureSection
          errors={form.formState.errors}
          register={form.register}
        />
        {loading && <h1>Завантаження</h1>}
        {error && <h1>{error}</h1>}
        <div className="h-[40px] mt-[20px]">
          <Button label={label ?? "Створити"} type="submit" />
        </div>
      </form>
    </FormProvider>
  );
};
