import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/Mongodb";
import { Product } from "@/models/Product";

// GET single product by ID
export async function GET(req: NextRequest, {
  params,
}: {
  params: Promise<{ id: string }>
}) {
  try {
    const {id} = await params;
    await connectDB();
    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    console.error("GET product error:", error);
    return NextResponse.json({ success: false, message: 'Failed to fetch product' }, { status: 500 });
  }
}

// UPDATE product by ID
export async function PATCH(req: NextRequest, {
  params,
}: {
  params: Promise<{ id: string }>
}) {
  try {
    const {id} = await params;
    await connectDB();
    const body = await req.json();

    const updatedProduct = await Product.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("PATCH product error:", error);
    return NextResponse.json({ success: false, message: 'Failed to update product' }, { status: 500 });
  }
}

// DELETE product by ID
export async function DELETE(req: NextRequest, {
  params,
}: {
  params: Promise<{ id: string }>
}) {
  try {
    const {id} = await params;
    await connectDB();
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error("DELETE product error:", error);
    return NextResponse.json({ success: false, message: 'Failed to delete product' }, { status: 500 });
  }
}
