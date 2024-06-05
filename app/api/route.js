import cloudinary from "@/utils/cloudinaryConfig";

export async function POST(req) {
  try {
    const data = await req.formData();
    const image = data.get("image");
    const imageBuffer = Buffer.from(await image.arrayBuffer());
    const uploadResult = await cloudinary.uploader
      .upload_stream({ public_id: "test" }, (error, result) => {
        if (error) throw error;
        return result;
      })
      .end(imageBuffer);

    return Response.json(uploadResult, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const params = new URLSearchParams(url.searchParams);
    const img = await cloudinary.image(params.get("q"), { type: "fetch" });
    return Response.json(img, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
