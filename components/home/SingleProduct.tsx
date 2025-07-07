import React from 'react'
import { Button } from '../ui/button'

const SingleProduct = () => {
  return (
    <div className='w-[90%] flex flex-row justify-around items-start py-8'>
        <div className='w-[45%]'>
            <img src="https://www.thepaperworm.com/cdn/shop/files/3PcsRainbowTiePastelColoredNotebook.webp?v=1714498273&width=823" alt="" />
        </div>
        <div className='flex flex-col gap-4 w-[40%]'>
            <p className='text-sm'>The paperworn</p>
            <p className='text-4xl font-semibold'>Lorem ipsum dolor sit amet.</p>
            <div className='flex flex-row gap-4'>
                <p className="line-through text-gray-500"> Rs 500 PKR</p>
                <p className="text-red-500"> Rs 200 PKR</p>
                <p className=' bg-black text-white py-1 px-3 rounded-full '>Sale</p>
            </div>
            <p className='text-sm'>Quantity</p>
            <div className='border-2 h-[50px] w-[120px] flex items-center justify-around'>
                <p>-</p>
                <p>1</p>
                <p>+</p>
            </div>
            <Button variant={"outline"}>Add To Cart</Button>
            <Button variant={"default"}>Buy Now</Button>
        </div>
    </div>
  )
}

export default SingleProduct