"use server";
async function getPortfolios(offset = 0, limit = 12) {
  try {
    const res = await fetch(
      `${process.env.API_URI}/portfolios?offset=${offset}&limit=${limit}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getPortfolios;
