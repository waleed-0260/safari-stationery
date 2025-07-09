import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log("token", token)

  if (!token) {
    return NextResponse.redirect(new URL("/adminlogin", req.url));
  }
//  try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     console.log("✅ Token is valid:", decoded);
//     return NextResponse.next();
//   } catch (error: any) {
//     console.error("❌ JWT verification failed:", error.message);
//     return NextResponse.redirect(new URL("/adminlogin", req.url));
//   }
}

// Protect only /admin route
export const config = {
  matcher: ["/admin/:path*"],
};
