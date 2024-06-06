import Contact from "@/models/contactModel";

export async function POST(req) {
  try {
    const data = await req.json();
    const newContact = new Contact({
      fullname: data.fullname,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
    });
    await newContact.save();
    return Response.json(newContact, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const contacts = await Contact.find({});
    return Response.json(contacts, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
