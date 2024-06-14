import LottieComponents from "@/components/LottieComponents";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import clockAnimation from "../../assets/clock-animation.json";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "CodeNCreativity | Contact us",
};

export default function ContactUS() {
  return (
    <main className='mt-[10vmin]'>
      <header className='flex flex-col justify-evenly gap-[5vmax] my-[3vmax] py-[3vmax]'>
        <h1 className='capitalize text-[4vmin] font-bold text-gray-700 text-center'>
          contact us
        </h1>
        <div className='flex gap-[2vmin] justify-evenly'>
          <div className='flex flex-col items-center justify-center gap-[2vmin] bg-neutral-100 bg-opacity-65 min-w-[25vmin] md:min-w-[35vmin] py-[3vmin] rounded-2xl'>
            <div className='flex flex-col items-center justify-center gap-[1.5vmin]'>
              <Image
                src='/call_6716671.png'
                alt='call'
                width={150}
                height={150}
                className='max-w-[6vmin] rounded-full'
              />
              <h2 className='font-semibold text-neutral-900 text-[2.5vmin] capitalize'>
                phone
              </h2>
            </div>
            <div className='flex flex-col items-center justify-center gap-[1vmin]'>
              <Link href='' className='text-[2vmin] font-medium'>
                +91 123456 7890
              </Link>
              <Link href='' className='text-[2vmin] font-medium'>
                +91 123456 7890
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-[2vmin] bg-neutral-100 bg-opacity-65 min-w-[25vmin] md:min-w-[35vmin] py-[3vmin] rounded-2xl'>
            <div className='flex flex-col items-center justify-center gap-[1.5vmin]'>
              <Image
                src='/email_6716666.png'
                alt='email'
                width={150}
                height={150}
                className='max-w-[6vmin] rounded-full'
              />
              <h2 className='font-semibold text-neutral-900 text-[2.5vmin] capitalize'>
                email us
              </h2>
            </div>
            <div className='flex flex-col items-center justify-center gap-[1vmin]'>
              <Link href='' className='text-[2vmin] font-medium'>
                abc@xyz.com
              </Link>
              <Link href='' className='text-[2vmin] font-medium'>
                abc@xyz.com
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-[2vmin] bg-neutral-100 bg-opacity-65 min-w-[25vmin] md:min-w-[35vmin] py-[3vmin] rounded-2xl'>
            <div className='flex flex-col items-center justify-center gap-[1.5vmin]'>
              <Image
                src='/location_6716616.png'
                alt='address'
                width={150}
                height={150}
                className='max-w-[6vmin] rounded-full'
              />
              <h2 className='font-semibold text-neutral-900 text-[2.5vmin] capitalize'>
                address
              </h2>
            </div>
            <div className='flex flex-col items-center justify-center gap-[1vmin]'>
              <Link
                href=''
                className='text-[2vmin] font-medium max-w-[30vmin] text-center'
              >
                Tarapukur Main Rd, Osmanpur, Agarpara, Panihati, West Bengal
                700109
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className='flex items-center gap-[4vmin] justify-evenly mx-[3vmax] my-[3vmax]'>
        <div className='relative self-stretch'>
          <ContactForm />
          <div className='w-full h-full bg-neutral-100 absolute top-0 left-4 mt-2 opacity-35 transform scale-x-[-1] rounded-xl'></div>
        </div>
        <div className='hidden md:flex flex-col items-center gap-[2vmin]'>
          <div className='flex flex-col items-center gap-[1.5vmin]'>
            <h1 className='text-[3.5vmin] font-bold'>
              Your time is important to us
            </h1>
            <p className='capitalize text-[2vmin] font-medium'>
              book your free demo now
            </p>
          </div>
          <div>
            <LottieComponents
              animateJson={clockAnimation}
              style={{ minWidth: "20vmax" }}
            />
          </div>
          <div className='flex flex-col items-center gap-[0.5vmin]'>
            <h1 className='text-[3.5vmin] font-bold'>Get in Touch</h1>
            <p className='capitalize text-[1.5vmin] font-medium text-neutral-600'>
              we are available 24*7
            </p>
          </div>
        </div>
      </div>
      <div className='my-[4vmin]'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460.1404217199131!2d88.39763584461647!3d22.686450728243166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d9e26fd8ad1%3A0xbabb88f4fe3eaf94!2sUttarpally!5e0!3m2!1sen!2sin!4v1717170765829!5m2!1sen!2sin'
          width='600'
          height='450'
          className='border-0 w-screen md:w-auto h-[40vh] md:h-auto md:min-w-full md:min-h-[60vh]'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </main>
  );
}
