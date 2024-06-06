import { mongoose } from "mongoose";

async function connectDb() {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
    console.log("connected successfully");
  } catch (error) {
    console.log(error.message);
  }
}

export default connectDb;
