"use client";
import { CreateEntries } from "@/src/features/entries/ui/create-entries";
import { IUnit } from "../../model/unit";
import arrowButtom from "@/public/unit-icons/arrow-buttom.svg";
import Image from "next/image";
import { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { useUserStore } from "@/src/entities/user/model/userStore";
import { UnitProgressDiagram } from "../unit-progress-diagram";
import { AdminListEntries } from "@/src/entities/entries/ui/admin-list-entries";

export interface CardUnitProps {
  unit: IUnit;
}
export const AdminCardUnit = ({ unit }: CardUnitProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const user = useUserStore((state) => state.user);

  const handlerToggleEntries = () => setIsOpen(!isOpen);
  return (
    <div className="bg-purpleExtraLight border-cardBorder border-[1px] rounded-[18px] w-[90%] flex items-center flex-col ">
      <button
        type="button"
        onClick={handlerToggleEntries}
        className="h-[80px] cursor-pointer  display flex justify-between w-[94%] items-center"
      >
        <div className="flex items-center">
          <UnitProgressDiagram />
          <h1 className="ml-[12px] font-bold">{unit.name}</h1>
        </div>
        <Image
          src={arrowButtom}
          alt="Toggle"
          className={`w-[24px] h-[24px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      {isOpen && <AdminListEntries entries={unit.entries} />}
      {isOpen && user?.has_admin_rights && (
        <div className="mt-[20px] mb-[20px] w-[90%] ">
          <CreateEntries order={unit.entries.length} unit_id={unit.id} />
        </div>
      )}
    </div>
  );
};
