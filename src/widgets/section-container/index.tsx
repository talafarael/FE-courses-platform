import { ReactNode } from "react";

export interface SectionContainerProps {
  children: ReactNode;
}
export const SectionContainer = ({ children }: SectionContainerProps) => {
  return (
    <div className="w-[80%] h-[100%] bg-questPurple flex justify-center items-center rounded-[10px]">
      {children}
    </div>
  );
};
