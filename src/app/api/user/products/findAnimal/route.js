import { Animal_Sell } from "@/models/animalSell";
import { connectDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { longitude, latitude, maxDistance } = await req.json();
    console.log("first", longitude, latitude, maxDistance);

    await connectDB();

    
    const find_product_data = await Animal_Sell.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          key: "location",
          maxDistance: parseFloat(maxDistance) * 1609,
          distanceField: "dist.calculated",
          spherical: true,
        },
      },
    ]);

    return NextResponse.json(
      {
        message: "true",
        find_product_data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "false" },
      {
        status: 404,
      }
    );
  }
};

