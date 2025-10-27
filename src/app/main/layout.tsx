import React from "react";
import { LeftBar } from "@/src/widgets/left-bar";
import { Footer } from "@/src/widgets/footer";
import { UserLoad } from "../../entities/user/ui/user-laod";
export const metadata = {
  title: "next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-x-hidden flex justify-between  min-h-[100vh] flex-col w-screen">
      <LeftBar />
      <main className="flex-1 flex ml-[110px] h-max items-center justify-center p-4">
        {children}
      </main>
      <Footer />
      <UserLoad />
    </div>
  );
}
