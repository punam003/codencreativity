"use client";
import React from "react";
import { motion } from "framer-motion";

const transitionValues = {
  duration: 2,
  yoyo: Infinity,
  ease: "easeIn",
};

const BounceCut = ({ cutOutData }) => {
  return (
    <motion.div
      className='w-[12vmax] h-[12vmax] flex flex-col items-center bg-white rounded-full justify-center odd:rounded-tr-none even:rounded-bl-none relative shadow-lg even:self-end odd:self-start gap-[1vmin]'
      transition={{
        y: transitionValues,
        opacity: transitionValues,
      }}
      whileInView={{
        y: ["-50%", "0%"],
        opacity: [0, 1],
      }}
    >
      {cutOutData.component}
      <p className='text-center text-neutral-800 font-semibold mx-[1vmin]'>
        {cutOutData.title}
      </p>
      <span className='absolute top-0 left-0 bg-blue-600 w-[3.5vmax] h-[3.5vmax] rounded-full text-[2vmax] text-neutral-100 font-bold flex items-center justify-center'>
        {cutOutData.count}
      </span>
    </motion.div>
  );
};

export default BounceCut;
