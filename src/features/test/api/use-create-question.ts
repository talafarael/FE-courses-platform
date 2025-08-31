import { useCurrentCourseStore } from "@/src/entities/course/model/use-current-course";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  ICraeteQuestionFormApi,
  ICreateQuestionForm,
  ICreateQuestionSelect,
  ICreatQuestionForm,
} from "../model/api-question";
import { handlerError } from "@/src/shared/lib/error/error-handler";
import { ITest } from "@/src/entities/test/model/test";
import { AxiosResponse } from "axios";
import { IApiResponse } from "@/src/shared/model/api/api-response";
import { AxiosMutation } from "@/src/shared/api/axios";
import { transformFormQuestion } from "../utils/transform-form-question";
interface CreateQuestionProps {
  data: ICreateQuestionForm;
  order: number;
}
export const useCreateQuestion = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const params = useParams();
  const { getCurrentCourse, error: currentCourseError } =
    useCurrentCourseStore();
  const handlerCreateQuestion = async ({
    data,
    order,
  }: CreateQuestionProps) => {
    setLoading(true);
    try {
      let body: ICraeteQuestionFormApi;
      const id = params?.["entries-id"];
      if (!id) return;
      if (data.type === "select-question") {
        body = {
          test_id: id as string,
          order: order,
          select_question: {
            question_text: data.question_text,
            question_images: {}
          },
          form_question: null,
        } as ICreateQuestionSelect
      } else {//form-question
        const { questions, answers } = transformFormQuestion(data.question_text)
        body = {
          test_id: id as string,
          order: 3,
          select_question: null,
          form_question: {
            question_text: questions,
            question_images: {
            },
            answers
          }
        } as ICreatQuestionForm
      }
      const res: AxiosResponse<IApiResponse<ITest>> =
        await AxiosMutation<ICraeteQuestionFormApi>({
          method: "post",
          path: "admin/test/questions/create-entry",
          data: body,
        });
      if (res?.data?.data) {
        const id = params?.id;

        if (id) await getCurrentCourse(id as string);
        if (currentCourseError) setError(currentCourseError);
        //       handlerCloseWindow();
      }
      setError(undefined);
    } catch (e) {
      const errMessagehandlerError = handlerError(e);
      setError(errMessagehandlerError);
    }
    setLoading(false);
  };
  return { handlerCreateQuestion, error, loading };
};



