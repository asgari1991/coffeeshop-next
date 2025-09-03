import connectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";
import { authUser } from "@/utils/auth.server";

export async function POST(req) {
    try {
        connectToDB();
  const user = await authUser();
  const reqBody = await req.json();
  const { title, body, department, subDepartment, prority } = reqBody;
  //validation


  await TicketModel.create({
    title,
    body,
    department,
    subDepartment,
    prority,
    user: user._id,
  });
  return Response.json({message:"ticket created successfully"},{status:201})
    } catch (error) {
        return Response.json({message:error},{status:500})
    }
  
}
