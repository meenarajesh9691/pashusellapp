import { Animal_Sell } from "@/models/animalSell";
import { connectDB } from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.formData();
    const user_id = data.get("user_id");
    const parentCategory_id = data.get("parentCategory_id");
    const subCategory_id = data.get("subCategory_id");
    const title = data.get("title");
    const wyaat = data.get("wyaat");
    const currentMilk = data.get("currentMilk");
    const dailyMilk = data.get("dailyMilk");
    const price = data.get("price");

    await connectDB();
    const animal_sell_data = await Animal_Sell.create({
      user_id,
      parentCategory_id,
      subCategory_id,
      title,
      wyaat,
      currentMilk,
      dailyMilk,
      price,
    });

    console.log(animal_sell_data);

    return NextResponse.json({
      message: "Add Animal_Sell_Details successfully",
      animal_sell_data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        body: {
          message: "Not Add Animal_Sell_Details successfully",
          error: error.message,
        },
      },
      {
        status: 404,
      }
    );
  }
}
