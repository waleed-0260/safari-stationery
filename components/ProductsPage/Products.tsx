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
import { Button } from '../ui/button';
import { Columns2 } from 'lucide-react';
import { Columns3 } from 'lucide-react';
import { Columns4 } from 'lucide-react';
import { Rows3 } from 'lucide-react';
import { useState } from 'react';


const Products = ({ProductsData}:any) => {
    const [gridCols, setGridCols] = useState(1);
  return (
    <div className="container">
      <h2 className="text-center text-4xl font-bold mb-6 heading">Trending Products</h2>
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
      <Link
        href={`/products/${item._id}`}
        key={item._id}
        className={`rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full bg-white ${
          gridCols === 1 ? 'flex flex-row' : 'flex flex-col'
        }`}
      >
        <div
          className={`relative group overflow-hidden ${
            gridCols === 1 ? 'w-[200px] h-auto' : 'w-full h-64'
          }`}
        >
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

          {/* Hover Buttons */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              gridCols === 1
                ? 'flex items-start justify-between p-4 opacity-0 group-hover:opacity-100'
                : 'flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100'
            }`}
          >
            <div className={`${gridCols === 1 ? "hidden": "flex flex-col gap-2"}`}>
              <button className="bg-white text-black py-2 px-4 rounded-full text-sm">
                Quick View
              </button>

              <Dialog>
                <DialogTrigger className="bg-white text-black py-2 px-4 rounded-full text-sm">
                  Quick Shop
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-1 w-[80%]">
          <p className="text-base font-medium">{item.title}</p>
          {item.sets[0].compare_at_price ? 
          <p className="line-through text-sm text-gray-500">
            Rs {item.compare_at_price} PKR
          </p>
          :null}
          {/* <p>{item.description}</p> */}
          <p className="text-red-600 font-semibold">Rs {item.sets[0].price} PKR</p>
        </div>

          <div className={`${gridCols === 1 ? "flex  p-4 flex-col items-end justify-end gap-3": "hidden"}`}>
          <Button>Quick view</Button>
          <Button>AddTo Cart</Button>
        </div>
      </Link>
    ))
  ) : (
    "no products found for this category"
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
    </div>  )
}

export default Products