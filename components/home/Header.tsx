"use client"
import React, {useEffect, useState} from 'react'
import {categoryOptions, subCategoryMap} from "@/lib/Categories"
// import { IoSearch } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";
import Image from 'next/image';
import logo from "@/public/images/logo.webp"
import { FaAngleDown } from "react-icons/fa6";
import Link from 'next/link';
import SearchProducts from './SearchProducts';
// import { GetCartProducts } from '@/lib/GetProducts';
import { getGuestId } from '@/hooks/getGuestId';
import Carticon from '../Cart/Carticon';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FiMenu } from "react-icons/fi";


const Header = () => {
  // const guestIdddd = getGuestId();
  // console.log("header is gusee fi", guestIdddd)
  // const cartLength = await GetCartProducts();

    const messages = [
    "Free Delivery for orders within Bahria town",
    "Minimum order limit Rs 500",
    "Delivery Charges Rs 200",
    "Free Delivery above Rs 2000",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval); // cleanup
  }, []);
    const [isSheetOpen, setIsSheetOpen] = useState(false);

  
  return (
    <div className='fixed top-0 bgColors shadow-md z-50 w-full'>
 <div className=" w-full py-[8px] text-white text-sm overflow-hidden whitespace-nowrap" style={{
    background: `linear-gradient(
      90deg,
      oklch(0.75 0.11 11.53),
      oklch(0.75 0.11 308.8),
      oklch(0.79 0.09 222.67),
      oklch(0.84 0.16 90.78)
    )`,
  }}>
  <div className="animate-marquee inline-block min-w-full">
    <span className="mx-8">Free Delivery for orders within Bahria town</span>
    <span className="mx-8">Minimum order limit Rs 500</span>
    <span className="mx-8">Delivery Charges Rs 100</span>
    <span className="mx-8">Free Delivery above Rs 2000</span>
    {/* duplicate content for seamless loop */}
    <span className="mx-8">Free Delivery for orders within Bahria town</span>
    <span className="mx-8">Minimum order limit Rs 500</span>
    <span className="mx-8">Delivery Charges Rs 100</span>
    <span className="mx-8">Free Delivery above Rs 2000</span>
  </div>
</div>

    <div className='flex items-center justify-center w-full lg:h-[120px] h-[90px] ' 
  >
    <div className='flex flex-row items-center justify-between w-[90%]'>
      <div className='lg:hidden flex'>
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <p className="text-3xl cursor-pointer">
          <FiMenu />
        </p>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          {categoryOptions.map((item) => {
            const subCategories = subCategoryMap[item.label as keyof typeof subCategoryMap];
            const [open, setOpen] = useState(false);

            return (
              <div key={item.value} className="mb-2">
                <div className="flex justify-between items-center w-full">
                  <Link
                    href={`/products/categories/${item.value}`}
                    className="block w-full py-2 text-base font-medium"
                    onClick={() => setIsSheetOpen(false)} // 👈 closes the sheet
                  >
                    {item.label}
                  </Link>

                  {subCategories && (
                    <button
                      onClick={() => setOpen((prev) => !prev)}
                      className="text-base font-semibold text-gray-600"
                    >
                      <FaAngleDown />
                    </button>
                  )}
                </div>

                {subCategories && open && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {subCategories.map((subItem) => (
                      <li key={subItem.value}>
                        <Link
                          href={`/products/sub-category/${subItem.value}`}
                          className="text-sm font-semibold text-gray-700 hover:text-primary block"
                          onClick={() => setIsSheetOpen(false)} // 👈 closes the sheet
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </SheetHeader>
      </SheetContent>
    </Sheet>
      </div>
        <Link href={"/"} className='h-[150px] w-[150px]'>
            <Image src={logo} alt="" className=''/>
        </Link>
        <div className='lg:grid grid-cols-4 hidden'>
            {categoryOptions.map((item: any, index) => {
  const subCategories = subCategoryMap[item.label as keyof typeof subCategoryMap];
  
  return (
    <div key={index} className="relative group cursor-pointer">
      <Link className="flex flex-row items-center gap-1 hover:text-primary transition duration-200 ml-3 mt-3 head font-semebold text-md" href={`/products/categories/${item.value}`}>
        {item.icon} {item.label}
        <FaAngleDown/>
      </Link>

      {/* Dropdown - only if subcategories exist */}
      {subCategories && (
        <div className="absolute left-0 top-full mt-0 bg-white border shadow-md rounded-md p-3 hidden group-hover:block z-50 min-w-[200px]">
          <ul className="space-y-2">
            {subCategories.map((subItem, subIndex) => (
              <li
                key={subIndex}
                className="hover:text-primary hover:translate-x-1 transition-all duration-150"
                >
                <Link 
                href={`/products/sub-category/${subItem.value}`}
                >
                {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
})}


        </div>

        <div className='flex flex-row lg:gap-4 gap-2'>
          <SearchProducts/>
             <p className='text-3xl cursor-pointer lg:block hidden'><VscAccount/></p>
            <Carticon/>
        </div>

    </div>
    </div>
    </div>
      
  )
}

export default Header