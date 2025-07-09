import React from 'react'
import {categoryOptions, subCategoryMap} from "@/lib/Categories"
import { IoSearch } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";
import Image from 'next/image';
import logo from "@/public/images/logo1.png"
import { FaAngleDown } from "react-icons/fa6";
import Link from 'next/link';


const Header = () => {
  return (
    <div className='flex flex-row justify-around items-center py-[5px] bgColors w-full h-[90px]'>
        <Link href={"/"} className='w-[100px] h-[100px]'>
            <Image src={logo} alt="" />
        </Link>
        <div className='flex flex-row gap-4'>
            {categoryOptions.map((item: any, index) => {
  const subCategories = subCategoryMap[item.label as keyof typeof subCategoryMap];

  return (
    <div key={index} className="relative group cursor-pointer">
      <p className="flex flex-row items-center gap-1 font-medium hover:text-primary transition duration-200">
        {item.icon} {item.label} <FaAngleDown/>
      </p>

      {/* Dropdown - only if subcategories exist */}
      {subCategories && (
        <div className="absolute left-0 top-full mt-0 bg-white border shadow-md rounded-md p-3 hidden group-hover:block z-50 min-w-[200px]">
          <ul className="space-y-2">
            {subCategories.map((subItem, subIndex) => (
              <li
                key={subIndex}
                className="hover:text-primary hover:translate-x-1 transition-all duration-150"
              >
                {subItem.label}
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
            <p className='text-3xl cursor-pointer'><IoSearch/></p>
            <p className='text-3xl cursor-pointer'><VscAccount/></p>
            <Link href={"/cart"} className='text-3xl cursor-pointer relative'><CiShoppingCart/> <p className='absolute top-[-5px] right-0 px-1 rounded-full bg-black text-white text-sm'>0</p></Link>
        </div>

    </div>
  )
}

export default Header