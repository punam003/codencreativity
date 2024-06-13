import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "CodeNCreativity | Our Services",
};

export default function OurService() {
  const services = [
    {
      icon: "E-commerce Website Development.png",
      title: "E-commerce Website Development",
      description:
        "E-commerce website development involves creating online platforms for businesses to sell products and services, integrating features like shopping carts, payment gateways, and secure checkouts to enhance user experience and streamline transactions. This process combines web design, coding, and digital marketing strategies to attract and retain customers.",
    },
    {
      icon: "web_7358652.png",
      title: "Website Redesign",
      description:
        "Website redesign involves revamping the visual and functional aspects of a website to improve user experience, enhance aesthetics, and align with current web standards. This process includes updating the layout, optimizing for mobile devices, and ensuring faster load times.",
    },
    {
      icon: "Mobile App Development.png",
      title: "Mobile App Development",
      description:
        "Mobile app development involves creating software applications designed to run on mobile devices, providing users with innovative and accessible digital solutions. This process includes stages such as planning, design, development, testing, and deployment to deliver functional and engaging apps.",
    },
    {
      icon: "Brochure & Flyer Design.png",
      title: "Brochure & Flyer Design",
      description:
        "Brochure and flyer design is the art of crafting visually compelling promotional materials that effectively communicate key messages and entice target audiences to engage with a product, service, or event through concise text and captivating graphics.",
    },
    {
      icon: "Digital Marketing.png",
      title: "Advance Digital Marketing",
      description:
        "Advanced Digital Marketing involves leveraging cutting-edge strategies and tools to optimize online presence, engage target audiences, and drive significant business growth through innovative digital channels.",
    },
    {
      icon: "Google Ads Management.png",
      title: "Google Ads Management",
      description:
        "Google Ads Management: Expertly optimize your online advertising campaigns with targeted strategies and analytics-driven insights for maximum ROI and audience engagement.",
    },
    {
      icon: "Graphics Designing_780769.png",
      title: "Graphics Designing",
      description:
        "Graphics designing involves creating visual content using typography, imagery, color, and layout to communicate messages effectively. It blends art and technology to craft visually appealing and functional designs for various media, including print, digital, and web platforms.",
    },
    {
      icon: "Logo Design.png",
      title: "Logo Design",
      description:
        "Logo design is the process of creating a unique visual symbol that represents a brand's identity and values. It combines elements of typography, color, and imagery to create a memorable and distinctive mark.",
    },
    {
      icon: "seo_273564.png",
      title: "SEO",
      description:
        "SEO, or Search Engine Optimization, is the practice of enhancing a website's visibility on search engine results pages through strategies aimed at improving organic search rankings.",
    },
    {
      icon: "UI Design_1413315.png",
      title: "Website Design & Development",
      description:
        "Web design and development involves creating and maintaining websites, focusing on aesthetics, user experience, and functionality. It combines visual design principles with technical coding skills to build responsive and interactive online platforms.",
    },
    {
      icon: "UI Design_1413315.png",
      title: "Website Maintenance",
      description:
        "Website maintenance involves regularly updating and optimizing a website to ensure its functionality, security, and performance. This includes tasks such as software updates, fixing bugs, adding new content, and improving user experience.",
    },
    {
      icon: "UI Design_1413315.png",
      title: "Online Advertisement",
      description:
        "Online advertising leverages digital platforms to promote products, services, or ideas, reaching a vast audience with targeted messages and multimedia content.",
    },
  ];
  return (
    <main className="mt-[12vmin]">
      <header className="flex flex-col justify-center gap-[5vmin] m-[3vmax]">
        <div className="flex items-center justify-center gap-[3.5vmin]">
          <div className='hidden md:block'>
            <Image
              src="/our-services-side-cover.png"
              alt="our services"
              width={700}
              height={650}
              className="min-w-[20vmax] max-w-[35vmax]"
            />
          </div>
          <div className="flex flex-col md:max-w-[40vmax] gap-[2vmin] items-start">
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
      <div className="flex flex-wrap gap-y-[4vmax] justify-evenly my-[5vmax]">
        {services.map((service, index) => (
          <div
            className="flex flex-col items-center bg-white max-w-[20vmax] md:max-w-[25vmax] p-[4vmin] gap-[2vmin] justify-evenly hover:scale-110 hover:shadow-xl transition duration-300"
            key={index}
          >
            <Image
              src={`/${service.icon}`}
              alt="service logo"
              width={250}
              height={125}
              className="max-w-[8vmax]"
            />
            <h1 className="text-[1.6vmax] font-bold text-center">
              {service.title}
            </h1>
            <hr className="border md:border-4 border-neutral-700 min-w-[6vmax] rounded-full" />
            <p className="text-center text-[1vmax]">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
