import { Button } from "@/src/shared/ui/button/button";
import { useState } from "react";
import { FromEntries } from "../form-entries";
import { useFactoryEntries } from "../../api/useFactoryEntries";
import { IFromEntries } from "../../model/form-entries";

export interface ChanageEntriesProps {
  defValue: IFromEntries;
  unit_id: string;
  order: number;
}
export const ChanageEntries = ({ defValue, unit_id, order }: ChanageEntriesProps) => {
  const { handlerFactoryEntries, error, loading } = useFactoryEntries();

  const [state, setState] = useState<boolean>(false);
  const handlerToggleState = () => {
    setState(!state);
  };
  const handlerSend = async (data: IFromEntries) => {
    await handlerFactoryEntries({
      data,
      state: "edit",
      unit_id,
      order,
      handlerCloseWindow: handlerToggleState,
    });
  };

  return (
    <div>
      {!state && <Button label="" handlerEvent={handlerToggleState} />}

      {state && (
        <FromEntries
          handlerSend={handlerSend}
          error={error}
          defValue={defValue}
          loading={loading}
        />
      )}
    </div>
  );
};
