"use client";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactForm = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <form className='min-w-[20vmax] min-h-[20vmax] bg-neutral-100 rounded-xl relative z-10 flex flex-col items-start px-[2.5vmin] py-[2vmin] gap-[1.5vmin] justify-evenly self-stretch h-full'>
      <div>
        <h2 className='capitalize font-bold text-neutral-900 text-[2.77vmin]'>
          contact now
        </h2>
        <p className='capitalize font-medium text-neutral-900 text-[1.38vmin]'>
          Contact Now For Free Consultation
        </p>
      </div>
      <input
        type='text'
        placeholder='full name'
        value={fullname}
        onChange={(e) => setFullName(e.target.value)}
        className='placeholder:text-[#001F4B] text-[#001F4B] placeholder:text-[1.6vmin] placeholder:font-semibold placeholder:capitalize focus-within:outline-none focus-within:border-none bg-[#C0DCFF] px-[1.5vmin] py-[1vmin] w-full'
      />
      <input
        type='email'
        placeholder='email address'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='placeholder:text-[#001F4B] text-[#001F4B] placeholder:text-[1.6vmin] placeholder:font-semibold placeholder:capitalize focus-within:outline-none focus-within:border-none bg-[#C0DCFF] px-[1.5vmin] py-[1vmin] w-full'
      />
      <input
        type='number'
        placeholder='phone number'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className='placeholder:text-[#001F4B] text-[#001F4B] placeholder:text-[1.6vmin] placeholder:font-semibold placeholder:capitalize focus-within:outline-none focus-within:border-none bg-[#C0DCFF] px-[1.5vmin] py-[1vmin] w-full'
      />
      <select
        className='focus-within:outline-none focus-within:border-none bg-[#C0DCFF] px-[1.5vmin] py-[1vmin] w-full text-[#001F4B] text-[1.6vmin] font-semibold capitalize'
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      >
        <option
          value=''
          className='text-[#001F4B] text-[1.6vmin] font-semibold capitalize'
        >
          subject
        </option>
        <option
          value='website_development'
          className='text-[#001F4B] text-[1.6vmin] font-semibold capitalize'
        >
          website development
        </option>
        <option
          value='mobile_apps_development'
          className='text-[#001F4B] text-[1.6vmin] font-semibold capitalize'
        >
          mobile apps development
        </option>
        <option
          value='desktop_apps_development'
          className='text-[#001F4B] text-[1.6vmin] font-semibold capitalize'
        >
          desktop apps development
        </option>
        <option
          value='graphics_designing'
          className='text-[#001F4B] text-[1.6vmin] font-semibold capitalize'
        >
          graphics designing
        </option>
        <option
          value='poster_designing'
          className='text-[#001F4B] text-[1.6vmin] font-semibold capitalize'
        >
          poster designing
        </option>
        <option
          value='logo_designing'
          className='text-[#001F4B] text-[1.6vmin] font-semibold capitalize'
        >
          logo designing
        </option>
        <option
          value='brochure_designing'
          className='text-[#001F4B] text-[1.6vmin] font-semibold capitalize'
        >
          brochure designing
        </option>
        <option
          value='digital marketing'
          className='text-[#001F4B] text-[1.6vmin] font-semibold capitalize'
        >
          digital marketing
        </option>
        <option
          value='seo_ranking'
          className='text-[#001F4B] text-[1.6vmin] font-semibold capitalize'
        >
          seo ranking
        </option>
      </select>
      <button
        type='submit'
        className='text-[1.6vmin] font-semibold text-[#F1F1F1] bg-[#083E8B] px-[2vmin] py-[1.5vmin] capitalize self-center flex items-center gap-2'
      >
        get consultations{" "}
        <FaArrowRightLong className='text-neutral-500 text-[1.2vmax]' />
      </button>
    </form>
  );
};

export default ContactForm;
