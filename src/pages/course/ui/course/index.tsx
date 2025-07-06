"use client";
import { useCurrentCourseStore } from "@/src/entities/course/model/use-current-course";
import { HeaderCourse } from "@/src/entities/course/ui/header-course";
import { UnitCourse } from "@/src/entities/unit/ui/unit-course";
import { useUserStore } from "@/src/entities/user/model/userStore";
import CreateUnitPage from "@/src/pages/units/ui/create-unit";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function CoursePage() {
	const [stateWindow, setStateWindow] = useState(false);
	const handlerToggleWindowUnit = () => setStateWindow(!stateWindow);
	const params = useParams();
	const { getCurrentCourse } = useCurrentCourseStore();
	const currentCurse = useCurrentCourseStore((state) => state.currentCurse);
	const user = useUserStore((state) => state.user);
	useEffect(() => {
		(async () => {
			const id = params?.id;
			if (id) await getCurrentCourse(id as string);
		})();
	}, []);

	if (!currentCurse) return "";
	return (
		<div className="w-[90%] min-h-[90vh] bg-purplelight border-[#79747E] border-[1px] flex flex-col items-center rounded-[18px]">
			<HeaderCourse {...currentCurse} />
			<UnitCourse
				admin={user?.has_admin_rights}
				handlerAdminAddModule={handlerToggleWindowUnit}
				unit={currentCurse.units}
			/>

			{stateWindow && (
				<CreateUnitPage
					order={currentCurse.units.length}
					handlerClose={handlerToggleWindowUnit}
				/>
			)}
		</div>
	);
}
