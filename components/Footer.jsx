import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className='flex items-start justify-between w-full bg-[#001F4B]'>
      <Link href='/'>
        <Image
          src='/8.png'
          alt='logo'
          width={640}
          height={360}
          className='max-w-[6vmax]'
        />
      </Link>
      <div>
        <h1>contact us</h1>
        <Link href='tel:+919007000328'>+91 9007000328</Link>
        <Link href='mailto:codencreativity@gmail.com'>
          codencreativity@gmail.com
        </Link>
        <p className='whitespace-pre-line'>
          Tarapukur Main Rd, Osmanpur, Agarpara, Panihati, West Bengal 700109
        </p>
      </div>
      <div>
        <h2>quick links</h2>
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>our services</li>
          <li>portfolio</li>
          <li>contact us</li>
        </ul>
      </div>
      <div>
        <h1>newsletters</h1>
        <p>
          Sign Up Now & Get 15 OFF Extra Be the first to know about our new and
          exclusive offers.
        </p>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
