import ThingsIDo from "./components/ThingsIDo";
import SelectedWork from "./components/SelectedWork";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import HidingAnimationDiv from "./components/HidingAnimationDiv";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Hero />
      <h1 className="relative md:text-4xl text-2xl mb-20 text-white">
        Things I Do
      </h1>
      <ThingsIDo />
      <div className="mt-40 mb-20">
        <h1 className="relative text-center md:text-4xl text-2xl  text-white">
          Experiences
        </h1>
        <p className="pt-6 text-center text-lg">More at <a className="underline" target="_blank" href="https://www.linkedin.com/in/deffrand-farera/">LinkedIn</a></p>
      </div>
      <Experience />
      <h1 className="relative text-center md:text-4xl text-2xl mt-40 mb-20 text-white">
        Selected Works
      </h1>
      <SelectedWork />
      <h1 className="relative text-center md:text-4xl text-2xl mt-40 mb-24 text-white">
        Let's Connect!
      </h1>
      <div className="relative pb-32 flex flex-col justify-between items-center">
        <div className="flex md:gap-16 gap-10">
          <a href="mailto:hideffrand@gmail.com" className="md:w-20 md:h-20 w-14 h-14 translate-y-12 hover:translate-y-10 hover:cursor-pointer transition-all">
            <Image className="w-full" src="/gmail.svg" height={800} width={800} alt="Gmail" priority />
          </a>
          <a href="https://www.linkedin.com/in/deffrand-farera/" className="md:w-20 md:h-20 w-14 h-14 hover:-translate-y-2 hover:cursor-pointer transition-all">
            <Image className="w-full" src="/linkedin.svg" height={800} width={800} alt="LinkedIn" priority />
          </a>
          <a href="https://www.github.com/hideffrand" className="md:w-20 md:h-20 w-14 h-14 translate-y-12 hover:translate-y-10 hover:cursor-pointer transition-all">
            <Image className="w-full" src="/github.svg" height={800} width={800} alt="Github" priority />
          </a>
        </div>
        <Image className="absolute bottom-0 -z-10" src="/beam.svg" width={800} height={800} alt="Beams" />
      </div>
    </>
  );
};

export default Page;
