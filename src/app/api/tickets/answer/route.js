import connectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";
import { authUser } from "@/utils/auth.server";

export async function POST(req) {
    try {
        connectToDB();
  const reqBody = await req.json();
  const { title, body, department, subDepartment, priority, ticketID } =
    reqBody;
  const user = await authUser();
  await TicketModel.create({
    title,
    body,
    department,
    subDepartment,
    priority,
    user: user._id,
    hasAnswewr: false,
    isAnswer: true,
    mainTicket: ticketID,
  });
  return Response.json({message:"Answer saved successfully"},{status:201})
    } catch (error) {
        Response.json({message:error},{status:500})
    }
  
}
