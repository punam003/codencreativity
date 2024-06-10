import React from "react";

const PortfolioCategoryComponents = () => {
  const buttons = [
    "all",
    "business website",
    "E-Commerce Websites",
    "Mobile + Web App",
    "Poster Designs",
    "Logo Designs",
  ];
  return (
    <div className='flex gap-[1.5vmin] justify-evenly flex-wrap'>
      {buttons.map((item, index) => (
        <button
          type='button'
          key={index}
          className='inline-block bg-blue-800 hover:shadow-lg capitalize text-neutral-100 min-w-[10vmax] border border-blue-800 py-[1vmin] rounded-xl px-[1.2vmin]'
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default PortfolioCategoryComponents;
