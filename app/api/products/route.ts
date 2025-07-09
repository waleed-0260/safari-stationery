import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/Mongodb";
// import cloudinary from "@/lib/cloudinary"; 
import cloudinary from "@/lib/Cloudinary";
import { Product } from "@/models/Product";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const formData = await req.formData();

    const fileList = formData.getAll("images") as File[];
    const imageUrls: string[] = [];

    // Upload each file to Cloudinary
    for (const file of fileList) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploaded = await new Promise<any>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "products" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(buffer);
      });

      imageUrls.push(uploaded.secure_url);
    }

    // Create the product document
    const newProduct = await Product.create({
      title: formData.get("title"),
      description: formData.get("description"),
      price: Number(formData.get("Price")),
      compare_at_price: Number(formData.get("CompareAtPrice")),
      category: JSON.parse(formData.get("category") as string),
      sub_category: JSON.parse(formData.get("sub_category") as string),
      colors: JSON.parse(formData.get("colors") as string),
      stock: Number(formData.get("stock")),
      // isFeatured: formData.get("isFeatured") === "true",
      images: imageUrls,
    });

    return NextResponse.json({ success: true, data: newProduct }, { status: 201 });
  } catch (error) {
    console.error("Product upload error:", error);
    return NextResponse.json({ success: false, message: "Upload failed" }, { status: 500 });
  }
}


export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const products = await Product.find(); // or with filters
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error("Products fetch error:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch products" }, { status: 500 });
  }
}