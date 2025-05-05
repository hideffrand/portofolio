import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import MomentumScroll from "./components/MomentumScroll";
import FollowingDiv from "./components/FollowingDiv";

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
        <div className="base-bg w-full h-screen fixed"></div>
        <FollowingDiv />

        <Navbar />
        {/* <MomentumScroll> */}
        <div className="max-w-[1024px] min-w-full md:px-[12%] px-4">{children}</div>
        {/* </MomentumScroll> */}
      </body>
    </html>
  );
}
