import { Animal_Sell } from "@/models/animalSell";
import { connectDB } from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

// import multer from "multer";
// import multerS3 from "multer-s3";
import AWS from "aws-sdk";
import path from "path";
// import formidable from "formidable";

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
    const uniqeName = "AnimalImage_" + Date.now() + path.extname(fileName);
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
    const file = data.get("upload");
console.log(file)
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileDigitalPath = await uploadFileToS3(buffer, file.name);
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
      upload: fileDigitalPath,
    });

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
