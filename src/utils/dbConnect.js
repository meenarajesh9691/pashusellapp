import mongoose from "mongoose";

export const connectDB = async () => {
  // --------------------DB Connected By Local MongoDB--------------------
  try {
    const { connection } = await mongoose.connect(
      "mongodb+srv://doadmin:hx1683N9R4F7yPS2@db-mongodb-blr1-39125y-dad07099.mongo.ondigitalocean.com",
      {
        dbName: "pashusellapp",
      }
    );
    console.log("DB Connected Successfully! ");
  } catch (error) {
    console.log(error);
  }
};
