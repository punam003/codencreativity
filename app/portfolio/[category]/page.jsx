import PortfolioCard from "@/components/PortfolioCard";
import PortfolioCategory from "@/components/PortfolioCategory";

export const metadata = {
  title: "CodeNCreativity | Portfolio",
};
async function getPortfolios(cat) {
  try {
    const res = await fetch(`${process.env.API_URI}/portfolios/${cat}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function PortfolioCategory() {
  const portFolios = [];

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
        {portFolios.map((item) => (
          <PortfolioCard imageUrl={`${item.cover}`} key={item._id} width={25} />
        ))}
      </div>
    </main>
  );
}
