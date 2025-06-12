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
    <html>
      <body>
        <LeftBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
