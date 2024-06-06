import { uploadImage } from "@/actions/cloudinaryActions";
import cloudinary from "@/utils/cloudinaryConfig";

export async function POST(req) {
  try {
    const data = await req.formData();
    const image = data.get("image");
    const uploadResult = await uploadImage(image, "test");
    return Response.json({ uploadResult }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const params = new URLSearchParams(url.searchParams);
    const img = await cloudinary.url(params.get("q"));
    return Response.json({ uri: img }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
