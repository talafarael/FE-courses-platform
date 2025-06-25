/* eslint-disable */
import { FieldErrors, FormProvider, useForm } from "react-hook-form";
import { ICourse } from "../../model/course";
import { zodResolver } from "@hookform/resolvers/zod";
import { CourseSchema } from "../../model/schema";

export interface CourseFormProps {
  defaultValue?: ICourse;
}

export const CourseForm: React.FC<CourseFormProps> = ({ defaultValue }) => {
  const form = useForm<ICourse>({
    // resolver: zodResolver(CourseSchema),
  });
  console.log(defaultValue);
  return (
    <div>hell</div>
    //<FormProvider {...form}>
    // <form
    //  className="w-[50%] max-lg:w-[100%]  flex flex-col items-end justify-center max-lg:items-center "
    //    onSubmit={form.handleSubmit(onSubmit)}
    // ></form>
    //</FormProvider>
  );
};
