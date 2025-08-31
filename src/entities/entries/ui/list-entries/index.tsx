"use client";
import { useEffect, useState } from "react";
import { IEntries } from "../../model/entries";
import { CardEntry } from "../card-entry";
import { Button } from "@/src/shared/ui/button/button";

export interface ListEntriesProps {
	entries: IEntries[];
}
export const ListEntries = ({ entries }: ListEntriesProps) => {
	const [orderChange, setOrderChange] = useState<boolean>(false);
	const [entriesOrder, setEntriesOrder] = useState<IEntries[]>(
		[...entries].sort((a, b) => a.order - b.order),
	);
	useEffect(
		() => setEntriesOrder([...entries].sort((a, b) => a.order - b.order)),
		[entries],
	);

	const normalizeOrder = (arr: IEntries[]) => {
		return arr
			.sort((a, b) => a.order - b.order)
			.map((item, index) => ({ ...item, order: index }));
	};

	const handlerRiseUp = (id: string) => {
		setEntriesOrder((prevEntries) => {
			const entriesCopy = [...prevEntries];

			entriesCopy.sort((a, b) => a.order - b.order);

			const index = entriesCopy.findIndex((item) => item.id === id);

			if (index === 0) return prevEntries;

			const currentOrder = entriesCopy[index].order;
			entriesCopy[index].order = entriesCopy[index - 1].order;
			entriesCopy[index - 1].order = currentOrder;

			entriesCopy.sort((a, b) => a.order - b.order);
			console.log(normalizeOrder(entriesCopy));
			setOrderChange(true);
			return normalizeOrder(entriesCopy);
		});
	};

	const handlerFallDown = (id: string) => {
		setEntriesOrder((prevEntries) => {
			const entriesCopy = [...prevEntries].sort((a, b) => a.order - b.order);

			const index = entriesCopy.findIndex((item) => item.id === id);

			if (index === -1 || index === entriesCopy.length - 1) return prevEntries;

			const tempOrder = entriesCopy[index].order;
			entriesCopy[index].order = entriesCopy[index + 1].order;
			entriesCopy[index + 1].order = tempOrder;
			setOrderChange(true);

			return normalizeOrder(entriesCopy);
		});
	};
	return (
		<div className="w-[95%] flex flex-col transition-all duration-300 ease-in-out  gap-[8px]">
			{entriesOrder.map((elem) => (
				<CardEntry
					key={elem.id}
					handlerRiseUp={handlerRiseUp}
					handlerFallDown={handlerFallDown}
					entry={elem}
				/>
			))}
			{orderChange && (
				<div>
					<Button label="Відхилити" />
					<Button label="Змінити" />
				</div>
			)}
		</div>
	);
};
