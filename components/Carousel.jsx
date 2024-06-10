"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Crimson_Text } from "next/font/google";
import Image from "next/image";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
  }),
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
  }),
};

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const slides = Array.from({ length: 5 });

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentIndex = ((page % slides.length) + slides.length) % slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [page]);

  return (
    <div className='w-full overflow-hidden mt-[10vmin]'>
      <div className='relative min-h-[60vh] lg:min-h-[85vh]'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: "spring", stiffness: 300, damping: 50 },
            }}
            className='w-full absolute h-full flex items-center justify-center'
          >
            {currentIndex === 0 && (
              <div
                className={
                  crimsonText.className +
                  " bg-[url('/carousel1.png')] bg-no-repeat bg-cover flex flex-col items-center justify-center gap-[4vmin] min-h-full w-full"
                }
              >
                <h1 className='capitalize text-[4vmax] max-w-[50%] font-bold text-neutral-100 text-center'>
                  design &amp; development company
                </h1>
                <div className='flex flex-col items-center gap-[1.5vmin]'>
                  <p className='text-[1.5vmax] text-neutral-100'>
                    We&apos;re a team of bright minds!
                  </p>
                  <p className='text-[1.5vmax] text-neutral-100'>
                    We develop iOS, Android, and web apps that people love
                  </p>
                </div>
                <Link
                  href='/contact-us'
                  className='bg-gradient-to-r from-blue-600 to-blue-900 text-neutral-100 text-[1.8vmax] min-w-[24vmin] py-[1.3vmin] rounded-full capitalize text-center shadow'
                >
                  hire us
                </Link>
              </div>
            )}
            {currentIndex === 1 && (
              <div
                className={
                  crimsonText.className +
                  " flex items-center justify-between min-h-full w-full px-[2.5vmin] bg-gradient-to-r from-[#12054E] to-[#39065E]"
                }
              >
                <div className='flex flex-col items-start gap-[4vmin] max-w-[60%]'>
                  <h1 className='capitalize text-[4vmax] font-bold text-neutral-100 text-center'>
                    We Create Website For You
                  </h1>
                  <p className='text-[1.5vmax] text-neutral-100'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                  <Link
                    href='/contact-us'
                    className='bg-gradient-to-r from-[#677DD8] to-[#1C79AF] text-neutral-100 text-[1.8vmax] min-w-[24vmin] py-[1.3vmin] rounded-full capitalize text-center shadow'
                  >
                    hire us
                  </Link>
                </div>
                <div>
                  <Image
                    src='/carousel2.png'
                    alt='carousel 2nd'
                    width={450}
                    height={225}
                    className='min-w-[40vmax] max-w-[40vmax] drop-shadow-2xl'
                  />
                </div>
              </div>
            )}
            {currentIndex === 2 && (
              <div
                className={
                  crimsonText.className +
                  " flex items-center justify-between min-h-full w-full px-[2.5vmin] bg-gradient-to-r from-[#6B2289] to-[#321954]"
                }
              >
                <div className='flex flex-col items-start gap-[4vmin] max-w-[60%]'>
                  <h1 className='capitalize text-[4vmax] font-bold text-neutral-100 text-center'>
                    Crafting Dreams Into Reality
                  </h1>
                  <p className='text-[1.5vmax] text-neutral-100'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                  <Link
                    href='/contact-us'
                    className='bg-gradient-to-r from-[#F96CE1] to-[#5C4298] text-neutral-100 text-[1.8vmax] min-w-[24vmin] py-[1.3vmin] rounded-full capitalize text-center shadow'
                  >
                    hire us
                  </Link>
                </div>
                <div>
                  <Image
                    src='/carousel3.png'
                    alt='carousel 3rd'
                    width={450}
                    height={225}
                    className='min-w-[40vmax] max-w-[40vmax] drop-shadow-2xl'
                  />
                </div>
              </div>
            )}
            {currentIndex === 3 && (
              <div
                className={
                  crimsonText.className +
                  " flex items-center justify-between min-h-full w-full px-[2.5vmin] bg-gradient-to-br from-[#53C5B7] to-[#0F6376]"
                }
              >
                <div className='flex flex-col items-start gap-[4vmin] max-w-[60%]'>
                  <h1 className='capitalize text-[4vmax] font-bold text-neutral-100'>
                    Transforming Clicks into Customers
                  </h1>
                  <p className='text-[1.5vmax] text-neutral-100'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incidid. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat
                  </p>
                  <Link
                    href='/contact-us'
                    className='bg-gradient-to-r from-[#49C6BC] to-[#447E8F] text-neutral-100 text-[1.8vmax] min-w-[24vmin] py-[1.3vmin] rounded-full capitalize text-center shadow'
                  >
                    hire us
                  </Link>
                </div>
                <div>
                  <Image
                    src='/carousel4.png'
                    alt='carousel 4th'
                    width={450}
                    height={225}
                    className='min-w-[40vmax] max-w-[40vmax]'
                  />
                </div>
              </div>
            )}
            {currentIndex === 4 && (
              <div
                className={
                  crimsonText.className +
                  " flex items-center justify-between min-h-full w-full px-[2.5vmin] bg-gradient-to-r from-[#9C91ED] to-[#310A52]"
                }
              >
                <div className='flex flex-col items-start gap-[4vmin] max-w-[60%]'>
                  <h1 className='capitalize text-[4vmax] font-bold text-neutral-100'>
                    Unlocking the Digital Doorway to Success
                  </h1>
                  <p className='text-[1.5vmax] text-neutral-100'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link
                    href='/contact-us'
                    className='bg-gradient-to-br from-[#A09AF3] to-[#7330AC] text-neutral-100 text-[1.8vmax] min-w-[24vmin] py-[1.3vmin] rounded-full capitalize text-center shadow'
                  >
                    hire us
                  </Link>
                </div>
                <div>
                  <Image
                    src='/carousel5.png'
                    alt='carousel 5th'
                    width={450}
                    height={225}
                    className='min-w-[40vmax] max-w-[40vmax] drop-shadow-2xl'
                  />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        {/* <button
          className='absolute top-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.5)] text-white p-2 cursor-pointer left-2 z-10 text-[2.5vmax]'
          onClick={() => paginate(-1)}
        >
          <FaAngleLeft />
        </button>
        <button
          className='absolute top-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.5)] text-white p-2 cursor-pointer right-2 z-10 text-[2.5vmax]'
          onClick={() => paginate(1)}
        >
          <FaAngleRight />
        </button> */}
        <div className='text-center absolute bottom-0 left-1/2 -translate-x-1/2 z-10'>
          {slides.map((slide, index) => (
            <span
              key={index}
              className={`inline-block w-2 h-2 my-0 mx-1 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-neutral-900" : "bg-gray-600"
              }`}
              onClick={() => setPage([index, index > currentIndex ? 1 : -1])}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
