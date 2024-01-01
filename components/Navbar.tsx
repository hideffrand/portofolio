"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ColorPallete from "./ColorPallete";
import Headline from "./Headline";

export default function Navbar() {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const links: any[] = [
    {
      title: "HOME",
      href: "#home",
    },
    {
      title: "WORKS",
      href: "#works",
    },
    {
      title: "ABOUT ME",
      href: "#aboutme",
    },
    {
      title: "CONTACT",
      href: "#contact",
    },
  ];

  function getAlignment(i: number) {
    if ((i + 1) % 2 === 0) {
      return "text-end";
    } else {
      return "text-start";
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex items-center justify-between px-4 py-4 text-white absolute z-10 font-poppins"
      >
        <ColorPallete />
        <div className="flex gap-2 md:gap-4 items-center">
          <a
            href="#contact"
            className="hidden md:block px-6 py-2 rounded-full text-green"
          >
            CONTACT
          </a>
          <button onClick={() => setSidebar(true)}>MENU</button>
        </div>
      </motion.nav>

      {/* SIDEBAR */}
      {sidebar && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full z-50"
        >
          <div className="absolute overflow-y-scroll h-screen w-full bg-secondary-black text-gray-500 leading-none tracking-tight flex flex-col justify-between">
            <div className="w-full flex justify-end">
              <button
                onClick={() => setSidebar(false)}
                className="text-white font-poppins px-6 py-4 mx-2 my-2 hover:text-red"
              >
                CLOSE
              </button>
            </div>
            {links.map((link, i) => (
              <a
                key={i}
                onClick={() => setSidebar(false)}
                className={`
                ${getAlignment(i)} 
                px-4 font-passion1 text-9xl h-1/4 text-white hover:text-black hover:bg-green transition duration-200
              `}
                href={link.href}
              >
                {link.title}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
