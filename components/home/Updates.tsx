import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { BsCash } from "react-icons/bs";

const Updates = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full container'>
      <p className='font-bold text-2xl heading'>Premium Quality Statinery Items in Pakistan</p>
      <p className='w-[90%] text-center'>Welcome to Paper N Play — your go-to space for stationery to create and toys to celebrate.
We’re a brand built for dreamers, doodlers, and gift-givers — especially students and teens who love cute, colorful things that spark joy. From pretty pens to plushy toys, our products are designed to brighten your desk and your day.
<br />
At Paper N Play, we believe that everyday essentials should be fun, functional, and affordable. That’s why we curate adorable, high-quality stationery and playful little surprises — all delivered right to your doorstep.</p>
    <div className='flex md:flex-row flex-col items-center justify-between container'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-2xl'><CiDeliveryTruck className="text-5xl"/></p>
            <p className='font-bold'>Free Shipping</p>
            <p className='text-gray-400'>On orders abover 1000 Rs</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-2xl'><CiMedal className="text-5xl"/></p>
            <p className='font-bold'>Super Qualty Friendly budget</p>
            {/* <p>On orders abover 2000 Rs</p> */}
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-2xl'><BsCash className="text-5xl"/></p>
            <p className='font-bold'>Cash on delivery</p>
            <p className='text-gray-400'>Upto 2-5 delivery days</p>
        </div>
    </div>
    </div>
  )
}

export default Updates