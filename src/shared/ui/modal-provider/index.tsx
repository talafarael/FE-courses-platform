import React, { ReactElement } from "react";
import { ModalContext } from "../../context/modal-context";
import { useModal } from "../../hook/use-modal";
import { ModalWindow } from "../modal";

export interface ModalProviderProps {
  buttonChildren: (handlerEvent: () => void) => ReactElement;
  children: ReactElement;
  onButtonClick?: () => void;
}

export const ModalProvider = ({
  children,
  buttonChildren,
  onButtonClick,
}: ModalProviderProps) => {
  const modal = useModal();
  const handleButtonClick = () => {
    modal.toggle();
    onButtonClick?.();
  };

  return (
    <ModalContext.Provider value={modal}>
      {buttonChildren(handleButtonClick)}
      {modal.isOpen && (
        <ModalWindow handlerClose={modal.close}>{children}</ModalWindow>
      )}
    </ModalContext.Provider>
  );
};
