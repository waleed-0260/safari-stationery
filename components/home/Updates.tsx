import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { BsCash } from "react-icons/bs";

const Updates = () => {
  return (
    <div className='flex md:flex-row flex-col items-center justify-between container'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-2xl'><CiDeliveryTruck className="text-5xl"/></p>
            <p className='font-bold'>Free Shipping</p>
            <p className='text-gray-400'>On orders abover 2000 Rs</p>
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
  )
}

export default Updates