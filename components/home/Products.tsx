"use client"
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
} from "@/components/ui/dialog"

const Products = () => {
  const ProductsData = [
    {
      title: "Acrylic Paint Set",
      description:
        "A premium set of 24 vibrant acrylic paints perfect for artists and students.",
      Price: 1200,
      CompareAtPrice: 1500,
      images: [
        "https://example.com/images/paint1.jpg",
        "https://example.com/images/paint2.jpg",
      ],
      category: ["Fine Arts", "School Supplies"],
      stock: 50,
    },
    {
      title: "Cute Animal Gel Pens - Pack of 6",
      description:
        "Adorable animal-themed gel pens with smooth ink flow. Perfect for kids & gifting.",
      Price: 450,
      CompareAtPrice: 600,
      images: [
        "https://example.com/images/pens1.jpg",
        "https://example.com/images/pens2.jpg",
      ],
      category: ["Cute Stationery", "Birthday & Gifts"],
      stock: 120,
    },
    {
      title: "Heavy-Duty File Organizer",
      description:
        "Durable file organizer with 10 sections. Ideal for office and school use.",
      Price: 850,
      CompareAtPrice: 1000,
      images: [
        "https://example.com/images/file1.jpg",
        "https://example.com/images/file2.jpg",
      ],
      category: ["Office Supplies"],
      stock: 75,
    },
    {
      title: "Football (Size 5)",
      description:
        "High-quality stitched football suitable for training and matches.",
      Price: 1100,
      CompareAtPrice: 1350,
      images: [
        "https://example.com/images/football1.jpg",
        "https://example.com/images/football2.jpg",
      ],
      category: ["Sports & Toys"],
      stock: 30,
    },
    {
      title: "Gift Wrapping Paper Set",
      description:
        "Pack of 10 colorful gift wrap sheets with assorted designs.",
      Price: 350,
      CompareAtPrice: 450,
      images: [
        "https://example.com/images/wrap1.jpg",
        "https://example.com/images/wrap2.jpg",
      ],
      category: ["Packing & Industry", "Birthday & Gifts"],
      stock: 200,
    },
  ];

  return (
    <div className="w-full py-8">
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
          {ProductsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition duration-300 h-full">
                <div className="relative group w-full h-64">
                  <img
                    src="https://blingspot.pk/cdn/shop/files/a8b50096-7ca6-4401-831a-ba0d0b03e98b.jpg?v=1747732455&width=400"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                  <p className="absolute bg-black text-white py-1 px-3 rounded-full bottom-5 left-4 text-sm">
                    Sale
                  </p>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-black py-2 px-4 rounded-full text-sm">
                      Quick View
                    </button>
                    {/* <button className="bg-white text-black py-2 px-4 rounded-full text-sm">
                      Quick Shop
                    </button> */}

                    <Dialog>
  <DialogTrigger className="bg-white text-black py-2 px-4 rounded-full text-sm">Quick Shop</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <p className="text-base font-medium">{item.title}</p>
                  <p className="line-through text-sm text-gray-500">
                    Rs {item.CompareAtPrice} PKR
                  </p>
                  <p className="text-red-600 font-semibold">
                    Rs {item.Price} PKR
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows at Bottom Center */}
        {/* <div className="flex justify-center gap-6 mt-6">
          <button className="swiper-button-prev bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="swiper-button-next bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div> */}
      </div>

      <div className="flex justify-center mt-8">
        <Button
          variant={"outline"}
          className="p-4 hover:bg-black hover:text-white cursor-pointer"
        >
          View More
        </Button>
      </div>
    </div>
  );
};

export default Products;
