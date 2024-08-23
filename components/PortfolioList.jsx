"use client";
import React, { useEffect, useRef, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import getPortfolios from "@/actions/getAllPortfolios";
import getPortfoliosByCategory from "@/actions/getAllPortfoliosByCategory";

const PortfolioList = ({ initialPortfolios, cat, ifHasNext }) => {
  const [portFolios, setPortfolios] = useState(initialPortfolios);
  const [hasNext, setHasNext] = useState(ifHasNext);

  async function getAllPortfolios(off) {
    const data = await getPortfolios(off, 12);
    setHasNext(data.hasNext);
    setPortfolios((prev) => [...prev, ...data.portfolios]);
  }
  async function getAllPortfoliosByCategory(off) {
    const data = await getPortfoliosByCategory(cat, off, 12);

    setHasNext(data.hasNext);
    setPortfolios((prev) => [...prev, ...data.portfolios]);
  }

  const offset = useRef(0);

  return (
    <div className="flex flex-col gap-y-[3.5vmax] my-[2vmax]">
      <div className="flex flex-wrap justify-evenly gap-y-[3vmax] self-stretch">
        {portFolios?.map((item) => (
          <PortfolioCard imageUrl={`${item.cover}`} key={item._id} width={20} />
        ))}
      </div>
      {hasNext && (
        <button
          type="button"
          className="capitalize hover:shadow-[0px_4px_6px_0px_#00000040_inset] text-neutral-800 bg-opacity-40 bg-white text-[3vmin] rounded-full px-[3vmin] py-[1.5vmin] font-bold self-center"
          onClick={() =>
            cat
              ? getAllPortfoliosByCategory(offset.current + 12)
              : getAllPortfolios(offset.current + 12)
          }
        >
          view more
        </button>
      )}
    </div>
  );
};

export default PortfolioList;
