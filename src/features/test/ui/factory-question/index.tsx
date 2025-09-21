import { FormQuestion } from "../form-question";
import { ITest } from "@/src/entities/test/model/test";
import { useCreateQuestion } from "../../api/use-create-question";
import { ICreateQuestionForm } from "../../model/api-question";

interface FactoryQuestionProps {
  question?: ITest;
  order: number;
}

export const FactoryQuestion = ({ order }: FactoryQuestionProps) => {
  const {
    handlerCreateQuestion,
    error: createError,
    loading: createLoading,
  } = useCreateQuestion();
  const handlerSubmit = async (data: ICreateQuestionForm) => {
    await handlerCreateQuestion({ data, order });
  };
  return (
    <div className="w-[80vw] max-w-[1100px] h-[50vh] bg-questPurple flex justify-center items-center rounded-[10px]">
      <FormQuestion
        handlerSubmit={handlerSubmit}
        error={createError}
        onLoading={createLoading}
      />
    </div>
  );
};
