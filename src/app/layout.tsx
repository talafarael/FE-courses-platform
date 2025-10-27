import React from "react";
import { AuthProvider } from "@/src/shared/lib/providers/auth-provider";
import "./style/globals.css";
export const metadata = {
  title: "next",
};
import { loadEnvConfig } from "@next/env";
import { mono, poppins, roboto } from "../shared/lib/constants/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);

  return (
    <html
      lang="en"
      className={`h-screen overflow-x-hidden  ${mono.className}  ${roboto.className} ${poppins.className}`}
    >
      <body className="h-full w-screen">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
