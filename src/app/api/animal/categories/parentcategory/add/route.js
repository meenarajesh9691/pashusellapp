import { Animall_Name } from "@/models/parentCategory";
import { connectDB } from "@/utils/dbConnect";
import { writeFile, mkdir } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join, dirname, extname } from "path";

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get("file");
    const title = data.get("title");
    const uniqeName =
      "animall_category_image_" + Date.now() + extname(file.name);

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = join("./", "temp", uniqeName);

    console.log(title);
    await connectDB();
    const animall_category_data = await Animall_Name.create({
      title: title,
      file: uniqeName,
    });

    console.log(animall_category_data);
    // Ensure the directory exists
    const directory = dirname(path);
    await mkdir(directory, { recursive: true });

    // Write the file
    await writeFile(path, buffer);

    return NextResponse.json({
      message: "File uploaded successfully",
      animall_category_data,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Error uploading file" },
      { status: 500 }
    );
  }
}
