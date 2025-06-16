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
    <html lang="en"  className="h-full">
      <body className="h-full">
        <LeftBar />
        <main className="flex-1 flex items-center justify-center">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
