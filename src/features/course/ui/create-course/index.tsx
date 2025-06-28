"use client";
import React, { useState } from "react";
import { ICreateCourse } from "../../model/create-course";
import { mockCourse } from "../../model/mock-course";
import { FormCourse } from "../form-course";
import { useFactoryCourse } from "../../api/useFacrtory";

export const CreateCourse = () => {
  const [file, setFile] = useState<File>();
  const { handlerFactoryCourse, error, loading } = useFactoryCourse();
  const handlerSend = async (data: ICreateCourse) => {
    await handlerFactoryCourse({ data, file, state: "create" });
  };
  return (
    <div className="p-[50px] rounded-[10px]  bg-[#E8DEF8]">
      <FormCourse
        setFile={setFile}
        handlerSend={handlerSend}
        courseDefaultValue={mockCourse}
        error={error}
        loading={loading}
      />
    </div>
  );
};
