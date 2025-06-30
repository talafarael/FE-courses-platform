"use client";
import { useState } from "react";
import { IUnitCreate } from "../model/unit";
import { AxiosResponse } from "axios";
import { IApiResponse } from "@/src/shared/model/api/api-response";
import { AxiosMutation } from "@/src/shared/api/axios";
import { IUnit } from "@/src/entities/unit/model/unit";
import { handlerError } from "@/src/shared/lib/error/error-handler";

interface UpdateUnit {
  state: "edit";
  data: IUnitCreate & { id: string };
  handlerCloseWindow: () => void;
}

interface CreateUnit {
  state: "create";
  data: IUnitCreate;
  handlerCloseWindow: () => void;
}
export type FactoryUnitProps = CreateUnit | UpdateUnit;
type IUnitFactoryApi = IUnitCreate | (IUnitCreate & { id: string });

export const useFactoryUnit = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handlerFactoryUnit = async ({
    data,
    state,
    handlerCloseWindow,
  }: FactoryUnitProps) => {
    setLoading(true);
    try {
      const res: AxiosResponse<IApiResponse<IUnit>> =
        await AxiosMutation<IUnitFactoryApi>({
          method: state === "edit" ? "put" : "post",
          path: `admin/units/${state}`,
          data: data,
        });
      if (res?.data?.data) {
        handlerCloseWindow();
      }
      setError(undefined);
    } catch (e) {
      const errMessagehandlerError = handlerError(e);
      setError(errMessagehandlerError);
    }
    setLoading(false);
  };
  return { handlerFactoryUnit, error, loading };
};
