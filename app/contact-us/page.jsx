import LottieComponents from "@/components/LottieComponents";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import clockAnimation from "../../assets/clock-animation.json";

export const metadata = {
  title: "CodeNCreativity | Contact us",
};

export default function ContactUS() {
  return (
    <main className="mt-[10vmin]">
      <header className="flex flex-col justify-evenly gap-[5vmax] my-[3vmax] py-[3vmax]">
        <h1 className="capitalize text-[4vmin] font-bold text-gray-700 text-center">
          contact us
        </h1>
        <div className="flex gap-[2vmin] justify-evenly">
          <div className="flex flex-col items-center justify-center gap-[2vmin] bg-neutral-100 bg-opacity-65 min-w-[35vmin] py-[3vmin] rounded-2xl">
            <div className="flex flex-col items-center justify-center gap-[1.5vmin]">
              <span className="w-16 h-16 rounded-full bg-neutral-600"></span>
              <h2 className="font-semibold text-neutral-900 text-[2.5vmin] capitalize">
                phone
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-[1vmin]">
              <Link href="" className="text-[2vmin] font-medium">
                +91 123456 7890
              </Link>
              <Link href="" className="text-[2vmin] font-medium">
                +91 123456 7890
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[2vmin] bg-neutral-100 bg-opacity-65 min-w-[35vmin] py-[3vmin] rounded-2xl">
            <div className="flex flex-col items-center justify-center gap-[1.5vmin]">
              <span className="w-16 h-16 rounded-full bg-neutral-600"></span>
              <h2 className="font-semibold text-neutral-900 text-[2.5vmin] capitalize">
                email us
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-[1vmin]">
              <Link href="" className="text-[2vmin] font-medium">
                abc@xyz.com
              </Link>
              <Link href="" className="text-[2vmin] font-medium">
                abc@xyz.com
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[2vmin] bg-neutral-100 bg-opacity-65 min-w-[35vmin] py-[3vmin] rounded-2xl">
            <div className="flex flex-col items-center justify-center gap-[1.5vmin]">
              <span className="w-16 h-16 rounded-full bg-neutral-600"></span>
              <h2 className="font-semibold text-neutral-900 text-[2.5vmin] capitalize">
                email us
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-[1vmin]">
              <Link
                href=""
                className="text-[2vmin] font-medium max-w-[30vmin] text-center"
              >
                Tarapukur Main Rd, Osmanpur, Agarpara, Panihati, West Bengal
                700109
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="flex items-center gap-[4vmin] justify-evenly mx-[3vmax] my-[3vmax]">
        <div className="relative self-stretch">
          <form className="min-w-[20vmax] min-h-[20vmax] h-full bg-neutral-100 rounded-xl relative z-10 flex flex-col items-start px-[2.5vmin] py-[2vmin] gap-[1.5vmin] justify-evenly">
            <div>
              <h2 className="capitalize font-bold text-neutral-900 text-[2.77vmin]">
                contact now
              </h2>
              <p className="capitalize font-medium text-neutral-900 text-[1.38vmin]">
                Contact Now For Free Consultation
              </p>
            </div>
            <input
              type="text"
              placeholder="full name"
              className="placeholder:text-[#001F4B] text-[#001F4B] placeholder:text-[1.6vmin] placeholder:font-semibold placeholder:capitalize focus-within:outline-none focus-within:border-none bg-[#C0DCFF] px-[1.5vmin] py-[1vmin] w-full"
            />
            <input
              type="email"
              placeholder="email address"
              className="placeholder:text-[#001F4B] text-[#001F4B] placeholder:text-[1.6vmin] placeholder:font-semibold placeholder:capitalize focus-within:outline-none focus-within:border-none bg-[#C0DCFF] px-[1.5vmin] py-[1vmin] w-full"
            />
            <input
              type="number"
              placeholder="phone number"
              className="placeholder:text-[#001F4B] text-[#001F4B] placeholder:text-[1.6vmin] placeholder:font-semibold placeholder:capitalize focus-within:outline-none focus-within:border-none bg-[#C0DCFF] px-[1.5vmin] py-[1vmin] w-full"
            />
            <select className="focus-within:outline-none focus-within:border-none bg-[#C0DCFF] px-[1.5vmin] py-[1vmin] w-full text-[#001F4B] text-[1.6vmin] font-semibold capitalize">
              <option
                value=""
                className="text-[#001F4B] text-[1.6vmin] font-semibold capitalize"
              >
                subject
              </option>
              <option
                value="website_development"
                className="text-[#001F4B] text-[1.6vmin] font-semibold capitalize"
              >
                website development
              </option>
              <option
                value="mobile_apps_development"
                className="text-[#001F4B] text-[1.6vmin] font-semibold capitalize"
              >
                mobile apps development
              </option>
              <option
                value="desktop_apps_development"
                className="text-[#001F4B] text-[1.6vmin] font-semibold capitalize"
              >
                desktop apps development
              </option>
              <option
                value="graphics_designing"
                className="text-[#001F4B] text-[1.6vmin] font-semibold capitalize"
              >
                graphics designing
              </option>
              <option
                value="poster_designing"
                className="text-[#001F4B] text-[1.6vmin] font-semibold capitalize"
              >
                poster designing
              </option>
              <option
                value="logo_designing"
                className="text-[#001F4B] text-[1.6vmin] font-semibold capitalize"
              >
                logo designing
              </option>
              <option
                value="brochure_designing"
                className="text-[#001F4B] text-[1.6vmin] font-semibold capitalize"
              >
                brochure designing
              </option>
              <option
                value="digital marketing"
                className="text-[#001F4B] text-[1.6vmin] font-semibold capitalize"
              >
                digital marketing
              </option>
              <option
                value="seo_ranking"
                className="text-[#001F4B] text-[1.6vmin] font-semibold capitalize"
              >
                seo ranking
              </option>
            </select>
            <button
              type="submit"
              className="text-[1.6vmin] font-semibold text-[#F1F1F1] bg-[#083E8B] px-[2vmin] py-[1.5vmin] capitalize self-center flex items-center gap-2"
            >
              get consultations{" "}
              <FaArrowRightLong className="text-neutral-500 text-[1.2vmax]" />
            </button>
          </form>
          <div className="w-full h-full bg-neutral-100 absolute top-0 left-4 mt-2 opacity-35 transform scale-x-[-1] rounded-xl"></div>
        </div>
        <div className="flex flex-col items-center gap-[2vmin]">
          <div className="flex flex-col items-center gap-[1.5vmin]">
            <h1 className="text-[3.5vmin] font-bold">
              Your time is important to us
            </h1>
            <p className="capitalize text-[2vmin] font-medium">
              book your free demo now
            </p>
          </div>
          <div>
            <LottieComponents
              animateJson={clockAnimation}
              style={{ minWidth: "20vmax" }}
            />
          </div>
          <div className="flex flex-col items-center gap-[0.5vmin]">
            <h1 className="text-[3.5vmin] font-bold">Get in Touch</h1>
            <p className="capitalize text-[1.5vmin] font-medium text-neutral-600">
              we are available 24*7
            </p>
          </div>
        </div>
      </div>
      <div className="my-[4vmin]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460.1404217199131!2d88.39763584461647!3d22.686450728243166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d9e26fd8ad1%3A0xbabb88f4fe3eaf94!2sUttarpally!5e0!3m2!1sen!2sin!4v1717170765829!5m2!1sen!2sin"
          width="600"
          height="450"
          className="border-0 min-w-full min-h-[60vh]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
