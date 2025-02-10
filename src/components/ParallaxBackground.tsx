import type React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxBackgroundProps {
  image: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ image }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <motion.div className="fixed inset-0 z-0" style={{ y }}>
      <Image
        src={image || "/placeholder.svg"}
        alt="Background"
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/60" />
    </motion.div>
  );
};

export default ParallaxBackground;
