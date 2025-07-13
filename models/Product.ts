import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    // price: { type: Number, required: true },
    sets: [
  {
    set: { type: String },
    price: { type: Number },
    compare_at_price: {type:Number},
    size: {type: String},
  }
],
    // compare_at_price: {type: Number},
    images: [{ type: String }], // URLs (Cloudinary or other)
    category: [{type: String}],
    sub_category:[{type: String}],
    colors: [{type: String}],
    stock: { type: Number, default: 0 },
    // tags: [{ type: String }], // For search/filter
    isFeatured: { type: Boolean, default: false }, // for "Deals"
  },
  { timestamps: true }
);

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
