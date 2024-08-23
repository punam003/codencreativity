"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineBolt } from "react-icons/md";
import { motion, useScroll } from "framer-motion";
import { FaDraftingCompass, FaHome, FaServer } from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsAtTop(latest === 0);
    });
  }, [scrollY]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

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
              width: "95%",
            }
          : {
              width: "100%",
              marginLeft: 0,
              marginRight: 0,
              borderRadius: 0,
            }
      }
    >
      <div className='flex items-center gap-[3vmin]'>
        <div className='flex md:hidden z-[1100]'>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isOpen ? "35vmax" : 0 }}
            className='bg-[linear-gradient(_177.8deg,_#aac4e3_0%,_#dde5f2_14.08%,_#dae2f1_27.91%,_#c1cbe3_42.23%,_#bdbbd8_59.62%,_#b4aacd_76.96%,_#f7cfd7_95.22%)] text-neutral-900 fixed top-0 left-0 h-full overflow-hidden'
          >
            <ul className='p-4 mt-[6vmax]'>
              <li className='my-4 flex items-center gap-2'>
                <FaHome className='size-[3vmax]' />
                <Link
                  href='/'
                  onClick={() => setIsOpen(false)}
                  className='capitalize font-medium text-[2vmax]'
                >
                  home
                </Link>
              </li>
              <li className='my-4 flex items-center gap-2'>
                <FaDraftingCompass className='size-[3vmax]' />
                <Link
                  href='/about-us'
                  onClick={() => setIsOpen(false)}
                  className='capitalize font-medium text-[2vmax]'
                >
                  about
                </Link>
              </li>
              <li className='my-4 flex items-center gap-2'>
                <FaServer className='size-[3vmax]' />
                <Link
                  href='/our-services'
                  onClick={() => setIsOpen(false)}
                  className='capitalize font-medium text-[2vmax]'
                >
                  our services
                </Link>
              </li>
              <li className='my-4 flex items-center gap-2'>
                <AiFillProfile className='size-[3vmax]' />
                <Link
                  href='/portfolio'
                  onClick={() => setIsOpen(false)}
                  className='capitalize font-medium text-[2vmax]'
                >
                  portfolio
                </Link>
              </li>
            </ul>
            <div className='flex flex-col gap-[1.7vmin] p-4'>
              <h1 className='text-[2vmax] capitalize font-semibold'>
                newsletters
              </h1>
              <p className='text-[1.6vmax]'>
                Sign Up Now & Get 15 OFF Extra Be the first to know about our
                new and exclusive offers.
              </p>
              <div className='flex items-center gap-[1.5vmin] justify-between'>
                <Link
                  href='https://www.instagram.com/code_n_creativity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                  target='_blank'
                  referrerPolicy='no-referrer'
                >
                  <Image
                    src='/instagram.png'
                    width={200}
                    height={70}
                    alt='insta'
                    className='max-w-[5vmax] max-h-[5vmax] border border-neutral-100 rounded-full p-[0.5vmin]'
                  />
                </Link>
                <Link
                  href='https://pin.it/4GJBYFzH0'
                  target='_blank'
                  referrerPolicy='no-referrer'
                >
                  <Image
                    src='/pinterest.png'
                    width={200}
                    height={70}
                    alt='insta'
                    className='max-w-[5vmax] max-h-[5vmax] border border-neutral-100 rounded-full p-[0.5vmin]'
                  />
                </Link>
                <Image
                  src='/upwork.png'
                  width={200}
                  height={70}
                  alt='insta'
                  className='max-w-[5vmax] max-h-[5vmax] border border-neutral-100 rounded-full p-[0.5vmin]'
                />
                <Link
                  href='https://www.linkedin.com/in/code-n-creativity-189087307?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCeUc9jm9Sb6kbAIADmRmmg%3D%3D'
                  target='_blank'
                  referrerPolicy='no-referrer'
                >
                  <Image
                    src='/linkedin.png'
                    width={200}
                    height={70}
                    alt='insta'
                    className='max-w-[5vmax] max-h-[5vmax] border border-neutral-100 rounded-full p-[0.5vmin]'
                  />
                </Link>
              </div>
            </div>
          </motion.div>
          <button
            onClick={toggleNav}
            className='px-[1vmin] rounded-md focus:outline-none'
          >
            <motion.div className='relative w-6 h-6 flex items-center justify-center'>
              <svg width='23' height='23' viewBox='0 0 23 23'>
                <motion.path
                  fill='transparent'
                  strokeWidth='3'
                  stroke='hsl(249, 60%, 20%)'
                  strokeLinecap='round'
                  initial={{ d: "M 2 2.5 L 20 2.5" }}
                  animate={{
                    d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5",
                  }}
                />
                <motion.path
                  fill='transparent'
                  strokeWidth='3'
                  stroke='hsl(249, 60%, 20%)'
                  strokeLinecap='round'
                  d='M 2 9.423 L 20 9.423'
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.1 }}
                />
                <motion.path
                  fill='transparent'
                  strokeWidth='3'
                  stroke='hsl(249, 60%, 20%)'
                  strokeLinecap='round'
                  initial={{ d: "M 2 16.346 L 20 16.346" }}
                  animate={{
                    d: isOpen
                      ? "M 3 2.5 L 17 16.346"
                      : "M 2 16.346 L 20 16.346",
                  }}
                />
              </svg>
            </motion.div>
          </button>
        </div>
        <Link href='/'>
          <Image
            src='/logo-dark.png'
            alt='logo'
            width={640}
            height={360}
            className='max-w-[5vmax]'
          />
        </Link>
      </div>
      <ul className='hidden md:flex items-center gap-[2.5vmax] justify-between'>
        <li className='capitalize text-[#585858] hover:text-neutral-900 font-medium hover:font-semibold text-[3vmin]'>
          <Link href='/'>home</Link>
        </li>
        <li className='capitalize text-[#585858] hover:text-neutral-900 font-medium hover:font-semibold text-[3vmin]'>
          <Link href='/about-us'>about</Link>
        </li>
        <li className='capitalize text-[#585858] hover:text-neutral-900 font-medium hover:font-semibold text-[3vmin]'>
          <Link href='/our-services'>our services</Link>
        </li>
        <li className='capitalize text-[#585858] hover:text-neutral-900 font-medium hover:font-semibold text-[3vmin]'>
          <Link href='/portfolio'>portfolio</Link>
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
