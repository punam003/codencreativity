"use client";
import Lottie from "lottie-react";
import React from "react";
import loaderData from "@/assets/loading.json";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Lottie
        animationData={loaderData}
        loop={true}
        style={{ minWidth: "10vmax", maxWidth: "25vmax" }}
      />
      <h2 className="text-[3vmin] capitalize font-semibold">
        loading please wait...
      </h2>
    </div>
  );
};

export default Loader;
