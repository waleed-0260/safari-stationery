// app/api/cart/route.ts
import { NextRequest, NextResponse } from "next/server";
import {connectDB} from "@/lib/Mongodb";
import Cart from "@/models/Cart";

export async function POST(req: NextRequest) {
  await connectDB();
  const { userId, items } = await req.json();

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // Merge/update items
      items.forEach((newItem: any) => {
        const existingItem = cart.items.find(
          (item: any) =>
            item.productId.toString() === newItem.productId &&
            item.color === newItem.color
        );

        if (existingItem) {
          existingItem.quantity += newItem.quantity;
        } else {
          cart.items.push(newItem);
        }
      });

      await cart.save();
    } else {
      cart = new Cart({ userId, items });
      await cart.save();
    }

    return NextResponse.json({ success: true, cart });
  } catch (error) {
    console.error("Cart Error:", error);
    return NextResponse.json({ success: false, error: "Cart error" }, { status: 500 });
  }
}


export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const cartItems = await Cart.find(); // or with filters
    return NextResponse.json({ success: true, data: cartItems });
  } catch (error) {
    console.error("Products fetch error:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch products" }, { status: 500 });
  }
}