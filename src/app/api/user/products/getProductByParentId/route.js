import { Animal_Sell } from "@/models/animalSell";
import { connectDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { parentCategory_id } = await req.json();

    await connectDB();
    const get_products_by_parentCategory_id = await Animal_Sell.find({
      parentCategory_id: parentCategory_id,
    });
    return NextResponse.json(
      {
        body: {
          message: "Get All Products BY Parent_id",
          get_products_by_parentCategory_id,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        body: {
          message: "Not Get All Products BY Parent_id",
          error: error.message,
        },
      },
      {
        status: 404,
      }
    );
  }
};
