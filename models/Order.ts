import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    items: [
      {
        productId: String,
        title: String,
        sets: [
          {
            size: String,
            set: String,
            price: Number,
          },
        ],
        quantity: Number,
        color: String,
        image: String,
      },
    ],
    totalAmount: { type: Number, required: true },
    shippingDetails: {
      name: String,
      email: String,
      address: String,
    },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
