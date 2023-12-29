import { Animal_Sell } from "@/models/animalSell";
import { connectDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    const {
      price,
      title,
      sort,
      page = 1,
      perPage = 10,
      search,
    } = await req.json();

    const filters = {};

    if (price) filters.price = { $lte: parseFloat(price) };
    if (title) filters.title = { $regex: title, $options: "i" };

    if (search) {
      filters.$or = [
        { title: { $regex: `.*${search}.*`, $options: "i" } },
        // { brand: { $regex: `.*${search}.*`, $options: "i" } },
      ];
    }

    const skip = (page - 1) * perPage;

    const sortOptions = {};
    if (sort === "price_high") {
      sortOptions.price = -1;
    } else if (sort === "price_low") {
      sortOptions.price = 1;
    }

    await connectDB();

    const filteredProducts = await Animal_Sell.find(filters)
      .skip(skip)
      .limit(parseInt(perPage))
      .sort(sortOptions)
      .exec();

    return NextResponse.json({
      message: "Filtered Products Successfully!",
      filteredProducts: filteredProducts,
      currentPage: page,
      totalPages: Math.ceil(filteredProducts.length / perPage),
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Filtered Products Not Successfully!",
      status: 404,
    });
  }
};
