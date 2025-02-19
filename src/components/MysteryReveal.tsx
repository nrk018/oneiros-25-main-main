"use client";

import type React from "react";
import { useRef } from "react";
import { useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleSystem from "./ParticleSystem";
import "../styles/MysteryReveal.css";

interface Artist {
  name: string;
  image: string;
  description: string;
  spotify: string;
}

interface MysteryRevealProps {
  currentArtist: Artist;
}

const MysteryReveal: React.FC<MysteryRevealProps> = ({ currentArtist }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainLeftRef = useRef<HTMLDivElement>(null);
  const curtainRightRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true });

  const handleReveal = () => {
    setIsRevealed(true);
    if (curtainLeftRef.current && curtainRightRef.current) {
      curtainLeftRef.current.style.transform = "scaleX(0)";
      curtainRightRef.current.style.transform = "scaleX(0)";
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div ref={containerRef} className="reveal-container">
      <div className="absolute inset-0 bg-black z-10">
        <Image
          src={currentArtist.image || "/placeholder.svg"}
          alt="Background"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/60" />
      </div>

      <ParticleSystem isRevealed={isRevealed} />

      <div className="absolute inset-0 overflow-hidden z-30">
        <div ref={curtainLeftRef} className="curtain curtain-left" />
        <div ref={curtainRightRef} className="curtain curtain-right" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-40 px-4 sm:px-6 lg:px-8">
        {!isRevealed ? (
          <div className="w-full max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.h2
                variants={textVariants}
                custom={0}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-none mb-4 sm:mb-6"
              >
                WHO&apos;S COMING?
              </motion.h2>
              <motion.p
                variants={textVariants}
                custom={1}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mt-4 sm:mt-6"
              >
                Get ready for the biggest reveal in Oneiros history
              </motion.p>
              <motion.div variants={buttonVariants}>
                <Button
                  onClick={handleReveal}
                  className="mt-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 text-sm sm:text-base"
                  size="lg"
                >
                  Reveal Artist
                </Button>
              </motion.div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="w-full max-w-4xl mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black/80 backdrop-blur-lg">
              <div className="relative aspect-[16/9] sm:aspect-[2/1] md:aspect-[16/9]">
                <Image
                  src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=1600&h=900&fit=crop"
                  alt={currentArtist.name}
                  fill
                  className="object-cover transition-all duration-700 scale-105 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1000px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8">
                <div className="space-y-2 sm:space-y-3 md:space-y-4 max-w-2xl mx-auto">
                  <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {currentArtist.name}
                  </motion.h2>

                  <motion.p
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {currentArtist.description}
                  </motion.p>

                  <motion.a
                    href={currentArtist.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#1DB954] text-black font-bold 
                      py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-[#1ED760] transition-colors duration-300 text-sm sm:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.6,
                      duration: 0.5,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 },
                    }}
                  >
                    <Music className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:rotate-12" />
                    Listen on Spotify
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MysteryReveal;
