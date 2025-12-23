"use client";
import { LectureTemplate } from "@/src/entities/lecture/ui/lecture-template";
import { ModalContext } from "@/src/shared/context/modal-context";
import { useModal } from "@/src/shared/hook/use-modal";
import { FormQuestion } from "../form-question";
import { useCreateQuestion } from "../../api/use-create-question";
import { ICreateQuestionForm } from "../../model/api-question";
import { ModalWindow } from "@/src/shared/ui/modal";
import { Button } from "@/src/shared/ui/button/button";

export interface CreateTestModalProps {
  order: number;
}

export const CreateTestModal = ({ order }: CreateTestModalProps) => {
  const modal = useModal();
  const {
    handlerCreateQuestion,
    error: createError,
    loading: createLoading,
  } = useCreateQuestion();
  const handlerSubmit = async (data: ICreateQuestionForm) => {
    await handlerCreateQuestion({ data, order });
  };
  const handlerToggle = () => {
    modal.toggle();
  };
  return (
    <ModalContext.Provider value={modal}>
      <div className="w-[90%] m-[20px]">
        <Button label="Create test" handlerEvent={handlerToggle} />
      </div>
      {modal.isOpen && (
        <ModalWindow handlerClose={handlerToggle}>
          <LectureTemplate>
            <div className="w-[80vw] max-w-[1100px] h-[50vh] bg-questPurple flex justify-center items-center rounded-[10px]">
              <FormQuestion
                handlerSubmit={handlerSubmit}
                error={createError}
                onLoading={createLoading}
                childrenCancelButton={
                  <Button label="Cancel" handlerEvent={handlerToggle} />
                }
              />
            </div>
          </LectureTemplate>
        </ModalWindow>
      )}
    </ModalContext.Provider>
  );
};
