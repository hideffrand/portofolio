import Image from "next/image";
import CoverAnimationDiv from "./CoverAnimationDiv";
import LogoCarousel from "./LogoCarousel";

export default function ThingsIDo() {
  return (
    <>
      <h1 id="things-i-do" className="relative md:text-4xl text-2xl mb-20 text-white">
        Things I Do
      </h1>
      <div className="w-full h-auto rounded-[10px]">
        <div className="flex md:flex-row flex-col w-full md:h-screen gap-8">
          <div className="w-full h-full flex flex-col gap-8">
            <div className="w-full h-full flex md:flex-row flex-col-reverse gap-8">
              <div className="w-full md:h-full h-[32vh] flex items-center justify-center relative bg-[rgb(0,0,0,0.7)] border border-[rgb(200,200,200,0.2)] bg-blur-80 rounded-[10px]">
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
            </div>
            <div className="w-full h-full flex md:flex-row flex-col-reverse gap-8 items-end">
              <div className="md:w-3/5 w-full md:h-full h-fit relative flex items-center justify-center bg-[rgb(0,0,0,0)] rounded-[10px]">
                <div className="w-full absolute left-0 bottom-0 py-4 px-6 bg-black rounded-[10px]">
                  <LogoCarousel type="fe" />
                </div>
              </div>
              <div className="w-full md:h-full h-[32vh] md:mb-0 mb-16 relative flex items-center justify-center bg-[rgb(0,0,0,0.7)] border border-[rgb(200,200,200,0.2)] bg-blur-80 rounded-[10px]">
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
          <div className="md:w-[60%] w-full md:h-full h-[40vh] relative flex items-center justify-center bg-[rgb(0,0,0,0.7)] border border-[rgb(200,200,200,0.2)] bg-blur-80 rounded-[10px]">
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
    </>
  );
}
