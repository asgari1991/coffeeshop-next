import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { authUser } from "@/utils/auth.server";

export async function POST(req) {
  try {
    connectToDB();
    const user =await authUser();
    const body =await req.json();
    const { name, email, phone } = body;

    //validation
    await UserModel.findOneAndUpdate(
      { _id: user._id },
      {
        $set: {
          name,
          email,
          phone,
        },
      }
    );
    return Response.json(
      { message: "User updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
