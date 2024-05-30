"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineBolt } from "react-icons/md";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsAtTop(latest === 0);
    });
  }, [scrollY]);

  return (
    <motion.nav
      className='flex items-center justify-between px-[2vmin] py-[1.5vmin] bg-white top-0 fixed z-50 transition-all duration-300 shadow-md'
      style={
        !isAtTop
          ? {
              marginLeft: "2vmin",
              marginRight: "2vmin",
              borderRadius: "50vmin",
              marginTop: "1.3vmin",
              width: "98%",
            }
          : {
              width: "100%",
              marginLeft: 0,
              marginRight: 0,
              borderRadius: 0,
            }
      }
    >
      <Link href='/'>
        <Image
          src='/logo-dark.png'
          alt='logo'
          width={640}
          height={360}
          className='max-w-[6vmax]'
        />
      </Link>
      <ul className='flex items-center gap-[2.5vmax] justify-between'>
        <li className='capitalize text-[#585858] hover:text-neutral-900 font-medium hover:font-semibold text-[3vmin]'>
          <Link href='/'>home</Link>
        </li>
        <li className='capitalize text-[#585858] hover:text-neutral-900 font-medium hover:font-semibold text-[3vmin]'>
          <Link href='/about-us'>about</Link>
        </li>
        <li className='capitalize text-[#585858] hover:text-neutral-900 font-medium hover:font-semibold text-[3vmin]'>
          our services
        </li>
        <li className='capitalize text-[#585858] hover:text-neutral-900 font-medium hover:font-semibold text-[3vmin]'>
          portfolio
        </li>
      </ul>
      <Link
        href='/contact-us'
        className='flex items-center gap-[2vmin] rounded-full py-[1.5vmin] px-[2vmin] text-[2.5vmin] capitalize hover:shadow-[0px_4px_6px_0px_#00000040_inset] bg-gradient-to-r from-blue-400 to-blue-700 text-neutral-100'
      >
        <MdOutlineBolt color='#fac12e' className='w-[4vmin] h-[4vmin]' />
        <span>get in touch</span>
      </Link>
    </motion.nav>
  );
};

export default Navbar;
