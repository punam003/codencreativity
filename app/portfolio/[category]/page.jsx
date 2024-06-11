import PortfolioCard from "@/components/PortfolioCard";
import PortfolioCategoryComponents from "@/components/PortfolioCategoryComponents";

export async function generateMetadata({ params }, parent) {
  // read route params
  const category = params.category.split("_");

  const title = category
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `CodeNCreativity | Portfolio - ${title}`,
    openGraph: {
      images: [...previousImages],
    },
  };
}

async function getPortfolios(cat) {
  try {
    const res = await fetch(`${process.env.API_URI}/portfolios/${cat}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function PortfolioCategory({ params }) {
  const portFolios = await getPortfolios(params.category);

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
      <div className="flex flex-wrap justify-evenly gap-y-[3vmax] self-stretch">
        {portFolios.map((item) => (
          <PortfolioCard imageUrl={`${item.cover}`} key={item._id} width={20} />
        ))}
      </div>
    </main>
  );
}
