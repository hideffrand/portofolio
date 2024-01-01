import Image from "next/image";
import Headline from "./Headline";
import { words } from "@/data";

export default function AboutMe() {
  return (
    <section className="w-full h-screen px-4 py-6 flex flex-col md:flex-row justify-between">
      <div>
        <Headline text={words.about} />
        <div className="flex items-end gap-10">
          <Headline text={words.me} />
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={50}
            height={50}
            className="md:-translate-y-12"
          />
        </div>
      </div>
      <div className="md:w-1/4 flex flex-col gap-10 text-justify text-poppins uppercase text-sm text-white">
        <p>again,</p>
        <p>
          Hi, I am Deffrand Farera, 
          Frontend Web Developer and Web Designer based in Indonesia
        </p>
        <p>
          Currently studying at Calvin Institute of Technology majoring IT & Big
          Data Analytics.
        </p>
        <p>i like cats.</p>
      </div>
    </section>
  );
}
