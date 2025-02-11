"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./lampmain";

import "../eventsections/style.css"

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-5xl md:text-6xl font-gloock tracking-wide text-center"
      >
        Discover{" "}
        <span
          className="font-black text-6xl montserrat text-center inline -tracking-normal"
          style={{
            textShadow: "0px 4px 25.3px #cacaca66",
            background:
              "linear-gradient(180deg, rgb(255, 184.88, 239.81) 0%, rgb(99.42, 52.33, 209.31) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Oneiros Events
        </span>
      </motion.h1>
    </LampContainer>
  );
}
