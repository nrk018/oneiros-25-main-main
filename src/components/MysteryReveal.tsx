"use client";

import ParticleSystem from "./ParticleSystem";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import type React from "react";
import { useRef } from "react";
import { useState } from "react";
import "../styles/MysteryReveal.css";

interface Artist {
  name: string;
  image: string;
  description: string;
  type: "major" | "minor";
  day?: string;
  gradientClass?: string;
  accolades?: string[];
}

interface MysteryRevealProps {
  artists: Artist[];
}

const ArtistCard = ({
  artist,
  delay,
  isRevealed,
}: {
  artist: Artist;
  delay: number;
  isRevealed: boolean;
}) => {
  const isMajor = artist.type === "major";

  return (
    <motion.div
      className="w-full"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isRevealed ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      <div
        className={`relative overflow-hidden rounded-3xl shadow-2xl bg-black/80 backdrop-blur-lg 
          ${
            isMajor
              ? "aspect-[16/9] max-w-2xl transform transition-transform duration-500 hover:scale-105"
              : "aspect-[3/2] max-w-md transition-transform duration-500 hover:scale-102"
          }`}
      >
        <Image
          src={artist.image || "/placeholder.svg"}
          alt={artist.name}
          fill
          className={`object-cover transition-all duration-700 
            ${
              isMajor
                ? "scale-105 group-hover:scale-110"
                : "scale-100 group-hover:scale-105"
            }`}
          sizes={
            isMajor
              ? "(max-width: 768px) 100vw, 1200px"
              : "(max-width: 768px) 100vw, 600px"
          }
          priority
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t 
          ${
            isMajor
              ? "from-black/95 via-black/50 to-transparent"
              : "from-black/90 via-black/40 to-transparent"
          }`}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-6">
          <div
            className={`space-y-2 sm:space-y-3 max-w-2xl mx-auto ${
              isMajor
                ? "transform-gpu transition-all duration-500 hover:scale-105"
                : ""
            }`}
          >
            <motion.h2
              className={`font-bold text-white tracking-tight ${
                isMajor
                  ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                  : "text-xl sm:text-2xl md:text-3xl"
              }`}
              initial={{ y: 20, opacity: 0 }}
              animate={isRevealed ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: delay + 0.2, duration: 0.5 }}
            >
              {artist.name}
            </motion.h2>

            <motion.p
              className={`${
                isMajor
                  ? "text-base sm:text-lg md:text-xl"
                  : "text-sm sm:text-base md:text-lg"
              } text-gray-300 max-w-3xl mx-auto`}
              initial={{ y: 20, opacity: 0 }}
              animate={isRevealed ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: delay + 0.4, duration: 0.5 }}
            >
              {artist.description}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MysteryReveal: React.FC<MysteryRevealProps> = ({ artists }) => {
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

  // Sort artists so the major artist is in the middle
  const sortedArtists = [...artists].sort((a, b) => {
    if (a.type === "major") {
      return 1;
    }
    if (b.type === "major") {
      return -1;
    }
    return 0;
  });

  return (
    <div ref={containerRef} className="reveal-container">
      <div className="absolute inset-0 bg-black z-10">
        <Image
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&h=900&fit=crop"
          alt="Concert background"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black/50" />
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
                  Reveal Artists
                </Button>
              </motion.div>
            </motion.div>
          </div>
        ) : (
          <div className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
              {/* Minor Artists Row */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 justify-items-center">
                {sortedArtists
                  .filter((artist) => artist.type === "minor")
                  .map((artist, index) => (
                    <div key={artist.name} className="w-full max-w-md">
                      <ArtistCard
                        artist={artist}
                        delay={index * 0.2}
                        isRevealed={isRevealed}
                      />
                    </div>
                  ))}
              </div>

              {/* Major Artist - Full Width */}
              <div className="col-span-1 md:col-span-2 mt-4 md:mt-6 flex justify-center w-full">
                {sortedArtists
                  .filter((artist) => artist.type === "major")
                  .map((artist) => (
                    <div key={artist.name} className="w-full max-w-2xl">
                      <ArtistCard
                        artist={artist}
                        delay={0.4}
                        isRevealed={isRevealed}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MysteryReveal;
