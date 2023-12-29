import mongoose from "mongoose";

const animal_Sell_Schema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    parentCategory_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Animall_Name",
      required: true,
    },
    subCategory_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sub_category",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    wyaat: String,
    currentMilk: String,
    dailyMilk: String,
    price: String,
    upload: [String],
    location: {
      type: { type: String, required: true },
      coordinates: [],
    },
  },

  { timestamps: true }
);

animal_Sell_Schema.index({ location: "2dsphere" });


// await mongoose.connection.db
//   .collection("Animal_Sell")
//   .createIndex({ location: "2dsphere" });

export const Animal_Sell =
  mongoose.models.Animal_Sell ||
  mongoose.model("Animal_Sell", animal_Sell_Schema);
