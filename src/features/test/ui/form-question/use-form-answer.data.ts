import { useState } from "react"
import { ICraeteQuestionForm } from "../../model/api-question"
import { IINputDataExtend } from "@/src/shared/model/input-data"
export const useFormAnswerData = () => {
  const [countAnswer, setCountAnswer] = useState<number>(3)
  const formAnswerData: IINputDataExtend<
    keyof ICraeteQuestionForm
  >[][] = []
  for (let i = 1; i < countAnswer; i++) {
    formAnswerData.push([
      {
        name: `answer${i}` as keyof ICraeteQuestionForm,
        placeholder: "Прихований",
        state: "normal-input",
      },
      {
        name: `assessment${i}` as keyof ICraeteQuestionForm,
        placeholder: "Прихований",
        state: "small-input",
      }
    ])
  }
  const handlerAdd = () => {
    if (countAnswer >= 5) return;
    setCountAnswer((prev) => ++prev)
  }
  const handlerRemove = () => {
    if (countAnswer == 3) return;
    setCountAnswer((prev) => --prev)
  }
  return { handlerRemove, handlerAdd, formAnswerData }
}
