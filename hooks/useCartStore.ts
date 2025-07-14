import { create } from "zustand";
import { getGuestId } from "./getGuestId";
type CartItem = {
  productId: string;
  title: string;
  // price: number;
  sets: { set: string; price: number, compare_at_price: number, size: string }[];
  quantity: number;
  color?: string;
  stock: string;
  image: string;
};

type CartState = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string, color?: string) => void;
  clearCart: () => void;
  saveCartToBackend: () => Promise<void>;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (item) => {
    const cart = get().cart;
    const existing = cart.find(
      (i) => i.productId === item.productId && i.color === item.color
    );

    if (existing) {
      existing.quantity += item.quantity;
      set({ cart: [...cart] });
    } else {
      set({ cart: [...cart, item] });
    }
  },

  removeFromCart: (productId, color) => {
    const cart = get().cart.filter(
      (item) => !(item.productId === productId && item.color === color)
    );
    set({ cart });
  },

  clearCart: () => set({ cart: [] }),

  saveCartToBackend: async () => {
  const cart = get().cart;
  const userId = getGuestId(); // This ensures the cart belongs to a unique visitor

  try {
    await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, items: cart }),
    });
    console.log("✅ Cart saved to DB");
  } catch (error) {
    console.error("❌ Error saving cart", error);
  }
},
}));
