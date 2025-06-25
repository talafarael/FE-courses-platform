import { Education } from "@/src/widgets/main-page/ui/education";
import { Statistic } from "@/src/widgets/main-page/ui/statistic/statistic";
import { Courses } from "@/src/widgets/main-page/ui/courses";
import React from "react";
import { HelloBar } from "@/src/widgets/main-page/ui/hellow-bar";

const Main = () => {
  return (
    <div className="flex flex-col mt-[20px] max-w-[1500px] w-[100%] justify-center items-center p-2 gap-5">
      <HelloBar />
      <div className="flex max-xl:flex-col justify-between w-[100%]">
        <div className="flex w-[50%] max-xl:w-[100%] flex-col gap-4">
          <Education autosize={true} />
          <Courses autosize={true} />
        </div>
        <div>
          <Statistic />
        </div>
      </div>
    </div>
  );
};

export default Main;
