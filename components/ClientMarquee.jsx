"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ClientMarquee = ({ images }) => {
  return (
    <div className="overflow-hidden w-[90vw] relative min-h-[20vh] flex items-center gap-[5vmin]">
      <motion.div
        className="flex items-center"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        <div className="flex items-center gap-[5vmin]">
          {images.map((img, index) => (
            <Image
              key={index}
              src={`/${img}`}
              alt="client logo"
              width={600}
              height={300}
              className="max-w-[15vmax]"
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        className="flex items-center"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        <div className="flex items-center gap-[5vmin]">
          {images.map((img, index) => (
            <Image
              key={index}
              src={`/${img}`}
              alt="client logo"
              width={600}
              height={300}
              className="max-w-[15vmax]"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ClientMarquee;
