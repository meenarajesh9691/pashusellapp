import { sub_category } from "@/models/subCategory";
import { connectDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { parentCategory_id } = await req.json();

    await connectDB();
    const get_sub_categories = await sub_category.find({
      parentCategory_id: parentCategory_id,
    });
    return NextResponse.json(
      {
        body: {
          message: "Get All Sub Categories BY Parent_id",
          get_sub_categories,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        body: {
          message: "Not Get All Sub Categories  BY Parent_id",
          error: error.message,
        },
      },
      {
        status: 404,
      }
    );
  }
};
