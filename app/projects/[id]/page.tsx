import { projects } from "@/app/data";
import Image from "next/image";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const detail = projects.find((project) => project.id === id);

  if (!detail) {
    return <div>Project not found</div>;
  }

  return (
    <div className="py-16 flex flex-col items-center">
      {/* <div className="w-full flex justify-between">
        <button>back</button>
        <button>next</button>
        </div> */}
      <h1 className="relative md:text-5xl text-2xl text-center pt-20 mb-20 text-white">
        {detail.title}
      </h1>
      <Image className="w-1/2" src={detail.img} width={800} height={800} alt={detail.title} />
      <p className="whitespace-pre-line text-white">{detail.desc}</p>
    </div>
  );
}
