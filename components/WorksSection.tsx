import Image from "next/image";
// import { motion } from "framer-motion";
import { projects, words } from "../data";
import Headline from "./Headline";
import ColorPallete from "./ColorPallete";

export default function WorksSection() {
  function getZ(i: number) {
    return i + 1;
  }

  function getTop(i: number) {
    return `${i * 10}%`;
  }

  function getRotate(i: number) {
    if ((i + 1) % 2 === 0) {
      return "rotate-2";
    } else {
      return "-rotate-2";
    }
  }

  return (
    <section
      id="works"
      className="px-4 py-10 w-full h-auto flex flex-col items-end"
    >
      <div className="flex justify-start items-center">
        <p className="text-sm md:text-2xl font-poppins text-white -translate-y-5 md:-translate-y-24 pr-4">
          SELECTED
        </p>
        <Headline text={words.works} />
      </div>
      <div className="relative">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`
              ${getRotate(i)} 
              sticky top-shadow p-4 w-full h-2/3 rounded-xl bg-secondary-black flex flex-col md:flex-row gap-4 items-start
            `}
            style={{
              top: getTop(i),
              zIndex: getZ(i),
            }}
          >
            <Image
              key={i}
              src={project.img}
              alt={project.title}
              width={3000}
              height={3000}
              className="md:w-2/3 h-2/3 rounded-md"
            />
            <div
              key={i}
              className="w-full h-2/3 flex flex-col justify-between items-start"
            >
              <ColorPallete />
              <div className="w-full flex justify-between">
                <p className="font-poppins text-white font-bold h-40 py-4 text-2xl">
                  {project.title}
                </p>
                <p className="font-poppins text-gray-400 h-40 py-4 text-md w-1/2 text-end">
                  {project.type}
                </p>
              </div>
              <div className="w-full flex justify-between font-poppins text-white text-xl border-b pb-2">
                <p>{i + 1}</p>
                <p>{project.year}</p>
              </div>
              <p className="text-white font-poppins pt-10 text-end w-full underline">
                See Details
              </p>
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
