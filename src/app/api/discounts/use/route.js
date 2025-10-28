import connectToDB from "@/configs/db";
import DiscountModel from "@/models/Discount";

export async function PUT(req) {
    try {
        connectToDB();
  const body = await req.json();
  const { code } = body;

  //validation

  const discount = await DiscountModel.findOne({ code });

 if (discount && discount.uses < discount.maxUse) {
      await DiscountModel.findOneAndUpdate({code},{
    $inc:{
      uses:1
    },
  })
 } else if (discount.uses >= discount.maxUse) {
    return Response.json({ message: "Code usage limit" }, { status: 422 });
  }
  
 
  if (!discount) {
    return Response.json({ message: "Code not Found" }, { status: 404 });
  } else if (discount.uses >= discount.maxUse) {
    return Response.json({ message: "Code usage limit" }, { status: 422 });
  } else {
    return Response.json(discount);
  }
    } catch (error) {
        return Response.json({ message: error }, { status: 500 });
    }
  
}
