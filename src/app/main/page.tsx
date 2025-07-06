"use client";

import "../style/globals.css";
import React from "react";
import { useUserStore } from "@/src/entities/user/model/userStore";
import { Button } from "@/src/shared/ui/button/button";
import Link from "next/link";
import { ROUTES } from "@/src/shared/lib/constants/routes";
import Main from "@/src/pages/main-page/authorized-main";

export default function Home() {
	const { loading, error } = useUserStore();

	if (loading) {
		return <div>Загрузка...</div>;
	}
	if (error) {
		return (
			<div className=" flex flex-col justify-center items-center">
				{error}
				<Link href={ROUTES.login} className="mt-[20px]">
					<Button label="Relogin" />
				</Link>
			</div>
		);
	}
	return <Main />;
}
