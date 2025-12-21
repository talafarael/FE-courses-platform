import { ReactElement } from "react";
import { ModalContext } from "../../context/modal-context";
import { useModal } from "../../hook/use-modal";
import { ModalWindow } from "../modal";

export interface ModalProviderProps {
  buttonChildren: ReactElement;
  children: ReactElement;
}

export const ModalProvider = ({
  children,
  buttonChildren,
}: ModalProviderProps) => {
  const modal = useModal();
  return (
    <ModalContext.Provider value={modal}>
      {buttonChildren}
      <ModalWindow handlerClose={modal.close}>{children}</ModalWindow>
    </ModalContext.Provider>
  );
};
