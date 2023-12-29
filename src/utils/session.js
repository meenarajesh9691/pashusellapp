export const sessionStatus = false;

// import { User } from "@/models/user";
// import jwt from "jsonwebtoken";
// import { NextResponse } from "next/server";
// export const sessionStatus = async (req, res, next) => {
//   // const { token } = req.cookies;
//   let token = req.get("Authorization");

//   if (!token) {
//     // return next(new ErrorHandler("User Not Authenticated", 401));
//     return NextResponse.json(
//       { message: "User Not Authenticated" },
//       { status: 401 }
//     );
//   }
//   const decoded = jwt.verify(token, process.env.JWT_SECRET);
//   req.user = await User.findOne({ phoneNumber: decoded.phoneNumber });
//   next();
// };
