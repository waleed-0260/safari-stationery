import React from 'react'
import { Button } from '../ui/button'

const SingleProduct = () => {
  return (
    <div className=' flex md:flex-row flex-col justify-between items-start py-8 container' data-aos="fade-up">
        <div className='flex md:w-[45%]'>
            <img src="https://www.thepaperworm.com/cdn/shop/files/3PcsRainbowTiePastelColoredNotebook.webp?v=1714498273&width=823" alt="" />
        </div>
        <div className='flex flex-col gap-4 md:w-[45%]'>
            <p className='text-sm'>The paperworn</p>
            <p className='text-4xl font-semibold heading'>Lorem ipsum dolor sit amet.</p>
            <div className='flex flex-row gap-4'>
                <p className="line-through text-gray-500"> Rs 500 PKR</p>
                <p className="text-red-500"> Rs 200 PKR</p>
                <p className=' bg-black text-white py-1 px-3 rounded-full '>Sale</p>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid molestias dicta dolore possimus facere sapiente libero laborum aliquam amet porro rem dolorum, ducimus magni quisquam minima magnam. Harum quisquam tempore, maxime, vel, nam error numquam perspiciatis quasi accusamus placeat dolorum laudantium quam vitae tenetur nostrum voluptates porro. Accusantium, perspiciatis inventore.</p>
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