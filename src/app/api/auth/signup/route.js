import connectToDB from "@/configs/db";
import userModel from "../../../../../models/User";
import { generateAccessToken, hashPassword } from "@/utils/auth";
import { roles } from "@/utils/constants";

export async function POST(req) {
  connectToDB();
  const body = await req.json();
  const { name, phone, email, password } = body;

  //validation
  const isUserExisted = await userModel.findOne({
    $or: [{ name }, { phone }, { email }],
  });
  if (isUserExisted) {
    return Response.json(
      { message: "The User is Already existed" },
      { status: 422 }
    );
  }
  const hashedPassword =await hashPassword(password);
  const accessToken = generateAccessToken(name);
  const users = await userModel.find({});
 
  await userModel.create({
    name,
    email,
    phone,
    password: hashedPassword,
    role: users.length > 0 ? roles.USER : roles.ADMIN,
  });
  return Response.json(
    { message: "User Created Successfully" },
    {
      status: 201,
      headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true` },
    }
  );
}
