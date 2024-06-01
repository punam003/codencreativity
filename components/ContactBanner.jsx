import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactBanner = () => {
  return (
    <div className='flex items-center justify-center mb-[5vmin]'>
      <div className='bg-[linear-gradient(90.86deg,_#2B2B2B_24%,_#000000_55.71%)] flex items-center px-[2.2vmin] py-[1.6vmin] gap-[2.5vmin]'>
        <h1 className='capitalize text-neutral-100 font-semibold text-[2.5vmin]'>
          Are You Ready To Work{" "}
          <span className='text-[#FF6B00]'>Together ?</span>
        </h1>
        <Link
          href='/contact-us'
          className='capitalize bg-[#ECECEC] px-[2.2vmin] py-[1.6vmin] font-semibold text-[2.5vmin] flex items-center gap-2'
        >
          Let&apos;s Talk Our Expertise
          <FaArrowRightLong className='text-neutral-500 text-[1.2vmax]' />
        </Link>
      </div>
    </div>
  );
};

export default ContactBanner;
