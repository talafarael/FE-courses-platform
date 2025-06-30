"use client";

import { AxiosMutation } from "@/src/shared/api/axios";
import { handlerError } from "@/src/shared/lib/error/error-handler";
import { IApiResponse } from "@/src/shared/model/api/api-response";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { ICreateEntries } from "../model/create-entries";
import { IEntries } from "@/src/entities/entries/model/entries";
import { IFromEntries } from "../model/form-entries";

interface DefEntries {
  unit_id: string;
  handlerCloseWindow: () => void;
  order: number;
}

interface UpdateEntries extends DefEntries {
  state: "edit";
  data: IFromEntries;
}

interface CreateEntries extends DefEntries {
  state: "create";
  data: IFromEntries;
}

export type FactoryEntriesProps = CreateEntries | UpdateEntries;
export const useFactoryEntries = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handlerFactoryEntries = async ({
    data,
    state,
    unit_id,
    order,
    handlerCloseWindow,
  }: FactoryEntriesProps) => {
    setLoading(true);
    try {
      let body: ICreateEntries;
      if (data.typeEntries === "lecture") {
        body = {
          unit_id: unit_id,
          order: order,
          lecture: {
            name: data.name,
          },
          test: null,
        };
      } else {
        body = {
          unit_id: unit_id,
          order: order,
          lecture: null,
          test: {
            name: data.name,
          },
        };
      }
      const res: AxiosResponse<IApiResponse<IEntries>> =
        await AxiosMutation<ICreateEntries>({
          method: state === "edit" ? "put" : "post",
          path: `admin/unit-entries/${state}`,
          data: body,
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
  return { handlerFactoryEntries, error, loading };
};
