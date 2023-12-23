import mongoose from "mongoose";

export const connectDB = async () => {
  // --------------------DB Connected By Local MongoDB--------------------
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB Connected Successfully! ");
  } catch (error) {
    console.log(error);
  }
};
