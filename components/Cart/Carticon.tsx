"use client";
import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { getGuestId } from "@/hooks/getGuestId";
import { GetCartById } from "@/lib/GetProducts"; // make sure this is correct
// import { useCartStore } from "@/hooks/useCartStore"; // Remove if not using

const Carticon = () => {
  const [guestId, setGuestId] = useState<string | null>(null);
  const [cartLength, setCartLength] = useState<number>(0);

  useEffect(() => {
    const fetchCart = async () => {
      const id = getGuestId();
      if (!id) return;
      setGuestId(id);

      try {
        const cartData = await GetCartById(id);
        setCartLength(cartData?.items?.length || 0);
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    };

    fetchCart();
  }, []);

  if (!guestId) return null;

  return (
    <div>
      <Link href={`/cart/${guestId}`} className="text-3xl cursor-pointer relative">
        <CiShoppingCart />
        {cartLength > 0 && (
          <p className="absolute top-[-5px] right-0 px-1 rounded-full bg-black text-white text-sm">
            {cartLength}
          </p>
        )}
      </Link>
    </div>
  );
};

export default Carticon;
