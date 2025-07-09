// /app/api/products/search/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/Mongodb';
import { Product } from '@/models/Product';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    const products = await Product.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    });

    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json({ success: false, message: "Search failed" }, { status: 500 });
  }
}
