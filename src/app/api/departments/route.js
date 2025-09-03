import connectToDB from "@/configs/db";
import DepartmentModel from "@/models/Department";

export async function POST(req) {
    try {
         connectToDB()
    const body=await req.json()
    const {title}=body

    //valid Title

    await DepartmentModel.create({title})
    return Response.json({message:"Department created successfully"},{status:200})
    } catch (error) {
        return Response.json({message:error},{status:500})
    }
   
}