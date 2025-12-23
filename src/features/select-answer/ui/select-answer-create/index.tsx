import { ModalProvider } from "@/src/shared/ui/modal-provider";
import { SelectAnswerForm } from "../select-answer-form";
import { Button } from "@/src/shared/ui/button/button";
import { useApi } from "@/src/shared/hook/use-api";
import { CreateSelectAnswer } from "../../api";
import { ISelectAnswerForm } from "../../model/select-answer-form";
import { ITestSelect } from "@/src/entities/test/model/test";

export interface SelectAnswerCreateProps {
  test: ITestSelect;
}

export const SelectAnswerCreate = ({ test }: SelectAnswerCreateProps) => {
  const { handlerSubmit, error, loading } = useApi();

  const handler = (data: ISelectAnswerForm) => {
    handlerSubmit(() =>
      CreateSelectAnswer(
        {
          ...data,
          question_id: test.select_question?.id ?? "",
          order: 0,
          // test.select_question,
          answer_images: {},
        },
        "admin/test/questions/select-answers/create",
      ),
    );
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <ModalProvider
      buttonChildren={(handlerEvent: () => void) => (
        <div className="w-[96%] flex justify-end">
          <Button
            style="w-[200px]"
            handlerEvent={handlerEvent}
            label="Create new answer"
          />
        </div>
      )}
      onButtonClick={handleButtonClick}
    >
      <SelectAnswerForm
        handlerSubmit={handler}
        error={error}
        loading={loading}
      />
    </ModalProvider>
  );
};
