import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  title: { type: String, required: true },
  quantity: { type: Number, required: true },
sets: [
  {
    set: { type: String },
    price: { type: Number },
    compare_at_price: {type:Number},
    size: {type: String},
  }
],  color: { type: String },
  stock: {type: String},
  image: {type: String}
});

const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: false }, // optional
    items: [cartItemSchema],
  },
  { timestamps: true }
);

export default mongoose.models.Cart || mongoose.model("Cart", cartSchema);
