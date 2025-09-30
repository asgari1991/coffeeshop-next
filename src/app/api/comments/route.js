import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";
import ProductModel from "@/models/Product";

export async function POST(req) {
  
  try {
    connectToDB();
    const reqBody = await req.json();
    const { username, body, email, score, productID } = reqBody;

    // Validation

    const comment = await CommentModel.create({
      username,
      body,
      email,
      score,
      productID,
    });

    const updatedProduct = await ProductModel.findOneAndUpdate(
      {
        _id: productID,
      },
      {
        $push: {
          comments: comment._id,
        },
      }
    );

    return Response.json(
      {
        message: "Comment created successfully :))",
        data: comment,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
export async function DELETE(req) {
  try {
    connectToDB()
  const body=await req.json()
  const {id}=await body
  await CommentModel.findOneAndDelete({_id:id})
  return Response.json({message: "comment deleted successfully"})
  } catch (error) {
    return Response.json({message:error},{status:500})
  }
  
}

export async function GET() {
  const comments = await CommentModel.find({}, "-__v");
  return Response.json(comments);
}
