interface ProjectProps {
  title: string;
  img: string;
  type: string;
}

export const projects: ProjectProps[] = [
  {
    title: "OVO",
    img: "/ovo.png",
    type: "Web Design and Development",
  },
  {
    title: "Shopme",
    img: "/shopme.png",
    type: "Web App Development",
  },
  {
    title: "Chateau",
    img: "/chateau.png",
    type: "Web Design and Development",
  },
  {
    title: "deplix",
    img: "/deplix.png",
    type: "Web App Development",
  },
];

interface WordsProps {
  works: string[];
  deff: string[];
  letstalk: string[];
}

export const words: WordsProps = {
  works: ["W", "O", "R", "K", "S"],
  deff: ["D", "E", "F", "F"],
  letstalk: ["L", "E", "T","'", "S"]
};
