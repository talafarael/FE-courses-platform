"use client";
import { ProtectedRoute } from "@/src/shared/lib/router/protected-route";
import "../style/globals.css";
import React, { useEffect, useState } from "react";
import MainAuth from "@/src/pages/main-page/authorized-main";
import MainUnAuth from "@/src/pages/main-page/unauthorized-main";
import { getMeQuery } from "@/src/entities/user/api/user";

export default function Home() {
	const [isAuth, setIsAuth] = useState<boolean | null>(null);

	useEffect(() => {
		const token = localStorage.getItem("token");
		setIsAuth(!!token);

		(async () => {
			await getMeQuery();
		})();
	}, []);

	if (isAuth === null) {
		return <div>Загрузка...</div>;
	}

	return (
		<ProtectedRoute>{isAuth ? <MainAuth /> : <MainUnAuth />}</ProtectedRoute>
	);
}
