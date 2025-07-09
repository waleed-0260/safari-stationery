import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/Mongodb';
import { Product } from '@/models/Product';

// GET all products by category
export async function GET(
  req: NextRequest,
  {
  params,
}: {
  params: Promise<{ category: string }>
}
) {
  const {category} = await params;
  try {
    await connectDB();

    // Decode in case category has spaces or special characters
    const items = decodeURIComponent(category);

    const products = await Product.find({ items });

    if (!products || products.length === 0) {
      return NextResponse.json({ success: false, message: 'No products found in this category' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error('GET products by category error:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch products' }, { status: 500 });
  }
}
