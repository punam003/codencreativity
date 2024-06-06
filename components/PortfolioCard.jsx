"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const PortfolioCard = ({ imageUrl, width }) => {
  const [imageHeight, setImageHeight] = useState(0);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(
        imageRef.current.offsetHeight - containerRef.current.offsetHeight
      );
    }
  }, [imageUrl]);

  return (
    <div
      className={`h-[60vmin] relative overflow-hidden min-w-[${width}vmax] cursor-pointer`}
      ref={containerRef}
    >
      <motion.div
        className='absolute top-0 left-0 w-full'
        initial={{ y: 0 }}
        whileHover={{ y: -imageHeight }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 15,
          damping: 10,
        }}
      >
        <Image
          width={600}
          height={200}
          className=''
          src={imageUrl}
          alt='Screenshot'
          ref={imageRef}
        />
      </motion.div>
    </div>
  );
};

export default PortfolioCard;
