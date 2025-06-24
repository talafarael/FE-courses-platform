import { ICourse } from "./course";

export const mockCourse: ICourse = {
  name: "",
  description: "",
  price_in_uah: 0,
  is_hidden: false,
  units: [
    {
      name: "",
      order: 0,
      content: [
        {
          order: 0,
          lecture: {
            name: "",
            sections: [
              {
                task: "",
                text: "",
                images: [""],
              },
            ],
          },
          test: {
            name: "",
            questions: [
              {
                order: 0,
                select_question: {
                  question_text: "",
                  question_images: [""],
                  answers: [
                    {
                      answer_text: "",
                      answer_images: [""],
                      order: 0,
                      is_correct: false,
                    },
                  ],
                },
                form_question: {
                  question_text: "",
                  question_images: [""],
                  answers: {
                    "": "",
                  },
                },
              },
            ],
          },
        },
      ],
    },
  ],
};
