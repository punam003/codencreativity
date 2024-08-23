"use server";
async function getPortfoliosByCategory(cat, offset = 0, limit = 12) {
  try {
    const res = await fetch(
      `${process.env.API_URI}/portfolios/${cat}?offset=${offset}&limit=${limit}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getPortfoliosByCategory;
