interface ProjectProps {
  id: string;
  title: string;
  img: string;
  type: string;
  year: number;
  url: string;
  desc: string;
}

export const projects: ProjectProps[] = [
  {
    id: "signify",
    title: "Signify",
    img: "/signify.webp",
    type: "UI/UX",
    year: 2024,
    url: "https://www.figma.com/proto/ueRKm0yUs3lxyh05T4RakR/Wireframe?page-id=0%3A1&node-id=654-3920&p=f&viewport=480%2C386%2C0.05&t=DsPof1akFJBtMk6u-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3&show-proto-sidebar=1",
    desc: "",
  },
  {
    id: "kozy",
    title: "Kozy",
    img: "/kozy.webp",
    type: "Full Stack Web Development",
    year: 2024,
    url: "https://kozy-one.vercel.app",
    desc: "Kozy is an end-to-end\nsolution for modern living.\nBuilt with performance in mind.",
  },
  {
    id: "tkagape",
    title: "TK Agape",
    img: "/tkagape.webp",
    type: "Full Stack Web Development",
    year: 2024,
    url: "https://tkagape.vercel.app",
    desc: "",
  },
  {
    id: "gowize",
    title: "Gowize",
    img: "/gowize.webp",
    type: "Mobile App Development",
    year: 2024,
    url: "https://www.youtube.com/watch?v=8fVH6FajDVY",
    desc: "",
  },
  {
    id: "ovo",
    title: "OVO",
    img: "/ovo.webp",
    type: "Web Design and Development",
    year: 2023,
    url: "https://ovo-landing.vercel.app",
    desc: "",
  },
];
