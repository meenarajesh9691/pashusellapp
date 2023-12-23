import { Animall_Name } from "@/models/parentCategory";
import { connectDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    const data = await req.formData();
    const parentCategories_id = data.get("parentCategories_id");
    const title = data.get("title");
    await connectDB();

    const parentCategoriesUpdate = await Animall_Name.findByIdAndUpdate(
      parentCategories_id,
      { title },
      { new: true }
    );

    return NextResponse.json(
      {
        body: {
          message: "Parent Category Update Successfully",
          parentCategoriesUpdate,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        body: {
          message: "Parent Category Not Update Successfully",
          error: error.message,
        },
      },
      {
        status: 404,
      }
    );
  }
};
