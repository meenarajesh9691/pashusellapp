import { sub_category } from "@/models/subCategory";
import { connectDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectDB();
    const get_sub_categories = await sub_category.find();
    return NextResponse.json(
      {
        body: {
          message: "Get All Sub Categories",
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
          message: "Not Get All Sub Categories",
          error: error.message,
        },
      },
      {
        status: 404,
      }
    );
  }
};
