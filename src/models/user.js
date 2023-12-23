import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
      default: "",
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    // password: {
    //   type: String,
    //   maxLength: [15, "Password should not exceed more than 15 characters"],
    //   minLength: [6, "Password should have atleast 6 characters"],
    //   // match:[]
    // },

    otp: String,
  },

  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
