import Image from "next/image";

export default function LogoCarousel({ type }: { type: string }) {
  const logo: any = {
    fe: [
      "/logo/html.svg",
      "/logo/css.svg",
      "/logo/javascript.svg",
      "/logo/react.svg",
      "/logo/next.svg",
      "/logo/tailwindcss.svg",
    ],
    be: [
      "/logo/firebase.svg",
      "/logo/python.svg",
      "/logo/vite.svg",
      "/logo/vercel.svg",
    ],
  };

  const logoGroup = logo[type];
  const logoAll = [
    "/logo/html.svg",
    "/logo/css.svg",
    "/logo/javascript.svg",
    "/logo/react.svg",
    "/logo/next.svg",
    "/logo/tailwindcss.svg",
    "/logo/firebase.svg",
    "/logo/python.svg",
    "/logo/vite.svg",
    "/logo/vercel.svg",
  ];

  return (
    <div className="relative flex overflow-x-hidden w-full h-full">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {logoAll.map((l: string, i: number) => (
          <div
            key={i}
            className="w-8 aspect-square grayscale hover:grayscale-0 mx-1 flex items-center justify-center"
          >
            <Image
              className="w-full object-contain transition-all"
              src={l}
              width={100}
              height={100}
              alt={l}
            />
          </div>
        ))}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
        {logoAll.map((l: string, i: number) => (
          <div
            key={i}
            className="w-8 aspect-square grayscale hover:grayscale-0 mx-1 flex items-center justify-center"
          >
            <Image
              className="w-full object-contain transition-all"
              src={l}
              width={100}
              height={100}
              alt={l}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
