"use client";
import Lottie from "lottie-react";
import React, { useEffect, useRef } from "react";

const LottieComponents = ({ animateJson, style = { minWidth: "20vmax" } }) => {
  const lottieRef = useRef();
  useEffect(() => {
    lottieRef.current.setSpeed(0.2);
  }, [lottieRef.current]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animateJson}
      loop={true}
      style={style}
    />
  );
};

export default LottieComponents;
