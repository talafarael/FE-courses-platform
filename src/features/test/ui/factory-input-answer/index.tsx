import React from 'react'
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ICraeteQuestionForm, ICreateQuestionForm, IQuestionType } from "../../model/api-question"; import { factoryInputQuestionData } from "./factory-input-question.data";
import { useFormAnswerData } from '../form-question/use-form-answer.data';
import { Input } from '@/src/shared/ui/input/input';
import { InputForm } from '@/src/shared/ui/input-form';


interface FactoryInputAnswerProps {
  register: UseFormRegister<ICreateQuestionForm>;
  errors?: FieldErrors<ICraeteQuestionForm>;
}
export const FactoryInputAnswer: React.FC<FactoryInputAnswerProps> = ({
  register,
  errors,
}) => {
  const { countAnswer, setCountAnswer, formAnswerData } = useFormAnswerData()
  return (
    <div>
      {formAnswerData?.map((elem, index) => {
        const answer = elem[0]
        const assessment = elem[1]
        return (
          <div key={index}>
            <InputForm<ICreateQuestionForm>
              type={answer.name}
              placeholder={answer.name}
              name={answer.name}
              register={register}
              error={errors ? errors[answer.name] : undefined}
            />
            <div>
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
    </div>
  )
}
