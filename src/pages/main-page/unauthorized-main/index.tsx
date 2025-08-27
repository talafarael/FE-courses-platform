import { HelloBar } from "@/src/widgets/main-page/ui/hellow-bar";
import { Education } from "@/src/widgets/main-page/ui/education";
import { Statistic } from "@/src/widgets/main-page/ui/statistic/statistic";
import { Courses } from "@/src/widgets/main-page/ui/courses";
import React from "react";

const MainUnAuth = () => {
	return (
		<div className="flex flex-col  items-center p-2 gap-5  m-10">
			<HelloBar />

			<div className="flex flex-row  justify-between w-[1500px]">
				<div className="flex flex-col gap-4">
					<Education autosize={false} />
					<Courses autosize={false} />
				</div>
				<div>
					<Statistic />
				</div>
			</div>
		</div>
	);
};

export default MainUnAuth;
