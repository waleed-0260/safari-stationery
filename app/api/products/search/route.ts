// /app/api/search/route.ts (Next.js 13+ using App Router)

import { NextRequest, NextResponse } from "next/server";
import {connectDB} from "@/lib/Mongodb";
import {Product} from "@/models/Product";

export async function GET(req: NextRequest) {
  await connectDB();

  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("q")?.trim();

  if (!query) {
    return NextResponse.json({ success: false, message: "Query is required" }, { status: 400 });
  }

  // 1. Try exact match in title (case-insensitive)
  let products = await Product.find({ title: { $regex: new RegExp(`^${query}$`, "i") } });

  // 2. If not found, try partial match in title/description/category/tags
  if (products.length === 0) {
    products = await Product.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        // { description: { $regex: query, $options: "i" } },
        // { category: { $regex: query, $options: "i" } },
        // { tags: { $in: [new RegExp(query, "i")] } },
      ],
    });
  }

  return NextResponse.json({ success: true, data: products });
}
