"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Headline({ text }: { text: string[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="flex overflow-y-hidden" ref={ref}>
      {text?.map((alp, i) => (
        <motion.h1
          key={i}
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            transition: "0.8s",
            transitionDelay: `${i * 0.1}s`,
          }}          
          className="font-passion1 font-black text-7xl md:text-super text-white leading-none tracking-tight hover:underline"
        >
          {alp}
        </motion.h1>
      ))}
    </div>
  );
}
