"use client";
import { useEffect } from "react";
import { useUserStore } from "../../model/userStore";

export const UserLoad = () => {
	const { getUser } = useUserStore();

	useEffect(() => {
		(async () => {
			await getUser();
		})();
	}, []);
	return null;
};
