interface IExperience {
  title: string;
  mode: string;
  at: string;
  desc: string
}

const experiences: IExperience[] = [
  {
    title: "Web Designer",
    mode: "Part-time",
    at: "Calvin Institute of Technology",
    desc: "Resolved frontend issues with Chrome DevTools, designed 9+ promotional landing pages, captured leads using WIX storage, and redesigned calvin.ac.id's homepage for improved UX and UI."
  }
]

export default function Experience() {
  return (
    <div className="relative flex flex-col items-center justify-start h-fit">
      <span className="absolute h-full w-1 rounded-full opacity-50 bg-gradient-to-b from-transparent via-[rgb(80,80,80)] to-transparent"></span>
      <div className="my-8 md:w-full max-w-[540px] p-8 md:-translate-x-40 bg-[rgb(08,08,08,0.8)] border border-[rgb(200,200,200,0.2)] bg-blur-80 rounded-[10px]">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <h2 className="md:text-xl text-lg text-white font-semibold">Frontend Developer </h2>
            <p className="text-xs">Feb 2025 - May 2025</p>
          </div>
          <p className="text-white">@PT. Kreasi Untuk Indonesia | Internship</p>
          <p className="text-sm">Assist in revamping the kuyy.id website for improved SEO performance using NextJS and Help implement websites for clients (Kuyy for Business)</p>
        </div>
      </div>

      <div className="my-8 md:w-full max-w-[540px] p-8 md:translate-x-40 bg-[rgb(08,08,08,0.8)] border border-[rgb(200,200,200,0.2)] bg-blur-80 rounded-[10px]">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <h2 className="md:text-xl text-lg text-white font-semibold">Implementation Consultant </h2>
            <p className="text-xs">Jun 2024 - Sep 2024</p>
          </div>
          <p className="text-white">@PT. Indodev Niaga Internet | Internship</p>
          <p className="text-sm">Delivered 5 customized finance report modules according to client&apos;s requirements on both backend and frontend using ColdFusion, SQL (MariaDB), and React.js</p>
        </div>
      </div>

      <div className="my-8 md:w-full max-w-[540px] p-8 md:-translate-x-40 bg-[rgb(08,08,08,0.8)] border border-[rgb(200,200,200,0.2)] bg-blur-80 rounded-[10px]">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <h2 className="md:text-xl text-lg text-white font-semibold">Web Designer </h2>
            <p className="text-xs">May 2023 - May 2025</p>
          </div>
          <p className="text-white">@Calvin Institute of Technology | Part-time </p>
          <p className="text-sm">Resolved frontend issues with Chrome DevTools, designed 9+ promotional landing pages, captured leads using WIX storage, and redesigned calvin.ac.id&apos;s homepage for improved UX and UI.</p>
        </div>
      </div>
    </div>
  );
}
