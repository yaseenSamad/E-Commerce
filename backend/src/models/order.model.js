import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  priceAtPurchase: {
    type: Number,
    required: true
  },
  discountAtPurchase: {
    type: Number,
    default: 0
  }
});

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  orderNumber: {
    type: String,
    required: true,
    unique: true
  },

  items: [orderItemSchema],

  subtotal: Number,
  tax: Number,
  shippingCost: Number,
  total: Number,

  status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
    default: "pending"
  },

  paymentStatus: {
    type: String,
    default: "pending"
  },

shippingAddress: {
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  }
}

}, { timestamps: true });

export default mongoose.model("Order", orderSchema);

// user (Reference to User)
// orderNumber (String, e.g., ORD-YYYYMMDD-XXXX)
// items (Array):
// product (Reference)
// quantity (Number)
// priceAtPurchase (Number)
// discountAtPurchase (Number)
// subtotal , tax , shippingCost , total (Numbers)
// status (Enum: pending, processing, shipped, delivered, cancelled)
// paymentStatus (String)
// shippingAddress (Object)
// createdAt (Date)