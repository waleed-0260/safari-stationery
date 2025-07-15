"use client"
import React from 'react'
import {categoryOptions, subCategoryMap} from "@/lib/Categories"
// import { IoSearch } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";
import Image from 'next/image';
import logo from "@/public/images/logo.png"
import { FaAngleDown } from "react-icons/fa6";
import Link from 'next/link';
import SearchProducts from './SearchProducts';
// import { GetCartProducts } from '@/lib/GetProducts';
import { getGuestId } from '@/hooks/getGuestId';
import { FloatingWhatsApp } from "react-floating-whatsapp";
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
  
  return (
    <>
    <div className='flex items-center justify-center w-full h-[90px]' style={{
    background: 'linear-gradient(to right, #9b7a9aff, #a2d2ff)'
  }}>
    <div className='flex flex-row items-center justify-between w-[90%]'>
      <div className='md:hidden flex'>
                    <Sheet>
  <SheetTrigger>
    <p className='text-3xl cursor-pointer '>
    <FiMenu/>
    </p>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      {categoryOptions.map((item)=>{
        return(
          <ul key={item.value} className='py-1'>
          <li>{item.label}</li>
        </ul>
        )
      })}
    </SheetHeader>
  </SheetContent>
</Sheet>
      </div>
        <Link href={"/"} className='h-[150px] w-[150px]'>
            <Image src={logo} alt="" className=''/>
        </Link>
        <div className='md:grid grid-cols-4 hidden'>
            {categoryOptions.map((item: any, index) => {
  const subCategories = subCategoryMap[item.label as keyof typeof subCategoryMap];
  
  return (
    <div key={index} className="relative group cursor-pointer">
      <Link className="flex flex-row items-center gap-1 font-medium hover:text-primary transition duration-200 ml-3 mt-1 heading font-semibold" href={`/products/categories/${item.value}`}>
        {item.icon} {item.label} 
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

        <div className='flex flex-row md:gap-4 gap-2'>
          <SearchProducts/>
            <p className='text-3xl cursor-pointer'><VscAccount/></p>
            <Carticon/>
        </div>

    </div>
    </div>
       <FloatingWhatsApp
          phoneNumber="+923342987718"
          accountName="Paper N Play"
          statusMessage="Replies within 15 minutes"
          chatMessage="Hello there! How can I help you ?"
          avatar="/images/logo.jpeg"
          chatboxHeight={350}
          buttonClassName="floating-whatsapp-button"
        />
      </>
  )
}

export default Header