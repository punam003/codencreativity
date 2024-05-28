"use client";
import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ texts }) => {
  return (
    <div className='overflow-hidden w-full relative min-h-[20vh]'>
      <motion.span
        className='absolute whitespace-nowrap'
        initial={{ x: "0%" }}
        animate={{ x: -1035 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        <div className='flex items-center gap-[4vmax] py-[2.5vmin]'>
          {texts.map((text, index) => (
            <p key={index} className='text-[4vmax] font-bold text-neutral-100'>
              {text}
            </p>
          ))}
          {texts.map((text, index) => (
            <p key={index} className='text-[4vmax] font-bold text-neutral-100'>
              {text}
            </p>
          ))}
        </div>
      </motion.span>
    </div>
  );
};

export default Marquee;
