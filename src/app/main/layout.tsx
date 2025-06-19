import React from "react";
import { LeftBar } from "@/src/widgets/left-bar";
import { Footer } from "@/src/widgets/footer";
export const metadata = {
  title: "next",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
      <html lang="en" className="h-full">
        <body className="h-full">
          <div className="min-h-screen flex flex-col">
            <LeftBar />
            <main className="flex-1 ml-[110px] p-4">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
  );
}
