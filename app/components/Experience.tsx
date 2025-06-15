import clsx from "classnames";
import { experiences, techTag } from "../data";

export default function Experience() {
  return (
    <>
      <div className="mt-40 mb-20">
        <h1 id="experience" className="relative text-center md:text-4xl text-2xl  text-white">
          Experiences
        </h1>
        <p className="pt-6 text-center text-lg">More at <a className="underline" target="_blank" href="https://www.linkedin.com/in/deffrand-farera/">LinkedIn</a></p>
      </div>
      <div className="relative flex flex-col items-center justify-start h-fit">
        <span className="absolute h-full w-1 rounded-full opacity-50 bg-gradient-to-b from-transparent via-[rgb(80,80,80)] to-transparent"></span>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={clsx(
              'my-8 md:w-full max-w-[540px] p-8 bg-[rgb(08,08,08,0.8)] border border-[rgb(200,200,200,0.2)] bg-blur-80 rounded-[10px]',
              i % 2 === 0 ? 'md:-translate-x-40' : 'md:translate-x-40'
            )}
          >
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col md:flex-row mb-4 justify-between">
                <h2 className="md:text-xl text-lg text-white font-semibold">{exp.title}</h2>
                <p className="text-xs">{exp.time}</p>
              </div>
              <p className="text-white text-md">{exp.at}  | {exp.type}</p>
              <p className="text-sm">{exp.desc}</p>
              <div className="w-full pt-6 flex flex-wrap gap-2">
                {exp.stack.map((item, i) => (
                  <div key={i} className={`w-fit px-4 py-2 text-sm rounded-full ${techTag[item].style}`}>{techTag[item].label}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
