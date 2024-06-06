import PortfolioCard from "@/components/PortfolioCard";
import PortfolioCategory from "@/components/PortfolioCategory";

export const metadata = {
  title: "CodeNCreativity | Portfolio",
};

export default function Portfolio() {
  const portfolioImages = [
    "fipezo.png",
    "animexhub.png",
    "rabinsphotography.png",
    "virtualparadise.png",
    "scroll-animation.png",
  ];
  return (
    <main className="mt-[12vmin] flex flex-col items-center gap-[4vmin] mx-[3vmax]">
      <div className="flex flex-col gap-[2vmin] items-center">
        <h1 className="capitalize text-[4vmin] font-bold text-gray-700">
          our recent work
        </h1>
        <p className="text-gray-700 text-[2.3vmin] capitalize">portfolio</p>
      </div>
      <div className="my-[2.3vmin] max-w-[75vmax]">
        <PortfolioCategory />
      </div>
      <div className="flex flex-wrap justify-evenly gap-y-[3vmax]">
        {portfolioImages.map((item, index) => (
          <PortfolioCard imageUrl={`/${item}`} key={index} width={25} />
        ))}
      </div>
    </main>
  );
}
