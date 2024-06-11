"use client";
import Image from "next/image";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { MapInteractionCSS } from "react-map-interaction";

const FullImageView = ({ img, setShowFullImage }) => {
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-black z-[1100] bg-opacity-50 flex items-center">
      <MapInteractionCSS
        showControls
        defaultValue={{
          scale: 1,
          translation: { x: 0, y: 0 },
        }}
        minScale={0.4}
        maxScale={3}
        translationBounds={{
          xMax: 450,
          yMax: 200,
        }}
      >
        <Image
          width={600}
          height={200}
          className="h-full"
          src={img}
          alt="portfolio-cover-full"
        />
      </MapInteractionCSS>
      <button
        type="button"
        onClick={() => setShowFullImage(false)}
        className="text-white text-[6vmin] absolute top-[2%] right-[2%]"
      >
        <IoCloseOutline />
      </button>
    </div>
  );
};

export default FullImageView;
