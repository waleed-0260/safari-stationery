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
import { ToastContainer, toast } from "react-toastify";
const NewProducts = ({ data, heading }: any) => {
  //   const latestProducts = data.slice(-8).reverse(); // Reverse to show newest first
  const addToCart = useCartStore((state) => state.addToCart);
  const saveCartToBackend = useCartStore((state) => state.saveCartToBackend);

  return (
    <div className='w-full my-4 container'>
      <p className='text-4xl font-bold mb-4 heading text-center'>{heading}</p>
      <div className="grid grid-cols-4 gap-3 relative" data-aos="fade-up">
        {data ? data.map((item: any) => (
          <div key={item._id} className="flex flex-col rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition duration-300 h-auto group my-[10px] relative">
            <Link
              className="relative w-full h-64 overflow-hidden group"
              href={`/products/${item._id}`}
            >
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
                </Link>

                {/* Buttons */}
                <div className="absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 inline-block gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                </div>

                {/* Title and Price */}
                <div className="p-4 flex flex-col h-[40%] justify-between gap-1">
                  <p className="text-md font-semibold heading">
                    {item.title}
                  </p>
                  {item?.sets[0]?.compare_at_price > 1 ? (
                    <p className="line-through text-sm text-gray-500">
                      Rs {item?.sets[0]?.compare_at_price} PKR
                    </p>
                  ) : null}

                  <p className="text-red-600 font-semibold">
                    Rs {item?.sets[0]?.price} PKR
                  </p>
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
                  className="cursor-pointer my-2 bg-black text-white"
                >
                  Add To Cart
                </Button>
                                </div>
              </div>
            ))
          : null}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};

export default NewProducts;
