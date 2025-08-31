import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ICraeteQuestionForm, ICreateQuestionForm } from '../../model/api-question';
import { TextArea } from '@/src/shared/ui/text-area';

export interface FactoryInputSelectProps {
  register: UseFormRegister<ICreateQuestionForm>;
  errors?: FieldErrors<ICraeteQuestionForm>;
}

export const FactoryInputSelect = ({ register, errors }: FactoryInputSelectProps) => {
  return (
    <div className="w-[350px]  h-[200px]">
      <TextArea<ICreateQuestionForm>
        placeholder="question_text"
        name="question_text"
        register={register}
        error={errors ? errors["question_text"] : undefined}
      />
    </div>
  )
}
