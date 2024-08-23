import getPortfolios from "@/actions/getAllPortfolios";
import PortfolioCategoryComponents from "@/components/PortfolioCategoryComponents";
import PortfolioList from "@/components/PortfolioList";

export const metadata = {
  title: "CodeNCreativity | Portfolio",
};

export default async function Portfolio() {
  const portfoilos = await getPortfolios(0, 12);
  
  return (
    <main className="mt-[12vmin] flex flex-col items-center gap-[4vmin] mx-[3vmax]">
      <div className="flex flex-col gap-[2vmin] items-center">
        <h1 className="capitalize text-[4vmin] font-bold text-gray-700">
          our recent work
        </h1>
        <p className="text-gray-700 text-[2.3vmin] capitalize">portfolio</p>
      </div>
      <div className="my-[2.3vmin] max-w-[75vmax]">
        <PortfolioCategoryComponents href={"/"} />
      </div>
      <PortfolioList initialPortfolios={portfoilos.portfolios} ifHasNext={portfoilos.hasNext} />
    </main>
  );
}
