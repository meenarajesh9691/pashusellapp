import { Animall_Name } from "@/models/parentCategory";
import { connectDB } from "@/utils/dbConnect";
// import { writeFile, mkdir } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
// import { join, dirname, extname } from "path";

import AWS from "aws-sdk";
import path from "path";

const { S3_ENDPOINT, BUCKET_NAME } = process.env;
const spaceEndPoint = new AWS.Endpoint(S3_ENDPOINT);
const s3 = new AWS.S3({
  endpoint: spaceEndPoint,
  region: "fra1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadFileToS3 = async (file, fileName) => {
  try {
    const fileBuffer = file;
    const uniqeName =
      "Parent_Animal_Image_" + Date.now() + path.extname(fileName);
    await s3
      .putObject({
        Bucket: BUCKET_NAME,
        Key: uniqeName,
        Body: fileBuffer,
        ACL: "public-read",
      })
      .promise();
    return `https://${BUCKET_NAME}.${S3_ENDPOINT}/${uniqeName}`;
  } catch (error) {
    console.error(error);
  }
};

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get("upload");
    const title = data.get("title");

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileDigitalPath = await uploadFileToS3(buffer, file.name);

    // const uniqeName =
    //   "animall_category_image_" + Date.now() + extname(file.name);

    // if (!file) {
    //   return NextResponse.json({ error: "No file provided" }, { status: 400 });
    // }

    // const bytes = await file.arrayBuffer();
    // const buffer = Buffer.from(bytes);
    // const path = join("./", "temp", uniqeName);

    await connectDB();
    const animall_category_data = await Animall_Name.create({
      title: title,
      upload: fileDigitalPath,
    });

    // // Ensure the directory exists
    // const directory = dirname(path);
    // await mkdir(directory, { recursive: true });

    // Write the file
    // await writeFile(path, buffer);

    return NextResponse.json(
      {
        message: "Parent Category Add successfully",
        animall_category_data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Not Add Parent Category successfully",
        error: error.message,
      },
      {
        status: 404,
      }
    );
  }
}
