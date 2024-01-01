"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { projects, words } from "../data";

export default function WorksSection() {
  const [parentH, setParentH] = useState<number>(0);
 

  function getZ(i: number) {
    return `z-${i * 20}`;
  }

  function getTop(i: number) {
    return `top-${i * 20}`;
  }

  function getRotate(i: number) {
    if ((i + 1) % 2 === 0) {
      return "rotate-2";
    } else {
      return "-rotate-2";
    }
  }

  const workSectionRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const parentHeight = parentRef.current.offsetHeight;
    console.log("Parent Height:", parentHeight);
    setParentH(parentHeight);
  }, []);

  return (
    <section
      ref={workSectionRef}
      className="px-4 py-10 w-full h-auto flex flex-col items-end"
    >
      <div className="flex justify-start items-center">
        <p className="text-sm md:text-2xl font-poppins text-white -translate-y-5 md:-translate-y-24 pr-4">
          SELECTED
        </p>
        {words.works?.map((alp, i) => (
          <div className="h-fit overflow-y-hidden">
            <motion.h1
              key={i}
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="font-passion1 text-7xl md:text-super text-white leading-none tracking-tight"
            >
              {alp}
            </motion.h1>
          </div>
        ))}
      </div>
      <div className="relative">
        {projects.map((project, i) => (
          <div
            ref={parentRef}
            key={i}
            className={`
              ${getTop(i)} 
              ${getZ(i)} 
              ${getRotate(i)} 
              top-shadow p-4 w-full h-2/3 rounded-xl bg-secondary-black flex flex-col md:flex-row gap-4 items-start sticky
            `}
          >
            <Image
              src={project.img}
              alt="1"
              width={3000}
              height={3000}
              className="md:w-2/3 h-2/3 rounded-md"
            />
            <div
              style={{ height: `${parentH}px` }}
              className="w-full flex flex-col justify-between items-center"
            >
              <div className="w-full flex justify-between">
                <p className="font-poppins text-white font-bold h-40 py-4 text-2xl">
                  {project.title}
                </p>
                <p className="font-poppins text-white h-40 py-4 text-md">
                  {project.type}
                </p>
              </div>
              <div className="w-full flex justify-between font-poppins text-white text-xl border-t pt-20">
                <p>{i + 1}</p>
                <p>{2023}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-40">
        <button className="font-bold text-xl text-white font-poppins title px-14 py-4 rounded-full border hover:bg-white hover:text-black hover:border-white">
          See All Works
        </button>
      </div>
    </section>
  );
}
