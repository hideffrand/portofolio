interface ProjectProps {
  title: string;
  img: string;
  type: string;
  year: number;
}

export const projects: ProjectProps[] = [
  {
    title: "OVO",
    img: "/ovo.png",
    type: "Web Design and Development",
    year: 2023,
  },
  {
    title: "Shopme",
    img: "/shopme.png",
    type: "Web App Development",
    year: 2023,
  },
  {
    title: "Chateau",
    img: "/chateau.png",
    type: "Web Design and Development",
    year: 2023,
  },
  {
    title: "deplix",
    img: "/deplix.png",
    type: "Web App Development",
    year: 2023,
  },
];

interface WordsProps {
  works: string[];
  deff: string[];
  lets: string[];
  talk: string[];
  about: string[];
  me: string[];
}

export const words: WordsProps = {
  works: ["W", "O", "R", "K", "S"],
  deff: ["D", "E", "F", "F"],
  lets: ["L", "E", "T", "'", "S"],
  talk: ["T", "A", "L", "K"],
  about: ["A", "B", "O", "U", "T"],
  me: ["M", "E"],
};
