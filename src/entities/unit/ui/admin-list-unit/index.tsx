"use client";
import { useEffect, useState } from "react";
import { IUnit } from "../../model/unit";
import { AdminCardUnit } from "../admin-card-unit";

export interface AdminListUnitsProps {
  units: IUnit[];
}
export const AdminListUnits = ({ units }: AdminListUnitsProps) => {
  const [orderUnit, setOrderUnit] = useState<IUnit[]>(units);
  useEffect(() => {
    setOrderUnit(units);
  }, [units]);
  return (
    <div className="flex mt-[28px] flex-col w-[100%] items-center gap-[28px]">
      {orderUnit.slice().map((elem) => (
        <AdminCardUnit unit={elem} key={elem.id} />
      ))}
    </div>
  );
};
