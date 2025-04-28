// CircleIndicator.js
import React from "react";
import { motion, useScroll } from "framer-motion";

export const CircleIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <svg className="fixed top-4 left-4" width="40" height="40" viewBox="0 0 40 40">
      <motion.path
        d="M 20,20 m -15,0 a 15,15 0 1,0 30,0 a 15,15 0 1,0 -30,0"
        fill="transparent"
        strokeWidth="4"
        stroke="cyan"
        style={{
          pathLength: scrollYProgress,
          transition: "pathLength 0.3s ease",
        }}
      />
    </svg>
  );
};
