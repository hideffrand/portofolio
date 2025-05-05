"use client";

import { motion } from "framer-motion";

export const ANIMATION_DURATION = 0.8;

interface CoverAnimationDivProps {
  delay?: number;
  backgroundColor?: string;
  z?: number;
}

export default function CoverAnimationDiv({
  delay = 0,
  backgroundColor = "rgb(02,02,02)",
  z = 5,
}: CoverAnimationDivProps) {
  return (
    <motion.div
      animate={{
        height: 0,
      }}
      transition={{
        type: "tween",
        duration: ANIMATION_DURATION,
        ease: [1, 0, 0, 1],
        delay: delay,
      }}
      className="absolute bottom-0 w-full h-full rounded-[6px] scale-[1]"
      style={{
        backgroundColor: backgroundColor,
        zIndex: z,
      }}
    ></motion.div>
  );
}
