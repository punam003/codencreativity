import { mongoose } from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Contact =
  mongoose.models.contactModel || mongoose.model("contactModel", contactSchema);

export default Contact;
