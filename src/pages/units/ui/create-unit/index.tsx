"use client";
import { CreateUnit } from "@/src/features/unit/ui/create-unit";
import { ModalWindow } from "@/src/shared/ui/modal";
interface CreateUnitPageProps {
  handlerClose: () => void;
}
export default function CreateUnitPage({ handlerClose }: CreateUnitPageProps) {
  return (
    <ModalWindow handlerClose={handlerClose}>
      <CreateUnit />
    </ModalWindow>
  );
}
