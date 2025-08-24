import connectToDB from "@/configs/db";
import ContactModel from "@/models/Contact";

export async function POST(req) {
    try {
        connectToDB()
          const body = await req.json();
  const {email,name,phone,company,message}=body
  // Validation
    if(!email || !name || !phone || !company || !message){
        return Response.json({ error: 'All fields are required' }, { status: 400 });
        }
 await ContactModel.create({email,name,phone,company,message})
    return Response.json({ message: 'Message received' }, { status: 201 });
    } catch (error) {
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
        
    }

}