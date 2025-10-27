"use client";
import { IUnit } from "../../model/unit";
import { useCallback, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { ListEntries } from "@/src/entities/entries/ui/list-entries";
import { UnitCardHeader } from "../card-unit-header";

export interface UnitCardProps {
  unit: IUnit;
}
export const CardUnit = ({ unit }: UnitCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handlerToggleEntries = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <div className="bg-purpleExtraLight border-cardBorder border-[1px] rounded-[18px] w-[90%] flex items-center justify-center flex-col mb-[20px]">
      <UnitCardHeader
        handlerToggleEntries={handlerToggleEntries}
        isOpen={isOpen}
        name={unit.name}
        order={unit.order + 1}
      />
      {isOpen && <ListEntries entries={unit.entries} />}
    </div>
  );
};
