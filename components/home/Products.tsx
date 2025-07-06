import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import SwiperCore from "swiper";
SwiperCore.use([Navigation]);


const Products = () => {

const ProductsData = [
  {
    title: "Acrylic Paint Set",
    description: "A premium set of 24 vibrant acrylic paints perfect for artists and students.",
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
    description: "Adorable animal-themed gel pens with smooth ink flow. Perfect for kids & gifting.",
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
    description: "Durable file organizer with 10 sections. Ideal for office and school use.",
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
    description: "High-quality stitched football suitable for training and matches.",
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
    description: "Pack of 10 colorful gift wrap sheets with assorted designs.",
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
    <div className='flex flex-col items-center'>
        <p className='text-2xl font-bold'>Sale Sale Sale</p>
        <div className='flex flex-row gap-3'>
            {ProductsData.map((item)=>{
                return(
                    <div className='flex flex-col' key={item.stock}>
                        <div className='relative'>
                        <img src="https://www.thepaperworm.com/cdn/shop/files/PortableMiniFlowerDecorativeLamp_8.webp?v=1734616004&width=360" alt='sakldmkl' className='object-cover'/>
                        <p className='absolute bg-black text-white py-1 px-3 rounded-full bottom-5 left-4'>Sale</p>
                        </div>
                        <p className='font-italic'>{item.title}</p>
                        <p className='line-through text-sm text-gray-500'> Rs{item.CompareAtPrice} PKR</p>
                        <p className='text-red-600'>Rs {item.Price} PKR</p>
                    </div>
                )
            })}
        </div>
        <Button variant={"outline"} className='p-4 hover:bg-black hover:text-white cursor-pointer'> View More</Button>
    </div>
  )
}

export default Products