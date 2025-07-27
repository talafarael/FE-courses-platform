import { loadavg } from "os";
import { FormQuestion } from "../form-question";
import { ITest } from "@/src/entities/test/model/test";
import { useCreateQuestion } from "../../api/use-create-question";
import { ICraeteQuestionForm, ICreateQuestionForm } from "../../model/api-question";

interface FactoryQuestionProps {
  question?: ITest;
  order: number;
}

export const FactoryQuestion = ({ question, order }: FactoryQuestionProps) => {
  const {
    handlerCreateQuestion,
    error: createError,
    loading: createLoading,
  } = useCreateQuestion();
  const handlerSubmit = async (data: ICreateQuestionForm) => {
    //await handlerCreateQuestion({ data, order });
  };
  return (
    <div className="w-[100%] h-[200px] bg-questPurple">
      <FormQuestion
        handlerSubmit={handlerSubmit}
        error={createError}
        onLoading={createLoading}
      />
    </div>
  );
};
