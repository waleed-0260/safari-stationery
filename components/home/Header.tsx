import React from 'react'
import {categoryOptions} from "@/lib/Categories"
import { IoSearch } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";


const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center py-[10px] bg-pink-500 w-[90%]'>
        <div>
            <img src="logo" alt="" />
        </div>
        <div className='flex flex-row gap-4'>
            {categoryOptions.map((item:any, index)=>{
                return(
                    <span key={index}>
                    <p>{item.label}</p>
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