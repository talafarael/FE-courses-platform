import { ReactNode } from "react";

export interface BorderedContainerProps {
  style?: string;
  children: ReactNode;
}
export const BorderedContainer = ({
  style,
  children,
}: BorderedContainerProps) => {
  return (
    <div
      className={`   bg-pink w-[100%] h-[100%] border border-cardBorder border-[1px] rounded-[10px]
    ${style}`}
    >
      {children}
    </div>
  );
};
