import { ModalProvider } from "@/src/shared/ui/modal-provider";
import { SelectAnswerForm } from "../select-answer-form";
import { Button } from "@/src/shared/ui/button/button";
import { useApi } from "@/src/shared/hook/use-api";

export const SelectAnswerCreate = ({}) => {
  const { handlerSubmit, error, loading } = useApi();
  return (
    <ModalProvider buttonChildren={<Button label="Create new answer" />}>
      <SelectAnswerForm />
    </ModalProvider>
  );
};
