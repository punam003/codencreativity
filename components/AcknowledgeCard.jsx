import Image from "next/image";
import React from "react";
import { Counter } from "./HomeServices";

const AcknowledgeCard = ({ cardData }) => {
  return (
    <div className='flex bg-white min-w-[22vmax] lg:min-w-[16vmax] min-h-[22vmax] lg:min-h-[16vmax] items-center justify-evenly flex-col rounded-2xl hover:scale-110 hover:shadow-xl transition duration-300'>
      <Image
        src={`/${cardData.icon}`}
        alt={cardData.altName}
        width={250}
        height={250}
        className='max-w-[6vmax]'
      />
      <div className='flex flex-col items-center'>
        <h2 className='text-[3vmin] font-bold'>
          {" "}
          <Counter value={cardData.count} />+
        </h2>
        <h3 className='font-medium text-[2.5vmin] capitalize'>
          {cardData.title}
        </h3>
      </div>
    </div>
  );
};

export default AcknowledgeCard;
