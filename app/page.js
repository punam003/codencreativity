import Carousel from "@/components/Carousel";
import Marquee from "@/components/Marquee";
import Image from "next/image";
import { Crimson_Text } from "next/font/google";
import { FaRegHandshake } from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { BsClipboard2Check } from "react-icons/bs";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <main className="flex gap-[4vmin] flex-col items-center justify-between">
      <Carousel />
      <div className="bg-gradient-to-r from-[#090909] to-[#0C7FFE] w-full">
        <Marquee texts={["Develop", "Design", "Marketing", "Branding"]} />
      </div>
      <div className="flex items-center flex-col mx-[3vmax] gap-[2vmin]">
        <h1 className="bg-gradient-to-r from-[#0C7FFE] to-[#000000] text-transparent bg-clip-text font-extrabold text-[3vmax] max-w-[50%] text-center">
          Transforming Business to ensure long-term viability
        </h1>
        <p className="text-[3vmin] text-center">
          We believe in the power of innovation and creativity to transform
          ideas into reality. As a leading development and designing company, we
          specialize in crafting tailored solutions that meet the unique needs
          of our clients.
        </p>
        <p className="text-[3vmin] text-center">
          At <span className="font-bold">CODE N CREATIVITY</span>, we blend
          innovation with creativity to craft digital solutions that elevate
          businesses to new heights. With a focus on both development and
          design, we specialize in creating captivating digital experiences that
          leave a lasting impression.
        </p>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <div className="min-h-[60vh] min-w-[24.5vmax] bg-neutral-700"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <h1 className="capitalize text-neutral-100 text-[3vmin] font-bold">
              website development
            </h1>
          </div>
        </div>
        <div className="relative">
          <div className="min-h-[60vh] min-w-[24.5vmax] bg-neutral-600"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <h1 className="text-neutral-100 text-[3vmin] font-bold">
              Application &amp; UI/UX
            </h1>
          </div>
        </div>
        <div className="relative">
          <div className="min-h-[60vh] min-w-[24.5vmax] bg-neutral-700"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <h1 className="capitalize text-neutral-100 text-[3vmin] font-bold">
              marketing
            </h1>
          </div>
        </div>
        <div className="relative">
          <div className="min-h-[60vh] min-w-[24.5vmax] bg-neutral-600"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <h1 className="text-neutral-100 text-[3vmin] font-bold capitalize">
              branding
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[linear-gradient(113.76deg,_#0A0A0A_0%,_#070554_71.06%)] flex items-end justify-evenly min-h-[50vh] px-[2vmax] relative rounded-lg self-stretch mx-[3vmax]">
        <div className="flex flex-col items-start justify-between self-stretch relative z-10 my-[4vmax]">
          <h1
            className={
              crimsonText.className + " uppercase text-neutral-100 text-[4vmin]"
            }
          >
            why we
          </h1>
          <p className="text-neutral-100 text-[4vmin] max-w-[40vw] font-medium">
            Our company is small and nimble. We can give you the attention you
            expect and deserve.
          </p>
          <button
            type="button"
            className="capitalize hover:shadow-[0px_4px_6px_0px_#00000040_inset] text-neutral-800 text-[3vmin] border-2 rounded-full px-[3vmin] py-[1.5vmin] border-neutral-400"
          >
            learn more
          </button>
        </div>
        <div className="relative z-10 pt-[4vmax]">
          <Image
            src="/why-us-side-cover.png"
            width={600}
            height={300}
            alt="why_us"
            className="max-w-[45vmax]"
          />
        </div>
        <div className="bg-white w-full absolute bottom-0 left-0 min-h-[20vh]"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[3vmin] mx-[3vmax] self-stretch">
        <h1 className="bg-gradient-to-r from-[#0C7FFE] to-[#000000] text-transparent bg-clip-text font-extrabold text-[3vmax] text-center uppercase">
          services we provide
        </h1>
        <div className="flex items-stretch flex-wrap justify-evenly self-stretch">
          <div className="flex flex-col justify-evenly items-center bg-white min-w-[20vmax] py-[2vmin] gap-[2.5vmin] rounded-xl shadow m-[3vmin]">
            <div className="flex items-center gap-[1.7vmin]">
              <span className="w-12 h-12 rounded-full bg-gray-500"></span>
              <h3 className="text-[2.7vmin] font-bold">SEO</h3>
            </div>
            <ul className="grid grid-cols-2 list-disc items-center gap-x-[8vmin]">
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
            </ul>
            <hr className="w-full border-slate-300" />
            <button
              type="button"
              className="capitalize text-blue-600 font-semibold"
            >
              learn more
            </button>
          </div>
          <div className="flex flex-col justify-evenly items-center bg-white min-w-[20vmax] py-[2vmin] gap-[2.5vmin] rounded-xl shadow m-[3vmin]">
            <div className="flex items-center gap-[1.7vmin]">
              <span className="w-12 h-12 rounded-full bg-gray-500"></span>
              <h3 className="text-[2.7vmin] font-bold max-w-[10vmax]">
                Mobile App Development
              </h3>
            </div>
            <ul className="grid grid-cols-2 list-disc items-center gap-x-[8vmin]">
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
            </ul>
            <hr className="w-full border-slate-300" />
            <button
              type="button"
              className="capitalize text-blue-600 font-semibold"
            >
              learn more
            </button>
          </div>
          <div className="flex flex-col justify-evenly items-center bg-white min-w-[20vmax] py-[2vmin] gap-[2.5vmin] rounded-xl shadow m-[3vmin]">
            <div className="flex items-center gap-[1.7vmin]">
              <span className="w-12 h-12 rounded-full bg-gray-500"></span>
              <h3 className="text-[2.7vmin] font-bold max-w-[10vmax]">
                UI Design
              </h3>
            </div>
            <ul className="grid grid-cols-2 list-disc items-center gap-x-[8vmin]">
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
            </ul>
            <hr className="w-full border-slate-300" />
            <button
              type="button"
              className="capitalize text-blue-600 font-semibold"
            >
              learn more
            </button>
          </div>
          <div className="flex flex-col justify-evenly items-center bg-white min-w-[20vmax] py-[2vmin] gap-[2.5vmin] rounded-xl shadow m-[3vmin]">
            <div className="flex items-center gap-[1.7vmin]">
              <span className="w-12 h-12 rounded-full bg-gray-500"></span>
              <h3 className="text-[2.7vmin] font-bold max-w-[10vmax]">
                Graphics Designing
              </h3>
            </div>
            <ul className="grid grid-cols-2 list-disc items-center gap-x-[8vmin]">
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
            </ul>
            <hr className="w-full border-slate-300" />
            <button
              type="button"
              className="capitalize text-blue-600 font-semibold"
            >
              learn more
            </button>
          </div>
          <div className="flex flex-col justify-evenly items-center bg-white min-w-[20vmax] py-[2vmin] gap-[2.5vmin] rounded-xl shadow m-[3vmin]">
            <div className="flex items-center gap-[1.7vmin]">
              <span className="w-12 h-12 rounded-full bg-gray-500"></span>
              <h3 className="text-[2.7vmin] font-bold max-w-[10vmax]">
                Advance Digital Marketing
              </h3>
            </div>
            <ul className="grid grid-cols-2 list-disc items-center gap-x-[8vmin]">
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
            </ul>
            <hr className="w-full border-slate-300" />
            <button
              type="button"
              className="capitalize text-blue-600 font-semibold"
            >
              learn more
            </button>
          </div>
          <div className="flex flex-col justify-evenly items-center bg-white min-w-[20vmax] py-[2vmin] gap-[2.5vmin] rounded-xl shadow m-[3vmin]">
            <div className="flex items-center gap-[1.7vmin]">
              <span className="w-12 h-12 rounded-full bg-gray-500"></span>
              <h3 className="text-[2.7vmin] font-bold max-w-[10vmax]">
                Website Design &amp; Development
              </h3>
            </div>
            <ul className="grid grid-cols-2 list-disc items-center gap-x-[8vmin]">
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
              <li className="text-[2.5vmin] font-medium">UI Design</li>
            </ul>
            <hr className="w-full border-slate-300" />
            <button
              type="button"
              className="capitalize text-blue-600 font-semibold"
            >
              learn more
            </button>
          </div>
        </div>
        <button
          type="button"
          className="capitalize hover:shadow-[0px_4px_6px_0px_#00000040_inset] text-neutral-800 text-[3vmin] border-2 rounded-full px-[3vmin] py-[1.5vmin] border-neutral-400 font-bold"
        >
          all services
        </button>
      </div>
      <div className="flex flex-col items-center bg-white bg-opacity-20 self-stretch gap-[3vmin] py-[2vmin]">
        <h1 className="bg-gradient-to-r from-[#0C7FFE] to-[#000000] text-transparent bg-clip-text font-extrabold text-[3vmax] text-center capitalize">
          working process
        </h1>
        <p className="font-medium text-[3vmin]">
          Best Website Development & Digital Marketing Company
        </p>
        <div className="flex min-h-[15vmax] justify-evenly self-stretch my-[3vmin]">
          <div className="w-[10vmax] h-[10vmax] flex flex-col items-center bg-white rounded-full justify-center rounded-tr-none relative shadow-lg self-start gap-[1vmin]">
            <FaRegHandshake className="w-[2.6vmax] h-[2.6vmax] text-neutral-500" />
            <p className="text-center text-neutral-800 font-semibold">
              Welcome to Code N Creativity
            </p>
            <span className="absolute top-0 left-0 bg-blue-600 w-[3.5vmax] h-[3.5vmax] rounded-full text-[2vmax] text-neutral-100 font-bold flex items-center justify-center">
              1
            </span>
          </div>
          <div className="w-[10vmax] h-[10vmax] flex flex-col items-center bg-white rounded-full justify-center rounded-bl-none relative shadow-lg self-end gap-[1vmin]">
            <FaHandsHoldingChild className="w-[2.6vmax] h-[2.6vmax] text-neutral-500" />
            <p className="text-center text-neutral-800 font-semibold">
              Choose Your Services
            </p>
            <span className="absolute top-0 left-0 bg-blue-600 w-[3.5vmax] h-[3.5vmax] rounded-full text-[2vmax] text-neutral-100 font-bold flex items-center justify-center">
              2
            </span>
          </div>
          <div className="w-[10vmax] h-[10vmax] flex flex-col items-center bg-white rounded-full justify-center rounded-tr-none relative shadow-lg self-start gap-[1vmin]">
            <MdOutlineRocketLaunch className="w-[2.6vmax] h-[2.6vmax] text-neutral-500" />
            <p className="text-center text-neutral-800 font-semibold">
              Get Your Project Analysis
            </p>
            <span className="absolute top-0 left-0 bg-blue-600 w-[3.5vmax] h-[3.5vmax] rounded-full text-[2vmax] text-neutral-100 font-bold flex items-center justify-center">
              3
            </span>
          </div>
          <div className="w-[10vmax] h-[10vmax] flex flex-col items-center bg-white rounded-full justify-center rounded-bl-none relative shadow-lg self-end gap-[1vmin]">
            <BsClipboard2Check className="w-[2.6vmax] h-[2.6vmax] text-neutral-500" />
            <p className="text-center text-neutral-800 font-semibold">
              Get Final Results
            </p>
            <span className="absolute top-0 left-0 bg-blue-600 w-[3.5vmax] h-[3.5vmax] rounded-full text-[2vmax] text-neutral-100 font-bold flex items-center justify-center">
              4
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
