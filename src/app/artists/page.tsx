"use client";

import type React from "react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import MysteryReveal from "../../components/MysteryReveal";
import PreviousArtistCard from "../../components/PreviousArtistCard";
import ParallaxBackground from "../../components/ParallaxBackground";
import "./styles.css";

const currentArtist = {
  name: "Imagine Dragons",
  image:
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&h=900&fit=crop",
  description:
    "Multi-platinum, Grammy Award-winning rock band known for their energetic performances and chart-topping hits.",
  spotify: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
};

const previousArtists = [
  {
    year: 2023,
    name: "The Weeknd",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    description:
      "Grammy-winning R&B sensation known for his unique voice and innovative sound.",
    gradientClass: "bg-gradient-to-br from-red-600 to-purple-800",
    spotify: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
    accolades: [
      "4 Grammy Awards",
      "20 Billboard Music Awards",
      "Diamond Certified Single",
    ],
  },
  {
    year: 2022,
    name: "Dua Lipa",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=600&fit=crop",
    description:
      "Pop icon and multiple Grammy winner, known for her disco-inspired sound and powerful vocals.",
    gradientClass: "bg-gradient-to-br from-pink-500 to-indigo-600",
    spotify: "https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we",
    accolades: ["3 Grammy Awards", "6 Brit Awards", "2 Guinness World Records"],
  },
];

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const ArtistsPage: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="artists-page"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative"
      >
        {/* Background layer - lowest z-index */}
        <div className="fixed inset-0 z-0">
          <ParallaxBackground image={currentArtist.image} />
        </div>

        {/* Content layer - middle z-index */}
        <div className="relative z-10 min-h-screen text-white">
          {/* Hero Section */}
          <div className="relative h-screen">
            <MysteryReveal currentArtist={currentArtist} />
          </div>

          {/* Previous Artists Section */}
          <motion.div
            className="container mx-auto px-4 py-12 sm:py-16 space-y-12 sm:space-y-16 md:space-y-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 sm:mb-16 md:mb-24"
            >
              Previous Headliners
            </motion.h2>
            <div className="space-y-12 sm:space-y-16 md:space-y-24 lg:space-y-32">
              {previousArtists.map((artist, index) => (
                <PreviousArtistCard
                  key={artist.year}
                  artist={artist}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ArtistsPage;
