import Image from "next/image";
import Link from "next/link";

import { Crimson_Text } from "next/font/google";
import { FaRegHandshake } from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { BsClipboard2Check } from "react-icons/bs";

import Carousel from "@/components/Carousel";
import Marquee from "@/components/Marquee";
import HomeServices from "@/components/HomeServices";
import ClientMarquee from "@/components/ClientMarquee";
import BounceCut from "@/components/BounceCut";
import ContactForm from "@/components/ContactForm";
import PortfolioCard from "@/components/PortfolioCard";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  const cutOut = [
    {
      component: (
        <FaRegHandshake className='w-[2.6vmax] h-[2.6vmax] text-neutral-500' />
      ),
      title: "Welcome to Code N Creativity",
      count: "1",
    },
    {
      component: (
        <FaHandsHoldingChild className='w-[2.6vmax] h-[2.6vmax] text-neutral-500' />
      ),
      title: "Choose Your Services",
      count: "2",
    },
    {
      component: (
        <MdOutlineRocketLaunch className='w-[2.6vmax] h-[2.6vmax] text-neutral-500' />
      ),
      title: "Get Your Project Analysis",
      count: "3",
    },
    {
      component: (
        <BsClipboard2Check className='w-[2.6vmax] h-[2.6vmax] text-neutral-500' />
      ),
      title: "Get Final Results",
      count: "4",
    },
  ];
  return (
    <main className='flex gap-[4vmin] flex-col items-center justify-between'>
      <Carousel />
      <div className='bg-gradient-to-r from-[#090909] to-[#0C7FFE] w-full'>
        <Marquee texts={["Develop", "Design", "Marketing", "Branding"]} />
      </div>
      <div className='flex items-center flex-col mx-[3vmax] gap-[2vmin]'>
        <h1 className='bg-gradient-to-r from-[#0C7FFE] to-[#000000] text-transparent bg-clip-text font-extrabold text-[3vmax] max-w-[50%] text-center'>
          Transforming Business to ensure long-term viability
        </h1>
        <p className='text-[3vmin] text-center'>
          We believe in the power of innovation and creativity to transform
          ideas into reality. As a leading development and designing company, we
          specialize in crafting tailored solutions that meet the unique needs
          of our clients.
        </p>
        <p className='text-[3vmin] text-center'>
          At <span className='font-bold'>CODE N CREATIVITY</span>, we blend
          innovation with creativity to craft digital solutions that elevate
          businesses to new heights. With a focus on both development and
          design, we specialize in creating captivating digital experiences that
          leave a lasting impression.
        </p>
      </div>
      <div className='flex items-center'>
        <div className='relative'>
          <div className='min-h-[60vh] min-w-[24.5vmax] bg-neutral-700'></div>
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
            <h1 className='capitalize text-neutral-100 text-[3vmin] font-bold'>
              website development
            </h1>
          </div>
        </div>
        <div className='relative'>
          <div className='min-h-[60vh] min-w-[24.5vmax] bg-neutral-600'></div>
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
            <h1 className='text-neutral-100 text-[3vmin] font-bold'>
              Application &amp; UI/UX
            </h1>
          </div>
        </div>
        <div className='relative'>
          <div className='min-h-[60vh] min-w-[24.5vmax] bg-neutral-700'></div>
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
            <h1 className='capitalize text-neutral-100 text-[3vmin] font-bold'>
              marketing
            </h1>
          </div>
        </div>
        <div className='relative'>
          <div className='min-h-[60vh] min-w-[24.5vmax] bg-neutral-600'></div>
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
            <h1 className='text-neutral-100 text-[3vmin] font-bold capitalize'>
              branding
            </h1>
          </div>
        </div>
      </div>
      <div className='bg-[linear-gradient(113.76deg,_#0A0A0A_0%,_#070554_71.06%)] flex items-end justify-evenly min-h-[50vh] px-[2vmax] relative rounded-lg self-stretch mx-[3vmax]'>
        <div className='flex flex-col items-start justify-between self-stretch relative z-10 my-[4vmax]'>
          <h1
            className={
              crimsonText.className + " uppercase text-neutral-100 text-[4vmin]"
            }
          >
            why we
          </h1>
          <p className='text-neutral-100 text-[4vmin] max-w-[40vw] font-medium'>
            Our company is small and nimble. We can give you the attention you
            expect and deserve.
          </p>
          <Link
            href='/about-us'
            className='capitalize hover:shadow-[0px_4px_6px_0px_#00000040_inset] text-neutral-800 text-[3vmin] border-2 rounded-full px-[3vmin] py-[1.5vmin] border-neutral-400'
          >
            learn more
          </Link>
        </div>
        <div className='relative z-10 pt-[4vmax]'>
          <Image
            src='/why-us-side-cover.png'
            width={600}
            height={300}
            alt='why_us'
            className='max-w-[45vmax]'
          />
        </div>
        <div className='bg-white w-full absolute bottom-0 left-0 min-h-[20vh]'></div>
      </div>
      <div className='flex flex-col items-center justify-center gap-[3vmin] mx-[3vmax] self-stretch'>
        <h1 className='bg-gradient-to-r from-[#0C7FFE] to-[#000000] text-transparent bg-clip-text font-extrabold text-[3vmax] text-center uppercase'>
          services we provide
        </h1>
        <div className='flex items-stretch flex-wrap justify-evenly self-stretch'>
          <div className='flex flex-col justify-evenly items-center bg-white max-w-[20vmax] px-[2.5vmin] py-[2vmin] gap-[2.5vmin] rounded-xl shadow m-[3vmin]'>
            <div className='flex items-center gap-[1.7vmin]'>
              <Image
                src='/seo_273564.png'
                alt='seo'
                width={60}
                height={60}
                className='w-12 h-12 rounded-full'
              />
              <h3 className='text-[2.7vmin] font-bold'>SEO</h3>
            </div>
            <ul className='flex flex-wrap justify-center list-disc items-center gap-x-[4vmin]'>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
            </ul>
            <hr className='w-full border-slate-300' />
            <button
              type='button'
              className='capitalize text-blue-600 font-semibold'
            >
              learn more
            </button>
          </div>
          <div className='flex flex-col justify-evenly items-center bg-white max-w-[20vmax] px-[2.5vmin] py-[2vmin] gap-[2.5vmin] rounded-xl shadow m-[3vmin]'>
            <div className='flex items-center gap-[1.7vmin]'>
              <Image
                src='/Mobile App Development.png'
                alt='seo'
                width={60}
                height={60}
                className='w-12 h-12 rounded-full'
              />
              <h3 className='text-[2.7vmin] font-bold max-w-[10vmax]'>
                Mobile App Development
              </h3>
            </div>
            <ul className='flex flex-wrap justify-center list-disc items-center gap-x-[4vmin]'>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
            </ul>
            <hr className='w-full border-slate-300' />
            <button
              type='button'
              className='capitalize text-blue-600 font-semibold'
            >
              learn more
            </button>
          </div>
          <div className='flex flex-col justify-evenly items-center bg-white max-w-[20vmax] px-[2.5vmin] py-[2vmin] gap-[2.5vmin] rounded-xl shadow m-[3vmin]'>
            <div className='flex items-center gap-[1.7vmin]'>
              <Image
                src='/UI Design_1413315.png'
                alt='seo'
                width={60}
                height={60}
                className='w-12 h-12 rounded-full'
              />
              <h3 className='text-[2.7vmin] font-bold max-w-[10vmax]'>
                UI Design
              </h3>
            </div>
            <ul className='flex flex-wrap justify-center list-disc items-center gap-x-[4vmin]'>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
            </ul>
            <hr className='w-full border-slate-300' />
            <button
              type='button'
              className='capitalize text-blue-600 font-semibold'
            >
              learn more
            </button>
          </div>
          <div className='flex flex-col justify-evenly items-center bg-white max-w-[20vmax] px-[2.5vmin] py-[2vmin] gap-[2.5vmin] rounded-xl shadow m-[3vmin]'>
            <div className='flex items-center gap-[1.7vmin]'>
              <Image
                src='/Graphics Designing_780769.png'
                alt='seo'
                width={60}
                height={60}
                className='w-12 h-12 rounded-full'
              />
              <h3 className='text-[2.7vmin] font-bold max-w-[10vmax]'>
                Graphics Designing
              </h3>
            </div>
            <ul className='flex flex-wrap justify-center list-disc items-center gap-x-[4vmin]'>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
            </ul>
            <hr className='w-full border-slate-300' />
            <button
              type='button'
              className='capitalize text-blue-600 font-semibold'
            >
              learn more
            </button>
          </div>
          <div className='flex flex-col justify-evenly items-center bg-white max-w-[20vmax] px-[2.5vmin] py-[2vmin] gap-[2.5vmin] rounded-xl shadow m-[3vmin]'>
            <div className='flex items-center gap-[1.7vmin]'>
              <Image
                src='/Digital Marketing.png'
                alt='seo'
                width={60}
                height={60}
                className='w-12 h-12 rounded-full'
              />
              <h3 className='text-[2.7vmin] font-bold max-w-[10vmax]'>
                Advance Digital Marketing
              </h3>
            </div>
            <ul className='flex flex-wrap justify-center list-disc items-center gap-x-[4vmin]'>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
            </ul>
            <hr className='w-full border-slate-300' />
            <button
              type='button'
              className='capitalize text-blue-600 font-semibold'
            >
              learn more
            </button>
          </div>
          <div className='flex flex-col justify-evenly items-center bg-white max-w-[20vmax] px-[2.5vmin] py-[2vmin] gap-[2.5vmin] rounded-xl shadow m-[3vmin]'>
            <div className='flex items-center gap-[1.7vmin]'>
              <Image
                src='/web_7358652.png'
                alt='seo'
                width={60}
                height={60}
                className='w-12 h-12 rounded-full'
              />
              <h3 className='text-[2.7vmin] font-bold max-w-[10vmax]'>
                Website Design &amp; Development
              </h3>
            </div>
            <ul className='flex flex-wrap justify-center list-disc items-center gap-x-[4vmin]'>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
              <li className='text-[2.5vmin] font-medium'>UI Design</li>
            </ul>
            <hr className='w-full border-slate-300' />
            <button
              type='button'
              className='capitalize text-blue-600 font-semibold'
            >
              learn more
            </button>
          </div>
        </div>
        <Link
          href='/our-services'
          className='capitalize hover:shadow-[0px_4px_6px_0px_#00000040_inset] text-neutral-800 text-[3vmin] border-2 rounded-full px-[3vmin] py-[1.5vmin] border-neutral-400 font-bold'
        >
          all services
        </Link>
      </div>
      <div className='flex flex-col items-center bg-white bg-opacity-20 self-stretch gap-[3vmin] py-[2vmin]'>
        <h1 className='bg-gradient-to-r from-[#0C7FFE] to-[#000000] text-transparent bg-clip-text font-extrabold text-[3vmax] text-center capitalize'>
          working process
        </h1>
        <p className='font-medium text-[3vmin]'>
          Best Website Development & Digital Marketing Company
        </p>
        <div className='flex min-h-[15vmax] justify-evenly self-stretch my-[3vmin] group'>
          {cutOut.map((item, index) => (
            <BounceCut cutOutData={item} key={index} />
          ))}
        </div>
      </div>
      <div className='flex items-center mx-[3vmax]'>
        <div className='flex flex-col items-start gap-[1.6vmax]'>
          <div className='flex items-center gap-[2vmin]'>
            <h3 className='uppercase text-neutral-700 font-medium text-[1.4vmax]'>
              experience
            </h3>
            <span className='bg-neutral-700 min-w-[5vmax] min-h-0.5'></span>
          </div>
          <h1 className='text-[2.4vmax] capitalize text-zinc-600 font-bold'>
            pay for quality services
          </h1>
          <p className='text-zinc-600 text-[1vmax]'>
            CODE N CREATIVITY innovation meets execution. As pioneers in the
            digital realm, we offer a suite of cutting-edge services tailored to
            meet your every need. From web development and app design to digital
            marketing and beyond, our team of skilled professionals harnesses
            the power of technology to bring your ideas to life. Whether
            you&apos;re a startup seeking to establish your online presence or
            an established enterprise looking to redefine your digital strategy,
            we&apos;re here to transform your vision into reality.
          </p>
          <HomeServices />
        </div>
        <div>
          <Image
            src='/experience-cover.png'
            alt='mobile-dashboard'
            width={1280}
            height={1000}
            className='max-w-[35vmax]'
          />
        </div>
      </div>
      <div className='flex flex-col items-center mx-[3vmax] gap-[3vmin]'>
        <p className='font-medium text-[3vmin] uppercase text-neutral-600'>
          our projects
        </p>
        <h1 className='bg-gradient-to-r from-[#0C7FFE] to-[#000000] text-transparent bg-clip-text font-extrabold text-[3vmax] text-center capitalize'>
          Our Portfolio of Success Stories
        </h1>
        <div className='flex justify-evenly gap-[3vmin]'>
          <PortfolioCard imageUrl={"/fipezo.png"} width={20} />
          <PortfolioCard imageUrl={"/animexhub.png"} width={20} />
          <PortfolioCard imageUrl={"/rabinsphotography.png"} width={20} />
          <PortfolioCard imageUrl={"/virtualparadise.png"} width={20} />
        </div>
        <Link
          href='/portfolio'
          className='capitalize hover:shadow-[0px_4px_6px_0px_#00000040_inset] text-neutral-800 bg-opacity-40 bg-white text-[3vmin] rounded-full px-[3vmin] py-[1.5vmin] font-bold'
        >
          all projects
        </Link>
      </div>
      <div className='flex flex-col items-center gap-[5vmin]'>
        <h1 className='bg-gradient-to-r from-[#0C7FFE] to-[#000000] text-transparent bg-clip-text font-extrabold text-[3vmax] text-center capitalize'>
          our clients
        </h1>
        <div className='w-full'>
          <ClientMarquee
            images={[
              "DmfBharat-Logo.png",
              "femlocal.png",
              "fipezo-logo.png",
              "rabins-photography-logo.png",
            ]}
          />
        </div>
      </div>
      <div className="bg-[url('/contact-bg.png')] bg-no-repeat bg-cover w-full flex items-center py-[4vmin] justify-evenly">
        <div className='flex flex-col items-start gap-[1.6vmax] max-w-[30vmax]'>
          <div className='flex items-center gap-[2vmin]'>
            <h3 className='capitalize text-neutral-100 font-medium text-[1.4vmax]'>
              Contact Us
            </h3>
            <span className='bg-neutral-100 min-w-[5vmax] min-h-0.5'></span>
          </div>
          <h1 className='text-[2.4vmax] capitalize text-neutral-100 font-bold'>
            Have a project in mind? Let&apos;s Start
          </h1>
          <p className='text-neutral-100 text-[1vmax]'>
            Just fill out the given form & our team will connect with you. We
            will arrange a free consultancy call for you.
          </p>
          <Link
            href='tel:+919007000328'
            className='text-neutral-100 text-[1vmax] font-bold'
          >
            +91 9007000328
          </Link>
          <Link
            href='mailto:codencreativity@gmail.com'
            className='text-neutral-100 text-[1vmax] font-bold'
          >
            codencreativity@gmail.com
          </Link>
        </div>
        <div className='relative self-stretch'>
          <ContactForm />
          <div className='w-full h-full bg-neutral-100 absolute top-0 left-4 mt-2 opacity-35 transform scale-x-[-1] rounded-xl'></div>
        </div>
      </div>
    </main>
  );
}
