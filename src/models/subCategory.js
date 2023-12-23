import mongoose from "mongoose";

const sub_Category_Schema = new mongoose.Schema(
  {
    parentCategory_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Animall_Name",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export const sub_category =
  mongoose.models.sub_category ||
  mongoose.model("sub_category", sub_Category_Schema);
