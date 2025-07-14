// /app/api/checkout/route.ts
import { NextResponse } from 'next/server';
// import  from '@/lib/Mongodb';
import { connectDB } from '@/lib/Mongodb';
import Order from '@/models/Order';

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const { userId, items, totalAmount, shippingDetails } = body;

  if (!userId || !items || !shippingDetails) {
    return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
  }

  try {
    const order = await Order.create({
      userId,
      items,
      totalAmount,
      shippingDetails,
    });

    return NextResponse.json({ success: true, order });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Order failed", error }, { status: 500 });
  }
}
