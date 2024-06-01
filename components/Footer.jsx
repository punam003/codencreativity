import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex items-start justify-between w-full bg-[#001F4B] py-[3vmin] text-neutral-100 px-[3vmin]">
        <Link href="/">
          <Image
            src="/logo-light.png"
            alt="logo"
            width={640}
            height={360}
            className="max-w-[10vmax]"
          />
        </Link>
        <div className="flex flex-col items-start gap-[1.7vmin] max-w-[30vmin]">
          <h1 className="text-[1.3vmax] capitalize font-semibold">
            contact us
          </h1>
          <Link href="tel:+919007000328" className="text-[1.8vmin]">
            +91 9007000328
          </Link>
          <Link
            href="mailto:codencreativity@gmail.com"
            className="text-[1.8vmin]"
          >
            codencreativity@gmail.com
          </Link>
          <p className="text-[1.8vmin]">
            Tarapukur Main Rd, Osmanpur, Agarpara, Panihati, West Bengal 700109
          </p>
        </div>
        <div className="flex flex-col items-start gap-[1.7vmin] max-w-[30vmin]">
          <h2 className="text-[1.3vmax] capitalize font-semibold">
            quick links
          </h2>
          <ul className="flex flex-col items-start gap-[1.2vmin]">
            <li className="text-[1.8vmin] capitalize">
              <Link href="/">home</Link>
            </li>
            <li className="text-[1.8vmin] capitalize">
              <Link href="/about-us">about us</Link>
            </li>
            <li className="text-[1.8vmin] capitalize">
              <Link href="/our-services">our services</Link>
            </li>
            <li className="text-[1.8vmin] capitalize">portfolio</li>
            <li className="text-[1.8vmin] capitalize">
              <Link href="/contact-us">contact us</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[1.7vmin] max-w-[30vmin]">
          <h1 className="text-[1.3vmax] capitalize font-semibold">
            newsletters
          </h1>
          <p className="text-[1.8vmin]">
            Sign Up Now & Get 15 OFF Extra Be the first to know about our new
            and exclusive offers.
          </p>
          <div className="flex items-center gap-[1.5vmin]">
            <Image
              src="/instagram.png"
              width={200}
              height={70}
              alt="insta"
              className="max-w-[3vmax] max-h-[3vmax] border border-neutral-100 rounded-full p-[0.5vmin]"
            />
            <Image
              src="/pinterest.png"
              width={200}
              height={70}
              alt="insta"
              className="max-w-[3vmax] max-h-[3vmax] border border-neutral-100 rounded-full p-[0.5vmin]"
            />
            <Image
              src="/upwork.png"
              width={200}
              height={70}
              alt="insta"
              className="max-w-[3vmax] max-h-[3vmax] border border-neutral-100 rounded-full p-[0.5vmin]"
            />
            <Image
              src="/linkedin.png"
              width={200}
              height={70}
              alt="insta"
              className="max-w-[3vmax] max-h-[3vmax] border border-neutral-100 rounded-full p-[0.5vmin]"
            />
          </div>
        </div>
      </footer>
      <div className="flex items-center justify-evenly py-[4vmin]">
        <div>
          <h3 className="font-semibold text-neutral-800 text-[2.5vmin]">
            Copyright © 2024 CodeNCreativity
          </h3>
        </div>
        <div className="flex items-center justify-evenly gap-[2vmin]">
          <p className="text-neutral-800 font-semibold capitalize text-[2.2vmin]">
            privacy policies
          </p>
          <p className="text-neutral-800 font-semibold text-[2.2vmin]">|</p>
          <p className="text-neutral-800 font-semibold capitalize text-[2.2vmin]">
            terms &amp; conditions
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
