"use client";

import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  id?: string;
}

export const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  id,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  const initialOffset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, ...initialOffset }}
      animate={
        isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initialOffset }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};
