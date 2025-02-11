"use client";

import { useEffect, useState } from "react";
import {
  Gloock,
  Instrument_Sans,
  Montserrat,
  Inclusive_Sans,
} from "next/font/google";

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
    const targetDate = new Date("2025-02-20T00:00:00").getTime();

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
      className={`min-h-screen bg-[#0a0a0a] text-white ${instrumentSans.className}`}
    >
      {/* Combined Tree Video and Timer Section */}
      <section className="relative">
        {/* Tree Video */}
        <div className="w-full h-[50vh] md:h-[70vh]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/tree.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Countdown Timer */}
        <div className="w-full bg-[#0a0a0a] py-4 md:py-6">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-row justify-between sm:grid sm:grid-cols-4 gap-2 md:gap-8 text-center">
              <div className="flex flex-col items-center">
                <span
                  className={`text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-purple-400 ${inclusiveSans.className}`}
                >
                  {timeLeft.days}
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-400 mt-1 sm:mt-2">
                  Days
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span
                  className={`text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-red-400 to-pink-300 bg-clip-text text-transparent ${inclusiveSans.className}`}
                >
                  {timeLeft.hours.toString().padStart(2, "0")}
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-400 mt-1 sm:mt-2">
                  Hours
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span
                  className={`text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent ${inclusiveSans.className}`}
                >
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-400 mt-1 sm:mt-2">
                  Minutes
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span
                  className={`text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent ${inclusiveSans.className}`}
                >
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-400 mt-1 sm:mt-2">
                  Seconds
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Adjusted spacing */}
      <section className="w-full bg-[#0a0a0a] pt-6 md:pt-8">
        <div className="max-w-4xl mx-auto px-4 space-y-6 md:space-y-8">
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl ${gloock.className} tracking-[-0.64px]`}
          >
            About{" "}
            <span
              className={`font-black ${montserrat.className} tracking-[-4.48px]`}
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
          </h2>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-200">
              Lorem ipsum dolor sit amet. Sit libero dolores qui tenetur placeat
              ad voluptates explicabo et expedita praesentium ab voluptatem
              amet! Vel quisquam laboriosam ex consequatur veniam sit omnis
              adipisci est iste repellat aut nesciunt fuga et amet pariatur in
              quia modi.
            </p>

            <p className="text-lg leading-relaxed text-gray-200">
              At deserunt ipsa est eligendi modi et tempora reprehenderit 33
              neque quod. Ut perferendis sint et natus provident ut nostrum esse
              et nobis natus.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
