import { Animall_Name } from "@/models/parentCategory";
import { connectDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export default async function GET(req, res) {
  try {
    const { filterOption } = req.query;

    await connectDB();

    let filters;

    if (filterOption) {
      // If a filter option is provided, use it to filter results
      filters = await Animall_Name.find({ title: filterOption });
    } else {
      // If no filter option is provided, return all filters
      filters = await Animal_filter.find();
    }

    return NextResponse.json({
      filters,
      message: "Data retrieved successfully",
    }, {
      status: 200,
    });
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.json({
      message: "An error occurred",
    }, {
      status: 500,
    });
  }
}