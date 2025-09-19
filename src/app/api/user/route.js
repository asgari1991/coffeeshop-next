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

export async function DELETE(req) {
  try {
    connectToDB()
  const body=await req.json()
  const {id}=await body
  await UserModel.findOneAndDelete({_id:id})
  return Response.json({message: "user deleted successfully"})
  } catch (error) {
    return Response.json({message:error},{status:500})
  }
  
}
export async function PUT(req) {
  try {
    connectToDB()
    const body=await req.json()
    const {name, email, phone,userID}=await body
    //validation
if(!email || !phone || !name){
  return Response.json({message:"at least one field is required"},{status:400})
}
    await UserModel.findOneAndUpdate({_id:userID},{
      $set:{
        name, phone , email
      },
    })
    return Response.json({message:"user updated successfully"})

  } catch (error) {
    return Response.json({message:error},{status:500})
  }
}