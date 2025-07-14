"use client";
import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { getGuestId } from "@/hooks/getGuestId";

const Carticon = () => {
  const [guestId, setGuestId] = useState<string | null>(null);

  useEffect(() => {
    const id = getGuestId();
    setGuestId(id);
  }, []);

  if (!guestId) return null; // or return a fallback icon without link

  return (
    <div>
      <Link href={`/cart/${guestId}`} className="text-3xl cursor-pointer relative">
        <CiShoppingCart />
        <p className="absolute top-[-5px] right-0 px-1 rounded-full bg-black text-white text-sm">0</p>
      </Link>
    </div>
  );
};

export default Carticon;
