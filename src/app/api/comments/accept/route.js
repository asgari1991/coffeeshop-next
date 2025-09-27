import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";

export async function PUT(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { id } = body;
    console.log('ID-->',id);
    
    await CommentModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          isAccept: true,
        },
      }
    );
    return Response.json({message:"Comment accepted successfully"})
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
