"use client";
import { CreateEntries } from "@/src/features/entries/ui/create-entries";
import { IUnit } from "../../model/unit";
import { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { useUserStore } from "@/src/entities/user/model/userStore";
import { AdminListEntries } from "@/src/entities/entries/ui/admin-list-entries";
import { UnitCardHeader } from "../card-unit-header";

export interface CardUnitProps {
  unit: IUnit;
}
export const AdminCardUnit = ({ unit }: CardUnitProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const user = useUserStore((state) => state.user);

  const handlerToggleEntries = () => setIsOpen(!isOpen);
  return (
    <div className="bg-purpleExtraLight border-cardBorder border-[1px] rounded-[18px] w-[90%] flex items-center flex-col ">
      <UnitCardHeader
        handlerToggleEntries={handlerToggleEntries}
        isOpen={isOpen}
        name={unit.name}
        order={unit.order}
      />{" "}
      {isOpen && <AdminListEntries entries={unit.entries} />}
      {isOpen && user?.has_admin_rights && (
        <div className="mt-[20px] mb-[20px] w-[90%] ">
          <CreateEntries order={unit.entries.length} unit_id={unit.id} />
        </div>
      )}
    </div>
  );
};
