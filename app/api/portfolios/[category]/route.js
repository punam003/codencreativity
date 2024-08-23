import Portfolio from "@/models/portfolioModel";
import connectDb from "@/utils/dbConnect";

export async function GET(req, { params }) {
  try {
    const url = new URL(req.url);
    const queryParams = new URLSearchParams(url.searchParams);
    const limit = queryParams.get("limit") || 12;
    const offset = queryParams.get("offset") || 0;
    const category = params.category;
    await connectDb();
    const portfolios = await Portfolio.find({
      category: { $all: category },
    })
      .limit(limit)
      .skip(offset)
      .exec();
    const totalCount = await Portfolio.countDocuments({
      category: { $all: category },
    });

    const hasNext = offset + portfolios.length < totalCount;

    return Response.json(
      {
        portfolios,
        hasNext,
        totalCount,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
