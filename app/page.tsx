"use client";

import CircleLeft from "@/components/CircleLeft";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import WorksSection from "@/components/WorksSection";
import { words } from "@/data";

export default function Home() {

  // Controls for animations
  const controls = useAnimation();
  const [workSectionRef, inView] = useInView({
    triggerOnce: false,
  });

  // Animate works when it enters the view
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex items-center justify-between px-4 py-4 text-white absolute z-10 font-poppins"
      >
        2023
        <div className="flex gap-2 md:gap-10 items-center">
          <button>MENU</button>
          <button className="hidden md:block bg-red px-6 py-2 rounded-full">
            "You are Hired!"
          </button>
        </div>
      </motion.nav>
      <main className="w-full h-screen px-4 py-14 mb-10 flex flex-col justify-between">
        <CircleLeft />
        <div className="flex">
          {words.deff?.map((alp, i) => (
            <div className="h-fit overflow-y-hidden">
              <motion.h1
                key={i}
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="font-passion1 text-giant md:text-super text-white leading-none tracking-tight"
              >
                {alp}
              </motion.h1>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end">
          <p className="font-poppins text-white">Quick Navigation</p>
        </div>
        <div className="w-full flex justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white font-poppins w-2/3 md:w-1/3 md:text-md"
          >
            Hi, I am Deffrand Farera, an
            enthusiast-self-motivated-creative-independent Frontend Developer
            and Web Designer.
          </motion.p>
        </div>
      </main>

      <WorksSection />
      <section className="w-full h-screen"></section>
      <footer className="w-full h-screen px-4 py-10"></footer>
    </>
  );
}
