import { connectDB } from "@/lib/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import Cart from "@/models/Cart";
import mongoose from "mongoose";
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

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  await connectDB();
  const { userId } = await params;
  const body = await req.json();

  const { productId, quantity } = body;

  if (!productId || typeof quantity !== "number") {
    return NextResponse.json(
      { success: false, message: "productId and quantity are required" },
      { status: 400 }
    );
  }

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return NextResponse.json({ success: false, message: "Cart not found" }, { status: 404 });
    }

    const item = cart.items.find((item: any) => item.productId.toString() === productId)

    if (!item) {
      return NextResponse.json({ success: false, message: "Item not found in cart" }, { status: 404 });
    }

    item.quantity = quantity; // update quantity

    await cart.save();

    return NextResponse.json({ success: true, message: "Cart item updated" });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to update cart item" },
      { status: 500 }
    );
  }
}


export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
await connectDB();
const { userId } = await params;
const body = await req.json();
const { productId } = body;
console.log("productId", productId)
const objectProductId = new mongoose.Types.ObjectId(productId); // <-- important!

try {

  const cartBefore = await Cart.findOne({ userId });
  console.log("Before update items:", cartBefore?.items);

  // const result = await Cart.findOneAndUpdate(
  //   { userId },
  //   { $pull: { items: { productId: ProductId } } }, // try _id here if needed
  //   { new: true }
  // );

  // console.log("After update items:", result?.items);
//   const matched = cartBefore?.items.filter((item: any) => item.productId.toString() === productId);
// console.log("Matched items:", matched);

    const result = await Cart.findOneAndUpdate(
      { userId },
      { $pull: { items: { productId: objectProductId } } },
      { new: true }
    );

  return NextResponse.json({
    success: true,
    message: "Product removed from cart successfully",
    cart: result,
  });
} catch (error) {
  console.error("Error in DELETE:", error);
  return NextResponse.json({ success: false, message: "Failed to delete product from cart" }, { status: 500 });
}

}
