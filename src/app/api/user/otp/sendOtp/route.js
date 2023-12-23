import twilio from "twilio";
import { User } from "@/models/user";
import { connectDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

export const POST = async (req, res) => {
  try {
    const { phoneNumber } = await req.json();
    await connectDB();

    // const phoneNumber = body.phoneNumber;

    let user = await User.findOne({ phoneNumber });
    let resMessage = "login Successfully!";

    if (!user) {
      user = await User.create({ phoneNumber });
      resMessage = "Please Signup";
    } else {
    }

    // Create a Twilio client
    const client = twilio(accountSid, authToken);
    // Function to generate a random 4-digit OTP
    function generateOTP() {
      return Math.floor(Math.random() * 9000 + 1000);
    }

    // Function to send OTP via Twilio
    function sendOTP(phoneNumber, otp) {
      client.messages
        .create({
          body: `Your OTP is: ${otp}`,
          from: twilioPhoneNumber,
          to: phoneNumber,
        })
        .then((message) => console.log(`OTP sent. SID: ${message.sid}`))
        .catch((error) => console.error(`Error sending OTP: ${error.message}`));
    }

    // Example: Replace 'recipientPhoneNumber' with the actual phone number
    const recipientPhoneNumber = `${phoneNumber}`; // Include the country code

    const otp = generateOTP();
    sendOTP(recipientPhoneNumber, otp);

    await User.findByIdAndUpdate(user, { otp: otp });

    return NextResponse.json(
      {
        body: {
          message: resMessage,
          user: user._id,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        body: {
          message: "user not login",
          error: error.message,
        },
      },
      {
        status: 404,
      }
    );
  }
};
