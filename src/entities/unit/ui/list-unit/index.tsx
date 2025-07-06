"use client";
import { useEffect, useState } from "react";
import { IUnit } from "../../model/unit";
import { CardUnit } from "../card-unit";

export interface ListUnitsProps {
	units: IUnit[];
}
export const ListUnits = ({ units }: ListUnitsProps) => {
	const [orderUnit, setOrderUnit] = useState<IUnit[]>(units);
	useEffect(() => {
		setOrderUnit(units);
	}, [units]);
	return (
		<div className="flex mt-[28px] flex-col w-[100%] items-center gap-[28px]">
			{orderUnit.slice().map((elem) => (
				<CardUnit unit={elem} key={elem.id} />
			))}
		</div>
	);
};
