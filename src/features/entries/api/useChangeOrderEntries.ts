import { useCurrentCourseStore } from "@/src/entities/course/model/use-current-course";
import { handlerError } from "@/src/shared/lib/error/error-handler";
import { useParams } from "next/navigation";
import { useState } from "react";

export interface ChagneOrderEntriesProps{

}
export const useChangeOrderEntries = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const params = useParams();
  const { getCurrentCourse, error: currentCourseError } =
    useCurrentCourseStore();
  const handlerChagneOrderEntries = async ({handlerClose}: ) => {
    setLoading(true);
    try {
      
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
