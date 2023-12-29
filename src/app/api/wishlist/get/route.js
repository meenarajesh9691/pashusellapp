import { Whishlist } from "@/models/wishlist";
import { connectDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

// --------Get Wishlist------------------------
export async function GET() {
  try {

    await connectDB();

    const data = await Whishlist.find();
    console.log("first", data);

    return NextResponse.json(
      { message: "Get wishlist", data },
      { status: 200 }
    );

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: " Not Get wishlist :", error },
      { status: 404 }
    );
  }
}
