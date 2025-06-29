"use client";
import CreateUnitPage from "@/src/pages/units/ui/create-unit";
import { useState } from "react";

export default function CoursePage() {
  const [stateWindow, setStateWindow] = useState(true);
  const handlerClose = () => setStateWindow(false);

  return (
    <div>{stateWindow && <CreateUnitPage handlerClose={handlerClose} />}</div>
  );
}
