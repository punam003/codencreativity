"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export function Counter({ value, direction = "up" }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    } else {
      motionValue.set(direction === "down" ? value : 0);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          );
        }
      }),
    [springValue]
  );

  return <span ref={ref} />;
}

const HomeServices = () => {
  return (
    <ul className='flex flex-col gap-[3.5vmin]'>
      <li className='flex flex-col min-w-[40vmax] md:min-w-[35vmax]'>
        <span className='font-semibold text-[2vmin]'>
          Website Development Service
        </span>
        <div className='w-full flex flex-col'>
          <p className='self-end font-semibold text-[2vmin]'>
            <Counter value={97} />%
          </p>
          <motion.span
            className='h-1 bg-orange-500'
            initial={{ width: "0%" }}
            whileInView={{ width: "97%" }}
            transition={{ duration: 3, delay: 0.5 }}
          ></motion.span>
        </div>
      </li>
      <li className='flex flex-col min-w-[40vmax] md:min-w-[35vmax]'>
        <span className='font-semibold text-[2vmin]'>
          Website Redesign Service
        </span>
        <div className='w-full flex flex-col'>
          <p className='self-end font-semibold text-[2vmin]'>
            <Counter value={88} />%
          </p>
          <motion.span
            className='h-1 bg-orange-500'
            initial={{ width: "0%" }}
            whileInView={{ width: "88%" }}
            transition={{ duration: 3, delay: 0.5 }}
          ></motion.span>
        </div>
      </li>
      <li className='flex flex-col min-w-[40vmax] md:min-w-[35vmax]'>
        <span className='font-semibold text-[2vmin]'>
          Website Redesign Service
        </span>
        <div className='w-full flex flex-col'>
          <p className='self-end font-semibold text-[2vmin]'>
            <Counter value={98} />%
          </p>
          <motion.span
            className='h-1 bg-orange-500'
            initial={{ width: "0%" }}
            whileInView={{ width: "98%" }}
            transition={{ duration: 3, delay: 0.5 }}
          ></motion.span>
        </div>
      </li>
      <li className='flex flex-col min-w-[40vmax] md:min-w-[35vmax]'>
        <span className='font-semibold text-[2vmin]'>
          Website Redesign Service
        </span>
        <div className='w-full flex flex-col'>
          <p className='self-end font-semibold text-[2vmin]'>
            <Counter value={95} />%
          </p>
          <motion.span
            className='h-1 bg-orange-500'
            initial={{ width: "0%" }}
            whileInView={{ width: "95%" }}
            transition={{ duration: 3, delay: 0.5 }}
          ></motion.span>
        </div>
      </li>
      <li className='flex flex-col min-w-[40vmax] md:min-w-[35vmax]'>
        <span className='font-semibold text-[2vmin]'>
          Website Redesign Service
        </span>
        <div className='w-full flex flex-col'>
          <p className='self-end font-semibold text-[2vmin]'>
            <Counter value={92} />%
          </p>
          <motion.span
            className='h-1 bg-orange-500'
            initial={{ width: "0%" }}
            whileInView={{ width: "92%" }}
            transition={{ duration: 3, delay: 0.5 }}
          ></motion.span>
        </div>
      </li>
    </ul>
  );
};

export default HomeServices;
