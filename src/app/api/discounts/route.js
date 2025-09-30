import connectToDB from "@/configs/db";
import DiscountModel from "@/models/Discount";

export async function POST(req) {
  try {
    connectToDB();
  const body = await req.json();
  const { code, percent, maxUse} = body;
  await DiscountModel.create({
    code, percent, maxUse
  })
  return Response.json({message:"Discount code created successfully"},{status:201})
  } catch (error) {
    return Response.json({message:error},{status:500})
  }
}
