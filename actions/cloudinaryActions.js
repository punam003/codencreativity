import cloudinary from "@/utils/cloudinaryConfig";

export async function uploadImage(image, publicId) {
  const imageBuffer = Buffer.from(await image.arrayBuffer());
  const result = await new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader
      .upload_stream({ public_id: publicId }, (error, result) => {
        if (error) reject(error);
        resolve(result);
      })
      .end(imageBuffer);
  });
  return result;
}

export async function getImage(query) {
  const img = await new Promise((resolve, reject) => {
    const url = cloudinary.url(query);
    resolve(url);
  });
  return img;
}
