import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    animalSell_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Animal_Sell",
      },
    ],
  },

  { timestamps: true }
);

export const Whishlist = mongoose.model("wishlist", wishlistSchema);
