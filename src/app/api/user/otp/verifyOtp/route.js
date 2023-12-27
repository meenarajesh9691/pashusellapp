import { User } from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (req, res, next) => {
  try {
    const { OTP } = await req.json();
    console.log(OTP)
    const user = await User.findOne({ otp: OTP });

    if (!user) {
      return NextResponse.json(
        {
          body: {
            message: "Incorrect OTP!",
          },
        },
        { status: 400 }
      );
    }

    // Clear the OTP in the user document after successful verification
    user.otp = "";
    await user.save();

    // Create JWT Token
    const token = jwt.sign(
      { phoneNumber: user.phoneNumber },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      }
    );

    // Cookie Section
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    // send token in kids cookie
    return NextResponse.json(
      {
        body: {
          message: "User Verify Successfully",
          user,
          token,
        },
      },
      {
        status: 200,
        Cookie: `token=${token}; ${
          options.httpOnly ? "HttpOnly;" : ""
        } Expires=${options.expires.toUTCString()};`,
      }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        body: {
          message: "User not Verify",
          error: error.message,
        },
      },
      {
        status: 404,
      }
    );
  }
};
