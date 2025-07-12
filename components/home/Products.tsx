"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: for nicer arrows
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import SingleProduct from "./SingleProduct";
import ProductPopup from "./ProductPopup";

const Products = ({ ProductsData }: any) => {

  return (
    <div className="w-full py-8 container">
      <h2 className="text-center text-2xl font-bold mb-6">Trending Products</h2>

      <div className="relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          // navigation={{
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev",
          // }}
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
        >
          {ProductsData?.map((item: any) => (
            <SwiperSlide key={item._id}>
              <div className="flex flex-col rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition duration-300 h-full group"  >
                <Link className="relative w-full h-64 overflow-hidden" href={`/products/${item._id}`}>
                  {/* Primary Image */}
                  <Image
                    src={item.images[0]}
                    alt="Product"
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                    width={500}
                    height={500}
                  />

                  {/* Hover Image */}
                  <Image
                    src={item.images[1]}
                    alt="Product Hover"
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    width={500}
                    height={500}
                  />

                  <p className="absolute bg-black text-white py-1 px-3 rounded-full bottom-5 left-4 text-sm">
                    Sale
                  </p>

                </Link>
               <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-4">
                    <Dialog>
                      <DialogTrigger className="bg-white text-black py-2 px-4 rounded-full text-sm cursor-pointer">
                        Quick View
                      </DialogTrigger>
                            <DialogContent className="max-w-4xl w-full h-[80vh] p-0 overflow-hidden">
                              <DialogTitle className="bg-red-700 h-[1px]"></DialogTitle>
                              <ProductPopup id={item._id}/>
      </DialogContent>
                    </Dialog>
                    <button className="bg-white text-black py-2 px-4 rounded-full text-sm">
                      Quick Shop
                    </button>
</div>
                  </div>

                <div className="p-4 flex flex-col gap-1">
                  <p className="text-base font-medium">{item.title}</p>
                  <p className="line-through text-sm text-gray-500">
                    Rs {item.compare_at_price} PKR
                  </p>
                  <p className="text-red-600 font-semibold">
                    Rs {item.price} PKR
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          // variant={"outline"}
          className="p-2 px-4 hover:bg-black bg-white text-black border-2 hover:text-white cursor-pointer rounded-xl"
          href={"/products"}
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Products;
