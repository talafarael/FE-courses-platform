import { CreateEntries } from "@/src/features/entries/ui/create-entries";
import { IUnit } from "../../model/unit";
import arrowButtom from "@/public/unit-icons/arrow-buttom.svg";
import Image from "next/image";
import { useState } from "react";
import { ListEntries } from "@/src/entities/entries/ui/list-entries";
export interface CardUnitProps {
  unit: IUnit;
}
export const CardUnit = ({ unit }: CardUnitProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handlerToggleEntries = () => setIsOpen(!isOpen);
  return (
    <div className="bg-purpleExtraLight border-cardBorder border-[1px] rounded-[18px] w-[90%] flex items-center flex-col ">
      <button
        type="button"
        onClick={handlerToggleEntries}
        className="h-[80px] cursor-pointer  display flex justify-between w-[94%] items-center"
      >
        <h1>{unit.name}</h1>
        <Image
          src={arrowButtom}
          alt="Toggle"
          className={`w-[24px] h-[24px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      {isOpen && <ListEntries entries={unit.entries} />}
      {isOpen && (
        <div className="mt-[20px] mb-[20px] w-[90%] ">
          <CreateEntries order={unit.entries.length} unit_id={unit.id} />
        </div>
      )}
    </div>
  );
};
