"use client";
import { useEffect, useState } from "react";

export default function FollowingDiv() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    // <div
    //   className="inverted-cursor"
    //   style={{
    //     top: position.y,
    //     left: position.x,
    //     transform: "translate(-50%, -50%)",
    //   }}
    // ></div>
    <div
      className="md:block hidden fixed w-40 aspect-square bg-[rgb(200,255,200)] rounded-full"
      style={{
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        filter: "blur(200px)",
        zIndex: 0,
      }}
    ></div>
  );
}
