import mongoose from "mongoose";

const animall_Category_Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    file: String,
  },

  { timestamps: true }
);

export const Animall_Name =
  mongoose.models.Animall_Name ||
  mongoose.model("Animall_Name", animall_Category_Schema);
