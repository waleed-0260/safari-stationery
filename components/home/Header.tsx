import React from 'react'
import {categoryOptions} from "@/lib/Categories"
import { IoSearch } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";
import Image from 'next/image';
import logo from "@/public/images/logo.png"
const Header = () => {
  return (
    <div className='flex flex-row justify-around items-center py-[5px] bgColors w-full h-[70px]'>
        <div className='w-[80px] h-[80px]'>
            <Image src={logo} alt="" />
        </div>
        <div className='flex flex-row gap-4'>
            {categoryOptions.map((item:any, index)=>{
                return(
                    <span key={index}>
                    <p className='flex flex-row items-center'> {item.icon} {item.label}</p>
                    </span>
                )
            })}

        </div>

        <div className='flex flex-row gap-4'>
            <p className='text-2xl'><IoSearch/></p>
            <p className='text-2xl'><VscAccount/></p>
            <p className='text-2xl'><CiShoppingCart/></p>
        </div>

    </div>
  )
}

export default Header