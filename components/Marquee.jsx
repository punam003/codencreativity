"use client";
import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ texts }) => {
  return (
    <div className='overflow-hidden w-full relative min-h-[10vh] md:min-h-[20vh] flex items-center'>
      <motion.div
        className='flex items-center'
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        <div className='flex items-center'>
          {texts.map((text, index) => (
            <p
              key={index}
              className='text-[4vmax] font-bold text-neutral-100 mx-[3vmax]'
            >
              {text}
            </p>
          ))}
        </div>
      </motion.div>
      <motion.div
        className='flex items-center'
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        <div className='flex items-center'>
          {texts.map((text, index) => (
            <p
              key={index}
              className='text-[4vmax] font-bold text-neutral-100 mx-[3vmax]'
            >
              {text}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
