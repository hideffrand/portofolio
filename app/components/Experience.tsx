import clsx from "classnames";

interface ITechTag {
  label: string,
  style: string
}

const techTag: Record<string, ITechTag> = {
  sql: { label: "SQL", style: "bg-[rgb(100,70,0,0.2)] text-[rgb(200,140,0)]" },
  cf: { label: "ColdFusion", style: "bg-[rgb(0,70,100,0.2)] text-[rgb(0,140,200)]" },
  next: { label: "Next.js", style: "bg-[rgb(100,100,100,0.2)] text-[rgb(200,200,200)]" },
  tw: { label: "Tailwind CSS", style: "bg-[rgb(0,70,50,0.2)] text-[rgb(0,200,240)]" },
  css: { label: "CSS", style: "bg-[rgb(0,70,50,0.2)] text-[rgb(0,200,240)]" },
  html: { label: "HTML", style: "bg-[rgb(0,70,50,0.2)] text-[rgb(0,200,240)]" },
  react: { label: "React.js", style: "bg-[rgb(0,70,50,0.2)] text-[rgb(0,200,240)]" },
  figma: { label: "Figma", style: "bg-[rgb(181,122,232,0.1)] text-[rgb(181,122,232)]" },
  wix: { label: "WIX", style: "bg-[rgb(100,100,100,0.2)] text-[rgb(200,200,200)]" },
  wp: { label: "WordPress", style: "bg-[rgb(39,138,127,0.2)] text-[rgb(80,158,140)]" },
}

interface IExperience {
  title: string,
  time: string,
  at: string,
  type: string,
  desc: string,
  stack: string[],
}

const experiences: IExperience[] = [
  {
    title: "Implementation Consultant",
    time: "Jun 2025 - Present",
    at: "@PT. Indodev Niaga Internet",
    type: "Internship",
    desc: "Solved custom payroll modules bugs using ColdFusion and SQL. Utilized Excel to automatically generate bulk SQL statements to fix client&apos;s issues on data sites.",
    stack: ["cf", "sql"]
  },
  {
    title: "Frontend Developer",
    time: "Feb 2025 - May 2025",
    at: "@PT. Kreasi Untuk Indonesia",
    type: "Internship",
    desc: "Assist in revamping the kuyy.id website for improved SEO performance using NextJS and Help implement websites for clients (Kuyy for Business)",
    stack: ["next", "tw"]
  },
  {
    title: "Implementation Consultant",
    time: "Jun 2024 - Sept 2024",
    at: "@PT. Indodev Niaga Internet",
    type: "Internship",
    desc: "Delivered 5 customized finance report modules according to client&apos;s requirements on both backend and frontend using ColdFusion, SQL (MariaDB), and React.js",
    stack: ["react", "cf", "sql"]
  },
  {
    title: "Web Designer",
    time: "May 2023 - May 2025",
    at: "@Calvin Institute of Technology",
    type: "Part-time",
    desc: "Resolved frontend issues with Chrome DevTools, designed 9+ promotional landing pages, captured leads using WIX storage, and redesigned calvin.ac.id&apos;s homepage for improved UX and UI.",
    stack: ["figma", "css", "wp", "wix"]
  },
]

export default function Experience() {
  return (
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
            <div className="flex justify-between">
              <h2 className="md:text-xl text-lg text-white font-semibold">{exp.title}</h2>
              <p className="text-xs">{exp.time}</p>
            </div>
            <p className="text-white">{exp.at}  | {exp.type}</p>
            <p className="text-sm">{exp.desc}</p>
            <div className="pt-4 flex gap-2">
              {exp.stack.map((item, i) => (
                <div key={i} className={`w-fit px-4 py-2 text-sm rounded-full ${techTag[item].style}`}>{techTag[item].label}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
