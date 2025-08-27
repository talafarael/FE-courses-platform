import React from "react";
import { AuthProvider } from "@/src/shared/lib/providers/auth-provider";
import "./style/globals.css";
export const metadata = {
  title: "next",
};
import { loadEnvConfig } from "@next/env";

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);

	return (
		<html lang="en" className="h-screen overflow-x-hidden">
			<body className="h-full w-screen">
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	);

