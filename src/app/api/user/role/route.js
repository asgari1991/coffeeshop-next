import connectToDB from "@/configs/db";
import UserModel from "@/models/User";

export async function PUT(req) {
    try {
         connectToDB();
  const body = await req.json();
  const { id } = body;
  const user = await UserModel.findOne({ _id: id }).lean();
  await UserModel.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        role: user.role === "USER" ? "ADMIN" : "USER",
      },
    }
  );
  return Response.json({message: "User Role updated successfully"})
    } catch (error) {
        Response.json({message:error},{status:500})
    }
 
}
