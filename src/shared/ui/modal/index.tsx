import { ReactElement } from "react";

export interface ModalWindowProps {
  children: ReactElement;
  handlerClose: () => void;
}
export const ModalWindow = ({ children, handlerClose }: ModalWindowProps) => {
  return (
    <div
      onClick={handlerClose}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handlerClose();
        }
      }}
      className="w-[100vw] fixed h-[100vh]   overflow-y-hidden bg-milk/50  backdrop-blur z-40 top-0 left-0 flex justify-center items-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        {children}
      </div>
    </div>
  );
};
