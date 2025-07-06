"use client";
import { CreateUnit } from "@/src/features/unit/ui/create-unit";
import { ModalWindow } from "@/src/shared/ui/modal";
interface CreateUnitPageProps {
	handlerClose: () => void;
	order: number;
}
export default function CreateUnitPage({
	handlerClose,
	order,
}: CreateUnitPageProps) {
	return (
		<ModalWindow handlerClose={handlerClose}>
			<CreateUnit order={order} handlerCloseWindow={handlerClose} />
		</ModalWindow>
	);
}
