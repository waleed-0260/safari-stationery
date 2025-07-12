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

const Header = async() => {
  // const cartLength = await GetCartProducts();
  
  return (
    <div className='flex items-center justify-center bgColors w-full h-[90px]'>
    <div className='flex flex-row items-center justify-between w-[90%]'>
        <Link href={"/"} className='h-[150px] w-[150px]'>
            <Image src={logo} alt="" />
        </Link>
        <div className='grid grid-cols-4'>
            {categoryOptions.map((item: any, index) => {
  const subCategories = subCategoryMap[item.label as keyof typeof subCategoryMap];

  return (
    <div key={index} className="relative group cursor-pointer">
      <Link className="flex flex-row items-center gap-1 font-medium hover:text-primary transition duration-200 ml-3 mt-1" href={`/products/categories/${item.value}`}>
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

        <div className='flex flex-row gap-4'>
          <SearchProducts/>
          {/* <Sheet>
  <SheetTrigger>            <p className='text-3xl cursor-pointer'><IoSearch/></p>
</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle><div className="relative w-full max-w-sm">
  <input
    type="text"
    placeholder="Search..."
    className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
    <Search className="text-gray-500" />
  </div>
</div></SheetTitle>
      <SheetDescription>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet> */}
            <p className='text-3xl cursor-pointer'><VscAccount/></p>
            <Link href={"/cart"} className='text-3xl cursor-pointer relative'><CiShoppingCart/> <p className='absolute top-[-5px] right-0 px-1 rounded-full bg-black text-white text-sm'>0</p></Link>
        </div>

    </div>
    </div>
  )
}

export default Header