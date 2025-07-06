import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    Price: { type: Number, required: true },
    CompareAtPrice: {type: Number, required: true},
    images: [{ type: String }], // URLs (Cloudinary or other)
    category: [{type: String}],
    // brand: { type: String }, // Optional
    stock: { type: Number, default: 0 },
    // tags: [{ type: String }], // For search/filter
    // isFeatured: { type: Boolean, default: false }, // for "Deals"
  },
  { timestamps: true }
);

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
