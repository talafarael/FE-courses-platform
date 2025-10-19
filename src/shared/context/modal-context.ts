import { createContext, useContext } from "react";
import { useModal } from "../hook/use-modal";

type ModalContextType = ReturnType<typeof useModal> | null;

export const ModalContext = createContext<ModalContextType>(null);

export const useModalContext = (): NonNullable<ModalContextType> => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};
