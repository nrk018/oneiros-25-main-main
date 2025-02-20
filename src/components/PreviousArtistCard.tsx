"use client";

import type { Artist, PreviousArtistCardProps } from "../../types/types";
import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useInView } from "react-intersection-observer";

const PreviousArtistCard: React.FC<PreviousArtistCardProps> = ({
  yearData,
  index,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Handle single artist format (for years like 2018)
  if (!yearData.artists) {
    return (
      <SingleArtistCard
        artist={{
          year: yearData.year,
          name: yearData.name!,
          image: yearData.image!,
          description: yearData.description!,
          gradientClass: yearData.gradientClass || "from-gray-900 to-gray-600",
          accolades: yearData.accolades,
        }}
        index={index}
      />
    );
  }

  // Handle multiple artists format
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
          <Calendar className="w-4 h-4 text-gray-300" />
          <span className="text-sm font-medium text-gray-300">
            ONEIROS {yearData.year}
          </span>
        </div>
      </motion.div>

      <div
        className={`grid ${
          yearData.artists.length === 1
            ? "grid-cols-1 max-w-4xl"
            : yearData.artists.length === 2
            ? "grid-cols-1 md:grid-cols-2 max-w-5xl gap-6 md:gap-8"
            : "grid-cols-1 md:grid-cols-3 max-w-6xl gap-6 md:gap-8"
        } mx-auto px-4 place-items-center justify-items-center`}
      >
        {yearData.artists.map((artist, artistIndex) => (
          <ArtistCard
            key={artist.name}
            artist={artist}
            inView={inView}
            delay={artistIndex * 0.2}
          />
        ))}
      </div>
    </motion.div>
  );
};

const ArtistCard: React.FC<{
  artist: Artist;
  inView: boolean;
  delay: number;
}> = ({ artist, inView, delay }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-md"
    >
      <div className="relative aspect-[16/9]">
        <Image
          src={artist.image || "/placeholder.svg"}
          alt={artist.name}
          fill
          className="object-cover transition-all duration-700 scale-105 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <div className="space-y-2">
          {artist.day && (
            <span className="inline-block bg-white/10 backdrop-blur-md px-2 py-1 rounded-full text-xs text-gray-300">
              {artist.day}
            </span>
          )}
          <h4 className="font-bold text-xl text-white">{artist.name}</h4>
          <p className="text-sm text-gray-300">{artist.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const SingleArtistCard: React.FC<{
  artist: {
    year: number;
    name: string;
    image: string;
    description: string;
    gradientClass: string;
    accolades?: string[];
  };
  index: number;
}> = ({ artist, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative group overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 max-w-4xl mx-auto"
    >
      {/* Main Image */}
      <div className="relative aspect-[16/9]">
        <Image
          src={artist.image || "/placeholder.svg"}
          alt={artist.name}
          fill
          className="object-cover transition-all duration-700 scale-105 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1000px"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent ${artist.gradientClass}`}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
          {/* Year Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md px-2 py-1 sm:px-3 sm:py-1.5 rounded-full"
          >
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
            <span className="text-xs sm:text-sm font-medium text-gray-300">
              ONEIROS {artist.year}
            </span>
          </motion.div>

          {/* Artist Name */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-white"
          >
            {artist.name}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 max-w-2xl leading-snug"
          >
            {artist.description}
          </motion.p>

          {/* Accolades */}
          {artist.accolades && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-1 sm:gap-2"
            >
              {artist.accolades.map((accolade, idx) => (
                <li
                  key={idx}
                  className="flex items-center bg-white/20 backdrop-blur-md px-1 py-0.5 sm:px-2 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm text-white"
                >
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  {accolade}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PreviousArtistCard;
