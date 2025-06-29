import { useParams } from "next/navigation";
import { useFactoryUnit } from "../../api/useFactoryUnit";
import { IFormUnit } from "../../model/unit";
import { FormUnit } from "../form-unit";

export const CreateUnit = () => {
  const { handlerFactoryUnit, error, loading } = useFactoryUnit();
  const params = useParams();
  const handlerSend = async (data: IFormUnit) => {
    const id = params?.id;
    if (id) {
      await handlerFactoryUnit({
        data: { ...data, course_id: id as string },
        state: "create",
      });
    }
  };

  return (
    <div>
      <FormUnit handlerSend={handlerSend} error={error} loading={loading} />
    </div>
  );
};
