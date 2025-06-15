import Image from "next/image";
import { projects, techTag } from "../data";
import clsx from "classnames";


export default function SelectedWork() {
  function getZ(i: number) {
    return i + 1;
  }

  function getTop(i: number) {
    return `${(i + 1) * 6}%`;
  }

  return (
    <>
      <h1 id="works" className="relative text-center md:text-4xl text-2xl mt-40 mb-20 text-white">
        Selected Works
      </h1>
      <section className="w-full h-auto flex flex-col items-end">
        <div className="relative">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={clsx(`transition-all ease-in-out sticky top-shadow my-4 p-4 w-full h-2/3 rounded-xl bg-[rgb(08,08,08,0.9)] border border-[rgb(200,200,200,0.2)] backdrop-blur-lg flex flex-col md:flex-row gap-4 items-start hover:cursor-pointer hover:rotate-2`)}
              style={{
                top: getTop(i),
                zIndex: getZ(i),
              }}
            >
              <Image
                src={project.img}
                alt={project.title}
                width={800}
                height={800}
                className={`md:w-2/3 h-2/3 rounded-md`}
                id={project.title}
                priority
              />
              <div className="w-full h-2/3 flex flex-col justify-between items-start">
                <div className="w-full flex justify-between">
                  <p className="font-poppins text-white font-bold h-40 py-4 text-2xl">
                    {project.title}
                  </p>
                  <p className="font-poppins text-gray-400 h-40 py-4 text-md w-1/2 text-end">
                    {project.type}
                  </p>
                </div>
                <div className="w-full flex justify-between font-poppins text-white text-xl border-b border-[rgb(255,255,255,0.5)] pb-2">
                  <p>{i + 1}</p>
                  {/* <p>{project.year}</p> */}
                </div>
                <div className="pt-4 flex flex-wrap gap-2">
                  {project.stack.map((item, i) => (
                    <div key={i} className={`w-fit px-4 py-2 text-sm rounded-full ${techTag[item].style}`}>{techTag[item].label}</div>
                  ))}
                </div>
                <a href={project.url} className="text-white font-poppins pt-10 text-end w-full underline">
                  See Details
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-24">
          <a href="https://github.com/hideffrand" target="_blank" className="flex items-center justify-center gap-4 font-bold text-xl bg-[rgb(10,10,10)] text-white font-poppins title px-14 py-4 rounded-full border hover:bg-white hover:text-black hover:border-white">
            See All Works
            {/* <Icon><FaGithub /></Icon> */}
          </a>
        </div>
      </section>
    </>
  );
}
