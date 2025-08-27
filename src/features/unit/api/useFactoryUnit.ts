"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/src/shared/lib/constants/routes";
import { IUnitCreate } from "../model/unit";
import { AxiosResponse } from "axios";
import { IApiResponse } from "@/src/shared/model/api/api-response";
import { AxiosMutation } from "@/src/shared/api/axios";
import { IUnit } from "@/src/entities/unit/model/unit";
import { handlerError } from "@/src/shared/lib/error/error-handler";

interface UpdateUnit {
  state: "edit";
  data: IUnitCreate & { id: string };
}

interface CreateUnit {
  state: "create";
  data: IUnitCreate;
}
export type FactoryUnitProps = CreateUnit | UpdateUnit;
type IUnitFactoryApi = IUnitCreate | (IUnitCreate & { id: string });

export const useFactoryUnit = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const router = useRouter();

  const handlerFactoryUnit = async ({ data, state }: FactoryUnitProps) => {
    setLoading(true);
    try {
      const res: AxiosResponse<IApiResponse<IUnit>> =
        await AxiosMutation<IUnitFactoryApi>({
          method: state === "edit" ? "put" : "post",
          path: `units/${state}`,
          data: data,
        });
      if (res?.data?.data) {
        router.push(`${ROUTES.course}/${data.course_id}`);
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
