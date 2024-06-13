"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const TeamCard = ({ member, index }) => {
  return (
    <motion.div
      className='flex items-center gap-[2vmin] even:self-start odd:self-end justify-evenly bg-white min-w-[55vmin] lg:min-w-[75vmin] py-[1.5vmin] rounded-xl shadow-md'
      initial={{ x: index % 2 === 0 ? "-100%" : "100%" }}
      whileInView={{ x: "0%" }}
      transition={{ duration: 3 }}
    >
      <Image
        src={`/${member.img}`}
        alt='profile'
        width={640}
        height={360}
        className='max-w-[8vmax] max-h-[8vmax] object-cover rounded-full'
      />
      <div className='flex flex-col'>
        <h1 className='capitalize font-bold text-neutral-700 text-[2.5vmin]'>
          {member.name}
        </h1>
        <p className='text-[2vmin]'>{member.designation}</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;
