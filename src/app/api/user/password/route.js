import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { hashPassword, validatePassword } from "@/utils/auth";

export async function PUT(req) {
    try {
         connectToDB();
  const body = await req.json();
  const { id,password } = body;
  const isValidPassword=validatePassword(password)
  
    if ( !isValidPassword) {
      return Response.json(
        { message: " password is invalid" },
        { status: 419 }
      );
    }
    const hashedPassword =await hashPassword(password);
  const user = await UserModel.findOne({ _id: id }).lean();
  await UserModel.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        password:hashedPassword,
      },
    }
  );
  return Response.json({message: "Password updated successfully"})
    } catch (error) {
        Response.json({message:error},{status:500})
    }
 
}
