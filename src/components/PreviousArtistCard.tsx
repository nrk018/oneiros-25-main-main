import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Music2Icon, Calendar, Award } from "lucide-react";

interface ArtistCardProps {
  artist: {
    year: number;
    name: string;
    image: string;
    description: string;
    gradientClass: string;
    spotify: string;
    accolades?: string[];
  };
  index: number;
}

const PreviousArtistCard: React.FC<ArtistCardProps> = ({ artist, index }) => {
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
      className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 max-w-4xl mx-auto"
    >
      {/* Main Image */}
      <div className="relative aspect-[16/9] sm:aspect-[2/1] md:aspect-[16/9]">
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

          {/* Spotify Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href={artist.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#1DB954] text-black font-bold 
                py-1.5 px-3 sm:py-2 sm:px-4 md:py-3 md:px-6 rounded-full text-xs sm:text-sm transition-all duration-300
                hover:bg-[#1ED760] hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Music2Icon className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1 sm:mr-2 transition-transform duration-300 group-hover:rotate-12" />
              Listen on Spotify
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PreviousArtistCard;
