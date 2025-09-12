import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FollowingDiv from "./components/FollowingDiv";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deff's Portfolio",
  description: "Hi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="base-bg w-full h-screen fixed"></div>
        <FollowingDiv />
        <div className="max-w-[1024px] min-w-full md:px-[12%] px-4">{children}</div>
      </body>
    </html>
  );
}
