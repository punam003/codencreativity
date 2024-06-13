import Link from "next/link";
import React from "react";

const PortfolioCategoryComponents = ({ href }) => {
  const buttons = [
    {
      text: "all",
      href: "/",
    },
    {
      text: "E-Commerce Websites",
      href: "e-commerce_website",
    },
    {
      text: "business websites",
      href: "business_website",
    },
    {
      text: "Mobile + Web App",
      href: "mobile_web_app",
    },
    {
      text: "Poster Designs",
      href: "poster_design",
    },
    {
      text: "Logo Designs",
      href: "logo_design",
    },
  ];

  return (
    <div className="flex gap-[1.5vmin] justify-evenly md:flex-wrap overflow-x-scroll w-[85vw] md:w-auto no-scrollbar">
      {buttons.map((item, index) => (
        <Link
          href={`/portfolio/${item.href}`}
          key={index}
          className={`inline-block hover:shadow-lg capitalize whitespace-nowrap md:min-w-[10vmax] border border-blue-800 text-center py-[1vmin] rounded-xl px-[1.2vmin] ${
            item.href == href
              ? "bg-blue-800 text-neutral-100"
              : "bg-[rgba(255,255,255,0.5)] text-black"
          }`}
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default PortfolioCategoryComponents;
