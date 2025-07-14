import { connectDB } from "@/lib/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import Cart from "@/models/Cart";

// /api/cart/[userId]/route.ts
export async function GET(req: NextRequest, {
  params,
}: {
  params: Promise<{ userId: string }>
}) {
  await connectDB();
  const { userId } = await params;

  try {
    const cart = await Cart.findOne({ userId });
    return NextResponse.json({ success: true, data: cart || { items: [] } });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to get cart" }, { status: 500 });
  }
}