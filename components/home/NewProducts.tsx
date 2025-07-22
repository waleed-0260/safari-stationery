"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductPopup from "./ProductPopup";
import { Button } from "../ui/button";
import { useCartStore } from "@/hooks/useCartStore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getGuestId } from "@/hooks/getGuestId";
const NewProducts = ({ data, heading }: any) => {
  //   const latestProducts = data.slice(-8).reverse(); // Reverse to show newest first
  const addToCart = useCartStore((state) => state.addToCart);
  const saveCartToBackend = useCartStore((state) => state.saveCartToBackend);
  const router = useRouter();
  const guestId = getGuestId();

  return (
    <div className="w-full secondBg">
    <div className=' container'>
      <p className='text-4xl font-bold mb-4 heading text-center mt-[60px]'>{heading}</p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-3 relative" data-aos="fade-up">
   {data ? data.map((item: any) => (
  <div
    key={item._id}
    className="flex flex-col rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition duration-300 h-auto group my-[10px] relative"
  >
    {/* Link wraps only image and product info */}
    <Link href={`/products/${item._id}`} className="w-full">
      <div className="relative w-full h-64 overflow-hidden group">
        {/* Primary Image */}
        <Image
          src={item.images[0]}
          alt="Product"
          className="w-full h-full object-cover absolute inset-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-0"
          width={500}
          height={500}
        />

        {/* Hover Image */}
        <Image
          src={item.images[1]}
          alt="Product Hover"
          className="w-full h-full object-cover absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110"
          width={500}
          height={500}
        />

        {/* Sale Badge */}
        <p className="absolute bg-black text-white py-1 px-3 rounded-full bottom-5 left-4 text-sm z-10">
          Sale
        </p>
      </div>

      {/* Title and Price */}
      <div className="p-4 flex flex-col gap-1">
        <p className="text-md font-semibold heading">{item.title}</p>
        {item?.sets[0]?.compare_at_price > 1 && (
          <p className="line-through text-sm text-gray-500">
            Rs {item?.sets[0]?.compare_at_price} PKR
          </p>
        )}
        <p className="text-red-600 font-semibold">
          Rs {item?.sets[0]?.price} PKR
        </p>
      </div>
    </Link>

    {/* Hover Buttons - outside Link */}
    {/* <div className="absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 inline-block gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
      <div className="flex flex-col gap-4">
        <Dialog>
          <DialogTrigger className="bg-white text-black py-2 px-4 rounded-full text-sm cursor-pointer">
            Quick View
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-full h-[80vh] p-0 overflow-hidden">
            <DialogTitle className="bg-red-700 h-[1px]"></DialogTitle>
            <ProductPopup id={item._id} />
          </DialogContent>
        </Dialog>

        <button className="bg-white text-black py-2 px-4 rounded-full text-sm">
          Quick Shop
        </button>
      </div>
    </div> */}

    {/* Add to Cart Button - outside Link */}
    <div className="px-4 pb-4">
      <Button
        onClick={() => {
          addToCart({
            productId: item._id,
            title: item.title,
            quantity: 1,
            stock: item.stock,
            image: item.images[0],
            sets: item.sets,
          });
          saveCartToBackend();
          toast.success(`${item.title} added to cart!`);
        }}
        className="cursor-pointer my-2 bg-black text-white w-full"
      >
        Add To Cart
      </Button>
          <Button
              onClick={() => {
            addToCart({
                          productId: item._id,
                          title: item.title,
                          quantity: 1,
                          stock: item.stock,
                          image: item.images[0],
                          sets: item.sets,
                        });
            
                // 2. Save to backend
               saveCartToBackend();
            
                // 3. Show toast
                toast.success(`${item.title} added to cart!`);
            
                // 4. Redirect to checkout
                router.push(`/cart/${guestId}`);
              }}
              className="bg-white hover:bg-black text-black hover:text-white cursor-pointer w-full border-2"
            >
              Buy Now
            </Button>
    </div>
  </div>
)) : null}

      </div>
      {/* <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      /> */}
      </div>
      </div>
  );
};

export default NewProducts;
