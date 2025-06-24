"use client";
import Link from "next/link";
import { ROUTES } from "@/src/shared/lib/constants/routes";
interface EducationProps {
	autosize: boolean;
}

export const Education = ({ autosize = false }: EducationProps) => {
	return (
		<div className="w-[100%] h-[200px] bg-purplelight rounded-3xl border-2 border-purple p-4 flex flex-col justify-around">
			<h1 className="text-2xl font-bold">Навчання</h1>
			{!autosize && (
				<div className="flex flex-col gap-2">
					<p className="text-xl">
						Наразі, навчання вам недоступне 😔, але це можно легко виправити
						😇обравши курс який сподобається та не втрачати часу
					</p>
					<div className="flex flex-row justify-between">
						<p>Ознайомитись з спеціальністю можете тут</p>
						<Link
							className="px-4 py-2 bg-purple text-white rounded-2xl text-sm font-medium hover:opacity-90 transition"
							href={ROUTES.specialty}
						>
							До спеціальностей
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};
