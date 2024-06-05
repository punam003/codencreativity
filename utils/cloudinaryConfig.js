import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dep69vvj0",
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export default cloudinary;
