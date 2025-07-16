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
    const formData = await req.formData();

    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const stock = Number(formData.get("stock"));
    const isFeatured = formData.get("isFeatured") === "true";

    const category = JSON.parse(formData.get("category") as string);
    const sub_category = JSON.parse(formData.get("sub_category") as string);
    const colors = JSON.parse(formData.get("colors") as string);
    const sets = JSON.parse(formData.get("sets") as string);

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        title,
        description,
        stock,
        isFeatured,
        category,
        sub_category,
        colors,
        sets,
      },
      { new: true, runValidators: true }
    );

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
