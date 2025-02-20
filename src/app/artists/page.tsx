"use client";

import MysteryReveal from "../../components/MysteryReveal";
import ParallaxBackground from "../../components/ParallaxBackground";
import PreviousArtistCard from "../../components/PreviousArtistCard";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import type React from "react";
import { useEffect } from "react";
import "./styles.css";


interface Artist {
  name: string;
  image: string;
  description: string;
  type: "major" | "minor";
  day?: string;
  gradientClass?: string;
  accolades?: string[];
}

interface YearData {
  year: number;
  artists: Artist[];
}

const currentArtists: Artist[] = [
  {
    name: "Ruhaan Malik",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop",
    description: "Day 1 - Opening the festival with electrifying performances",
    type: "minor",
  },
  {
    name: "Amaal Malik",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&h=900&fit=crop",
    description:
      "Day 3 - Headlining artist bringing unforgettable musical experience",
    type: "major",
  },
  {
    name: "DJ Chesta",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1600&h=900&fit=crop",
    description: "Day 2 - Setting the stage on fire with amazing beats",
    type: "minor",
  },
];

const previousArtists: YearData[] = [
  {
    year: 2023,
    artists: [
      {
        name: "Naalayak",
        type: "minor",
        day: "Day 1",
        image:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
        description: "Opening act that set the tone for ONO 23",
      },
      {
        name: "Progressive Bros",
        type: "minor",
        day: "Day 2",
        image:
          "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop",
        description: "Elevating the energy with progressive beats",
      },
      {
        name: "Gajendra Verma",
        type: "major",
        day: "Day 3",
        image:
          "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1600&h=900&fit=crop",
        description: "Headlining performance that made ONO 23 unforgettable",
        gradientClass: "bg-gradient-to-br from-purple-600 to-blue-800",
        accolades: [
          "Multiple Hit Singles",
          "Viral Sensation",
          "Musical Trendsetter",
        ],
      },
    ],
  },
  {
    year: 2019,
    artists: [
      {
        name: "DJ Shaan",
        type: "minor",
        day: "Day 1",
        image:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&h=900&fit=crop",
        description: "Electronic music maestro",
      },
      {
        name: "Akash Mehta",
        type: "minor",
        day: "Day 2",
        image:
          "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?w=800&h=600&fit=crop",
        description: "Versatile performer",
      },
      {
        name: "Jubin Nautiyal",
        type: "major",
        day: "Day 3",
        image:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&h=900&fit=crop",
        description: "Bollywood's leading playback singer",
        gradientClass: "bg-gradient-to-br from-red-600 to-yellow-600",
        accolades: [
          "Multiple Award Winner",
          "Chart-topping Singles",
          "Renowned Vocalist",
        ],
      },
    ],
  },
  {
    year: 2018,
    artists: [
      {
        name: "Local Train",
        type: "major",
        day: "Day 1",
        image:
          "https://images.unsplash.com/photo-1501612780327-45045538702b?w=1600&h=900&fit=crop",
        description: "India's leading indie rock band",
        gradientClass: "bg-gradient-to-br from-green-600 to-blue-600",
        accolades: [
          "Independent Music Pioneers",
          "Cult Following",
          "Genre-defining Band",
        ],
      },
    ],
  },
  {
    year: 2017,
    artists: [
      {
        name: "Hardy Sandhu",
        type: "minor",
        day: "Day 1",
        image:
          "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&h=600&fit=crop",
        description: "Punjabi music sensation",
      },
      {
        name: "DJ Chetas",
        type: "minor",
        day: "Day 2",
        image:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
        description: "Remix king of Bollywood",
      },
      {
        name: "Dual Vibes",
        type: "major",
        day: "Day 3",
        image:
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&h=900&fit=crop",
        description: "Electronic music duo",
        gradientClass: "bg-gradient-to-br from-pink-600 to-purple-600",
        accolades: ["EDM Pioneers", "Festival Favorites", "Dynamic Performers"],
      },
    ],
  },
  {
    year: 2016,
    artists: [
      {
        name: "Shirley Setia",
        type: "minor",
        day: "Day 1",
        image:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
        description: "YouTube sensation turned pop star",
      },
      {
        name: "Red Bull Bus Tour",
        type: "major",
        day: "Day 2",
        image:
          "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1600&h=900&fit=crop",
        description:
          "Featuring multiple artists in a unique touring experience",
        gradientClass: "bg-gradient-to-br from-red-500 to-blue-500",
        accolades: [
          "Multi-artist Showcase",
          "Innovative Format",
          "Breakthrough Performances",
        ],
      },
    ],
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
        {/* Background layer */}
        <div className="fixed inset-0 z-0">
          <ParallaxBackground image={currentArtists[1].image} />
        </div>

        {/* Content layer */}
        <div className="relative z-10 min-h-screen text-white">
          {/* Hero Section */}
          <div className="relative h-screen">
            <MysteryReveal artists={currentArtists} />
          </div>

          {/* Previous Artists Section */}
          <motion.div
            className="container mx-auto px-4 py-32 space-y-32 sm:space-y-40"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-24"
            >
              Previous Headliners
            </motion.h2>
            <div className="space-y-32 sm:space-y-40">
              {previousArtists.map((yearData, index) => (
                <PreviousArtistCard
                  key={yearData.year}
                  yearData={yearData}
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