import connectToDB from "@/configs/db"


export async function GET(req) {
  connectToDB()
    Response.json({message:"success response"},{status:201})
}