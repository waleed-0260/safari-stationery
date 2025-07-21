"use client";
import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { getGuestId } from "@/hooks/getGuestId";
import { GetCartById } from "@/lib/GetProducts"; // make sure this is correct
import { useCartStore } from "@/hooks/useCartStore";
// import { useCartStore } from "@/hooks/useCartStore"; // Remove if not using

const Carticon = () => {
  const [guestId, setGuestId] = useState<string | null>(null);
  // const [cartLength, setCartLength] = useState<number>(0);
  const cart = useCartStore((state)=> state.cart)
  // console.log("cartooo", cart)
  const loadCartFromBackend = useCartStore((state) => state.loadCartFromBackend);

  useEffect(() => {
    const id = getGuestId();
    if (!id) return;
    setGuestId(id);
    loadCartFromBackend(); // 👈 Load and set cart from backend
  }, []);

  if (!guestId) return null;

  return (
    <div>
      <Link href={`/cart/${guestId}`} className="text-3xl cursor-pointer relative">
        <CiShoppingCart />
        {cart.length > 0 && (
          <p className="absolute top-[-5px] right-0 px-1 rounded-full bg-black text-white text-sm">
            {cart.length}
          </p>
        )}
      </Link>
    </div>
  );
};

export default Carticon;
