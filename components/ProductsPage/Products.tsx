"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCartStore } from '@/hooks/useCartStore';
import { Button } from '../ui/button';
import { Columns2 } from 'lucide-react';
import { Columns3 } from 'lucide-react';
import { Columns4 } from 'lucide-react';
import { Rows3 } from 'lucide-react';
import { useState } from 'react';
// import { ToastContainer } from 'react-toastify';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { getGuestId } from '@/hooks/getGuestId';
import parse from "html-react-parser"
const Products = ({ProductsData}:any) => {
  const guestId = getGuestId()
  const router = useRouter();
    const [gridCols, setGridCols] = useState(1);
      const addToCart = useCartStore((state) => state.addToCart);
      const saveCartToBackend = useCartStore((state) => state.saveCartToBackend);
    
  return (
    <div className="container">
      {/* <h2 className="text-center text-4xl font-bold mb-6 heading">Trending Products</h2> */}
      <div className='flex flex-row items-center justify-center gap-4'>
        <Rows3
          onClick={() => setGridCols(1)}
          className={`text-2xl cursor-pointer ${gridCols === 1 ? 'text-blue-600' : 'text-gray-600'}`}
        />
        <Columns2
          onClick={() => setGridCols(2)}
          className={`text-2xl cursor-pointer ${gridCols === 2 ? 'text-blue-600' : 'text-gray-600'}`}
        />
        <Columns3
          onClick={() => setGridCols(3)}
          className={`text-2xl cursor-pointer md:flex hidden ${gridCols === 3 ? 'text-blue-600' : 'text-gray-600'}`}
        />
        <Columns4
          onClick={() => setGridCols(4)}
          className={`text-2xl cursor-pointer md:flex hidden ${gridCols === 4 ? 'text-blue-600' : 'text-gray-600'}`}
        />
      </div>
      <div
  className={`relative grid gap-4 mt-8 ${
    gridCols === 1
      ? 'grid-cols-1'
      : gridCols === 2
      ? 'grid-cols-2'
      : gridCols === 3
      ? 'grid-cols-3'
      : 'grid-cols-4'
  }`}
>
{ProductsData ? (
  ProductsData.map((item: any) => (
    <div
      key={item?._id}
      className={`relative z-40 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full bg-white ${
        gridCols === 1 ? 'flex md:flex-row flex-col' : 'flex flex-col'
      }`}
    >
      {/* Link wraps only the main content */}
      <Link
        href={`/products/${item._id}`}
        className={`${gridCols === 1 ? ' w-full flex md:flex-row flex-col' : 'w-full'}`}
      >
        <div
          className={`relative group ${
            gridCols === 1 ? 'md:w-[200px] md:h-[200px] w-full h-[350px]' : 'w-full h-64'
          }`}
        >
          {/* Primary Image */}
          <Image
            src={item?.images[0]}
            alt="Product"
            className="w-full h-full object-cover md:absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
            width={500}
            height={500}
          />

          {/* Hover Image */}
          <Image
            src={item?.images[1]}
            alt="Product Hover"
            className="md:w-full md:h-full object-cover md:absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            width={500}
            height={500}
          />

          {/* Sale Tag */}
          <p className="absolute bg-black text-white py-1 px-3 rounded-full bottom-5 left-4 text-sm">
            Sale
          </p>
        </div>

        <div className="p-4 flex flex-col gap-1">
          <p className="text-base font-medium">{item?.title}</p>
          {item?.sets[0]?.compare_at_price > 0 && (
            <p className="line-through text-sm text-gray-500">
              Rs {item?.sets[0]?.compare_at_price} PKR
            </p>
          )}
          <p className="text-red-600 font-semibold">Rs {item?.sets[0]?.price} PKR</p>
          {gridCols === 1 ? <>{parse(item?.description.slice(0,150))}...</>:null}
        </div>
      </Link>

      {/* Buttons outside Link */}
      <div
        className={`z-50 ${
          gridCols === 1
            ? 'flex p-4 flex-col md:items-end md:justify-end gap-3'
            : 'flex p-4 flex-col w-full gap-3'
        }`}
      >

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
  className="buy-now md:w-[150px]"
>
  Buy Now
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
            saveCartToBackend();
            toast.success(`${item.title} added to cart!`);
          }}
          className="add-to-cart md:w-[150px]"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  ))
) : (
  "No products found for this category"
)}

</div>


      {/* <div className="flex justify-center mt-8">
        <Button
          variant={"outline"}
          className="p-4 hover:bg-black hover:text-white cursor-pointer"
        >
          View More
        </Button>
      </div> */}
    
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
    )
}

export default Products