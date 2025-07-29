// POST /api/products/[id]/review
import { NextRequest, NextResponse } from "next/server";
import { Product } from "@/models/Product";
import { connectDB } from "@/lib/Mongodb";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { name, email, message } = await req.json();

    await connectDB();

    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
    }

    product.reviews.push({ name, email, message });
    await product.save();

    return NextResponse.json({ success: true, data: product.reviews });
  } catch (error) {
    console.error("Add review error:", error);
    return NextResponse.json({ success: false, message: "Failed to add review" }, { status: 500 });
  }
}
