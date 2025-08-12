import connectToDB from "@/configs/db";
import WishlistModel from "@/models/Wishlist";

export async function POST(request){
    try {
        connectToDB()
         const body= await request.json();
    const { user, product } = body;

    // Validation
    if (!user || !product) {
        return new Response(JSON.stringify({ error: "User and product are required" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }
    await WishlistModel.create({user, product});
    return Response.json({ message: "Product added to wishlist successfully" }, {status: 201})
    } catch (error) {
        return Response.json({ error: "Internal Server Error" }, { status: 500});
    }

}