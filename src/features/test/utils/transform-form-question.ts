export interface IAnswerFormQuestion {
  [key: string]: [number, string]
}

export const transformFormQuestion = (data: string) => {
  const answers: IAnswerFormQuestion = {}
  let counter = 0

  const questions = data.replace(/\{([^}]+)\}/g, (_, inside) => {
    const [part1, part2] = inside.split(",").map((s: string) => s.trim())
    answers[`${counter}`] = [Number(part2), part1]
    return `{${counter++}}`
  })

  return { questions, answers }
}


