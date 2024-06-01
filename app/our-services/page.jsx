import Image from "next/image";
import Link from "next/link";

export default function OurService() {
  return (
    <main className="mt-[12vmin]">
      <header className="flex flex-col justify-center gap-[5vmin] m-[3vmax]">
        <div className="flex items-center justify-center gap-[3.5vmin]">
          <div>
            <Image
              src="/our-services-side-cover.png"
              alt="our services"
              width={700}
              height={650}
              className="min-w-[20vmax] max-w-[35vmax]"
            />
          </div>
          <div className="flex flex-col max-w-[40vmax] gap-[2vmin] items-start">
            <h1 className="capitalize text-[4vmin] font-bold text-gray-700">
              services we provide
            </h1>
            <p className="text-gray-700 text-[2.3vmin]">
              Our web development company specializes in creating dynamic,
              user-friendly websites tailored to your business needs.Our expert
              team is dedicated to delivering high-quality web solutions that
              drive traffic, engage users, and grow your business.
            </p>
            <Link
              href="/contact-us"
              className="capitalize hover:shadow-[0px_4px_6px_0px_#00000040_inset] text-neutral-800 bg-opacity-40 bg-white text-[2.3vmin] rounded-full px-[3vmin] py-[1.5vmin] font-bold"
            >
              contact us
            </Link>
          </div>
        </div>
      </header>
    </main>
  );
}
