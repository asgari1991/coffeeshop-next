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
export async function DELETE(req) {
  try {
    connectToDB();
  const body = await req.json();
  console.log('body-->',body);
  const {id} = body;
 
  await DiscountModel.findOneAndDelete({
    _id:id
  })
  return Response.json({message:"Discount code removed successfully"},{status:200})
  } catch (error) {
    return Response.json({message:error},{status:500})
  }
}

