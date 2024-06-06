import { mongoose } from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    cover: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Portfolio =
  mongoose.models.portfolioModel ||
  mongoose.model("portfolioModel", portfolioSchema);

export default Portfolio;
