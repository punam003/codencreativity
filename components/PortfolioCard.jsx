"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FullImageView from "./FullImageView";

const PortfolioCard = ({ imageUrl, width }) => {
  const [imageHeight, setImageHeight] = useState(0);
  const [showFullImage, setShowFullImage] = useState(false);
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
      className={`h-[45vmin] md:h-[60vmin] relative overflow-hidden min-w-[${width}vmax] cursor-pointer`}
      ref={containerRef}
    >
      <motion.div
        className="absolute top-0 left-0 w-full"
        initial={{ y: 0 }}
        whileHover={{ y: -Math.abs(imageHeight) }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 15,
          damping: 10,
        }}
        onClick={() => setShowFullImage(true)}
      >
        <Image
          width={600}
          height={200}
          className=""
          src={imageUrl}
          alt="portfolio-cover"
          ref={imageRef}
        />
      </motion.div>
      {showFullImage && (
        <FullImageView img={imageUrl} setShowFullImage={setShowFullImage} />
      )}
    </div>
  );
};

export default PortfolioCard;
