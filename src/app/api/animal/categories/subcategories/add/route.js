import { sub_category } from "@/models/subCategory";
import { connectDB } from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, parentCategory_id } = await req.json();

    console.log(title);
    await connectDB();
    const sub_category_data = await sub_category.create({
      title,
      parentCategory_id,
    });

    console.log(sub_category_data);

    return NextResponse.json({
      message: "Sub Category Add successfully",
      sub_category_data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        body: {
          message: "Sub Category Not Add successfully",
          error: error.message,
        },
      },
      {
        status: 404,
      }
    );
  }
}
