"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Gloock,
  Instrument_Sans,
  Montserrat,
  Inclusive_Sans,
} from "next/font/google";

// Configure fonts
const gloock = Gloock({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gloock",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-instrument-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const inclusiveSans = Inclusive_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inclusive-sans",
});

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 4,
    minutes: 12,
    seconds: 59,
  });

  useEffect(() => {
    const targetDate = new Date("2025-02-20T00:00:00").getTime(); // Set your target date here

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main
      className={`min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8 ${instrumentSans.className} relative overflow-hidden`}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video-background.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Semi-Transparent Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-black/50 z-10"
        aria-hidden="true"
      />

      {/* Countdown Timer */}
      <div className="max-w-4xl mt-80 mx-auto mb-16 p-6 bg-black/20 rounded-3xl backdrop-blur-sm relative z-30">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="flex flex-col">
            <span
              className={`text-6xl md:text-7xl font-bold text-purple-400 ${inclusiveSans.className}`}
            >
              {timeLeft.days}
            </span>
            <span className="text-gray-400 text-sm md:text-base">Days</span>
          </div>
          <div className="flex flex-col">
            <span
              className={`text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-400 to-pink-300 bg-clip-text text-transparent ${inclusiveSans.className}`}
            >
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <span className="text-gray-400 text-sm md:text-base">Hours</span>
          </div>
          <div className="flex flex-col">
            <span
              className={`text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent ${inclusiveSans.className}`}
            >
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-gray-400 text-sm md:text-base">Minutes</span>
          </div>
          <div className="flex flex-col">
            <span
              className={`text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent ${inclusiveSans.className}`}
            >
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
            <span className="text-gray-400 text-sm md:text-base">Seconds</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto space-y-6 relative z-30">
        <h1
          className={`text-5xl md:text-6xl ${gloock.className} tracking-[-0.64px]`}
        >
          About{" "}
          <span
            className={`font-black text-6xl ${montserrat.className} text-center tracking-[-4.48px]`}
            style={{
              textShadow: "0px 4px 25.3px #cacaca66",
              background:
                "linear-gradient(180deg, rgb(255, 184.88, 239.81) 0%, rgb(99.42, 52.33, 209.31) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Oneiros
          </span>
        </h1>

        <p className="text-lg leading-relaxed text-gray-200">
          Lorem ipsum dolor sit amet. Sit libero dolores qui tenetur placeat ad
          voluptates explicabo et expedita praesentium ab voluptatem amet! Vel
          quisquam laboriosam ex consequatur veniam sit omnis adipisci est iste
          repellat aut nesciunt fuga et amet pariatur in quia modi. Eos magnam
          illo nam laudantium explicabo ex fugiat quia et aliquid voluptates.
          Aut quibusdam cupiditate quo ipsa repudiandae nam quia vero et ratione
          dicta id quia molestiae?Et sequi voluptas ab deserunt necessitatibus
          33 internos.
        </p>

        {/* Pointer SVG with Levitating Breathing Effect */}
        <div className="ml-0">
          <Image
            src="/pointer.svg"
            width={100}
            height={100}
            className="animate-levitate"
            alt="Pointer"
          />
        </div>

        <p className="text-lg leading-relaxed text-gray-200">
          At deserunt ipsa est eligendi modi et tempora reprehenderit 33 neque
          quod. Ut perferendis sint et natus provident ut nostrum esse et nobis
          natus. Ea ducimus reiciendis aut reiciendis harum et iusto enim et
          explicabo pariatur vel atque adipisci.
        </p>
        <p className="text-lg leading-relaxed text-gray-200">
          Et inventore unde in quidem excepturi aut galisum eius. Est totam
          dignissimos et aliquam tempore aut sequi reiciendis et praesentium
          fuga non dicta voluptatem vel sunt possimus. Aut asperiores asperiores
          qui odit illum At consequatur consequatur eos officia eaque.
        </p>
      </div>
    </main>
  );
}
