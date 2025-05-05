"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface IHidingAnimationDiv {
  children: ReactNode;
  delay?: number;
  animateTo?: "left" | "right" | "up" | "down";
}

export default function HidingAnimationDiv({
  children,
  delay = 0,
  animateTo = "up",
}: IHidingAnimationDiv) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getInitialAnimationState = () => {
    switch (animateTo) {
      case "left":
        return { x: "100%", y: 0 };
      case "right":
        return { x: "-100%", y: 0 };
      case "up":
        return { x: 0, y: "100%" };
      case "down":
        return { x: 0, y: "-100%" };
      default:
        return { x: 0, y: "100%" };
    }
  };

  return (
    <div className="w-fit h-fit overflow-hidden" ref={elementRef}>
      {isVisible && (
        <motion.div
          initial={getInitialAnimationState()}
          animate={{ x: 0, y: 0 }}
          transition={{
            type: "tween",
            duration: 1,
            ease: [1, 0, 0, 1],
            delay,
          }}
          className="w-fit h-fit overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
