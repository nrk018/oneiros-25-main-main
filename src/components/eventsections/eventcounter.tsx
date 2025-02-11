"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import "../eventsections/style.css"
dayjs.extend(relativeTime);

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image?: string;
}

const events: Event[] = [
  { id: 1, title: "Hackathon", date: "2025-02-10T10:00:00Z", description: "A 24-hour coding challenge.", image: "/images/hackathon.jpg" },
  { id: 2, title: "AI Workshop", date: "2025-02-15T14:00:00Z", description: "Learn the latest in AI development.", image: "/images/ai-workshop.jpg" },
  { id: 3, title: "Cybersecurity Meetup", date: "2025-02-20T18:00:00Z", description: "Discussion on the latest threats and defenses.", image: "/images/cybersecurity.jpg" },
];

const EventTracker = () => {
  const [nextEvent, setNextEvent] = useState<Event | null>(null);
  const [countdown, setCountdown] = useState<{ hours: number; minutes: number; seconds: number }>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const now = dayjs();
    const upcoming = events.find((event) => dayjs(event.date).isAfter(now));
    if (upcoming) {
      setNextEvent(upcoming);
      updateCountdown(upcoming.date);
    }
  }, []);

  useEffect(() => {
    if (nextEvent) {
      const interval = setInterval(() => updateCountdown(nextEvent.date), 1000);
      return () => clearInterval(interval);
    }
  }, [nextEvent]);

  const updateCountdown = (eventDate: string) => {
    const now = dayjs();
    const eventTime = dayjs(eventDate);
    const diff = eventTime.diff(now, "second");
    
    if (diff > 0) {
      setCountdown({
        hours: Math.floor(diff / 3600),
        minutes: Math.floor((diff % 3600) / 60),
        seconds: diff % 60,
      });
    } else {
      setCountdown({ hours: 0, minutes: 0, seconds: 0 });
    }
  };

  if (!nextEvent) return <p className="text-center text-gray-500">No upcoming events</p>;

  return (
    <motion.div
      className="mx-auto mt-10 px-6 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 text-white rounded-2xl shadow-lg shadow-[#C084FC] border border-gray-700 relative overflow-hidden max-w-3xl w-[90%]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 4.0 }}
    >
      {nextEvent.image && (
        <Image 
          src={nextEvent.image} 
          alt={nextEvent.title} 
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full opacity-50 rounded-2xl"
        />
      )}
      <div className="relative bg-opacity-60 p-4 sm:p-6 rounded-2xl">
        <h2 className="text-2xl sm:text-3xl text-center font-bold font-montserrat text-white">Upcoming Event</h2>
        <motion.p 
          className="text-4xl sm:text-6xl md:text-7xl text-center font-gloock mt-2 bg-gradient-to-r from-teal-300 via-white to-teal-300 bg-clip-text text-transparent"
          animate={{ backgroundPosition: ["0%", "200%", "0%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        >
          {nextEvent.title}
        </motion.p>
        <p className="text-lg sm:text-xl text-center font-instrument-sans text-purple-400 mt-1">{nextEvent.description}</p>
        <p className="mt-2 text-2xl sm:text-3xl md:text-4xl text-center font-inclusive-sans bg-gradient-to-r from-red-400 to-pink-300 bg-clip-text text-transparent">Starting in: {countdown.hours}h {countdown.minutes}m {countdown.seconds}s</p>
      </div>
    </motion.div>
  );
};

export default EventTracker;
