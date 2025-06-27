"use client";
import { useState } from "react";
import { ICreateCourse } from "../../model/create-course";
import { mockCourse } from "../../model/mock-course";
import { FormCourse } from "../form-course";

export const CreateCourse = () => {
  const [file, setFile] = useState<File>();

  const handlerSend = (data: ICreateCourse) => {
    console.log(data);
  };
  return (
    <div className="p-[50px] rounded-[10px]  bg-[#E8DEF8]">
      <FormCourse
        setFile={setFile}
        handlerSend={handlerSend}
        courseDefaultValue={mockCourse}
      />
    </div>
  );
};
