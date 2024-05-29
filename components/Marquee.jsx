"use client";
import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ texts }) => {
  return (
    <div className="overflow-hidden w-full relative min-h-[20vh] flex items-center">
      <motion.span
        className="whitespace-nowrap flex items-center"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        <div className="flex items-center">
          {texts.map((text, index) => (
            <p key={index} className="text-[4vmax] font-bold text-neutral-100 mx-[3vmax]">
              {text}
            </p>
          ))}
        </div>
      </motion.span>
      <motion.span
        className="whitespace-nowrap flex items-center"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        <div className="flex items-center">
          {texts.map((text, index) => (
            <p key={index} className="text-[4vmax] font-bold text-neutral-100 mx-[3vmax]">
              {text}
            </p>
          ))}
        </div>
      </motion.span>
    </div>
  );
};

export default Marquee;
