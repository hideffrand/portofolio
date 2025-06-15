import { FaHouse, FaLaptopCode } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaBusinessTime } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";

interface ILinks {
  href: string;
  label: any;
}

const links: ILinks[] = [
  { href: "#home", label: <FaHouse size={26} /> },
  { href: "#things-i-do", label: <FaLaptopCode size={30} /> },
  { href: "#experience", label: <FaBusinessTime size={30} /> },
  { href: "#works", label: <GoProjectRoadmap size={30} /> },
  { href: "#contact", label: <IoMdCall size={30} /> },
]

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between md:justify-center gap-6 px-6 py-4 md:py-6 fixed w-full md:w-fit z-40 top-0 right-1/2 translate-x-1/2 bg-[rgb(0,0,0,0.9)] border border-[rgb(200,200,200,0.2)] bg-blur-120 md:rounded-b-[10px]">
      {links.map((link, i) => (
        <a key={i} href={link.href} className="hover:text-white text-[rgb(120,120,120)]">{link.label}</a>
      ))}
    </nav>
  )
}