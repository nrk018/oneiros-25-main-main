import type React from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";

interface ScrollPromptProps {
  className?: string;
}

const ScrollPrompt: React.FC<ScrollPromptProps> = ({ className }) => {
  const controls = useAnimation();

  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Number.POSITIVE_INFINITY,
      ease: "easeOut",
    },
  };

  return (
    <motion.div
      className={`flex flex-col items-center justify-center cursor-pointer ${className}`}
      animate={{
        y: ["0%", "10%"],
      }}
      transition={bounceTransition}
      onHoverStart={() => controls.start({ scale: 1.1 })}
      onHoverEnd={() => controls.start({ scale: 1 })}
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
    >
      <motion.div
        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
        animate={controls}
      >
        <ArrowDownIcon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollPrompt;
