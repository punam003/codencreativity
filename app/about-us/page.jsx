import AcknowledgeCard from "@/components/AcknowledgeCard";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "CodeNCreativity | Why Choose us",
};

export default function AboutUs() {
  const acknowledgeData = [
    {
      icon: "happy-client.png",
      altName: "happy client",
      count: 10,
      title: "happy client",
    },
    {
      icon: "years-of-experience.png",
      altName: "years of experience",
      count: 2,
      title: "years of experience",
    },
    {
      icon: "professional-team.png",
      altName: "professional team",
      count: 10,
      title: "professional team",
    },
    {
      icon: "projects.png",
      altName: "projects",
      count: 25,
      title: "projects",
    },
  ];
  return (
    <main className="mt-[10vmin]">
      <header className="flex flex-col justify-center gap-[5vmin] m-[3vmax]">
        <div className="flex items-center justify-center gap-[3.5vmin]">
          <div>
            <Image
              src="/about-us-side-cover.png"
              alt="about us"
              width={700}
              height={650}
              className="min-w-[20vmax] max-w-[35vmax]"
            />
          </div>
          <div className="flex flex-col max-w-[40vmax] gap-[2vmin] items-start">
            <h1 className="capitalize text-[4vmin] font-bold text-gray-700">
              about us
            </h1>
            <p className="text-gray-700 text-[2.3vmin]">
              Established in 2022, Code N Creativity is a leading online
              marketing and software development company partnering with
              companies of various sizes all around the globe. Our commitment to
              excellence, our specialty of bringing refreshing ideas with
              devoted customer service, and fast turnaround times have been
              instrumental in our rapid growth. Be it internet marketing or
              custom e-commerce and Application Development for Internet
              Marketing and Graphic Design, Code N Creativity is your believed
              accomplice that will give you an incorporated and successful
              arrangement in one spot.
            </p>
            <Link
              href="/contact-us"
              className="capitalize hover:shadow-[0px_4px_6px_0px_#00000040_inset] text-neutral-800 bg-opacity-40 bg-white text-[2.3vmin] rounded-full px-[3vmin] py-[1.5vmin] font-bold"
            >
              contact us
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-evenly">
          {acknowledgeData.map((item, index) => (
            <AcknowledgeCard cardData={item} key={index} />
          ))}
        </div>
      </header>
      <section className="bg-[url('/client-serve-bg.png')] bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col">
          <div>
            <h2>our vision</h2>
          </div>
          <div className="flex items-center">
            <p className="text-[2vmin] max-w-[15vmax]">
              Our vision is to revolutionize the world through innovative
              development solutions. We aspire to be the leading force in
              shaping the future of technology, infrastructure, and sustainable
              urbanization. With a commitment to excellence, creativity, and
              social responsibility, we aim to create transformative
              developments that enrich lives, empower communities, and inspire
              progress globally.
            </p>
            <Image
              src="/our-vision-1.png"
              alt="our vision"
              width={500}
              height={350}
              className="max-w-[45vmax]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
