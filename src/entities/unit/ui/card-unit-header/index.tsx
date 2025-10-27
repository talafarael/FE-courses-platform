import Image from "next/image";
import { UnitProgressDiagram } from "../unit-progress-diagram";
import arrowButtom from "@/public/unit-icons/arrow-buttom.svg";
import { memo } from "react";

export interface UnitCardHeaderProps {
  handlerToggleEntries: () => void;
  name: string;
  isOpen: boolean;
  order?: number;
}

export const UnitCardHeader = memo(
  ({ handlerToggleEntries, name, isOpen, order }: UnitCardHeaderProps) => {
    return (
      <button
        type="button"
        onClick={handlerToggleEntries}
        className="h-[80px] cursor-pointer  display flex justify-between w-[94%] items-center"
      >
        <div className="flex items-center">
          <UnitProgressDiagram />
          <h1 className="ml-[12px] font-mono">
            <span className=" font-bold font-roboto">Модуль {order}:</span>
            {name}
          </h1>
        </div>
        <Image
          src={arrowButtom}
          alt="Toggle"
          className={`w-[24px] h-[24px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
    );
  },
);
