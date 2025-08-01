import React from 'react'
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ICraeteQuestionForm, ICreateQuestionForm, IQuestionType } from "../../model/api-question"; import { factoryInputQuestionData } from "./factory-input-question.data";
import { useFormAnswerData } from '../form-question/use-form-answer.data';
import { InputForm } from '@/src/shared/ui/input-form';
import { Button } from '@/src/shared/ui/button/button';


interface FactoryInputAnswerProps {
  register: UseFormRegister<ICreateQuestionForm>;
  errors?: FieldErrors<ICraeteQuestionForm>;
}
export const FactoryInputAnswer: React.FC<FactoryInputAnswerProps> = ({
  register,
  errors,
}) => {
  const { handlerRemove, handlerAdd, formAnswerData } = useFormAnswerData()

  return (
    <div className='w-[100%] mt-[10px]'>
      {formAnswerData?.map((elem, index) => {
        const answer = elem[0]
        const assessment = elem[1]
        return (
          <div
            key={index}
            className='ml-[20px] flex  justify-end flex-row-reverse'
          >
            <InputForm<ICreateQuestionForm>
              type={answer.name}
              placeholder={answer.name}
              name={answer.name}
              register={register}
              error={errors ? errors[answer.name] : undefined}
            />
            <div className='w-[140px]'>
              <InputForm<ICreateQuestionForm>
                type={assessment.name}
                placeholder={assessment.name}
                name={assessment.name}
                register={register}
                error={errors ? errors[assessment.name] : undefined}
              />
            </div>

          </div>
        )
      }
      )}
      <Button handlerEvent={handlerAdd} label="Додати инпут" type='button' />
      <Button handlerEvent={handlerRemove} label="Додати " type='button' />

    </div>
  )
}
