import connectToDB from "@/configs/db";
import SubDepartmentModel from "@/models/SubDepartment";

export async function POST(req) {
    try {
         connectToDB()
    const body=await req.json()
    const {title,department}=body

    //valid Title

    await SubDepartmentModel.create({title,department})
    return Response.json({message:"SubDepartment created successfully"},{status:200})
    } catch (error) {
        return Response.json({message:error},{status:500})
    }
   
}