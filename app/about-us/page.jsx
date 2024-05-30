import Image from "next/image";

export const metadata = {
  title: "CodeNCreativity | About us",
};

export default function AboutUs() {
  return (
    <main className='mt-[10vmin]'>
      <header className='flex items-center justify-center gap-[3.5vmin]'>
        <div>
          <Image
            src='/about-us-side-cover.png'
            alt='about us'
            width={700}
            height={650}
            className='min-w-[20vmax] max-w-[35vmax]'
          />
        </div>
        <div className='flex flex-col max-w-[40vmax] gap-[2vmin] items-start'>
          <h1 className='capitalize text-[4vmin] font-bold text-gray-700'>
            about us
          </h1>
          <p className='text-gray-700 text-[2.3vmin]'>
            Established in 2022, Code N Creativity is a leading online marketing
            and software development company partnering with companies of
            various sizes all around the globe. Our commitment to excellence,
            our specialty of bringing refreshing ideas with devoted customer
            service, and fast turnaround times have been instrumental in our
            rapid growth. Be it internet marketing or custom e-commerce and
            Application Development for Internet Marketing and Graphic Design,
            Code N Creativity is your believed accomplice that will give you an
            incorporated and successful arrangement in one spot.
          </p>
          <button
            type='button'
            className='capitalize hover:shadow-[0px_4px_6px_0px_#00000040_inset] text-neutral-800 bg-opacity-40 bg-white text-[2.3vmin] rounded-full px-[3vmin] py-[1.5vmin] font-bold'
          >
            contact us
          </button>
        </div>
      </header>
    </main>
  );
}
