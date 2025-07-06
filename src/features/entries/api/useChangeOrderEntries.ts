import { handlerError } from "@/src/shared/lib/error/error-handler";
import { useState } from "react";

export const useChangeOrderEntries = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const params = useParams();
  const { getCurrentCourse, error: currentCourseError } =
    useCurrentCourseStore();
  const handlerChagneOrderEntries = async ({handlerClose}: ) => {
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
        const id = params?.id;

        if (id) await getCurrentCourse(id as string);
        if (currentCourseError) setError(currentCourseError);
        handlerClose();
      }
      setError(undefined);
    } catch (e) {
      const errMessagehandlerError = handlerError(e);
      setError(errMessagehandlerError);
    }
    setLoading(false);
  };
  return { handlerChagneOrderEntries, error, loading };
};
