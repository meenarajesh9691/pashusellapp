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
  },

  { timestamps: true }
);

export const Animal_Sell =
  mongoose.models.Animal_Sell ||
  mongoose.model("Animal_Sell", animal_Sell_Schema);
