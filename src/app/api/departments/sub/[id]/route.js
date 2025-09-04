import connectToDB from "@/configs/db";
import SubDepartmentModel from "@/models/SubDepartment";
import { isValidObjectId } from "mongoose";

export async function GET(req,{params}) {
    try {
        connectToDB()
        const {id} = params;
        // Logic to get sub-departments based on the id
        if(!isValidObjectId(id)){
            return Response.json({message:"Invalid ID"}, {status:422});
        
        }
        const subDepartments = await SubDepartmentModel.find({department:id})
        return Response.json(subDepartments, {status:200});
    } catch (error) {
        return Response.json({message:"Internal Server Error"}, {status:500});
    }
}