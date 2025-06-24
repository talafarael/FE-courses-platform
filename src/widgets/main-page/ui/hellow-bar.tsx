"use client";
import { Avatar } from "@/src/shared/ui/avatar";
import Link from "next/link";
import { ROUTES } from "@/src/shared/lib/constants/routes";
import { useUserStore } from "@/src/entities/user/model/userStore";

export const HelloBar = () => {
	const user = useUserStore((state) => state.user);

	return (
		<div className="w-[100%] h-[170px] bg-purplelight rounded-3xl border-2 border-purple p-2 flex items-center gap-5 justify-between">
			<div className="flex items-center flex-row gap-4">
				<Avatar />
				<div className="">
					<h1 className="text-2xl ">
						{!user ? "вітаємe вас 🤗 " : `вітаємо ${user?.card.full_name}`}
					</h1>
					<p>
						{!user
							? "Ви ще не користувач нашої платформи, але ви завжди можете ним стати "
							: "Переходьте до продовження навчання, переглядайте свій прогрес та дивітся оновлення прямо тут"}
					</p>
				</div>
			</div>
			{!user && (
				<Link
					className="px-4 py-2 bg-purple text-white rounded-2xl text-sm font-medium hover:opacity-90 transition"
					href={ROUTES.register}
				>
					Реєстрація
				</Link>
			)}
		</div>
	);
};
