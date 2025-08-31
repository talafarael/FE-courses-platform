"use client";
import { useState } from "react";
import { ICreateCourse, IEditCourse } from "../model/create-course";
import { imgForm, serializeForm } from "@/src/shared/lib/serilazeForm";
import { handlerError } from "@/src/shared/lib/error/error-handler";
import { AxiosMutation } from "@/src/shared/api/axios";
import { AxiosResponse } from "axios";
import { IApiResponse } from "@/src/shared/model/api/api-response";
import { ICourse } from "@/src/entities/course/model/course";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/src/shared/lib/constants/routes";

interface UpdateCourse {
  state: "edit";
  data: IEditCourse;
}

interface CreateCourse {
  state: "create";
  data: ICreateCourse;
}

interface CommonFields {
  file?: File;
}

type IFactoryCourse = (UpdateCourse | CreateCourse) & CommonFields;
export const useFactoryCourse = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const router = useRouter();

  const handlerFactoryCourse = async ({
    data,
    file,
    state,
  }: IFactoryCourse) => {
    setLoading(true);
    // its bad but in function value transform to string
    let form = serializeForm(data as unknown as Record<string, string>);
    form = imgForm({ img: file, form });
    try {
      const res: AxiosResponse<IApiResponse<ICourse>> =
        await AxiosMutation<FormData>({
          method: state === "edit" ? "put" : "post",
          path: `admin/courses/${state}`,
          data: form,
        });
      if (res?.data?.data) {
        router.push(`${ROUTES.course}/${res?.data?.data?.id}`);
        setError(undefined);
      }
    } catch (e) {
      const errMessagehandlerError = handlerError(e);
      setError(errMessagehandlerError);
    }
    setLoading(false);
  };
  return { handlerFactoryCourse, error, loading };
};
