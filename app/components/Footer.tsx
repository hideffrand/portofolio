import Image from "next/image"

export default function Footer() {
  return (
    <>
      <h1 id="contact" className="relative text-center md:text-4xl text-2xl mt-40 mb-24 text-white">
        Let&apos;s Connect!
      </h1>
      <footer className="relative pb-32 flex flex-col justify-between items-center">
        <div className="flex md:gap-16 gap-10 z-10">
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
        <div className="absolute w-60 h-40 bg-gradient-to-t from-[rgb(255,255,255,0.4)] to-transparent bottom-0 blur-2xl rounded-full animate-pulse duration-2000"></div>
        <Image className="absolute bottom-0 z-0" src="/beam.svg" width={800} height={800} alt="Beams" />
      </footer>
    </>
  )
}