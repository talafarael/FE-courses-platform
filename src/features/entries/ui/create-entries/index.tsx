import { Button } from "@/src/shared/ui/button/button";
import { useFactoryEntries } from "../../api/useFactoryEntries";
import { IFromEntries } from "../../model/form-entries";
import { FromEntries } from "../form-entries";
import { useState } from "react";
import { ModalWindow } from "@/src/shared/ui/modal";
import { useModal } from "@/src/shared/hook/use-modal";
import {
  ModalContext,
  useModalContext,
} from "@/src/shared/context/modal-context";

export interface CreateEntriesProps {
  unit_id: string;
  order: number;
}
export const CreateEntries = ({ unit_id, order }: CreateEntriesProps) => {
  const { handlerFactoryEntries, error, loading } = useFactoryEntries();
  const modal = useModal();
  const { isOpen, toggle, close } = modal;
  const handlerSend = async (data: IFromEntries) => {
    await handlerFactoryEntries({
      data,
      state: "create",
      unit_id,
      order,
      handlerCloseWindow: toggle,
    });
  };
  return (
    // <ModalContext value={modal}>
    <div className="w-auto">
      {!isOpen && <Button label="Додати інпут" handlerEvent={toggle} />}
      {isOpen && (
        <ModalWindow
          children={
            <FromEntries
              handlerSend={handlerSend}
              error={error}
              loading={loading}
            />
          }
          handlerClose={close}
        />
      )}
    </div>
    // </ModalContext>
  );
};
