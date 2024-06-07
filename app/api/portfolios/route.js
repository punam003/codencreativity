import { uploadImage } from "@/actions/cloudinaryActions";
import Portfolio from "@/models/portfolioModel";
import connectDb from "@/utils/dbConnect";

export async function POST(req) {
  try {
    const data = await req.formData();
    const cover = data.get("cover");
    const category = data.getAll("category");
    await connectDb();
    const uploadedImage = await uploadImage(cover, cover.name);
    const newPortFolio = new Portfolio({
      cover: uploadedImage.secure_url,
      category: category,
    });
    await newPortFolio.save();
    return Response.json(newPortFolio, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const params = new URLSearchParams(url.searchParams);
    const limit = params.get("limit");
    await connectDb();
    const portfolios = await Portfolio.find({}).limit(limit).exec();
    return Response.json(portfolios, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
