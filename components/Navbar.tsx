import { IoIosMenu } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Icon from "./Icon";
import Link from "next/link";
import ChatBox from "./ChatBox";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 right-0 z-50 w-fit h-full flex flex-col gap-2 p-4 justify-between items-center">
        {/* <button className="z-20 md:w-fit hover:bg-[rgb(12,12,12)] text-white md:p-3 p-2 rounded-[6px] flex items-center justify-center gap-2">
          <Icon>
            <IoIosMenu />
          </Icon>
          <p className="hover:block hidden">MENU</p>
        </button> */}
        {/* <button className="relative bg-[rgb(12,12,12)] w-fit text-white md:p-3 p-2 rounded-[6px] flex items-center justify-center gap-2">
          <Icon>
            <IoChatboxEllipsesOutline />
          </Icon>
          <p className="md:block">CHAT</p>
          <ChatBox />
        </button> */}
      </nav>
    </>
  );
}
