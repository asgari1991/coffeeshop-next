import connectToDB from "@/configs/db";
import BanModel from "@/models/Ban";
export async function POST(req) {
    try {
        connectToDB();
    const {phone,email}=await req.json();
    // validation
    if(!phone && !email){
        return new Response(JSON.stringify({error:"Phone or email is required"}),{status:400})
    }
    await BanModel.create({phone,email})
    return Response.json({message:"User banned successfully"})
    } catch (error) {
        return Response.json({error:error.message},{status:500})
        
    }
    
}