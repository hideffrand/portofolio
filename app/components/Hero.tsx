"use client";

import Image from "next/image";
import useTypingEffect from "./useTypingEffect";

export default function Hero() {
  const greetings = [
    "Hi", // English
    "Hello", // English
    "¡Hola", // Spanish
    "Bonjour", // French
    "Ciao", // Italian
    "Olá", // Portuguese
    "Hallo", // German
    "Привет", // Russian
    "你好", // Chinese (Mandarin)
    "こんにちは", // Japanese
    "여보세요", // Korean
    "नमस्ते", // Hindi
    "Salam", // Arabic
    "Sawubona", // Zulu (South Africa)
    "Kamusta", // Filipino (Tagalog)
  ];

  const greeting = useTypingEffect(greetings, 150, 75, 2000);

  return (
    <div className="flex flex-col justify-end pb-[20vh] pt-[45vh]">
      <h1 className="relative md:text-5xl text-3xl pb-1 text-white flex flex-wrap items-center gap-x-2">
        <div className="relative">
          {greeting}
          <span className="w-1 h-full absolute bg-[rgb(255,255,255)] animate-blinking"></span>
        </div>
        <div>,</div>
        <div>I</div>
        <div>am</div>
        <div>
          <u>Deff</u>rand
        </div>
        <div>Farera</div>
        <div className="flex-shrink-0 mx-2">
          <Image
            src={"/profile.jpg"}
            alt="profile.jpg"
            width={2000}
            height={2000}
            className="md:w-12 w-8 rounded-[4px]"
          />
        </div>
        <div>,</div>
        <div className="md:hidden block">Aspiring</div>
        <div className="md:hidden block">Software</div>
        <div className="md:hidden block">Engineer.</div>
      </h1>
      <h1 className="relative md:text-5xl text-3xl pb-1 text-white hidden md:flex flex-wrap items-center gap-x-2">
        Aspiring Software Engineer.
      </h1>
      <div className="w-fit md:text-lg text-sm mt-6 bg-[rgb(12,12,12)] text-neon-green md:p-3 p-2 rounded-[6px] flex items-center justify-center gap-2">
        <div className="md:w-4 w-4 md:h-4 h-4 bg-neon-green rounded-full smooth-blink"></div>
        <p className="">Available to Work</p>
      </div>
    </div>
  );
}
