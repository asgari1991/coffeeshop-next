import {
  generateAccessToken,
  generateRefreshToken,
  validateEmail,
  validatePassword,
  verifyPassword,
} from "@/utils/auth";
import userModel from "@/models/User";
import connectToDB from "@/configs/db";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { email, password } = body;
    //validation
    const isValidEmail = validateEmail(email);

    const isValidPassword = validatePassword(password);

    if (!isValidEmail || !isValidPassword) {
      return Response.json(
        { message: "Email or password is invalid" },
        { status: 419 }
      );
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return Response.json({ message: "User not found" }, { status: 422 });
    }
    const isPasswordCorrect = verifyPassword(password, user.password);
    if (!isPasswordCorrect) {
      return Response.json(
        { message: "Email or Password is wrong" },
        { status: 401 }
      );
    }
    const accessToken = generateAccessToken({ email });
    const refreshToken = generateRefreshToken({ email });
    await userModel.findOneAndUpdate(
      { email },
      {
        $set: {
          refreshToken,
        },
      }
    );
    return Response.json(
      { message: "User Logged in sucessfully" },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${accessToken};path=/;httpOnly=true;`,
        },
      }
    );
  } catch (error) {
    console.log("err->", error);

    return Response.json({ message: error }, { status: 500 });
  }
}
