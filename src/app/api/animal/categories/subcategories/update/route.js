import { sub_category } from "@/models/subCategory";
import { connectDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    const { title, subCategories_id } = await req.json();

    await connectDB();

    const subCategoriesUpdate = await sub_category.findByIdAndUpdate(
      subCategories_id,
      { title },
      { new: true }
    );

    return NextResponse.json(
      {
        body: {
          message: "Sub Category Update Successfully",
          subCategoriesUpdate,
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
          message: "Sub Category Not Update Successfully",
          error: error.message,
        },
      },
      {
        status: 404,
      }
    );
  }
};
