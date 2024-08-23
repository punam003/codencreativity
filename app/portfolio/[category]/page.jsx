import getPortfoliosByCategory from "@/actions/getAllPortfoliosByCategory";
import PortfolioCategoryComponents from "@/components/PortfolioCategoryComponents";
import PortfolioList from "@/components/PortfolioList";

export async function generateMetadata({ params }, parent) {
  const category = params.category.split("_");

  const title = category
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `CodeNCreativity | Portfolio - ${title}`,
    openGraph: {
      images: [...previousImages],
    },
  };
}

export default async function PortfolioCategory({ params }) {
  const portFolios = await getPortfoliosByCategory(params.category, 0, 12);

  return (
    <main className="mt-[12vmin] flex flex-col items-center gap-[4vmin] mx-[3vmax]">
      <div className="flex flex-col gap-[2vmin] items-center">
        <h1 className="capitalize text-[4vmin] font-bold text-gray-700">
          our recent work
        </h1>
        <p className="text-gray-700 text-[2.3vmin] capitalize">
          {params.category
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </p>
      </div>
      <div className="my-[2.3vmin] max-w-[75vmax]">
        <PortfolioCategoryComponents href={`${params.category}`} />
      </div>
      <PortfolioList
        initialPortfolios={portFolios.portfolios}
        cat={params.category}
        ifHasNext={portFolios.hasNext}
      />
    </main>
  );
}
