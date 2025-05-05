import Image from "next/image";
import CoverAnimationDiv from "./CoverAnimationDiv";
import LogoCarousel from "./LogoCarousel";
import HidingAnimationDiv from "./HidingAnimationDiv";

export default function ThingsIDo() {
  return (
    <div className="w-full h-auto rounded-[10px]">
      {/* <CoverAnimationDiv delay={0.4} backgroundColor="#000" z={999} /> */}
      <div className="flex md:flex-row flex-col w-full md:h-screen gap-8">
        <div className="w-full h-full flex flex-col gap-8">
          <div className="w-full h-full flex md:flex-row flex-col-reverse gap-8">
            <div className="w-full md:h-full h-[32vh] flex items-center justify-center relative bg-[rgb(08,08,08,0.4)] border border-[rgb(200,200,200,0.2)] bg-blur-80 rounded-[10px]">
              <CoverAnimationDiv delay={1} backgroundColor="rgb(0,0,0)" />
              <h3 className="md:text-xl text-md absolute md:top-6 md:left-6 top-4 left-4">
                Frontend Development
              </h3>
              <Image
                className="absolute bottom-0 right-0 w-[70%]"
                src="/deplix.webp"
                width={800}
                height={800}
                alt="frontend"
              />
              <Image
                className="absolute -top-12 right-4 w-[24%] select-cursor-animation md:block hidden"
                src="/cursor_select.png"
                width={600}
                height={600}
                alt="cursor_select"
              />
            </div>
            {/* <div className="md:w-3/5 w-full md:h-full h-[36dvh] relative flex justify-center bg-[rgb(0,0,0,0)] rounded-[10px]">
              <h3 className="md:text-xl text-lg text-[rgb(180,180,180)]">
                Currently studying at Calvin Institute of Technology (CIT)
                majoring IT & Big Data Analytics.
                <br />
                <br />
                Had prior hands-on experience in building softwares using{" "}
                <b className="text-white">ReactJS</b>,{" "}
                <b className="text-white">React Native</b> and{" "}
                <b className="text-white">NextJS</b>, while having a{" "}
                Backend Development knowledge of{" "}
                <b className="text-white">RESTful APIs using{" "}</b>
                <b className="text-white">Express</b> and{" "}
                <b className="text-white">Python Flask</b>.
              </h3>
            </div> */}
          </div>
          <div className="w-full h-full flex md:flex-row flex-col-reverse gap-8 items-end">
            <div className="md:w-3/5 w-full md:h-full h-fit relative flex items-center justify-center bg-[rgb(0,0,0,0)] rounded-[10px]">
              <div className="w-full absolute left-0 bottom-0 py-4 px-6 bg-black rounded-[10px]">
                <LogoCarousel type="fe" />
              </div>
            </div>
            {/* <div className="md:w-3/5 w-full md:h-1/3 h-[10vh] relative flex items-center justify-center bg-[#0a0a0a] rounded-[10px]">
              <CoverAnimationDiv delay={1} backgroundColor="rgb(0,0,0)" />
              <button className="absolute z-40 bg-black py-2 px-4 rounded-[10px] bg-opacity-80 backdrop-blur-sm">
                Download CV
              </button>
              <Image
                className="md:w-[80%] w-[74%] absolute bottom-0 z-20 translate-x-3"
                src="/cv_1.png"
                width={4000}
                height={4000}
                alt="cv_1"
              />
              <Image
                className="md:w-[80%] w-[74%] absolute bottom-0 z-10 translate-x-1"
                src="/cv_2.png"
                width={4000}
                height={4000}
                alt="cv_2"
              />
              <Image
                className="md:w-[80%] w-[74%] absolute bottom-0 z-0 -translate-x-2"
                src="/cv_3.png"
                width={4000}
                height={4000}
                alt="cv_3"
              />
              <div className="absolute bottom-0 translate-y-[calc(100%+0.09px)] b w-[95%] h-8 bg-[rgb(0,0,0,0)] z-40"></div>
            </div> */}
            <div className="w-full md:h-full h-[32vh] md:mb-0 mb-16 relative flex items-center justify-center bg-[rgb(08,08,08,0.4)] border border-[rgb(200,200,200,0.2)] bg-blur-80 rounded-[10px]">
              <CoverAnimationDiv delay={1} backgroundColor="rgb(0,0,0)" />
              <h3 className="md:text-xl text-md absolute md:top-6 md:left-6 top-4 left-4">
                Backend Development
              </h3>
              <Image
                className="absolute bottom-0 w-[80%]"
                src="/backend_thumb.webp"
                width={800}
                height={800}
                alt="backend_thumb"
              />
            </div>
          </div>
        </div>
        <div className="md:w-[60%] w-full md:h-full h-[40vh] relative flex items-center justify-center bg-[rgb(08,08,08,0.4)] border border-[rgb(200,200,200,0.2)] bg-blur-80 rounded-[10px]">
          <h3 className="md:text-xl text-md absolute md:top-6 md:left-6 top-4 left-4">
            UI/UX Design
          </h3>
          <Image
            className="absolute bottom-0 w-[200%]"
            src="/mobile_thumb.webp"
            width={1200}
            height={1200}
            alt="mobile_thumb"
          />
          <CoverAnimationDiv delay={1} backgroundColor="rgb(0,0,0)" />
        </div>
      </div>
    </div>
  );
}
