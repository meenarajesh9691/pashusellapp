import { Whishlist } from "@/models/wishlist.js";
import { connectDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server.js";

// ------Add Wishlist---------------------------
export async function POST(req) {
  try {
    const { user_id, animalSell_ids } = await req.json();

    await connectDB();

    // Check if the product_id already exists in the wishlist
    const wishlist = await Whishlist.findOne({ user_id: user_id });

    if (wishlist) {
      // If the product_id exists, remove it from the wishlist
      const index = wishlist.animalSell_ids.indexOf(animalSell_ids);
      if (index !== -1) {
        wishlist.animalSell_ids.splice(index, 1);
        await wishlist.save();
        return NextResponse.json(
          { message: "Product removed from wishlist" },
          { status: 200 }
        );
      } else {
        // If the product_id does not exist, add it to the wishlist
        wishlist.animalSell_ids.push(animalSell_ids);
        await wishlist.save();
        return NextResponse.json(
          { message: "Animal Product added to wishlist" },
          { status: 201 }
        );
      }
    } else {
      // If there is no wishlist for the user, create a new one
      const wishlistData = await Whishlist.create({
        user_id,
        animalSell_ids: [animalSell_ids],
      });
      return NextResponse.json(
        { message: "Animal Product added to wishlist" },
        { status: 201 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Animal Product Not added to wishlist :", error },
      { status: 404 }
    );
  }
}

