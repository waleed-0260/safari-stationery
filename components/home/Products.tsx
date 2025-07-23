"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: for nicer arrows
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
import { useCartStore } from "@/hooks/useCartStore";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { getGuestId } from "@/hooks/getGuestId";

const Products = ({ ProductsData, heading }: any) => {
      const addToCart = useCartStore((state) => state.addToCart);
      const saveCartToBackend = useCartStore((state) => state.saveCartToBackend);
      const router = useRouter();
      const guestId = getGuestId();

  return (
    <div className="w-full py-8 container" data-aos='fade-up'>
      <h2 className="text-center heading mb-6">{heading}</h2>

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
  <div
    className="flex flex-col rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition duration-300 h-[500px] group my-[10px] relative" // 👈 Fixed height
  >
    <Link href={`/products/${item._id}`} className="w-full flex-grow">
      <div className="relative w-full h-64 overflow-hidden group">
        <Image
          src={item.images[0]}
          alt="Product"
          className="w-full h-full object-cover absolute inset-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-0"
          width={500}
          height={500}
        />
        <Image
          src={item.images[1]}
          alt="Product Hover"
          className="w-full h-full object-cover absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110"
          width={500}
          height={500}
        />
        <p className="absolute bg-black text-white py-1 px-3 rounded-full bottom-5 left-4 text-sm z-10">
          Sale
        </p>
      </div>

      {/* 👇 Flexbox helps maintain consistent spacing */}
      <div className="p-4 flex flex-col justify-between h-[120px]"> 
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

    {/* Hover Buttons */}
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

    <div className="px-4 pb-4 mt-auto">
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
</SwiperSlide>

          ))}
        </Swiper>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          // variant={"outline"}
          className="button"
          href={"/products"}
        >
          View More
        </Link>
      </div>
      {/* <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              // pauseOnHover
              draggable
              theme="colored"
            /> */}
    </div>
  );
};

export default Products;
