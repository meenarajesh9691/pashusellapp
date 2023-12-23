import { Animall_Name } from "@/models/parentCategory";
import { connectDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectDB();
    const get_parent_categories = await Animall_Name.find();
    return NextResponse.json(
      {
        body: {
          message: "Get All Parent Categories",
          get_parent_categories,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        body: {
          message: "Not Get All Parent Categories",
          error: error.message,
        },
      },
      {
        status: 404,
      }
    );
  }
};
